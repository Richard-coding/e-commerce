import LegalPage from "@/components/legal/LegalPage";

import { items } from "@/data/terms";

const Terms = () => {
  return (
    <LegalPage
      badge="Documento"
      title="Termos de Uso"
      description="Leia as condições de uso da plataforma Raízes do Nordeste antes de continuar navegando."
      items={items}
      notice="Este sistema foi desenvolvido exclusivamente para fins acadêmicos e demonstrativos."
    />
  );
};

export default Terms;
