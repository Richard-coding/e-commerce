import { Link, useNavigate } from "react-router-dom";
import Input from "@/components/inputs/Input";
import { useState, type SubmitEventHandler } from "react";
import toast from "react-hot-toast";
import Brand from "@/components/ui/Brand.tsx";
import { useUser } from "@/hooks/useUser";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { loginUser } = useUser();

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (loginUser(email, password)) {
      toast.success("Login efetuado com sucesso", { id: "sucess" });
      navigate("/");
    } else {
      toast.error("algo deu errado", { id: "sucess" });
    }
  };

  return (
    <main className="flex min-h-dvh items-center justify-center px-4 py-8 border app-background">
      <section className="card-base w-full max-w-96 p-6 border-muted/20 shadow">
        <Brand />
        <div className="mb-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Entrar</h2>
          <p className="mt-2 text-sm text-muted">
            Acesse sua conta para explorar os fluxos da aplicação.
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

          <Link
            to="/forget"
            className="text-xs text-primary hover:underline block"
          >
            Esqueci minha senha
          </Link>

          <button type="submit" className="btn-primary w-full">
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
  );
};

export default Login;
