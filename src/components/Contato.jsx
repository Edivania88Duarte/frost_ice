import { config, links } from '../data';
import { PinIcon, WhatsAppIcon, ClockIcon } from './icons';

export default function Contato() {
  return (
    <section id="contato" style={{ background: '#f4f6f9' }}>
      <div
        className="fi-contato-grid"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '84px 28px',
          display: 'grid',
          gridTemplateColumns: '1fr 1.15fr',
          gap: 40,
          alignItems: 'stretch',
        }}
      >
        <div
          style={{
            background: '#fff',
            border: '1px solid #e3e9f1',
            borderRadius: 18,
            padding: 40,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              fontSize: 13,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#1fa855',
              fontWeight: 600,
            }}
          >
            Onde estamos
          </div>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px, 3.4vw, 38px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#0c2143',
              margin: '12px 0 26px',
            }}
          >
            Fale com a Frost Ice
          </h2>

          <div
            style={{
              display: 'flex',
              gap: 14,
              alignItems: 'flex-start',
              padding: '16px 0',
              borderTop: '1px solid #eef1f6',
            }}
          >
            <PinIcon size={22} fill="#14325d" />
            <div>
              <div style={{ fontWeight: 600, color: '#0c2143', fontSize: 15.5 }}>Endereço</div>
              <div style={{ fontSize: 15, color: '#5a6b80', lineHeight: 1.5 }}>
                {config.endereco.linha1}
                <br />
                {config.endereco.linha2}
              </div>
            </div>
          </div>

          <a
            href={links.waPedido}
            target="_blank"
            rel="noopener"
            style={{
              display: 'flex',
              gap: 14,
              alignItems: 'flex-start',
              padding: '16px 0',
              borderTop: '1px solid #eef1f6',
            }}
          >
            <WhatsAppIcon size={22} fill="#1fa855" />
            <div>
              <div style={{ fontWeight: 600, color: '#0c2143', fontSize: 15.5 }}>
                WhatsApp / Telefone
              </div>
              <div style={{ fontSize: 15, color: '#5a6b80' }}>{config.telefoneExibicao}</div>
            </div>
          </a>

          <div
            style={{
              display: 'flex',
              gap: 14,
              alignItems: 'flex-start',
              padding: '16px 0',
              borderTop: '1px solid #eef1f6',
            }}
          >
            <ClockIcon />
            <div>
              <div style={{ fontWeight: 600, color: '#0c2143', fontSize: 15.5 }}>
                Horário de funcionamento
              </div>
              <div style={{ fontSize: 15, color: '#5a6b80', lineHeight: 1.5 }}>
                {config.horario.semana}
                <br />
                {config.horario.sabado}
              </div>
            </div>
          </div>

          <a
            href={links.waPedido}
            target="_blank"
            rel="noopener"
            style={{
              marginTop: 24,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              background: '#1fa855',
              color: '#fff',
              fontWeight: 600,
              fontSize: 16,
              padding: 15,
              borderRadius: 999,
            }}
          >
            <WhatsAppIcon size={19} />
            Chamar no WhatsApp
          </a>
        </div>
        <div
          style={{
            borderRadius: 18,
            overflow: 'hidden',
            border: '1px solid #e3e9f1',
            minHeight: 440,
          }}
        >
          <iframe
            title="Mapa Frost Ice"
            src={config.mapaSrc}
            style={{ width: '100%', height: '100%', minHeight: 440, border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
