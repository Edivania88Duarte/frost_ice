const passos = [
  {
    num: '01',
    titulo: 'Chame no WhatsApp',
    texto: 'Mande mensagem com o que você precisa. Atendimento rápido e direto.',
  },
  {
    num: '02',
    titulo: 'Confirme volume e endereço',
    texto: 'A gente alinha quantidade, valor e se vai ser entrega ou retirada.',
  },
  {
    num: '03',
    titulo: 'Receba gelado',
    texto: 'Entregamos em Suzano e região, ou você retira direto na nossa unidade.',
  },
];

export default function ComoPedir() {
  return (
    <section id="como-pedir" style={{ background: '#ffffff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '84px 28px' }}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
          <div
            style={{
              fontSize: 13,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#1fa855',
              fontWeight: 600,
            }}
          >
            Como pedir
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
            Do pedido ao gelo no balcão em 3 passos.
          </h2>
          <p style={{ fontSize: 17, color: '#5a6b80', margin: '16px 0 0' }}>
            Entrega na região <strong style={{ color: '#14325d' }}>ou</strong> retirada no local —
            você escolhe.
          </p>
        </div>
        <div
          className="fi-passos-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
            marginTop: 50,
          }}
        >
          {passos.map((p) => (
            <div
              key={p.num}
              style={{
                position: 'relative',
                background: '#f6f8fb',
                border: '1px solid #e7edf4',
                borderRadius: 16,
                padding: '32px 28px',
              }}
            >
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 900,
                  fontSize: 46,
                  color: '#d7e2f0',
                  lineHeight: 1,
                }}
              >
                {p.num}
              </div>
              <h3
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: 20,
                  color: '#0c2143',
                  margin: '10px 0 8px',
                }}
              >
                {p.titulo}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: '#5a6b80', margin: 0 }}>
                {p.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
