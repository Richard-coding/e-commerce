import LegalPage from "@/components/legal/LegalPage";
import { items } from "@/data/lgpd";

const Lgpd = () => {
  return (
    <LegalPage
      badge="Política"
      title="Privacidade e Proteção de Dados"
      description="Saiba como tratamos, armazenamos e protegemos as informações compartilhadas com o Raízes do Nordeste."
      items={items}
      notice="Este projeto possui finalidade acadêmica e utiliza informações fictícias para demonstração visual."
    />
  );
};

export default Lgpd;
