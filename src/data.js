export const config = {
  numeroWhatsApp: '5511939447590',
  telefoneExibicao: '(11) 93944-7590',
  instagramUrl: '#contato',
  mostrarBotaoFlutuante: true,
  endereco: {
    linha1: 'Travessa Guaio, 246 — Centro',
    linha2: 'Suzano / SP — CEP 08674-150',
  },
  horario: {
    semana: 'Segunda a sexta — 09h00 às 18h00',
    sabado: 'Sábado — 09h00 às 13h00',
  },
  mapaSrc:
    'https://maps.google.com/maps?q=Travessa%20Guaio%2C%20246%2C%20Suzano%2C%20Centro%2C%20SP%2C%2008674-150&t=&z=15&ie=UTF8&iwloc=&output=embed',
  comoChegar:
    'https://www.google.com/maps/dir/?api=1&destination=' +
    encodeURIComponent('Travessa Guaio, 246, Suzano, Centro, SP, 08674-150'),
};

const num = config.numeroWhatsApp.replace(/\D/g, '');
const wa = (texto) => `https://wa.me/${num}?text=${encodeURIComponent(texto)}`;

export const links = {
  waPedido: wa('Olá! Vim pelo site da Frost Ice e gostaria de fazer um pedido de gelo.'),
  waOrcamento: wa('Olá! Vim pelo site da Frost Ice e gostaria de um orçamento de gelo.'),
  waSabores: wa(
    'Olá! Vim pelo site da Frost Ice e quero a linha de gelo saborizado para a minha adega/bar.'
  ),
};

export const segmentos = [
  'Bares & restaurantes',
  'Adegas',
  'Casas de show',
  'Postos de gasolina',
  'Mercados & conveniências',
  'Eventos & festas',
];

export const cidades = [
  'Suzano',
  'Mogi das Cruzes',
  'Poá',
  'Ferraz de Vasconcelos',
  'Itaquaquecetuba',
  'Arujá',
  'Guararema',
  'Biritiba Mirim',
];

export const sabores = [
  { nome: 'Morango', cor: '#e0322f' },
  { nome: 'Limão', cor: '#e3b81f' },
  { nome: 'Maracujá', cor: '#f0a81e' },
  { nome: 'Frutas Vermelhas', cor: '#bb1e57' },
  { nome: 'Abacaxi com Hortelã', cor: '#5fa83c' },
  { nome: 'Energy', cor: '#f0651e' },
];

export const faqs = [
  {
    q: 'Vocês entregam? Em quais cidades?',
    a: 'Sim. Entregamos em Suzano e em toda a região do Alto Tietê. Pedidos maiores podem ser atendidos fora da região — confirme sua localidade no WhatsApp.',
  },
  {
    q: 'Tem pedido mínimo?',
    a: 'O pedido mínimo varia conforme a cidade e o tipo de cliente (varejo, evento ou atacado). Fale com a gente no WhatsApp que combinamos a melhor condição.',
  },
  {
    q: 'Posso retirar no local?',
    a: 'Pode! Você retira direto na nossa unidade na Travessa Guaio, 246 — Centro, Suzano, dentro do horário de funcionamento.',
  },
  {
    q: 'Qual o prazo de entrega?',
    a: 'Trabalhamos para entregar no menor prazo possível. Ao fechar o pedido pelo WhatsApp, confirmamos o horário de entrega de acordo com a sua região.',
  },
  {
    q: 'O gelo é próprio para consumo?',
    a: 'Sim. Nosso gelo é produzido com água filtrada e tratada — 100% puro, transparente e sem impurezas, ideal para drinks e bebidas.',
  },
  {
    q: 'Quais as formas de pagamento?',
    a: 'Aceitamos as principais formas de pagamento (Pix, cartão e dinheiro). As condições são combinadas no momento do pedido pelo WhatsApp.',
  },
];
