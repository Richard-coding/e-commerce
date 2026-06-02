import {
  ClipboardList,
  Database,
  GraduationCap,
  HardDrive,
  ShieldCheck,
} from "lucide-react";

export const items = [
  {
    icon: Database,
    title: "Dados armazenados",
    description:
      "Este projeto armazena apenas informações fornecidas durante o cadastro, como nome, e-mail e senha, utilizando o armazenamento local do navegador (Local Storage). Nenhum dado é enviado para servidores externos.",
  },
  {
    icon: ClipboardList,
    title: "Finalidade das informações",
    description:
      "Os dados são utilizados exclusivamente para demonstrar funcionalidades de autenticação e navegação dentro da aplicação, sem qualquer finalidade comercial.",
  },
  {
    icon: HardDrive,
    title: "Armazenamento local",
    description:
      "Todas as informações permanecem armazenadas apenas no navegador do usuário. Ao limpar os dados do navegador, as informações cadastradas serão removidas.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e privacidade",
    description:
      "Este é um projeto acadêmico desenvolvido para fins educacionais e de portfólio. Nenhum dado real é processado, compartilhado ou utilizado por terceiros.",
  },
  {
    icon: GraduationCap,
    title: "Projeto acadêmico",
    description:
      "A aplicação simula um sistema de delivery para demonstração de habilidades em desenvolvimento web utilizando React, TypeScript e Tailwind CSS.",
  },
];