# ResumeCraft

ResumeCraft é um criador de currículos interativo inspirado no projeto open-source RxResume. Ele permite que usuários autentiquem-se, criem currículos personalizados em tempo real, armazenem seus dados, utilizem inteligência artificial para otimização de conteúdo e exportem seus currículos em formato PDF. Além disso, oferece funcionalidades premium mediante pagamento via Stripe.

## Funcionalidades

- **Autenticação**: Login e registro de usuários via Google ou Github.
- **Editor de Currículos em Tempo Real**: Ferramenta interativa para criar e personalizar currículos.
- **Armazenamento no Banco de Dados**: Possibilidade de salvar currículos para edição futura.
- **Geração de Conteúdo com IA**: Sugestões e otimização de descrições utilizando inteligência artificial.
- **Funcionalidades Premium**: Recursos avançados acessíveis via pagamento pelo Stripe.
- **Geração de PDF**: Exportação de currículos para PDF mantendo um layout profissional.

## Tecnologias Utilizadas

O ResumeCraft foi desenvolvido utilizando as seguintes tecnologias:

- **Next.js 14** - Framework React para aplicações web modernas.
- **TypeScript** - Superset de JavaScript com tipagem estática.
- **Auth.js (NextAuth)** - Gerenciamento de autenticação.
- **shadcn/ui** - Biblioteca de componentes de interface reutilizáveis.
- **Tailwind CSS** - Framework de CSS utilitário para estilização rápida e responsiva.
- **Drizzle ORM** - Ferramenta para interação com o banco de dados de forma simples e eficiente.
- **Puppeteer** - Biblioteca para automação de navegadores e geração de PDFs.
- **Stripe** - Plataforma de pagamentos para a monetização de recursos premium.
- **TanStack Query** - Gerenciamento de estados assíncronos e sincronização de dados.
- **React Hook Form** - Gerenciamento eficiente de formulários.
- **OpenAI** - Integração com IA para geração de conteúdo.

## Instalação e Execução

1. Clone o repositório:

   ```sh
   git clone https://github.com/seu-usuario/resumecraft.git
   ```

2. Acesse a pasta do projeto:

   ```sh
   cd resumecraft
   ```

3. Instale as dependências:

   ```sh
   npm install
   ```

4. Configure as variáveis de ambiente:

   Crie um arquivo `.env.local` e adicione as credenciais necessárias.

5. Inicie o servidor de desenvolvimento:

   ```sh
   npm run dev
   ```

O projeto estará disponível em `http://localhost:3000`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias.

## Licença

Este projeto é distribuído sob a licença MIT.

