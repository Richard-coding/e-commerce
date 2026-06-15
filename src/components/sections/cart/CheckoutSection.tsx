import {
  CircleCheck,
  Clock,
  CreditCard,
  MapPin,
  MessageSquareText,
  ShieldCheck,
  TicketPercent,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-hot-toast";
import { addresses } from "@/data/Addresses";
import { useShop } from "@/hooks/useShop";
import { useUser } from "@/hooks/useUser";
import CartPayment from "./CartPayment";

const paymentOptions = ["PIX", "Cartão", "Dinheiro"];

const getPaymentDescription = (payment: string) => {
  if (payment === "PIX") return "Pagamento instantâneo simulado";

  return "Pagamento na entrega";
};

const CheckoutSection = () => {
  const {
    selectedUnit,
    selectedAddress,
    setSelectedAddress,
    selectedPayment,
    setSelectedPayment,
    orderNotes,
    setOrderNotes,
    cartItems,
    paymentStatus,
  } = useShop();

  const { currentUser } = useUser();
  const [isAddressListOpen, setIsAddressListOpen] = useState(false);

  if (!currentUser) {
    return (
      <section className="section-base">
        <div className="container-base pt-10">
          <div className="card-base rounded-3xl border-muted/20 p-8 text-center">
            <h2 className="text-2xl font-bold text-secondary">
              Faça login para continuar
            </h2>

            <p className="text-soft mt-2">
              Você precisa estar autenticado para finalizar o pedido.
            </p>

            <NavLink
              to="/login"
              state={{ redirectTo: "/checkout" }}
              className="btn-primary inline-flex mt-4"
            >
              Ir para login
            </NavLink>
          </div>
        </div>
      </section>
    );
  }

  if (cartItems.length === 0 && paymentStatus !== "paid") {
    return (
      <section className="section-base">
        <div className="container-base pt-10">
          <div className="card-base rounded-3xl border-muted/20 p-8 text-center">
            <h2 className="text-2xl font-bold text-secondary">
              Seu carrinho está vazio
            </h2>

            <p className="text-soft mt-2">
              Adicione produtos ao carrinho antes de finalizar o pedido.
            </p>

            <NavLink to="/menu" className="btn-primary inline-flex mt-4">
              Ver cardápio
            </NavLink>
          </div>
        </div>
      </section>
    );
  }

  if (paymentStatus === "paid") {
    return (
      <section className="section-base">
        <div className="container-base pt-10">
          <div className="card-base rounded-3xl border-muted/20 p-8 text-center">
            <h2 className="text-2xl font-bold text-secondary">
              Pagamento já aprovado
            </h2>

            <p className="text-soft mt-2">
              Seu pedido já foi confirmado. Acompanhe o andamento na página de
              pedido.
            </p>

            <NavLink to="/order" className="btn-primary inline-flex mt-4">
              Acompanhar pedido
            </NavLink>
          </div>
        </div>
      </section>
    );
  }

  const handleSelectAddress = (address: string) => {
    setSelectedAddress(address);
    setIsAddressListOpen(false);
    toast.success("Endereço selecionado.");
  };

  const handleSelectPayment = (payment: string) => {
    setSelectedPayment(payment);
    toast.success("Forma de pagamento selecionada.");
  };

  return (
    <section className="section-base">
      <div className="container-base">
        <div className="rounded-3xl min-h-72 bg-linear-to-r from-[#4d2b1f] to-[#6a4030] text-white">
          <div className="p-6">
            <span className="bg-white/10 border border-white/10 px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-2">
              <CircleCheck className="w-3 h-3" />
              Etapa final
            </span>

            <h1 className="text-3xl md:text-4xl font-bold mt-5">
              Finalize seu pedido
            </h1>

            <p className="text-white/80 text-base sm:text-lg mt-4 max-w-xl leading-relaxed">
              Confirme seus dados antes de finalizar. Tudo pronto para levar o
              sabor do Nordeste até você.
            </p>

            <div className="flex flex-wrap gap-6 mt-6 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {selectedUnit} — {selectedAddress.split(",")[0]}
              </span>

              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                35–45 min
              </span>

              <span className="flex items-center gap-2">
                <TicketPercent className="w-4 h-4" />
                Frete grátis acima de R$ 60
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 pt-10">
          <div className="flex flex-col gap-6">
            <div className="card-base rounded-3xl border-muted/20 p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-primary" />

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
                  <p className="font-semibold">Endereço selecionado</p>
                  <p className="text-sm text-foreground/60">
                    {selectedAddress}
                  </p>
                </div>

                <button
                  type="button"
                  className="btn-ghost"
                  onClick={() => setIsAddressListOpen(!isAddressListOpen)}
                >
                  Alterar
                </button>
              </div>

              {isAddressListOpen && (
                <div className="mt-4 flex flex-col gap-2">
                  {addresses.map((address) => (
                    <button
                      key={address}
                      type="button"
                      onClick={() => handleSelectAddress(address)}
                      className={`w-full text-left rounded-2xl border p-4 transition-all duration-200 ${
                        selectedAddress === address
                          ? "border-primary bg-primary/5"
                          : "border-muted/20 hover:border-primary hover:bg-primary/5"
                      }`}
                    >
                      <p className="font-semibold text-secondary">{address}</p>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="card-base rounded-3xl border-muted/20 p-6">
              <div className="flex items-center gap-2 mb-5">
                <CreditCard className="w-5 h-5 text-primary" />

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
                {paymentOptions.map((payment) => (
                  <button
                    type="button"
                    key={payment}
                    onClick={() => handleSelectPayment(payment)}
                    className={`rounded-2xl border p-5 text-left transition-all duration-200 ${
                      selectedPayment === payment
                        ? "border-primary bg-primary/5"
                        : "border-muted/20 hover:border-primary hover:bg-primary/5"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <CreditCard className="w-5 h-5 text-primary" />
                    </div>

                    <p className="font-bold text-secondary">{payment}</p>
                    <p className="text-sm text-foreground/60 mt-1">
                      {getPaymentDescription(payment)}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div className="card-base rounded-3xl border-muted/20 p-6">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquareText className="w-5 h-5 text-primary" />

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
                value={orderNotes}
                onChange={(event) => setOrderNotes(event.target.value)}
                className="input-base w-full min-h-32 rounded-2xl border-muted/20 resize-none bg-transparent"
              />
            </div>
          </div>

          <aside className="grid gap-6">
            <CartPayment label="Confirmar pagamento" variant="checkout" />

            <div className="card-base rounded-3xl border-muted/20 p-6">
              <h3 className="text-2xl font-bold text-secondary mb-5">
                Detalhes da entrega
              </h3>

              <div className="flex flex-col gap-4 text-sm">
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0" />

                  <div>
                    <p className="font-semibold">Tempo estimado</p>
                    <p className="text-foreground/60">35–45 minutos</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CreditCard className="w-5 h-5 text-primary shrink-0" />

                  <div>
                    <p className="font-semibold">Pagamento seguro</p>
                    <p className="text-foreground/60">
                      Seus dados são protegidos.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <ShieldCheck className="w-5 h-5 text-primary shrink-0" />

                  <div>
                    <p className="font-semibold">Compra protegida</p>
                    <p className="text-foreground/60">
                      Cancelamento permitido em até 5 minutos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;