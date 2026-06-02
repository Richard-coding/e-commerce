import { NavLink } from "react-router-dom";
import Food from "@/assets/icons/food.svg?react";

interface LegalItem {
  title: string;
  description: string;
}

interface LegalPageProps {
  badge: string;
  title: string;
  description: string;
  items: LegalItem[];
  notice: string;
}

const LegalPage = ({
  badge,
  title,
  description,
  items,
  notice,
}: LegalPageProps) => {
  return (
    <section className="section-base min-h-screen">
      <div className="container-base flex flex-col gap-8">
        <div className="rounded-3xl min-h-72 bg-linear-to-r from-[#4d2b1f] to-[#6a4030] text-white">
          <div className="p-6">
            <span className="bg-white/10 border border-white/10 px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-2">
              <Food className="w-3 h-3" />
              {badge}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-5">{title}</h1>

            <p className="text-white/80 text-lg mt-4 max-w-2xl leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="card-base rounded-3xl border-muted/20 p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Food className="w-5 h-5 text-primary" />
                </div>

                <h2 className="text-2xl font-bold text-secondary">
                  {item.title}
                </h2>
              </div>

              <p className="text-soft leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary/10 border border-primary/30 rounded-3xl p-6 text-secondary">
          <p>{notice}</p>
        </div>

        <NavLink
          to="/"
          className="flex justify-center text-primary font-semibold hover:text-secondary transition-all duration-200"
        >
          ← Voltar para Home
        </NavLink>
      </div>
    </section>
  );
};

export default LegalPage;
