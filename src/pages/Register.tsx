import { Link, useNavigate } from "react-router-dom";
import Input from "../components/inputs/Input";
import { useState, type SubmitEventHandler } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { createUser } = useLocalStorage();
  const navigate = useNavigate();

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (name.trim() && email.trim() && password.trim()) {
      const form = { name, email, password };
      createUser(form);
      toast.success("Cadastro efetuado com sucesso", { id: "register" });
      navigate("/login");
    } else {
      toast.error("Algo deu errado", { id: "register" });
    }
  };

  return (
    <main className="flex min-h-dvh items-center justify-center px-4 py-8">
      <section className="w-full max-w-96 rounded-2xl bg-white p-6 shadow">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold">Criar conta</h1>

          <p className="mt-2 text-sm text-muted">
            Cadastre-se para pedir suas receitas favoritas.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-semibold">Nome</label>

            <Input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold">E-mail</label>

            <Input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold">Senha</label>

            <Input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>

          <div className="space-y-3 text-sm">
            <label className="flex items-start gap-2">
              <input type="checkbox" className="mt-1 accent-primary" required />

              <span>
                Li e aceito a{" "}
                <Link to="/lgpd" className="text-primary hover:underline">
                  Política de Privacidade
                </Link>
                .
              </span>
            </label>

            <label className="flex items-start gap-2">
              <input type="checkbox" className="mt-1 accent-primary" />

              <span>
                Quero receber ofertas, novidades e promoções por e-mail.
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="mt-4 w-full rounded-xl bg-primary px-4 py-3 font-semibold text-white"
          >
            Criar conta
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm">
            Já possui conta?{" "}
            <Link to="/" className="text-primary hover:underline">
              Entrar
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Register;
