interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  available: boolean;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="card-hover h-full overflow-hidden transition-all duration-300 flex flex-col border-muted/20">
      <div className="relative h-52 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
        />

        <span className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
          -15%
        </span>
      </div>

      <div className="p-4 flex flex-col flex-1 gap-3">
        <div>
          <h3 className="text-lg font-bold text-secondary">{product.title}</h3>

          <p className="text-sm text-soft mt-1 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="mt-auto">
          <p className="font-semibold text-lg font-lg text-primary mb-3">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </p>

          <button className="btn-primary w-full">+ Adicionar</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
