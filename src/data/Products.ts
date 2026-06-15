import type { Product } from "@/types/shop";

export const products: Product[] = [
  {
    id: 1,
    title: "Acarajé da Bahia",
    description: "Bolinho de feijão-fradinho com vatapá e camarão seco.",
    price: 20,
    oldPrice: 23.53,
    discountPercent: 15,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
    category: "Lanches",
    available: true,
    units: ["Recife", "Olinda"],
  },
  {
    id: 2,
    title: "Baião de Dois",
    description: "Arroz com feijão-verde, queijo coalho e carne seca.",
    price: 32,
    oldPrice: 37.65,
    discountPercent: 15,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop",
    category: "Pratos",
    available: true,
    units: ["Recife", "Jaboatão"],
  },
  {
    id: 3,
    title: "Carne de Sol com Macaxeira",
    description: "Carne de sol grelhada servida com macaxeira cozida.",
    price: 34.9,
    oldPrice: 41.06,
    discountPercent: 15,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    category: "Pratos",
    available: true,
    units: ["Olinda", "Jaboatão"],
  },
  {
    id: 4,
    title: "Tapioca Nordestina",
    description: "Tapioca artesanal recheada com queijo coalho.",
    price: 18.5,
    oldPrice: 21.76,
    discountPercent: 15,
    image:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1200&auto=format&fit=crop",
    category: "Lanches",
    available: true,
    units: ["Olinda", "Jaboatão"],
  },
  {
    id: 5,
    title: "Cocada Baiana",
    description: "Doce de coco ralado cozido com açúcar e cravo.",
    price: 8.5,
    oldPrice: 10,
    discountPercent: 15,
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1200&auto=format&fit=crop",
    category: "Sobremesas",
    available: true,
    units: ["Recife"],
  },
  {
    id: 6,
    title: "Pé de Moleque",
    description: "Doce crocante de amendoim com rapadura.",
    price: 7.9,
    oldPrice: 9.29,
    discountPercent: 15,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1200&auto=format&fit=crop",
    category: "Sobremesas",
    available: true,
    units: ["Olinda", "Jaboatão"],
  },
  {
    id: 7,
    title: "Caldo de Cana",
    description: "Suco natural de cana-de-açúcar bem gelado.",
    price: 6.5,
    image:
      "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?q=80&w=1200&auto=format&fit=crop",
    category: "Bebidas",
    available: true,
    units: ["Recife", "Olinda"],
  },
  {
    id: 8,
    title: "Suco de Caju",
    description: "Suco artesanal de caju com polpa da fruta.",
    price: 9.9,
    oldPrice: 11.65,
    discountPercent: 15,
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=1200&auto=format&fit=crop",
    category: "Bebidas",
    available: true,
    units: ["Recife", "Olinda", "Jaboatão"],
  },
  {
    id: 9,
    title: "Água de Coco",
    description: "Água de coco natural servida bem gelada.",
    price: 7.5,
    image:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=1200&auto=format&fit=crop",
    category: "Bebidas",
    available: true,
    units: ["Olinda", "Jaboatão"],
  },
  {
    id: 10,
    title: "Pudim de Leite Condensado",
    description: "Pudim cremoso com calda de caramelo.",
    price: 14.9,
    oldPrice: 17.53,
    discountPercent: 15,
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1200&auto=format&fit=crop",
    category: "Sobremesas",
    available: true,
    units: ["Recife", "Olinda"],
  },
  {
    id: 11,
    title: "Queijadinha Nordestina",
    description: "Doce de queijo coalho com coco ralado.",
    price: 12.5,
    oldPrice: 14.71,
    discountPercent: 15,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop",
    category: "Sobremesas",
    available: true,
    units: ["Recife", "Jaboatão"],
  },
  {
    id: 12,
    title: "Cartola Pernambucana",
    description:
      "Sobremesa tradicional com banana, queijo coalho, canela e açúcar.",
    price: 16.9,
    oldPrice: 19.88,
    discountPercent: 15,
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=1200&auto=format&fit=crop",
    category: "Sobremesas",
    available: false,
    units: ["Recife"],
  },
  {
    id: 13,
    title: "Combo São João",
    description:
      "Acarajé, caldo de cana e cocada. Promoção especial de São João.",
    price: 29.99,
    oldPrice: 39.99,
    discountPercent: 25,
    image:
      "https://images.unsplash.com/photo-1543353071-10c8ba85a904?q=80&w=1200&auto=format&fit=crop",
    category: "Combos",
    available: true,
    units: ["Recife", "Olinda", "Jaboatão"],
  },
];

export const comboPromoProduct = products.find(
  (product) => product.title === "Combo São João",
)!;
