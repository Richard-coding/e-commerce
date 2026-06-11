import {
  ChefHat,
  CircleCheck,
  Clock,
  MapPin,
  Phone,
  ReceiptText,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { steps } from "@/data/steps";
import { useShop } from "@/hooks/useShop";

const OrderSection = () => {
  const { orderStatus, selectedUnit } = useShop();

  if (orderStatus === "pending") {
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
                {selectedUnit} — Boa Viagem
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
              <button
                type="button"
                className="btn-ghost flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Falar com restaurante
              </button>

              <button
                type="button"
                className="btn-ghost flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Ligar para suporte
              </button>
            </div>
          </div>

          <div className="card-base rounded-3xl border-muted/20 p-6">
            <h3 className="text-2xl font-bold text-secondary mb-6">Entrega</h3>

            <div className="flex flex-col gap-5 text-sm">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />

                <div>
                  <p className="font-semibold">Av. Boa Viagem, 1234</p>

                  <p className="text-foreground/60">{selectedUnit} — PE</p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />

                <div>
                  <p className="font-semibold">Próximo ao Shopping Recife</p>

                  <p className="text-foreground/60">Referência</p>
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
