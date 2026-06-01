import { Link } from "react-router-dom";
import Food from "@/assets/icons/food.svg?react";

const NotFound = () => {
  return (
    <main className="flex items-center justify-center px-6 py-10">
      <section className="w-full max-w-2xl rounded-3xl  p-8 text-center">
        <span className="mx-auto w-fit  border border-primary/20 px-4 py-2 rounded-full text-xs font-bold text-primary uppercase inline-flex items-center gap-2">
          <Food className="w-3 h-3" />
          Você se perdeu no caminho
        </span>

        <div className="my-10 flex items-center justify-center gap-4">
          <p className="text-8xl font-bold text-secondary">404</p>
        </div>

        <h1 className="text-4xl font-bold text-secondary">
          Página não encontrada
        </h1>

        <p className="mt-4 text-foreground/70 leading-relaxed">
          A página que você tentou acessar não existe ou foi movida. Que tal
          voltar para a página inicial?
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-secondary"
        >
          Voltar para Home
        </Link>

        <div className="mt-10 flex items-center justify-center gap-4 text-xs uppercase tracking-widest text-foreground/40">
          <span className="h-px w-16 bg-muted/40" />
          Raízes do Nordeste
          <span className="h-px w-16 bg-muted/40" />
        </div>
      </section>
    </main>
  );
};

export default NotFound;
