import {
  CupSoda,
  IceCreamBowl,
  Utensils,
  Pizza,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

export interface Category {
  label: string;
  icon: LucideIcon;
}

export const categories: Category[] = [
  { label: "Todos", icon: Utensils },
  { label: "Salgados", icon: Pizza },
  { label: "Pratos", icon: UtensilsCrossed },
  { label: "Doces", icon: IceCreamBowl },
  { label: "Bebidas", icon: CupSoda },
  { label: "Sobremesas", icon: IceCreamBowl },
];
