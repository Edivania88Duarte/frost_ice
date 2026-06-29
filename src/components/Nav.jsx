import { links } from '../data';
import { WhatsAppIcon } from './icons';

const navLinks = [
  { href: '#produtos', label: 'Produtos' },
  { href: '#saborizado', label: 'Sabores' },
  { href: '#como-pedir', label: 'Como pedir' },
  { href: '#atendimento', label: 'Atendimento' },
  { href: '#faq', label: 'FAQ' },
];

export default function Nav() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #e4e8ee',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '10px 28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
        }}
      >
        <a
          href="#topo"
          aria-label="Frost Ice — página inicial"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <img
            src="/frost-ice-logo.png"
            alt="Frost Ice — Gelo em cubos para drinks"
            width="1536"
            height="1024"
            style={{ height: 56, width: 'auto', display: 'block' }}
          />
        </a>
        <nav
          className="fi-nav-links"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 30,
            fontSize: 14.5,
            fontWeight: 500,
            color: '#44556e',
          }}
        >
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={links.waPedido}
          target="_blank"
          rel="noopener"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 9,
            background: '#1fa855',
            color: '#fff',
            fontWeight: 600,
            fontSize: 14.5,
            padding: '11px 18px',
            borderRadius: 999,
            boxShadow: '0 6px 16px rgba(31,168,85,0.28)',
          }}
        >
          <WhatsAppIcon size={17} />
          Pedir agora
        </a>
      </div>
    </header>
  );
}
