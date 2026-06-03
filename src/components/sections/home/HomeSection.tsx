import { NavLink } from "react-router-dom";
import { products } from "@/data/Products";
import SectionTitle from "@/components/sections/home/HomeSectionTitle";
import ProductCard from "@/components/ui/ProductCard";
import { categories } from "@/data/categories";

const HomeSection = () => {
  return (
    <section className="section-base">
      <div className="container-base">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative h-72 rounded-2xl overflow-hidden shadow border border-muted/30">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"
              alt="Combo São João"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-0 p-6 text-white">
              <span className="bg-primary px-3 py-1 rounded-full text-sm font-semibold">
                Promoção
              </span>

              <h2 className="text-3xl font-bold mt-3">Combo São João</h2>

              <p className="text-lg opacity-90">A partir de R$ 29,99</p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-5">
            <div>
              <p className="text-primary uppercase text-sm font-bold">Sobre</p>

              <h2 className="text-3xl font-bold text-primary">
                <span className="text-secondary">O Sertão na</span> sua mesa
              </h2>
            </div>

            <p className="text-foreground/80 text-md md:text-lg">
              Dos tradicionais acarajés preparados na hora às irresistíveis
              tapiocas recheadas, nosso cardápio reúne alguns dos sabores mais
              marcantes da culinária nordestina. Descubra receitas que
              atravessam gerações, feitas com ingredientes selecionados e muito
              respeito às tradições do Nordeste brasileiro.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-semibold text-sm">
              <NavLink to="/menu" className="btn-primary flex justify-center">
                Ver cardápio
              </NavLink>

              <NavLink to="/order" className="btn-primary flex justify-center">
                Acompanhar pedido
              </NavLink>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center text-sm text-soft">
              <div className="bg-white rounded-xl py-3 border border-muted/20 flex items-center justify-center gap-2">
                <p>Entrega rápida</p>
              </div>

              <div className="bg-white rounded-xl py-3 border border-muted/20 flex items-center justify-center gap-2 md:hidden">
                <p>Pagamento rápido</p>
              </div>

              <div className="bg-white rounded-xl py-3 border border-muted/20 flex items-center justify-center gap-2">
                <p>Fidelidade</p>
              </div>

              <div className="bg-white rounded-xl py-3 border border-muted/20 flex items-center justify-center gap-2 md:hidden">
                <p>Seguro</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6">
          <SectionTitle about="categorias" title="Explore por sabor" />

          <div className="flex gap-4 overflow-x-auto pb-2">
            {categories.map((category, index) => {
              const Icon = category.icon;

              return (
                <button
                  type="button"
                  key={category.label}
                  className={`min-w-32 shrink-0 rounded-2xl border p-5 flex flex-col items-center justify-center gap-3 transition-all duration-200 shadow-sm cursor-pointer ${
                    index === 0
                      ? "bg-primary  border-primary"
                      : "bg-white hover:bg-primary/10 border-muted/20"
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-sm font-bold">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-sm font-semibold">
                    {category.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <SectionTitle about="Cardápio" title="Mais pedidos hoje" />

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
