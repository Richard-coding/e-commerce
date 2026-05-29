interface CartItemProps {
  title: string;
  description: string;
  image: string;
  price: number;
  oldPrice?: number;
  quantity: number;
  unavailable?: boolean;
}

const CartItem = ({
  title,
  description,
  image,
  price,
  oldPrice,
  quantity,
  unavailable = false,
}: CartItemProps) => {
  return (
    <div
      className={`relative bg-white rounded-2xl border shadow-sm p-4 flex gap-4 transition-all duration-200 ${
        unavailable
          ? "border-red-200 opacity-70"
          : "border-muted/20 hover:shadow-md"
      }`}
    >
      {/* Badge */}
      {unavailable && (
        <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          Indisponível
        </span>
      )}

      {/* Imagem */}
      <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Conteúdo */}
      <div className="flex-1 flex flex-col justify-between gap-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-secondary">{title}</h3>

            <p className="text-sm text-foreground/70 mt-1 max-w-xl leading-relaxed">
              {description}
            </p>
          </div>

          <button className="p-2 rounded-lg hover:bg-primary/10 transition-all duration-200 cursor-pointer"></button>
        </div>

        {/* Footer */}
        <div className="flex items-end justify-between gap-4 flex-wrap">
          {/* Quantidade */}
          <div className="flex items-center gap-4 border border-muted/20 rounded-full px-4 py-2">
            <button className="text-lg font-bold text-foreground/70 hover:text-primary cursor-pointer">
              -
            </button>

            <span className="font-semibold">{quantity}</span>

            <button className="text-lg font-bold text-foreground/70 hover:text-primary cursor-pointer">
              +
            </button>
          </div>

          {/* Preço */}
          <div className="flex flex-col items-end">
            {oldPrice && (
              <span className="text-sm line-through text-foreground/40">
                R$ {oldPrice?.toFixed(2).replace(".", ",")}
              </span>
            )}

            <strong className="text-3xl font-bold text-primary">
              R$ {price?.toFixed(2).replace(".", ",")}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
