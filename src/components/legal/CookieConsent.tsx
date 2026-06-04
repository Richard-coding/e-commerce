
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");

    if (!consent) {
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-muted/30 bg-background/95 backdrop-blur-sm">
      <div className="container-base py-4">
        <div className="flex flex-col gap-4 sm:flex-row">
          <p className="text-sm text-soft flex-1">
            Este projeto acadêmico utiliza Local Storage para armazenar
            informações de autenticação, preferências e consentimento no próprio
            navegador. <br /> Nenhum dado é enviado para servidores externos.
          </p>

          <div className="flex items-center gap-3 sm:min-w-49 text-sm">
            <Link to="/lgpd" className="btn-primary  ">
              Ver LGPD
            </Link>

            <button
              type="button"
              onClick={handleAccept}
              className="btn-primary"
            >
              Aceitar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
