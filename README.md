# Equipa 10 - Website da Equipa

Website oficial da **Equipa 10** do Mestrado em Engenharia de Inteligência Artificial (MEIA) no Instituto Superior de Engenharia do Porto (ISEP).

## 🎯 Sobre a Equipa 10

Somos uma equipa de estudantes do **Mestrado em Engenharia de Inteligência Artificial no ISEP**, identificados como **Equipa 10**. A nossa área de aplicação (vertical) é **Cibersegurança**.

### Propósito do Website

Este website serve como:

- **Hub central** da nossa equipa e projetos
- **Portfólio** do nosso trabalho académico na área de Cibersegurança
- **Plataforma de documentação** das nossas metodologias e ferramentas
- **Espaço de colaboração** assíncrona entre membros da equipa
- **Registo público** do nosso progresso no mestrado

## 🏫 Contexto Académico

- **Instituição**: Instituto Superior de Engenharia do Porto (ISEP)
- **Curso**: Mestrado em Engenharia de Inteligência Artificial (MEIA)
- **Equipa**: Equipa 10
- **Vertical**: Cibersegurança
- **Ano**: 2025/2026

## 🛠️ Stack Tecnológica

- **Astro**: Framework para sites estáticos com suporte a Markdown
- **GitHub**: Controlo de versões e colaboração
- **GitHub Pages**: Alojamento gratuito e automático
- **Markdown**: Escrita de conteúdo de forma simples e eficiente

## ✨ Características

- ✅ Colaboração assíncrona através de Pull Requests
- ✅ Deploy automático via GitHub Pages
- ✅ Performance otimizada
- ✅ SEO-friendly com URLs canónicas e dados OpenGraph
- ✅ Suporte a Sitemap e RSS Feed
- ✅ Suporte completo a Markdown & MDX
- ✅ Branch protection rules para segurança

## 🚀 Estrutura do Projeto

```text
├── public/                 # Assets estáticos (imagens, favicon, etc.)
├── src/
│   ├── components/         # Componentes Astro reutilizáveis
│   ├── content/
│   │   └── blog/          # Posts do blog em Markdown
│   ├── layouts/           # Layouts para diferentes tipos de páginas
│   ├── pages/             # Páginas do site (Home, About, Blog)
│   └── styles/            # Estilos globais
├── astro.config.mjs       # Configuração do Astro
├── package.json           # Dependências e scripts
└── tsconfig.json          # Configuração TypeScript
```

## 📝 Fluxo de Trabalho

### Colaboração

- Todos os membros da equipa são *owners* da organização GitHub
- Trabalho assíncrono através de branches e pull requests
- Revisão obrigatória antes de merge (2 aprovações necessárias)
- Branch protection rules ativas na `main`

### Estrutura do Website

- **Homepage**: Apresentação da Equipa 10 e área de Cibersegurança
- **Blog**: Artigos sobre o nosso progresso e metodologias
- **About**: Informações detalhadas sobre os membros da equipa

### Deploy

- Deploy automático via GitHub Pages
- Branch `main` é automaticamente publicada
- Status checks obrigatórios (lint e build) antes do merge

## 🧞 Comandos

Todos os comandos são executados a partir da raiz do projeto:

| Comando                   | Ação                                            |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala as dependências                         |
| `npm run dev`             | Inicia o servidor de desenvolvimento local      |
| `npm run build`           | Constrói o site para produção                   |
| `npm run preview`         | Pré-visualiza o build localmente                |
| `npm run astro ...`       | Executa comandos CLI do Astro                   |

## 🔒 Segurança e Boas Práticas

- **Branch Protection**: Apenas merges via pull requests
- **Code Review**: 2 aprovações obrigatórias
- **Status Checks**: Lint e build devem passar
- **Auditoria**: Todos os commits são rastreáveis
- **Integridade**: Aprovações antigas invalidam-se com novos commits

## 📚 Recursos

- [Documentação do Astro](https://docs.astro.build)
- [GitHub Pages](https://pages.github.com)
- [Markdown Guide](https://www.markdownguide.org)

## 👥 Equipa 10

Este website é desenvolvido e mantido pela **Equipa 10** do Mestrado em Engenharia de Inteligência Artificial no ISEP. 

**Área de Aplicação**: Cibersegurança  
**Instituição**: Instituto Superior de Engenharia do Porto (ISEP)  
**Ano Académico**: 2024/2025

Para mais informações sobre os membros da equipa, consulte a página [About](/about/).
