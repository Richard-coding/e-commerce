import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Cardápio</h3>

          <NavLink
            to="/cardapio"
            className="w-fit text-white/80 hover:text-primary transition-all duration-200"
          >
            Salgados
          </NavLink>

          <NavLink
            to="/cardapio"
            className="w-fit text-white/80 hover:text-primary transition-all duration-200"
          >
            Pratos
          </NavLink>

          <NavLink
            to="/cardapio"
            className="w-fit text-white/80 hover:text-primary transition-all duration-200"
          >
            Doces
          </NavLink>

          <NavLink
            to="/cardapio"
            className="w-fit text-white/80 hover:text-primary transition-all duration-200"
          >
            Bebidas
          </NavLink>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Conta</h3>

          <NavLink
            to="/login"
            className="w-fit text-white/80 hover:text-primary transition-all duration-200"
          >
            Entrar
          </NavLink>

          <NavLink
            to="/cadastro"
            className="w-fit text-white/80 hover:text-primary transition-all duration-200"
          >
            Cadastrar
          </NavLink>

          <NavLink
            to="/pedido"
            className="w-fit text-white/80 hover:text-primary transition-all duration-200"
          >
            Meus pedidos
          </NavLink>

          <NavLink
            to="/carrinho"
            className="w-fit text-white/80 hover:text-primary transition-all duration-200"
          >
            Carrinho
          </NavLink>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Institucional</h3>

          <NavLink
            to="/lgpd"
            className="w-fit text-white/80 hover:text-primary transition-all duration-200"
          >
            Privacidade (LGPD)
          </NavLink>

          <NavLink
            to="/termos"
            className="w-fit text-white/80 hover:text-primary transition-all duration-200"
          >
            Termos de uso
          </NavLink>

          <a
            href="mailto:contato@raizes.com.br"
            className="w-fit text-white/80 hover:text-primary transition-all duration-200"
          >
            contato@raizes.com.br
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-white/60">
          <p>© 2026 Raízes do Nordeste. Todos os direitos reservados.</p>

          <p className="text-center md:text-right">
            Projeto fictício desenvolvido para fins educacionais e acadêmicos.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
