import {
  Check,
  CircleCheck,
  CreditCard,
  LoaderCircle,
  Medal,
  Receipt,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useShop } from "@/hooks/useShop";
import { useUser } from "@/hooks/useUser";

type Variant = "cart" | "checkout";

interface CartPaymentProps {
  label: string;
  link?: string;
  variant: Variant;
}

const formatPrice = (value: number) => value.toFixed(2).replace(".", ",");

const CartPayment = ({ label, link, variant }: CartPaymentProps) => {
  const {
    subtotal,
    deliveryFee,
    discount,
    couponDiscount,
    total,
    pointsEarned,
    paymentStatus,
    confirmPayment,
    cartItems,
  } = useShop();

  const { currentUser } = useUser();

  const [isProcessing, setIsProcessing] = useState(false);

  const isCart = variant === "cart";
  const isCheckout = variant === "checkout";
  const isApproved = paymentStatus === "paid";

  const navigate = useNavigate();

  const handleGoToCheckout = () => {
    if (cartItems.length === 0) {
      toast.error("Adicione produtos ao carrinho.");
      return;
    }

    const redirectTo = link ?? "/checkout";

    if (!currentUser) {
      toast.error("Faça login para continuar.");

      navigate("/login", {
        state: {
          redirectTo,
        },
      });

      return;
    }

    navigate(redirectTo);
  };

  const handlePayment = () => {
    if (cartItems.length === 0) return;

    setIsProcessing(true);

    setTimeout(() => {
      confirmPayment();
      toast.success("Pagamento confirmado.");
      setIsProcessing(false);

      setTimeout(() => {
        navigate("/order");
      }, 3000);
    }, 3000);
  };

  return (
    <div className="card-base rounded-3xl border-muted/20 p-6">
      <div className="flex items-center gap-2 mb-4">
        <Receipt className="w-5 h-5 text-primary" />

        <h3 className="text-3xl font-bold text-secondary">Resumo do pedido</h3>
      </div>

      <p className="text-sm text-foreground/60 mt-1">
        Confira os valores antes de confirmar.
      </p>

      <div className="flex flex-col gap-4 mt-8 text-md">
        <div className="flex items-center justify-between">
          <span className="text-soft">Subtotal</span>
          <span className="font-medium text-lg">R$ {formatPrice(subtotal)}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-soft">Taxa de entrega</span>
          <span className="font-medium text-lg">
            R$ {formatPrice(deliveryFee)}
          </span>
        </div>

        {discount > 0 && (
          <div className="flex items-center justify-between">
            <span className="text-soft">Desconto dos produtos</span>
            <span className="font-medium text-primary text-lg">
              - R$ {formatPrice(discount)}
            </span>
          </div>
        )}

        {couponDiscount > 0 && (
          <div className="flex items-center justify-between">
            <span className="text-soft">Desconto do cupom</span>
            <span className="font-medium text-primary text-lg">
              - R$ {formatPrice(couponDiscount)}
            </span>
          </div>
        )}
      </div>

      <div className="border-t border-muted/20 my-6" />

      <div className="flex items-center justify-between text-2xl font-bold">
        <span className="text-secondary">Total</span>

        <strong className="text-primary">R$ {formatPrice(total)}</strong>
      </div>

      {pointsEarned > 0 && (
        <div className="grid grid-cols-[auto_1fr] gap-2 items-center text-sm text-soft border border-muted/30 rounded-2xl my-4 p-4">
          <Medal className="w-5 h-5" />

          <p>
            Você ganhará{" "}
            <span className="text-primary font-semibold">
              {pointsEarned} pontos
            </span>{" "}
            neste pedido.
          </p>
        </div>
      )}

      {isCart && (
        <button
          type="button"
          disabled={cartItems.length === 0}
          onClick={handleGoToCheckout}
          className="btn-primary w-full flex items-center justify-center mt-4 disabled:opacity-50 disabled:pointer-events-none"
        >
          {label}
        </button>
      )}

      {isProcessing ? (
        <div className="flex flex-col items-center border border-muted/30 rounded-2xl text-center p-4 gap-2">
          <LoaderCircle className="w-5 h-5 animate-spin" />
          <p className="text-soft text-sm">
            Enviando pedido para parceiro de pagamento… <br />
            Simulação acadêmica — nenhuma transação real será efetuada.
          </p>
        </div>
      ) : isApproved && isCheckout ? (
        <div className="flex flex-col items-center border border-muted/30 rounded-2xl text-center p-4 gap-2">
          <CircleCheck className="w-5 h-5 text-green-500" />
          <p className="text-soft">
            Pagamento aprovado. Redirecionando para a página do pedido…
          </p>
        </div>
      ) : null}

      {isCheckout && (
        <button
          type="button"
          disabled={cartItems.length === 0 || isProcessing || isApproved}
          className={`${isApproved ? "bg-green-500" : ""} btn-primary w-full flex items-center gap-2 justify-center mt-4 disabled:opacity-50`}
          onClick={handlePayment}
        >
          {isProcessing ? (
            <div className="flex items-center gap-2">
              <LoaderCircle className="w-4 h-4 animate-spin" />
              Processando...
            </div>
          ) : isApproved ? (
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              Pagamento Aprovado
            </div>
          ) : (
            label
          )}
        </button>
      )}

      <div className="text-foreground/60 text-sm mt-4">
        <div className="flex gap-2 items-center">
          <CreditCard className="w-3 h-3" />
          <p>Pagamento seguro</p>
        </div>

        <div className="flex gap-2 items-center">
          <ShieldCheck className="w-3 h-3" />
          <p>Cancelamento em até 5 min</p>
        </div>
      </div>
    </div>
  );
};

export default CartPayment;