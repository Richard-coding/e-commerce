import { Link } from "react-router-dom";
import Input from "../components/inputs/Input";
import Layout from "../components/Layout";
import { useState, type SubmitEventHandler } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <main className="flex min-h-dvh items-center justify-center px-4 py-8">
        <section className="w-full max-w-96 rounded-2xl bg-white p-6 shadow ">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold ">Entrar</h1>
            <p className="mt-2 text-sm text-muted">
              Acesse sua conta para pedir suas receitas favoritas.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-semibold">
                E-mail
                <Input
                  type="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                />
              </label>
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold">
                Senha
                <Input
                  type="password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                />
              </label>
            </div>

            <Link to="/forget" className="text-xs text-primary hover:underline">
              Esqueci minha senha
            </Link>

            <button
              type="submit"
              className="w-full rounded-xl bg-primary px-4 py-3 font-semibold mt-4 "
            >
              Entrar
            </button>
          </form>
          <div className="text-center my-4">
            <p className="text-sm">
              Não tem conta?{" "}
              <Link to="/register" className=" text-primary hover:underline">
                Cadastre-se
              </Link>
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Login;
