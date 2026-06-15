import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { useShop } from "@/hooks/useShop";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

const MenuSection = () => {
  const { addToCart, selectedUnit, setSelectedUnit } = useShop();
  const [searchParams] = useSearchParams();

  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");

    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    } else {
      setSelectedCategory("Todos");
    }
  }, [searchParams]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const units = ["Recife", "Olinda", "Jaboatão"];

  const filteredProducts = products.filter((item) => {
    const searchTerm = search.toLowerCase().trim();
    const matchesCategory =
      selectedCategory === "Todos" || item.category === selectedCategory;
    const matchesSearch =
      searchTerm.length === 0 ||
      `${item.title} ${item.description} ${item.category}`
        .toLowerCase()
        .includes(searchTerm);
    const matchesUnit = item.units.includes(selectedUnit);

    return matchesCategory && matchesSearch && matchesUnit;
  });

  const productsWithoutUnitFilter = products.filter((item) => {
    const searchTerm = search.toLowerCase().trim();
    const matchesCategory =
      selectedCategory === "Todos" || item.category === selectedCategory;
    const matchesSearch =
      searchTerm.length === 0 ||
      `${item.title} ${item.description} ${item.category}`
        .toLowerCase()
        .includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  const emptyMessage =
    productsWithoutUnitFilter.length > 0 && filteredProducts.length === 0
      ? "Nenhum produto encontrado para esta unidade."
      : "Nenhum produto encontrado.";

  return (
    <section className="section-base">
      <div className="container-base flex flex-col gap-10">
        <div className="relative h-105 rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1400&auto=format&fit=crop"
            alt="Comidas nordestinas"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 p-8 flex flex-col justify-center max-w-xl text-white">
            <span className="bg-primary/90 text-sm font-semibold px-4 py-2 rounded-full w-fit mb-5">
              Promoção até 25% OFF
            </span>

            <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
              Sabores que vêm do <span className="text-primary">sertão</span>
            </h1>

            <p className="mt-5 text-white/80 leading-relaxed">
              Receitas tradicionais nordestinas preparadas na hora com
              ingredientes frescos e muito sabor.
            </p>

            <div className="flex gap-6 mt-6 text-sm text-white/70">
              <span>Entrega em até 35 min</span>
              <span>4.9 de avaliação</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow border border-muted/20 p-3">
          <input
            type="text"
            placeholder="Buscar por prato, ingrediente ou categoria..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full outline-none px-4 py-2 text-sm"
          />
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-secondary">Categorias</h2>

            <p className="text-sm text-foreground/60">
              {filteredProducts.length} itens disponíveis
            </p>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.label}
                onClick={() => setSelectedCategory(category.label)}
                className={`px-5 py-3 rounded-xl border text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === category.label
                    ? "bg-primary text-white border-primary"
                    : "btn-ghost"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div ref={dropdownRef} className="relative w-full max-w-50 ">
            <label className="block mb-2 text-sm font-medium text-secondary">
              Unidade
            </label>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="input-base w-full flex items-center justify-between"
            >
              <span>{selectedUnit}</span>

              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="absolute top-full left-0 mt-2 w-full card-base border border-muted/20 rounded-2xl overflow-hidden z-20">
                {units.map((unit) => (
                  <button
                    key={unit}
                    type="button"
                    onClick={() => {
                      setSelectedUnit(unit);
                      setIsOpen(false);
                    }}
                    className={`w-full px-4 py-3 text-left hover:bg-primary/5 transition-colors ${
                      selectedUnit === unit ? "text-primary font-semibold" : ""
                    }`}
                  >
                    {unit}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <p className="text-sm text-soft">{emptyMessage}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                className="card-hover overflow-hidden transition-all duration-300 border-muted/20"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                  />

                  {!item.available && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-white px-4 py-2 rounded-full text-sm font-semibold">
                        Indisponível
                      </span>
                    </div>
                  )}

                  {item.discountPercent && item.discountPercent > 0 && (
                    <span className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                      -{item.discountPercent}%
                    </span>
                  )}
                </div>

                <div className="p-5 flex flex-col gap-4 h-60">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-secondary">
                      {item.title}
                    </h3>

                    <p className="text-sm text-soft mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-4">
                    <p className="text-2xl font-bold text-primary">
                      R$ {item.price.toFixed(2).replace(".", ",")}
                    </p>

                    <button
                      type="button"
                      disabled={!item.available}
                      onClick={() => addToCart(item)}
                      className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                        item.available
                          ? "bg-primary text-white hover:bg-secondary"
                          : "bg-primary/30 text-white cursor-not-allowed"
                      }`}
                    >
                      + Adicionar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
