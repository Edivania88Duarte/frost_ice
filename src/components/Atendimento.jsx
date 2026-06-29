import { links, cidades } from '../data';
import { PinIcon } from './icons';

export default function Atendimento() {
  return (
    <section id="atendimento" style={{ background: '#14325d', color: '#fff' }}>
      <div
        className="fi-atendimento-grid"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '84px 28px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 56,
          alignItems: 'center',
        }}
      >
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
            Área de atendimento
          </div>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(30px, 4vw, 44px)',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              margin: '12px 0 0',
            }}
          >
            Suzano e toda a região do Alto Tietê.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: '#c4d0e2', margin: '18px 0 0' }}>
            Estamos no Centro de Suzano. Entregamos nas cidades vizinhas e, em casos especiais,
            atendemos pedidos de maior volume fora da região — é só confirmar no WhatsApp.
          </p>
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
              padding: '15px 24px',
              borderRadius: 999,
              marginTop: 28,
            }}
          >
            Confirmar minha cidade
          </a>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignContent: 'flex-start' }}>
          {cidades.map((cidade) => (
            <span
              key={cidade}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.15)',
                padding: '12px 18px',
                borderRadius: 12,
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              <PinIcon size={15} fill="#1fa855" />
              {cidade}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
