---
title: 'Organização do Projeto com GitHub e Astro'
description: 'Neste artigo explicamos como estruturámos a colaboração no âmbito do Mestrado em Engenharia de Inteligência Artificial no ISEP. Detalhamos as ferramentas escolhidas (GitHub, Astro e GitHub Pages) e mostramos como estas suportam um fluxo de trabalho assíncrono, colaborativo e preparado para crescer com o nosso projeto em Cibersegurança.'
pubDate: 'Sept 20 2025'
---

## Estrutura de Colaboração e Documentação da Equipa: GitHub + Astro

No âmbito do nosso Mestrado em Engenharia de Inteligência Artificial no ISEP, a nossa equipa precisava de uma forma centralizada e fiável de colaborar.
Como cada um de nós tem horários e disponibilidades diferentes, o trabalho assíncrono era essencial. Queríamos uma estrutura que suportasse colaboração em código, documentação e comunicação de uma forma natural para quem desenvolve software.

## Centralização da Colaboração com o GitHub

A primeira decisão foi criar uma **Organização no GitHub**.
Com isso, passámos a ter uma “casa” única para todos os repositórios - desde protótipos e experiências até código mais sólido e documentação.

O que nos levou a esta escolha:

- **Controlo de versões**: o fluxo de *branches* e *pull requests* do GitHub ajuda-nos a gerir alterações de forma segura.
- **Propriedade partilhada**: todos os membros da equipa são *owners* da organização, o que evita bloqueios caso alguém esteja indisponível.
- **Transparência e accountability**: através dos *commits* e *pull requests* fica sempre registado quem participou em cada parte do projeto.
- **Escalabilidade futura**: o GitHub também disponibiliza *Projects*, *Issues* e *Discussions*, que poderemos usar mais tarde se quisermos uma coordenação assíncrona mais estruturada.

## Porque Optámos pelo Astro

Para o blog e documentação, acabámos por escolher o **Astro**.
Pareceu-nos a solução mais equilibrada entre simplicidade e flexibilidade:

- **Markdown-first**: escrever em Markdown é rápido e evita preocupações com formatação.
- **Integração com React (e não só)**: quando precisarmos, podemos usar componentes React (ou mesmo Vue, Svelte, Solid). Isto deixa a porta aberta para criarmos *dashboards* ou visualizações interativas relacionadas com o nosso projeto.
- **Experiência prévia**: alguns de nós já tinham usado o Astro noutros contextos, o que facilitou a curva de aprendizagem.
- **Performance**: como gera sites estáticos, garante páginas rápidas e leves.

Resumindo: o Astro deixa-nos focar agora no conteúdo, mas continua a ser flexível para crescer connosco.

## Critérios de Escolha e Boas Práticas

Antes de chegar aqui, ainda olhámos para outras alternativas:

- **Docusaurus**: é ótimo para documentação, mas pareceu-nos demasiado rígido. O Astro dá-nos mais liberdade e, além disso, também integra facilmente React e Vue, o que pode vir a ser útil.
- **WordPress (versão gratuita)**: chegámos a considerar, mas depressa percebemos que não era adequado. A colaboração entre vários autores é limitada e não teríamos a mesma flexibilidade para usar componentes dinâmicos.
- **Vercel**: esteve em cima da mesa, mas pareceu-nos “overkill” para já. O GitHub Pages cobre o essencial e ainda por cima mantém tudo no mesmo ecossistema.

Ao mesmo tempo, definimos algumas boas práticas para manter consistência e qualidade:

- **Branching model**: usamos a *main branch* para produção, com *deployments* automáticos para o GitHub Pages.
- **Pull requests**: até os artigos do blog passam por *pull requests*, o que garante sempre revisão colaborativa antes de publicar.
- **Organização do site**: nesta fase inicial, vamos ter três secções:
  - **Homepage**: uma breve introdução à equipa e ao nosso tema (Cibersegurança).
  - **Blog**: onde vamos publicando artigos, começando já com a primeira *deadline*.
  - **About**: página com alguns dados sobre os membros da equipa.

## Segurança e Controlo de Acessos

Além de simplificar o *deploy*, o GitHub dá-nos mecanismos de **segurança “out of the box”** que evitam construir (e manter) um *backoffice* apenas para gerir acesso ao blog. Todo o conteúdo vive em repositórios com **permissões granulares**, auditáveis via *commits* e *pull requests*.

Para reforçar ainda mais a segurança, configurámos **branch protection rules** na `main`:

- Alterações só entram através de *pull requests*, nunca via *push* direto.
- São necessárias **duas aprovações** antes de qualquer merge, incluindo revisões obrigatórias de *Code Owners*.
- Aprovações antigas deixam de ser válidas se forem feitos novos *commits*.
- O merge só é possível após **status checks obrigatórios** (lint e build).
- Todas as conversas de revisão têm de estar resolvidas.
- Apenas *maintainers* podem dar *push*, e mesmo assim apenas se os *checks* passarem.
- Nem administradores podem contornar estas regras.

Esta configuração aproxima-nos de boas práticas de **DevSecOps**, assegurando **integridade, rastreabilidade e accountability** em todas as contribuições.

## Alojamento no GitHub Pages

Para simplificar, decidimos alojar tudo no **GitHub Pages**.
É gratuito, fiável e encaixa diretamente no nosso fluxo de trabalho:

- Está no mesmo ecossistema que o código.
- Os *deploys* são automáticos a partir da branch `main`.
- Não precisamos de gerir infraestrutura extra enquanto nos focamos no trabalho académico.

## Próximos Passos

A configuração atual já cobre o essencial: código centralizado, documentação e blog.
Ainda assim, deixámos espaço para evoluir:

- Criar **dashboards interativos** dentro do site, relacionados com o nosso projeto.
- Gerar **diagramas diretamente em Markdown** usando ferramentas como [Mermaid](https://github.com/remcohaszing/rehype-mermaid), o que nos permite manter diagramas versionados como código.
- Usar **Projects, Issues e Discussions** para gestão de tarefas e planeamento.

## Conclusão

A opção por uma Organização no GitHub para o código e **Astro + GitHub Pages** para a documentação dá-nos um **fluxo de trabalho leve e adaptado ao trabalho assíncrono**.
É uma solução simples, mas que responde às nossas necessidades atuais e que tem margem para crescer à medida que o projeto evoluir.
