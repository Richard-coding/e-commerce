import {
  Bike,
  ChefHat,
  CircleCheck,
  ReceiptText,
  type LucideIcon,
} from "lucide-react";

export type StepStatus = "done" | "active" | "pending";

export interface OrderStep {
  icon: LucideIcon;
  title: string;
  description: string;
  status: StepStatus;
}

export const steps: OrderStep[] = [
  {
    icon: ReceiptText,
    title: "Pedido recebido",
    description: "Seu pedido foi confirmado com sucesso.",
    status: "done",
  },
  {
    icon: ChefHat,
    title: "Em preparação",
    description: "Nossa cozinha está preparando seu pedido.",
    status: "active",
  },
  {
    icon: Bike,
    title: "A caminho",
    description: "Seu pedido seguirá para entrega em breve.",
    status: "pending",
  },
  {
    icon: CircleCheck,
    title: "Entregue",
    description: "Pedido finalizado. Bom apetite!",
    status: "pending",
  },
];