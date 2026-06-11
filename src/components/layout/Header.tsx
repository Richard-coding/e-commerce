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
  LogIn,
} from "lucide-react";

import Shrimp from "@/assets/icons/shrimp.svg?react";
import { useShop } from "@/hooks/useShop";
import { useUser } from "@/hooks/useUser";
import PointsBadge from "../ui/PointsBadge";

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
  const { cartItems, loyaltyPoints } = useShop();
  const navigate = useNavigate();

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const closeMenus = () => {
    setMenu(false);
    setMobile(false);
  };

  const handleLogout = () => {
    logoutUser();
    closeMenus();
    navigate("/login");
  };

  const handleLogin = () => {
    closeMenus();
    navigate("/login");
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
      <div className="container-base flex items-center justify-between gap-4 py-4">
        <NavLink to="/" className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary shadow-md transition-colors duration-200 hover:bg-secondary">
            <Shrimp className="h-5 w-5 text-white" />
          </div>

          <div className="min-w-0">
            <h1 className="truncate text-lg font-bold tracking-wide text-foreground">
              Raízes do Nordeste
            </h1>

            <p className="truncate text-sm leading-none text-zinc-500">
              Sabores da nossa terra
            </p>
          </div>
        </NavLink>

        <div className="hidden items-center gap-5 sm:flex">
          <PointsBadge points={loyaltyPoints} />

          <div className="flex items-center gap-5">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `whitespace-nowrap text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-primary" : "link-base"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `relative rounded-full p-3 transition-colors duration-200 ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-primary/10"
                }`
              }
              aria-label="Carrinho"
            >
              <ShoppingCartIcon className="h-5 w-5" />

              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-xs font-bold text-white">
                {cartCount}
              </span>
            </NavLink>

            <div
              ref={menuRef}
              className="relative flex items-center gap-2 text-sm text-black"
            >
              <p className="max-w-24 truncate">
                {currentUser?.name ?? "Login"}
              </p>

              <button
                type="button"
                className="cursor-pointer rounded-full p-3 transition-colors duration-200 hover:bg-primary/10"
                onClick={() => setMenu((prev) => !prev)}
                aria-label="Menu do usuário"
              >
                <UserIcon className="h-5 w-5 text-foreground" />
              </button>

              {menu && (
                <div className="absolute right-0 top-12 w-40 rounded-xl border border-muted/10 bg-white p-1 text-sm shadow-md">
                  <ul className="flex flex-col gap-1">
                    <li>
                      {currentUser ? (
                        <button
                          type="button"
                          className="flex w-full cursor-pointer items-center gap-3 rounded-xl p-2 transition-colors duration-200 hover:bg-primary/10"
                          onClick={handleLogout}
                        >
                          <LogOut className="h-5 w-5" />
                          Sair
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="flex w-full cursor-pointer items-center gap-3 rounded-xl p-2 transition-colors duration-200 hover:bg-primary/10"
                          onClick={handleLogin}
                        >
                          <LogIn className="h-5 w-5" />
                          Fazer login
                        </button>
                      )}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          ref={mobileRef}
          className="relative z-10 flex shrink-0 items-center sm:hidden"
        >
          <button
            type="button"
            className="cursor-pointer rounded-full bg-primary p-3 text-white shadow-md transition-colors duration-200 hover:bg-secondary"
            onClick={() => setMobile((prev) => !prev)}
            aria-label="Abrir menu"
          >
            {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {mobile && (
            <div className="absolute right-0 top-12 w-52 rounded-xl border border-muted/10 bg-white text-sm shadow-md">
              <div className="flex w-full items-center justify-center border-b border-muted/30 px-4 py-3">
                <p className="text-primary font-semibold">
                  Meus pontos{" "}
                  <span >
                    {loyaltyPoints}
                  </span>
                </p>
              </div>

              <ul className="flex flex-col gap-1 p-1">
                {links.map(({ label, to, icon: Icon }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        `flex w-full items-center gap-3 rounded-xl px-4 py-2 transition-colors duration-200 ${
                          isActive
                            ? "bg-primary/10 font-semibold text-primary"
                            : "text-foreground hover:bg-primary/10"
                        }`
                      }
                      onClick={closeMenus}
                    >
                      <Icon className="h-5 w-5" />
                      {label}
                    </NavLink>
                  </li>
                ))}

                <li>
                  <NavLink
                    to="/cart"
                    className={({ isActive }) =>
                      `relative flex w-full items-center gap-3 rounded-xl px-4 py-2 transition-colors duration-200 ${
                        isActive
                          ? "bg-primary/10 font-semibold text-primary"
                          : "text-foreground hover:bg-primary/10"
                      }`
                    }
                    onClick={closeMenus}
                  >
                    <span className="absolute -top-2 left-8 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-xs font-bold text-white">
                      {cartCount}
                    </span>

                    <ShoppingCartIcon className="h-5 w-5" />
                    Carrinho
                  </NavLink>
                </li>

                <li>
                  {currentUser ? (
                    <button
                      type="button"
                      className="flex w-full cursor-pointer items-center gap-3 rounded-xl px-4 py-2 transition-colors duration-200 hover:bg-primary/10"
                      onClick={handleLogout}
                    >
                      <LogOut className="h-5 w-5" />
                      Sair
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="flex w-full cursor-pointer items-center gap-3 rounded-xl px-4 py-2 transition-colors duration-200 hover:bg-primary/10"
                      onClick={handleLogin}
                    >
                      <LogIn className="h-5 w-5" />
                      Fazer login
                    </button>
                  )}
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