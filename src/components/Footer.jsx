import { config, links } from '../data';
import { InstagramIcon } from './icons';

const navLinks = [
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#como-pedir', label: 'Como pedir' },
  { href: '#atendimento', label: 'Área de atendimento' },
  { href: '#faq', label: 'Dúvidas frequentes' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#0c2143', color: '#fff' }}>
      <div
        className="fi-footer-grid"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '60px 28px 30px',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr',
          gap: 40,
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span
              style={{
                width: 40,
                height: 40,
                borderRadius: 9,
                background: '#fff',
                color: '#14325d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: 20,
              }}
            >
              F
            </span>
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 800,
                fontSize: 19,
                letterSpacing: '0.04em',
              }}
            >
              FROST<span style={{ color: '#8fa6c6' }}> ICE</span>
            </span>
          </div>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.6,
              color: '#9fb1cc',
              maxWidth: 320,
              margin: '18px 0 0',
            }}
          >
            Gelo em cubos 100% puro para drinks e bebidas. Qualidade que você confia. Indústria
            brasileira.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 22 }}>
            <a
              href={config.instagramUrl}
              target="_blank"
              rel="noopener"
              title="Instagram (em breve)"
              style={{
                width: 42,
                height: 42,
                borderRadius: 11,
                background: 'rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
        <div>
          <div
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: '0.04em',
              marginBottom: 16,
            }}
          >
            Navegação
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 11,
              fontSize: 14.5,
              color: '#9fb1cc',
            }}
          >
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: '0.04em',
              marginBottom: 16,
            }}
          >
            Contato
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 11,
              fontSize: 14.5,
              color: '#9fb1cc',
              lineHeight: 1.5,
            }}
          >
            <span>
              {config.endereco.linha1}
              <br />
              {config.endereco.linha2}
            </span>
            <a
              href={links.waPedido}
              target="_blank"
              rel="noopener"
              style={{ color: '#fff', fontWeight: 600 }}
            >
              {config.telefoneExibicao}
            </a>
            <span>
              Seg a sex — das 09h às 18h
              <br />
              Sábados — das 09h às 13h
            </span>
            <a
              href={config.comoChegar}
              target="_blank"
              rel="noopener"
              style={{
                alignSelf: 'flex-start',
                marginTop: 2,
                fontSize: 14,
                fontWeight: 600,
                color: '#fff',
                borderBottom: '2px solid #1fa855',
                paddingBottom: 2,
              }}
            >
              Como chegar →
            </a>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '20px 28px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10,
            justifyContent: 'space-between',
            fontSize: 13,
            color: '#7e90ab',
          }}
        >
          <span>© 2026 Frost Ice. Todos os direitos reservados.</span>
          <span>Gelo 100% puro • Indústria brasileira</span>
        </div>
      </div>
    </footer>
  );
}
