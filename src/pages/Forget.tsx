import { Link } from "react-router-dom";
import { useState, type FormEvent } from "react";
import toast from "react-hot-toast";

import Input from "@/components/inputs/Input";
import Brand from "@/components/ui/Brand";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Informe seu e-mail", { id: "error" });
      return;
    }

    toast.success("Instruções enviadas para seu e-mail", { id: "sucess" });
    setEmail("");
  };

  return (
    <main className="flex min-h-dvh items-center justify-center px-4 py-8 app-background">
      <section className="card-base w-full max-w-96 p-6 border-muted/20 shadow">
        <Brand />

        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold">Recuperar acesso</h2>

          <p className="mt-2 text-sm text-muted">
            Simulação de recuperação de acesso para fins demonstrativos.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm font-semibold">
            E-mail
            <Input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </label>

          <button type="submit" className="btn-primary w-full">
            Enviar instruções
          </button>
        </form>

        <div className="text-center mt-4">
          <Link to="/login" className="text-sm text-primary hover:underline">
            Voltar para login
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ForgetPassword;
