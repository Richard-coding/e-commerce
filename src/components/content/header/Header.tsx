import { NavLink } from "react-router-dom";

import Shrimp from "../../../assets/icons/shrimp.svg?react";
import Bar from "../../../assets/icons/bar.svg?react";
import User from "../../../assets/icons/user.svg?react";
import Shopping from "../../../assets/icons/shopping.svg?react";
import Exit from "../../../assets/icons/exit.svg?react";
import Food from "../../../assets/icons/food.svg?react";
import ShoppingCart from "../../../assets/icons/shopping-cart.svg?react";
import Privacy from "../../../assets/icons/privacy.svg?react";
import { useEffect, useRef, useState } from "react";

const links = [
  { label: "Cardápio", to: "/cardapio", icon: Food },
  { label: "Pedido", to: "/pedido", icon: Shopping },
  { label: "Carrinho", to: "/carrinho", icon: ShoppingCart },
  { label: "Privacidade", to: "/lgpd", icon: Privacy },
];

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [mobile, setMobile] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const mobileRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        menuRef.current &&
        !menuRef.current.contains(target)
      ) {
        setMenu(false);
      }

      if (
        mobileRef.current &&
        !mobileRef.current.contains(target)
      ) {
        setMobile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full shadow-sm top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full flex items-center justify-center bg-primary shadow-md hover:bg-secondary  cursor-pointer">
            <NavLink to="/home">
              <Shrimp className="w-5 h-5 text-white" />
            </NavLink>
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

        <div className="hidden sm:flex items-center gap-4">
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
            <div
              ref={menuRef}
              className="flex items-center text-sm gap-2 text-black relative"
            >
              <p>Richard</p>

              <button
                className="p-3 rounded-full hover:bg-primary/10 cursor-pointer"
                onClick={() => setMenu((prev) => !prev)}
              >
                <User className="w-5 h-5 text-foreground" />
              </button>

              {menu && (
                <div className="absolute w-40 bg-white top-12 right-0 shadow-md rounded-xl border border-muted/10 p-1">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <button className="hover:bg-primary/10 p-2 w-full rounded-xl flex gap-4 items-center cursor-pointer text-sm">
                        <Exit className="w-5 h-5"/>
                        Sair
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div ref={mobileRef} className="relative sm:hidden z-10">
          <button
            className="sm:hidden cursor-pointer bg-primary text-white p-3 rounded-full shadow-md transition-all duration-200 hover:bg-secondary "
            onClick={() => setMobile((prev) => !prev)}
          >
            <Bar className="w-5 h-5" />
          </button>

          {mobile && (
            <div className="absolute w-40 bg-white top-12 right-0 shadow-md rounded-xl border border-muted/10 p-1 text-sm">
              <ul className="flex flex-col">
                <li className="flex flex-col gap-2">
                  {links.map(({ label, to, icon: Icon }) => (
                    <NavLink
                      key={label}
                      to={to}
                      className="hover:bg-primary/10 py-2 px-4 w-full rounded-xl flex gap-4 items-center "
                    >
                      <Icon className="w-5 h-5" />
                      {label}
                    </NavLink>
                  ))}
                </li>

                <li>
                  <button className="hover:bg-primary/10 py-2 p-4 w-full rounded-xl flex gap-4 items-center cursor-pointer">
                    <Exit className="w-5 h-5" />
                    Sair
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;