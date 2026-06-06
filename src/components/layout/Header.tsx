import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  UserIcon,
  LogOut,
  ShoppingCartIcon,
  ShieldCheck,
  UtensilsCrossed,
  ReceiptText,
} from "lucide-react";

import Shrimp from "@/assets/icons/shrimp.svg?react";
import { useUser } from "@/hooks/useUser";

const links = [
  { label: "Cardápio", to: "/menu", icon: UtensilsCrossed },
  { label: "Pedido", to: "/order", icon: ReceiptText },
  { label: "Privacidade", to: "/lgpd", icon: ShieldCheck },
];

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [mobile, setMobile] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const mobileRef = useRef<HTMLDivElement | null>(null);

  const { currentUser, logoutUser } = useUser();
  const navigate = useNavigate();

  const closeMenus = () => {
    setMenu(false);
    setMobile(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (menuRef.current && !menuRef.current.contains(target)) {
        setMenu(false);
      }

      if (mobileRef.current && !mobileRef.current.contains(target)) {
        setMobile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full shadow-sm top-0 z-50 header-base">
      <div className="container-base flex items-center justify-between py-4">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full flex items-center justify-center bg-primary shadow-md transition-colors duration-200 hover:bg-secondary">
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
        </NavLink>

        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center gap-6">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-primary" : "link-base"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `relative p-3 rounded-full transition-colors duration-200 ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-primary/10 text-foreground"
                }`
              }
              aria-label="Carrinho"
            >
              <ShoppingCartIcon className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                0
              </span>
            </NavLink>

            <div
              ref={menuRef}
              className="flex items-center text-sm gap-1 text-black relative"
            >
              <p>{currentUser?.name ?? "Login"}</p>

              <button
                type="button"
                className="p-3 rounded-full transition-colors duration-200 hover:bg-primary/10 cursor-pointer"
                onClick={() => setMenu((prev) => !prev)}
                aria-label="Menu do usuário"
              >
                <UserIcon className="w-5 h-5 text-foreground" />
              </button>

              {menu && (
                <div className="absolute w-40 bg-white top-12 right-0 shadow-md rounded-xl border border-muted/10 p-1">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <button
                        type="button"
                        className="hover:bg-primary/10 p-2 w-full rounded-xl flex gap-4 items-center cursor-pointer text-sm transition-colors duration-200"
                        onClick={() => {
                          logoutUser();
                          navigate("/login");
                        }}
                      >
                        <LogOut className="w-5 h-5" />
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
            type="button"
            className="cursor-pointer bg-primary text-white p-3 rounded-full shadow-md transition-colors duration-200 hover:bg-secondary"
            onClick={() => setMobile((prev) => !prev)}
            aria-label="Abrir menu"
          >
            {mobile ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {mobile && (
            <div className="absolute w-48 bg-white top-12 right-0 shadow-md rounded-xl border border-muted/10 p-1 text-sm">
              <ul className="flex flex-col gap-1">
                {links.map(({ label, to, icon: Icon }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        `py-2 px-4 w-full rounded-xl flex gap-4 items-center transition-colors duration-200 ${
                          isActive
                            ? "bg-primary/10 text-primary font-semibold"
                            : "hover:bg-primary/10 text-foreground"
                        }`
                      }
                      onClick={closeMenus}
                    >
                      <Icon className="w-5 h-5" />
                      {label}
                    </NavLink>
                  </li>
                ))}

                <li>
                  <NavLink
                    to="/cart"
                    className={({ isActive }) =>
                      `py-2 px-4 w-full rounded-xl flex gap-4 items-center transition-colors duration-200 relative ${
                        isActive
                          ? "bg-primary/10 text-primary font-semibold"
                          : "hover:bg-primary/10 text-foreground"
                      }`
                    }
                    onClick={closeMenus}
                  >
                    <span className="absolute -top-2 left-8 min-w-5 h-5 px-1 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                      1
                    </span>
                    <ShoppingCartIcon className="w-5 h-5" />
                    Carrinho
                  </NavLink>
                </li>

                <li>
                  <button
                    type="button"
                    className="hover:bg-primary/10 py-2 px-4 w-full rounded-xl flex gap-4 items-center cursor-pointer transition-colors duration-200"
                  >
                    <LogOut className="w-5 h-5" />
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
