import Foods from "../assets/imgs/foods.jpg";

export const products = [
  {
    id: 1,
    title: "Acarajé da Bahia",
    description: "Bolinho de feijão-fradinho com vatapá e camarão seco.",
    price: 20,
    oldPrice: 23.53,
    discountPercent: 15,
    image: Foods,
    category: "Salgados",
    available: true,
  },

  {
    id: 2,
    title: "Baião de Dois",
    description: "Arroz com feijão-verde, queijo coalho e carne seca.",
    price: 32,
    oldPrice: 37.65,
    discountPercent: 15,
    image: Foods,
    category: "Pratos",
    available: true,
  },

  {
    id: 3,
    title: "Tapioca Nordestina",
    description: "Tapioca artesanal recheada com queijo coalho.",
    price: 18.5,
    oldPrice: 21.76,
    discountPercent: 15,
    image: Foods,
    category: "Pratos",
    available: false,
  },

  {
    id: 4,
    title: "Cartola Pernambucana",
    description:
      "Sobremesa tradicional com banana, queijo coalho, canela e açúcar.",
    price: 16.9,
    oldPrice: 19.88,
    discountPercent: 15,
    image: Foods,
    category: "Pratos",
    available: false,
  },
];
