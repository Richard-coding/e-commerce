export interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  discountPercent?: number;
  quantity: number;
  image: string;
  unavailable?: boolean;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  oldPrice?: number;
  discountPercent?: number;
  image: string;
  category: string;
  available: boolean;
  units: string[];
}

export interface LastOrderSummary {
  items: CartItem[];
  subtotal: number;
  discount: number;
  couponDiscount: number;
  deliveryFee: number;
  total: number;
  selectedPayment: string;
  orderNotes: string;
  selectedAddress: string;
  selectedUnit: string;
  appliedCoupon: string;
}

export type PaymentStatus = "pending" | "paid";

export type OrderStatus = "pending" | "preparing";

export interface ShopContextType {
  selectedUnit: string;
  setSelectedUnit: (unit: string) => void;

  cartItems: CartItem[];
  setCartItems: (items: CartItem[]) => void;

  addToCart: (product: Product, successMessage?: string) => boolean;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeItem: (id: number) => void;

  subtotal: number;
  deliveryFee: number;
  discount: number;
  couponDiscount: number;
  total: number;

  appliedCoupon: string;
  applyCoupon: (code: string) => "success" | "error";

  selectedAddress: string;
  setSelectedAddress: (address: string) => void;

  selectedPayment: string;
  setSelectedPayment: (payment: string) => void;

  orderNotes: string;
  setOrderNotes: (notes: string) => void;

  lastOrder: LastOrderSummary | null;

  loyaltyPoints: number;
  pointsEarned: number;

  paymentStatus: PaymentStatus;
  confirmPayment: () => void;

  orderStatus: OrderStatus;
  setOrderStatus: (status: OrderStatus) => void;
}
