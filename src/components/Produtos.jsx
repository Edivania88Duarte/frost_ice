import { links } from '../data';
import { GlassIcon, BoxIcon } from './icons';

export default function Produtos() {
  return (
    <section id="produtos" style={{ background: '#f4f6f9' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '84px 28px' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 20,
          }}
        >
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
              Produtos
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
              Gelo em cubos para o seu negócio.
            </h2>
          </div>
          <a
            href={links.waOrcamento}
            target="_blank"
            rel="noopener"
            style={{
              fontWeight: 600,
              color: '#14325d',
              borderBottom: '2px solid #1fa855',
              paddingBottom: 3,
            }}
          >
            Pedir orçamento →
          </a>
        </div>

        <div
          className="fi-produtos-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 1fr 1fr',
            gap: 22,
            marginTop: 46,
            alignItems: 'stretch',
          }}
        >
          {/* Card destaque 5kg */}
          <div
            style={{
              background: '#14325d',
              borderRadius: 18,
              padding: 30,
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignSelf: 'flex-start',
                alignItems: 'center',
                gap: 7,
                background: 'rgba(255,255,255,0.12)',
                padding: '6px 12px',
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Mais pedido
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 20 }}>
              <img
                src="/saco-5kg.jpg"
                alt="Saco Frost Ice 5kg"
                style={{
                  width: 96,
                  height: 'auto',
                  borderRadius: 10,
                  boxShadow: '0 12px 24px rgba(0,0,0,0.3)',
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 900,
                    fontSize: 40,
                    lineHeight: 1,
                  }}
                >
                  5kg
                </div>
                <div style={{ fontSize: 14, color: '#aebfd6' }}>peso líquido</div>
              </div>
            </div>
            <h3
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: 21,
                margin: '22px 0 8px',
              }}
            >
              Saco 5kg — cubos para drinks
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: '#c4d0e2', margin: '0 0 22px' }}>
              Embalagem prática com alça. Cubo transparente, ideal para drinks, refrigerantes e
              bebidas em geral.
            </p>
            <a
              href={links.waPedido}
              target="_blank"
              rel="noopener"
              style={{
                marginTop: 'auto',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 9,
                background: '#1fa855',
                color: '#fff',
                fontWeight: 600,
                padding: 14,
                borderRadius: 999,
              }}
            >
              Pedir agora
            </a>
          </div>

          {/* Eventos */}
          <ProdutoCard
            Icon={GlassIcon}
            titulo="Volume para eventos"
            texto="Festas, shows e confraternizações. Grandes quantidades com logística combinada antecipadamente."
            cta="Combinar volume"
            href={links.waOrcamento}
          />

          {/* Atacado */}
          <ProdutoCard
            Icon={BoxIcon}
            titulo="Atacado e revenda"
            texto="Fornecimento recorrente para mercados, adegas, postos e conveniências com preço de atacado."
            cta="Falar com atacado"
            href={links.waOrcamento}
          />
        </div>
      </div>
    </section>
  );
}

function ProdutoCard({ Icon, titulo, texto, cta, href }) {
  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid #e3e9f1',
        borderRadius: 18,
        padding: 30,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 13,
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
          fontSize: 20,
          color: '#0c2143',
          margin: '18px 0 8px',
        }}
      >
        {titulo}
      </h3>
      <p style={{ fontSize: 15, lineHeight: 1.55, color: '#5a6b80', margin: '0 0 22px' }}>{texto}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener"
        style={{
          marginTop: 'auto',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 9,
          border: '1.5px solid #c9d5e4',
          color: '#14325d',
          fontWeight: 600,
          padding: 14,
          borderRadius: 999,
        }}
      >
        {cta}
      </a>
    </div>
  );
}
