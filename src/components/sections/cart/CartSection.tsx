import Food from "@/assets/icons/food.svg?react";
import { cartItems } from "@/data/cart";
import { NavLink } from "react-router-dom";

const Cart = () => {
  return (
    <section className="section-base min-h-screen">
      <div className="container-base flex flex-col">
        <div className="rounded-3xl min-h-72 bg-linear-to-r from-[#4d2b1f] to-[#6a4030] text-white">
          <div className="p-6">
            <span className="bg-white/10 border border-white/10 px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-2">
              <Food className="w-3 h-3" />
              {cartItems.length} itens adicionados
            </span>

            <h1 className="text-5xl font-bold mt-5">Seu Carrinho</h1>
            <p className="text-white/80 text-lg mt-4 max-w-xl leading-relaxed">
              Confira seus pedidos antes de finalizar. Tudo pronto para levar o
              sabor do Nordeste até você.
            </p>

            <div className="flex flex-wrap gap-6 mt-6 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <Food className="w-4 h-4" />
                Entrega em Recife, PE
              </span>
              <span className="flex items-center gap-2">
                <Food className="w-4 h-4" />
                ~35 min de preparo
              </span>
              <span className="flex items-center gap-2">
                <Food className="w-4 h-4" />
                Frete grátis acima de R$ 60
              </span>
            </div>
          </div>
        </div>

        <div className="  pt-10 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className={`card-base rounded-3xl p-4 grid grid-cols-1 sm:grid-cols-[120px_1fr] sm:items-center gap-4 transition-all duration-200 ${
                    item.unavailable
                      ? "border-red-200 opacity-75"
                      : "border-muted/20 hover:shadow-md"
                  }`}
                >
                  {item.unavailable && (
                    <span className="absolute top-6 right-6 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Indisponível
                    </span>
                  )}

                  <div className="w-full h-52 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between gap-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-secondary">
                          {item.title}
                        </h3>

                        <p className="text-sm text-soft mt-2 max-w-xl leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                      <div className="flex items-center justify-center sm:justify-start gap-5 border border-muted/20 rounded-full px-5 py-2">
                        <button
                          type="button"
                          className="text-xl text-foreground/60 hover:text-primary transition-all duration-200"
                        >
                          -
                        </button>

                        <span className="font-semibold">{item.quantity}</span>

                        <button
                          type="button"
                          className="text-xl text-foreground/60 hover:text-primary transition-all duration-200"
                        >
                          +
                        </button>
                      </div>

                      <div className="flex items-center justify-between gap-2">
                        <p className="font-semibold">Preço:</p>
                        <div className="flex gap-2 items-center justify-center ">
                          {item.oldPrice && (
                            <p className="text-sm line-through text-foreground/40">
                              R$ {item.oldPrice.toFixed(2).replace(".", ",")}
                            </p>
                          )}

                          <strong className="text-lg font-bold text-primary">
                            R$ {item.price.toFixed(2).replace(".", ",")}
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card-base rounded-3xl border-muted/20 p-5">
              <div className="flex items-center gap-2 mb-4">
                <Food className="w-4 h-4 text-primary" />
                <h3 className="font-semibold text-secondary">
                  Cupom de desconto
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Digite seu cupom..."
                  className="input-base flex-1 rounded-2xl border-muted/20"
                />

                <button type="button" className="btn-ghost">
                  Aplicar
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 ">
            <div className="card-base rounded-3xl border-muted/20 p-6">
              <h3 className="text-3xl font-bold text-secondary">
                Resumo do pedido
              </h3>

              <p className="text-sm text-foreground/60 mt-1">
                Confira os valores antes de confirmar.
              </p>

              <div className="flex flex-col gap-4 mt-8 text-md">
                <div className="flex items-center justify-between ">
                  <span className="text-soft">Subtotal</span>
                  <span className="font-medium text-lg">R$ 73,43</span>
                </div>

                <div className="flex items-center justify-between ">
                  <span className="text-soft">Taxa de entrega</span>
                  <span className="font-medium text-lg">R$ 6,90</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-soft">Desconto</span>
                  <span className="font-medium text-primary text-lg">
                    - R$ 2,49
                  </span>
                </div>
              </div>

              <div className="border-t border-muted/20 my-6" />

              <div className="flex items-center justify-between text-2xl font-bold">
                <span className=" text-secondary ">Total</span>
                <strong className=" text-primary">R$ 80,33</strong>
              </div>

              <NavLink
                to="/checkout"
                className="btn-primary w-full flex items-center justify-center mt-4"
              >
                Finalizar pedido
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

            <div className="card-base rounded-3xl border-muted/20 p-6">
              <h3 className="text-2xl font-bold text-secondary mb-6">
                Detalhes da entrega
              </h3>

              <div className="flex flex-col gap-5 text-sm ">
                <div className="flex gap-3">
                  <Food className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Recife — Boa Viagem</p>
                    <p className="text-foreground/60">
                      Av. Boa Viagem, 1234 — PE
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Food className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">~35 min</p>
                    <p className="text-foreground/60">Preparo + entrega</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Food className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Frete grátis acima de R$ 60</p>
                    <p className="text-foreground/60">Faltam R$ 0,00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
