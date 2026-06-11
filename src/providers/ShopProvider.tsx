import { useEffect, useState } from "react";
import type { ReactNode } from "react";

import { ShopContext } from "@/context/ShopContext";
import type { CartItem, OrderStatus, PaymentStatus } from "@/types/shop";

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

    if (!savedPoints) return 230;

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

  const subtotal = cartItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const discount = cartItems.reduce((sum, item) => {
    const itemDiscount =
      item.price * item.quantity * ((item.discountPercent ?? 0) / 100);

    return sum + itemDiscount;
  }, 0);

  const deliveryFee = subtotal === 0 || subtotal >= 60 ? 0 : 8;

  const total = Math.max(0, subtotal + deliveryFee - discount);

  const pointsEarned = total > 0 ? Math.floor(total / 10) : 0;

  const increaseQuantity = (id: number) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }

      return item;
    });

    setCartItems(updatedCart);
  };

  const removeItem = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);

    setCartItems(updatedCart);
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
  };

  const confirmPayment = () => {
    if (cartItems.length === 0 || paymentStatus === "paid") return;

    setPaymentStatus("paid");
    setOrderStatus("preparing");
    setLoyaltyPoints((prev) => prev + pointsEarned);
    setCartItems([]);
  };

  return (
    <ShopContext.Provider
      value={{
        selectedUnit,
        setSelectedUnit,

        cartItems,
        setCartItems,

        increaseQuantity,
        decreaseQuantity,
        removeItem,

        subtotal,
        deliveryFee,
        discount,
        total,

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
