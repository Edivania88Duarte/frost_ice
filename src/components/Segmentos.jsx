import { segmentos } from '../data';

const chipStyle = {
  flexShrink: 0,
  whiteSpace: 'nowrap',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  background: 'rgba(255,255,255,0.07)',
  border: '1px solid rgba(255,255,255,0.16)',
  padding: '10px 16px',
  borderRadius: 999,
  fontSize: 14.5,
  fontWeight: 500,
  color: '#e8eef6',
};

export default function Segmentos() {
  return (
    <section style={{ background: '#14325d', color: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 28 }}>
        <div
          style={{
            textAlign: 'center',
            fontSize: 13,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#8fa6c6',
            fontWeight: 600,
          }}
        >
          Feito para quem trabalha com gelo todos os dias
        </div>
        <div
          style={{
            marginTop: 18,
            overflow: 'hidden',
            WebkitMaskImage:
              'linear-gradient(90deg, transparent 0, #000 7%, #000 93%, transparent 100%)',
            maskImage:
              'linear-gradient(90deg, transparent 0, #000 7%, #000 93%, transparent 100%)',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: 'max-content',
              gap: 12,
              animation: 'marqueeScroll 26s linear infinite',
            }}
          >
            {segmentos.map((seg) => (
              <span key={`a-${seg}`} style={chipStyle}>
                {seg}
              </span>
            ))}
            {segmentos.map((seg) => (
              <span key={`b-${seg}`} aria-hidden="true" style={chipStyle}>
                {seg}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
