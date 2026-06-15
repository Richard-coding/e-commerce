import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { toast } from "react-hot-toast";

import { ShopContext } from "@/context/ShopContext";
import { addresses } from "@/data/Addresses";
import type {
  CartItem,
  LastOrderSummary,
  OrderStatus,
  PaymentStatus,
  Product,
} from "@/types/shop";

interface ShopProviderProps {
  children: ReactNode;
}

export function ShopProvider({ children }: ShopProviderProps) {
  const [selectedUnit, setSelectedUnit] = useState("Recife");

  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cartItems");

    if (!savedCart) return [];

    return JSON.parse(savedCart);
  });

  const [loyaltyPoints, setLoyaltyPoints] = useState<number>(() => {
    const savedPoints = localStorage.getItem("loyaltyPoints");

    if (!savedPoints) return 0;

    return JSON.parse(savedPoints);
  });

  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>(() => {
    const savedPayment = localStorage.getItem("paymentStatus");

    if (!savedPayment) return "pending";

    return JSON.parse(savedPayment);
  });

  const [orderStatus, setOrderStatus] = useState<OrderStatus>(() => {
    const savedOrder = localStorage.getItem("orderStatus");

    if (!savedOrder) return "pending";

    return JSON.parse(savedOrder);
  });

  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [selectedAddress, setSelectedAddress] = useState(addresses[0]);

  const [selectedPayment, setSelectedPayment] = useState(() => {
    const savedPayment = localStorage.getItem("selectedPayment");

    if (!savedPayment) return "PIX";

    return JSON.parse(savedPayment);
  });

  const [orderNotes, setOrderNotes] = useState(() => {
    const savedNotes = localStorage.getItem("orderNotes");

    if (!savedNotes) return "";

    return JSON.parse(savedNotes);
  });

  const [lastOrder, setLastOrder] = useState<LastOrderSummary | null>(() => {
    const savedLastOrder = localStorage.getItem("lastOrder");

    if (!savedLastOrder) return null;

    return JSON.parse(savedLastOrder);
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("loyaltyPoints", JSON.stringify(loyaltyPoints));
  }, [loyaltyPoints]);

  useEffect(() => {
    localStorage.setItem("paymentStatus", JSON.stringify(paymentStatus));
  }, [paymentStatus]);

  useEffect(() => {
    localStorage.setItem("orderStatus", JSON.stringify(orderStatus));
  }, [orderStatus]);

  useEffect(() => {
    localStorage.setItem("selectedPayment", JSON.stringify(selectedPayment));
  }, [selectedPayment]);

  useEffect(() => {
    localStorage.setItem("orderNotes", JSON.stringify(orderNotes));
  }, [orderNotes]);

  useEffect(() => {
    if (lastOrder) {
      localStorage.setItem("lastOrder", JSON.stringify(lastOrder));
    }
  }, [lastOrder]);

  useEffect(() => {
    if (cartItems.length > 0 && paymentStatus === "paid") {
      setPaymentStatus("pending");
      setOrderStatus("pending");
    }
  }, [cartItems, paymentStatus]);

  const subtotal = cartItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const discount = cartItems.reduce((sum, item) => {
    const itemDiscount =
      item.price * item.quantity * ((item.discountPercent ?? 0) / 100);

    return sum + itemDiscount;
  }, 0);

  const deliveryFee = subtotal === 0 || subtotal >= 60 ? 0 : 8;

  const couponDiscount = appliedCoupon === "NORDESTE10" ? subtotal * 0.1 : 0;

  const total = Math.max(0, subtotal + deliveryFee - discount - couponDiscount);

  const pointsEarned = total > 0 ? Math.floor(total / 10) : 0;

  const resetOrderIfPaid = () => {
    if (paymentStatus === "paid") {
      setPaymentStatus("pending");
      setOrderStatus("pending");
    }
  };

  const addToCart = (product: Product, successMessage?: string) => {
    if (!product.available) {
      toast.error("Produto indisponível.");
      return false;
    }

    resetOrderIfPaid();

    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          id: product.id,
          name: product.title,
          description: product.description,
          price: product.price,
          oldPrice: product.oldPrice,
          discountPercent: product.discountPercent,
          quantity: 1,
          image: product.image,
          unavailable: !product.available,
        },
      ]);
    }

    toast.success(successMessage ?? "Item adicionado ao carrinho.");
    return true;
  };

  const applyCoupon = (code: string) => {
    const normalizedCode = code.trim().toUpperCase();

    if (normalizedCode === "NORDESTE10") {
      setAppliedCoupon("NORDESTE10");
      toast.success("Cupom aplicado.");
      return "success";
    }

    setAppliedCoupon("");
    toast.error("Cupom inválido.");
    return "error";
  };

  const increaseQuantity = (id: number) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }

      return item;
    });

    setCartItems(updatedCart);
    toast.success("Quantidade aumentada.");
  };

  const removeItem = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);

    setCartItems(updatedCart);
    toast.success("Item removido.");
  };

  const decreaseQuantity = (id: number) => {
    const item = cartItems.find((item) => item.id === id);

    if (!item) return;

    if (item.quantity === 1) {
      removeItem(id);
      return;
    }

    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }

      return item;
    });

    setCartItems(updatedCart);
    toast.success("Quantidade diminuída.");
  };

  const confirmPayment = () => {
    if (cartItems.length === 0 || paymentStatus === "paid") return;

    const orderSummary: LastOrderSummary = {
      items: [...cartItems],
      subtotal,
      discount,
      couponDiscount,
      deliveryFee,
      total,
      selectedPayment,
      orderNotes,
      selectedAddress,
      selectedUnit,
      appliedCoupon,
    };

    setLastOrder(orderSummary);
    setPaymentStatus("paid");
    setOrderStatus("preparing");
    setLoyaltyPoints((prev) => prev + pointsEarned);

    setCartItems([]);
    setAppliedCoupon("");
    setOrderNotes("");
    setSelectedPayment("PIX");
    setSelectedAddress(addresses[0]);
  };

  return (
    <ShopContext.Provider
      value={{
        selectedUnit,
        setSelectedUnit,

        cartItems,
        setCartItems,

        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,

        subtotal,
        deliveryFee,
        discount,
        couponDiscount,
        total,

        appliedCoupon,
        applyCoupon,

        selectedAddress,
        setSelectedAddress,

        selectedPayment,
        setSelectedPayment,

        orderNotes,
        setOrderNotes,

        lastOrder,

        loyaltyPoints,
        pointsEarned,

        paymentStatus,
        confirmPayment,

        orderStatus,
        setOrderStatus,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}