import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

interface LegalItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface LegalPageProps {
  title: string;
  description: string;
  items: LegalItem[];
}

export default function LegalPage({
  title,
  description,
  items,
}: LegalPageProps) {
  return (
    <section className="section-base min-h-screen">
      <div className="container-base flex flex-col gap-8">
        <div className="rounded-3xl min-h-72 bg-linear-to-r from-[#4d2b1f] to-[#6a4030] p-8 text-white">
          <h1 className="text-3xl font-bold mb-3">{title}</h1>

          <p className="text-white/80 max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="card-base rounded-3xl border-muted/20 p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  <h2 className="text-xl font-bold text-secondary">
                    {item.title}
                  </h2>
                </div>

                <p className="text-soft leading-relaxed">{item.description}</p>
              </article>
            );
          })}
        </div>

        <div className="flex justify-center">
          <NavLink to="/" className="btn-ghost font-semibold">
            Voltar para a página inicial
          </NavLink>
        </div>
      </div>
    </section>
  );
}
