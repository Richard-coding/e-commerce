import { createContext } from "react";
import type { ShopContextType } from "@/types/shop";

export const ShopContext = createContext<ShopContextType | null>(null);
