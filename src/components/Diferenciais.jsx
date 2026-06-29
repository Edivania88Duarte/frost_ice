import { PureIcon, CubeIcon, TruckIcon, BarsIcon } from './icons';

const itens = [
  {
    Icon: PureIcon,
    titulo: '100% pura',
    texto: 'Água filtrada e tratada. Cubo transparente, sem gosto e sem impurezas.',
  },
  {
    Icon: CubeIcon,
    titulo: 'Cubo que dura',
    texto:
      'Congelamento lento deixa o cubo mais denso: derrete devagar e não agua o drink.',
  },
  {
    Icon: TruckIcon,
    titulo: 'Entrega gelada',
    texto: 'Levamos em Suzano e região com transporte adequado. Seu gelo chega firme.',
  },
  {
    Icon: BarsIcon,
    titulo: 'Volume sob medida',
    texto: 'De um bar de bairro a eventos grandes: acompanhamos o seu consumo.',
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" style={{ background: '#ffffff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '84px 28px' }}>
        <div style={{ maxWidth: 620 }}>
          <div
            style={{
              fontSize: 13,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#1fa855',
              fontWeight: 600,
            }}
          >
            Por que Frost Ice
          </div>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(30px, 4vw, 44px)',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              color: '#0c2143',
              margin: '12px 0 0',
            }}
          >
            Qualidade que você confia, do congelamento à entrega.
          </h2>
        </div>
        <div
          className="fi-diferenciais-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 22,
            marginTop: 46,
          }}
        >
          {itens.map(({ Icon, titulo, texto }) => (
            <div
              key={titulo}
              style={{
                background: '#f6f8fb',
                border: '1px solid #e7edf4',
                borderRadius: 16,
                padding: 28,
              }}
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 12,
                  background: '#eaf1fb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon />
              </div>
              <h3
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: 19,
                  color: '#0c2143',
                  margin: '18px 0 8px',
                }}
              >
                {titulo}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: '#5a6b80', margin: 0 }}>
                {texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
