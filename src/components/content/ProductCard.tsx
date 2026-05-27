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
    <div className="h-full bg-white rounded-2xl overflow-hidden border border-muted/20 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
      
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
          <h3 className="text-lg font-bold text-secondary">
            {product.title}
          </h3>

          <p className="text-sm text-foreground/70 mt-1 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="mt-auto">
          <p className="text-2xl font-bold text-primary mb-3">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </p>

          <button className="w-full py-3 px-4 rounded-xl bg-primary text-white font-semibold hover:bg-secondary transition-all duration-200">
            + Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;