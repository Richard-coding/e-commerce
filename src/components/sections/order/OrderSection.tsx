import {
  ChefHat,
  CircleCheck,
  Clock,
  MapPin,
  ReceiptText,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { steps } from "@/data/steps";
import { useShop } from "@/hooks/useShop";

const formatPrice = (value: number) => value.toFixed(2).replace(".", ",");

const OrderSection = () => {
  const { orderStatus, lastOrder } = useShop();

  if (orderStatus === "pending" || !lastOrder) {
    return (
      <section className="section-base min-h-screen">
        <div className="container-base pt-10">
          <div className="card-base rounded-3xl border-muted/20 p-8 text-center">
            <h2 className="text-2xl font-bold text-secondary">
              Nenhum pedido em andamento
            </h2>
            <p className="text-soft mt-2">
              Adicione itens ao carrinho e finalize o pagamento para acompanhar
              seu pedido.
            </p>
            <NavLink to="/menu" className="btn-primary inline-flex mt-4">
              Ver cardápio
            </NavLink>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-base min-h-screen">
      <div className="container-base">
        <div className="rounded-3xl min-h-72 bg-linear-to-r from-[#4d2b1f] to-[#6a4030] text-white">
          <div className="p-6">
            <span className="bg-white/10 border border-white/10 px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-2">
              <ReceiptText className="w-3 h-3" />
              Pedido confirmado
            </span>

            <h1 className="text-3xl md:text-4xl font-bold mt-5">
              Acompanhe seu <span className="text-primary">pedido</span>
            </h1>

            <p className="text-white/80 text-base sm:text-lg mt-4 max-w-xl leading-relaxed">
              Tudo certo por aqui. Já estamos preparando os sabores do Nordeste
              para você acompanhar cada etapa em tempo real.
            </p>

            <div className="flex flex-wrap gap-6 mt-6 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <ReceiptText className="w-4 h-4" />
                Pedido #1024
              </span>

              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                35/45 min
              </span>

              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {lastOrder.selectedUnit} — {lastOrder.selectedAddress.split(",")[0]}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-base pt-10">
        <div className="card-base rounded-3xl border-muted/20 p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
            <div>
              <p className="text-primary uppercase text-xs font-bold tracking-wider">
                Status do pedido
              </p>

              <h2 className="text-2xl font-bold text-secondary mt-1">
                Em preparação na cozinha
              </h2>
            </div>

            <div className="text-sm text-foreground/60">
              Previsão de entrega:
              <strong className="text-secondary ml-1">19:15 / 19:25</strong>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {steps.map((step, index) => {
              const StepIcon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative flex md:flex-col gap-4"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2 ${
                      step.status === "done"
                        ? "bg-primary border-primary text-white"
                        : step.status === "active"
                          ? "bg-primary/10 border-primary text-primary"
                          : "bg-white border-muted/30 text-foreground/40"
                    }`}
                  >
                    <StepIcon className="w-4 h-4" />
                  </div>

                  <div>
                    <h3
                      className={`font-bold ${
                        step.status === "pending"
                          ? "text-foreground/50"
                          : "text-secondary"
                      }`}
                    >
                      {step.title}
                    </h3>

                    <p className="text-sm text-foreground/60 mt-1">
                      {step.description}
                    </p>

                    {step.status === "active" && (
                      <span className="inline-block mt-2 text-xs font-bold text-primary">
                        Agora
                      </span>
                    )}
                  </div>

                  {index !== steps.length - 1 && (
                    <div className="hidden md:block absolute top-5 left-10 w-full h-0.5 bg-muted/20 z-0" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
          <div className="card-base rounded-3xl border-muted/20 p-6">
            <div className="flex items-center gap-2 mb-4">
              <ChefHat className="w-5 h-5 text-primary" />

              <div>
                <h2 className="text-2xl font-bold text-secondary">
                  Status atual
                </h2>

                <p className="text-sm text-foreground/60">Etapa em andamento</p>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h3 className="font-bold text-secondary">
                    Em preparação na cozinha
                  </h3>

                  <p className="text-sm text-soft mt-2">
                    Nossa cozinha está preparando seu pedido com todo o carinho.
                    Em breve ele seguirá para entrega.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-foreground/60 mt-5 text-center">
              Este pedido é uma simulação para fins acadêmicos.
            </p>
          </div>

          <div className="card-base rounded-3xl border-muted/20 p-6">
            <h3 className="text-2xl font-bold text-secondary mb-6">Entrega</h3>

            <div className="flex flex-col gap-5 text-sm">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />

                <div>
                  <p className="font-semibold">{lastOrder.selectedAddress}</p>

                  <p className="text-foreground/60">{lastOrder.selectedUnit}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />

                <div>
                  <p className="font-semibold">35–45 min</p>

                  <p className="text-foreground/60">Tempo estimado</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 card-base rounded-3xl border-muted/20 p-6">
          <h3 className="text-2xl font-bold text-secondary mb-6">
            Resumo do pedido
          </h3>

          <div className="flex flex-col gap-4">
            {lastOrder.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-4 border-b border-muted/20 pb-4 last:border-0 last:pb-0"
              >
                <div>
                  <p className="font-semibold text-secondary">{item.name}</p>
                  <p className="text-sm text-soft">
                    {item.quantity}x R$ {formatPrice(item.price)}
                  </p>
                </div>

                <p className="font-semibold text-primary">
                  R$ {formatPrice(item.price * item.quantity)}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-muted/20 mt-6 pt-6 flex flex-col gap-3 text-sm">
            <div className="flex justify-between">
              <span className="text-soft">Subtotal</span>
              <span>R$ {formatPrice(lastOrder.subtotal)}</span>
            </div>

            {lastOrder.discount > 0 && (
              <div className="flex justify-between">
                <span className="text-soft">Desconto dos produtos</span>
                <span className="text-primary">
                  - R$ {formatPrice(lastOrder.discount)}
                </span>
              </div>
            )}

            <div className="flex justify-between">
              <span className="text-soft">Taxa de entrega</span>
              <span>R$ {formatPrice(lastOrder.deliveryFee)}</span>
            </div>

            {lastOrder.appliedCoupon === "NORDESTE10" && (
              <>
                <div className="flex justify-between">
                  <span className="text-soft">Cupom</span>
                  <span>NORDESTE10</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-soft">Desconto do cupom</span>
                  <span className="text-primary">
                    - R$ {formatPrice(lastOrder.couponDiscount)}
                  </span>
                </div>
              </>
            )}

            <div className="flex justify-between text-lg font-bold">
              <span className="text-secondary">Total</span>
              <span className="text-primary">
                R$ {formatPrice(lastOrder.total)}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-soft">Pagamento</span>
              <span>{lastOrder.selectedPayment}</span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-soft shrink-0">Observações</span>
              <span className="text-right">
                {lastOrder.orderNotes.trim()
                  ? lastOrder.orderNotes
                  : "Nenhuma observação."}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 card-base rounded-3xl border-muted/20 p-8 text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
            <CircleCheck className="w-6 h-6 text-primary" />
          </div>

          <h3 className="text-xl font-bold text-secondary">
            Estamos preparando seu pedido
          </h3>

          <p className="text-soft mt-2">
            Em breve os sabores do Nordeste estarão chegando até você.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
