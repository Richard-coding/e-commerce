import { NavLink } from "react-router-dom";

import Shrimp from "../../assets/icons/shrimp.svg?react";
import Bar from "../../assets/icons/bar.svg?react";
import User from "../../assets/icons/User.svg?react";
import Shopping from "../../assets/icons/Shopping.svg?react";
import { useState } from "react";

const links = [
  { label: "Cardápio", to: "/cardapio" },
  { label: "Meu pedido", to: "/pedido" },
  { label: "Carrinho", to: "/carrinho" },
  { label: "Privacidade", to: "/lgpd" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full shadow-sm top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full flex items-center justify-center bg-primary shadow-md">
            <Shrimp className="w-5 h-5 text-white" />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-wide text-foreground">
              Raízes do Nordeste
            </h1>

            <p className="text-sm text-zinc-500 leading-none">
              Sabores da nossa terra
            </p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className="text-sm font-medium text-foreground transition-colors duration-200 hover:text-primary"
              >
                {label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <NavLink
              to="/carrinho"
              className="relative p-3 rounded-full  hover:bg-primary/10 "
            >
              <Shopping className="w-5 h-5 text-foreground" />

              <span className="absolute top-1 right-1 flex items-center justify-center w-5 h-5 rounded-full bg-primary text-white text-xs font-bold shadow">
                1
              </span>
            </NavLink>

            <div className="flex items-center text-sm gap-2 text-primary relative">
              <p>Richard</p>
              <button
                className="p-3 rounded-full  hover:bg-primary/10"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <User className="w-5 h-5 text-foreground " />
              </button>

              {isOpen && (
                <div className="absolute w-40 p-2 bg-white top-12 shadow-md rounded-xl border border-muted/10">
                  <ul className="flex flex-col gap-2 py-2">
                    <li>
                      <button className="hover:bg-primary/10 py-1 w-full rounded-xl">Sair</button>
                    </li>
                    <li>
                      <button className="hover:bg-primary/10 py-1 w-full rounded-xl">Sair</button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <button className="sm:hidden bg-primary text-white p-3 rounded-full shadow-md transition-all duration-200 hover:bg-secondary hover:scale-105">
          <Bar className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
};

export default Header;
