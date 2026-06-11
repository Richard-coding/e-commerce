import { NavLink } from "react-router-dom";
import { ReceiptText, type LucideIcon } from "lucide-react";

interface LegalItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface LegalPageProps {
  title: string;
  description: string;
  items: LegalItem[];
  badge: string;
  notice: string;
}

export default function LegalPage({
  title,
  badge,
  notice,
  description,
  items,
}: LegalPageProps) {
  return (
    <section className="section-base min-h-screen">
      <div className="container-base flex flex-col gap-8">
        <div className="rounded-3xl min-h-72 bg-linear-to-r from-[#4d2b1f] to-[#6a4030] p-6 text-white">
          <span className="bg-white/10 border border-white/10 px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-2">
            <ReceiptText className="w-3 h-3" />
            {badge}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold my-4">{title}</h1>

          <div className="text-white/80 max-w-2xl leading-relaxed">
            <p>{description}</p>
            <p>{notice}</p>
          </div>
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
