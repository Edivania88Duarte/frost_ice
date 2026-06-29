import { links } from '../data';
import { WhatsAppIcon } from './icons';
import IceFall from './IceFall';

const stats = [
  { value: '100%', label: 'Água pura e filtrada' },
  { value: '5 kg', label: 'Embalagem prática' },
  { value: 'Entrega + retirada', label: 'Indústria brasileira' },
];

export default function Hero() {
  return (
    <section
      id="topo"
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #eef2f7 0%, #f6f8fb 100%)',
        overflow: 'hidden',
      }}
    >
      <IceFall />
      <div
        className="fi-hero-grid"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: 1200,
          margin: '0 auto',
          padding: '70px 28px 80px',
          display: 'grid',
          gridTemplateColumns: '1.05fr 0.95fr',
          gap: 48,
          alignItems: 'center',
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: '#fff',
              border: '1px solid #dbe4ef',
              color: '#14325d',
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              padding: '8px 14px',
              borderRadius: 999,
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#1fa855' }} />
            Gelo 100% puro • Suzano e região
          </div>
          <h1
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(38px, 5vw, 62px)',
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
              color: '#0c2143',
              margin: '22px 0 0',
            }}
          >
            Gelo em cubos cristalino, entregue{' '}
            <span style={{ color: '#14325d' }}>firme e gelado</span> no seu balcão.
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: '#44556e',
              maxWidth: 540,
              margin: '22px 0 0',
            }}
          >
            Cubo transparente que derrete devagar e não agua a bebida. Fornecimento sob medida para
            bares, restaurantes, adegas, mercados, eventos e muito mais.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 34 }}>
            <a
              href={links.waPedido}
              target="_blank"
              rel="noopener"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: '#1fa855',
                color: '#fff',
                fontWeight: 600,
                fontSize: 16,
                padding: '16px 26px',
                borderRadius: 999,
                boxShadow: '0 10px 24px rgba(31,168,85,0.3)',
              }}
            >
              <WhatsAppIcon size={19} />
              Pedir pelo WhatsApp
            </a>
            <a
              href="#produtos"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#fff',
                border: '1.5px solid #c9d5e4',
                color: '#14325d',
                fontWeight: 600,
                fontSize: 16,
                padding: '16px 24px',
                borderRadius: 999,
              }}
            >
              Ver produtos
            </a>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 26,
              marginTop: 38,
              paddingTop: 26,
              borderTop: '1px solid #dde5ee',
            }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 800,
                    fontSize: 22,
                    color: '#14325d',
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: 13.5, color: '#6a7a91' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              position: 'absolute',
              width: 380,
              height: 380,
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(20,50,93,0.10) 0%, rgba(20,50,93,0) 70%)',
            }}
          />
          <img
            src="/saco-5kg.jpg"
            alt="Saco de gelo Frost Ice 5kg"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: 420,
              height: 'auto',
              filter: 'drop-shadow(0 30px 50px rgba(12,33,67,0.25))',
              animation: 'frostFloat 6s ease-in-out infinite',
              borderRadius: 14,
            }}
          />
        </div>
      </div>
    </section>
  );
}
