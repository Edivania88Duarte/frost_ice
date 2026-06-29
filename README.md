# Frost Ice — Landing Page (React + Vite)

Landing page da **Frost Ice**, fornecedora de gelo em cubos 100% puro em Suzano e região do Alto Tietê. Esta versão foi reconstruída em React a partir do HTML original (preservado em `original-bundle.html`).

## Stack

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- Fontes Google: Montserrat + Work Sans

## Como rodar

```bash
npm install      # instala as dependências
npm run dev      # servidor de desenvolvimento (http://localhost:5173)
npm run build    # gera a build de produção em dist/
npm run preview  # pré-visualiza a build de produção
```

## Estrutura

```
src/
  main.jsx              # ponto de entrada do React
  App.jsx               # monta todas as seções
  index.css             # estilos globais, animações e responsividade
  data.js               # textos, sabores, cidades, FAQ e links do WhatsApp
  components/
    Nav.jsx             # cabeçalho fixo
    Hero.jsx            # seção principal
    Segmentos.jsx       # marquee de segmentos
    Diferenciais.jsx    # cards de diferenciais
    Produtos.jsx        # produtos (5kg, eventos, atacado)
    Saborizado.jsx      # linha de gelo saborizado
    ComoPedir.jsx       # passo a passo do pedido
    Atendimento.jsx     # área de atendimento / cidades
    FAQ.jsx             # acordeão de dúvidas frequentes
    Contato.jsx         # contato + mapa
    Footer.jsx          # rodapé
    FloatingWhats.jsx   # botão flutuante do WhatsApp
    icons.jsx           # ícones SVG reutilizáveis
public/
  saco-5kg.jpg            # imagem do saco de gelo 5kg
  saborizado.jpg          # imagem da linha saborizada (alta resolução)
  isotipo_frost_ice.svg   # isótipo usado como favicon
```

## Personalização

Quase todo o conteúdo editável está em `src/data.js`:

- `config.numeroWhatsApp` — número usado em todos os links/CTAs do WhatsApp
- `config.telefoneExibicao`, `config.endereco`, `config.horario`, `config.mapaSrc`
- `config.instagramUrl` e `config.mostrarBotaoFlutuante`
- listas `segmentos`, `cidades`, `sabores` e `faqs`
