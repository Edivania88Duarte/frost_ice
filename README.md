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

## SEO (indexação no Google)

O SEO já está configurado: meta tags, Open Graph/Twitter (preview no WhatsApp), dados
estruturados de negócio local (JSON-LD `Store`), `robots.txt` e `sitemap.xml`.

### Único ajuste obrigatório: o domínio

Antes de publicar no domínio definitivo, troque todas as ocorrências de
`https://www.frostice.com.br` pelo seu domínio real (sem barra no final) nestes arquivos:

- `index.html` (canonical, Open Graph, Twitter e o bloco JSON-LD)
- `public/robots.txt`
- `public/sitemap.xml`

Em preview da Vercel dá para deixar o placeholder; o site indexa, só os previews de
compartilhamento e a URL canônica que ficam apontando para o domínio final.

### Depois de publicar

1. Acesse o [Google Search Console](https://search.google.com/search-console) e adicione a
   propriedade do seu domínio.
2. Envie o sitemap: `https://seu-dominio/sitemap.xml`.
3. Use "Inspeção de URL" → "Solicitar indexação" para a página inicial.
4. (Opcional) Valide os dados estruturados no
   [Teste de Resultados Aprimorados](https://search.google.com/test/rich-results).

### Imagem de compartilhamento (og:image)

Hoje o preview usa `/saco-5kg.jpg`. Se quiser um card mais bonito no WhatsApp/Facebook,
crie uma imagem 1200×630 px, coloque em `public/` e atualize as tags `og:image` e
`twitter:image` no `index.html`.
