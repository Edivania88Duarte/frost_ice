import { links, sabores } from '../data';
import { WhatsAppIcon } from './icons';

export default function Saborizado() {
  return (
    <section id="saborizado" style={{ background: '#ffffff', borderTop: '1px solid #eef1f6' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '84px 28px' }}>
        <div
          className="fi-saborizado-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 0.95fr',
            gap: 52,
            alignItems: 'center',
          }}
        >
          <div
            style={{
              position: 'relative',
              background: 'linear-gradient(180deg,#f6f8fb 0%, #eef2f7 100%)',
              border: '1px solid #e7edf4',
              borderRadius: 20,
              padding: 26,
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: 20,
                left: 20,
                zIndex: 2,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                background: '#14325d',
                color: '#fff',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '7px 13px',
                borderRadius: 999,
              }}
            >
              Novidade
            </span>
            <img
              src="/saborizado.jpg"
              alt="Linha de gelo saborizado Frost Ice com 6 sabores de 190g"
              width="1280"
              height="853"
              loading="lazy"
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 12 }}
            />
          </div>
          <div>
            <div
              style={{
                fontSize: 13,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#1fa855',
                fontWeight: 600,
              }}
            >
              Linha saborizada · para adegas e bares
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
              Gelo saborizado pronto pra virar drink.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: '#44556e', margin: '18px 0 0' }}>
              Sachês de <strong style={{ color: '#14325d' }}>190g</strong> em 6 sabores de fruta. É
              só bater ou misturar: caipirinha, drink e refresco com sabor de verdade — na hora, sem
              perder tempo no balcão.
            </p>

            <div
              className="fi-sabores-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 12,
                marginTop: 28,
              }}
            >
              {sabores.map((s) => (
                <div
                  key={s.nome}
                  style={{
                    background: '#fff',
                    border: '1px solid #e7edf4',
                    borderRadius: 13,
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ height: 6, background: s.cor }} />
                  <div
                    style={{
                      padding: '14px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                    }}
                  >
                    <span
                      style={{
                        width: 14,
                        height: 14,
                        borderRadius: '50%',
                        background: s.cor,
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <div
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 700,
                          fontSize: 15.5,
                          color: '#0c2143',
                        }}
                      >
                        {s.nome}
                      </div>
                      <div style={{ fontSize: 12.5, color: '#8090a4' }}>190g · gelo saborizado</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={links.waSabores}
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
                padding: '15px 26px',
                borderRadius: 999,
                marginTop: 28,
                boxShadow: '0 10px 24px rgba(31,168,85,0.28)',
              }}
            >
              <WhatsAppIcon size={19} />
              Quero na minha adega / bar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
