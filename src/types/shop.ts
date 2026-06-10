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

export type PaymentStatus = "pending" | "paid";

export type OrderStatus = "pending" | "preparing";

export interface ShopContextType {
  selectedUnit: string;
  setSelectedUnit: (unit: string) => void;

  cartItems: CartItem[];
  setCartItems: (items: CartItem[]) => void;

  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeItem: (id: number) => void;

  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;

  loyaltyPoints: number;
  pointsEarned: number;

  paymentStatus: PaymentStatus;
  confirmPayment: () => void;

  orderStatus: OrderStatus;
  setOrderStatus: (status: OrderStatus) => void;
}
