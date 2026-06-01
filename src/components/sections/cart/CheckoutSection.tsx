import Food from "@/assets/icons/food.svg?react";
import { NavLink } from "react-router-dom";

const CheckoutSection = () => {
  return (
    <section className="max-w-7xl mx-auto p-6 gap-10 bg-[#faf6ee]">
      <div className="max-w-7xl mx-auto rounded-3xl min-h-72 bg-linear-to-r from-[#4d2b1f] to-[#6a4030] text-white">
        <div className="max-w-7xl mx-auto p-6">
          <span className="bg-white/10 border border-white/10 px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-2">
            <Food className="w-3 h-3" />
            Etapa final
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold mt-5">
            Finalizar pedido
          </h1>

          <p className="text-white/80 text-base sm:text-lg mt-4 max-w-xl leading-relaxed">
            Confirme seus dados antes de finalizar. Tudo pronto para levar o
            sabor do Nordeste até você.
          </p>

          <div className="flex flex-wrap gap-6 mt-6 text-sm text-white/70">
            <span className="flex items-center gap-2">
              <Food className="w-4 h-4" />
              Recife — Boa Viagem
            </span>

            <span className="flex items-center gap-2">
              <Food className="w-4 h-4" />
              35–45 min
            </span>

            <span className="flex items-center gap-2">
              <Food className="w-4 h-4" />
              Frete grátis acima de R$ 60
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-10 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-3xl border border-muted/20 shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4">
              <Food className="w-5 h-5 text-primary" />
              <div>
                <h2 className="text-2xl font-bold text-secondary">
                  Endereço de entrega
                </h2>
                <p className="text-sm text-foreground/60">
                  Confirme onde devemos entregar seu pedido.
                </p>
              </div>
            </div>

            <div className="border border-muted/20 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="font-semibold">Casa</p>
                <p className="text-sm text-foreground/60">
                  Av. Boa Viagem, 1234 — Recife, PE
                </p>
              </div>

              <button className="px-5 py-2 rounded-xl border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200">
                Alterar
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-muted/20 shadow-sm p-6">
            <div className="flex items-center gap-2 mb-5">
              <Food className="w-5 h-5 text-primary" />
              <div>
                <h2 className="text-2xl font-bold text-secondary">
                  Forma de pagamento
                </h2>
                <p className="text-sm text-foreground/60">
                  Escolha como prefere pagar.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {["PIX", "Cartão", "Dinheiro"].map((payment, index) => (
                <button
                  key={payment}
                  className={`rounded-2xl border p-5 text-left transition-all duration-200 ${
                    index === 0
                      ? "border-primary bg-primary/5"
                      : "border-muted/20 hover:border-primary hover:bg-primary/5"
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Food className="w-5 h-5 text-primary" />
                  </div>

                  <p className="font-bold text-secondary">{payment}</p>
                  <p className="text-sm text-foreground/60 mt-1">
                    Pagamento na entrega
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-muted/20 shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4">
              <Food className="w-5 h-5 text-primary" />
              <div>
                <h2 className="text-2xl font-bold text-secondary">
                  Observações
                </h2>
                <p className="text-sm text-foreground/60">
                  Alguma instrução especial para o pedido?
                </p>
              </div>
            </div>

            <textarea
              placeholder="Ex: tirar cebola, pouco molho, entregar na portaria..."
              className="w-full min-h-32 rounded-2xl border border-muted/20 px-4 py-3 outline-none focus:border-primary resize-none bg-transparent"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-3xl border border-muted/20 shadow-sm p-6">
            <h3 className="text-3xl font-bold text-secondary">
              Resumo do pedido
            </h3>

            <p className="text-sm text-foreground/60 mt-1">
              Tudo certo para confirmar.
            </p>

            <div className="flex flex-col gap-4 mt-8 text-md">
              <div className="flex items-center justify-between">
                <span className="text-foreground/70">Subtotal</span>
                <span className="font-medium text-lg">R$ 73,43</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-foreground/70">Taxa de entrega</span>
                <span className="font-medium text-lg">R$ 6,90</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-foreground/70">Desconto</span>
                <span className="font-medium text-primary text-lg">
                  - R$ 2,49
                </span>
              </div>
            </div>

            <div className="border-t border-muted/20 my-6" />

            <div className="flex items-center justify-between font-bold">
              <span className="text-2xl  text-secondary">Total</span>
              <strong className="text-2xl  text-primary">R$ 77,84</strong>
            </div>

            <NavLink
              to="/order"
              className="btn-primary w-full flex items-center justify-center mt-4"
            >
              Confirmar pedido
            </NavLink>

            <div className=" text-foreground/60 text-sm mt-4">
              <div className="flex gap-2 items-center">
                <Food className="w-3 h-3" />
                <p> Pagamento seguro</p>
              </div>
              <div className="flex gap-2 items-center">
                <Food className="w-3 h-3" />
                <p> Cancelamento em até 5 min</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-muted/20 shadow-sm p-6">
            <h3 className="text-2xl font-bold text-secondary mb-5">
              Detalhes da entrega
            </h3>

            <div className="flex flex-col gap-4 text-sm">
              <div className="flex gap-3">
                <Food className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="font-semibold">Tempo estimado</p>
                  <p className="text-foreground/60">35–45 minutos</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Food className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="font-semibold">Pagamento seguro</p>
                  <p className="text-foreground/60">
                    Seus dados são protegidos.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Food className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="font-semibold">Compra protegida</p>
                  <p className="text-foreground/60">
                    Cancelamento permitido em até 5 minutos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;
