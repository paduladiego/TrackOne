# TrackOne

TrackOne é um sistema corporativo de **gestão de frota de veículos**.  
O projeto está em desenvolvimento e será construído com:

- **Next.js (App Router)**
- **JavaScript**
- **CSS puro**
- **PostgreSQL (via Prisma ORM)**
- **Autenticação com 2FA (e-mail + código)**
- **Upload de arquivos (CNH, fotos de avarias, inspeções)**

---

## Visão Geral

O objetivo do TrackOne é oferecer uma plataforma completa para gerenciamento de frota, permitindo:

- Reservas de veículos por data e placa.
- Check-in e check-out com registro de quilometragem, combustível e fotos.
- Controle de manutenções preventivas e corretivas com bloqueio automático da agenda.
- Relatórios de uso, quilometragem, ociosidade e previsão de necessidade de frota.
- Papéis de acesso: **Administrador** (gestão total) e **Usuário** (reservas e check-in/out).

---

## Funcionalidades Planejadas

- Cadastro e autenticação de usuários com e-mail corporativo válido.
- Confirmação de conta com **código via e-mail** (2FA).
- Cadastro e gestão de veículos (placa, modelo, ano, status, próprio/alugado).
- Reservas sem conflito de horários.
- Upload e armazenamento de documentos (CNH, fotos de avarias).
- Dashboards administrativos e relatórios exportáveis (CSV/PDF).

---

## Status do Projeto

🚧 **Em desenvolvimento**  
Este repositório atualmente contém apenas a documentação inicial e a visão do sistema.  
O código-fonte e as primeiras implementações serão adicionados nas próximas etapas.

---

## Como Contribuir

1. Faça um fork do repositório.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b minha-feature
   ```
