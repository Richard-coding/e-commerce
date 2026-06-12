import {
  CupSoda,
  IceCreamBowl,
  Package,
  Pizza,
  Utensils,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

export interface Category {
  label: string;
  icon: LucideIcon;
}

export const categories: Category[] = [
  { label: "Todos", icon: Utensils },
  { label: "Pratos", icon: UtensilsCrossed },
  { label: "Lanches", icon: Pizza },
  { label: "Bebidas", icon: CupSoda },
  { label: "Sobremesas", icon: IceCreamBowl },
  { label: "Combos", icon: Package },
];
