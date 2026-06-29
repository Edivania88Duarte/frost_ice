import { links } from '../data';
import { WhatsAppIcon } from './icons';

export default function FloatingWhats() {
  return (
    <a
      href={links.waPedido}
      target="_blank"
      rel="noopener"
      title="Pedir pelo WhatsApp"
      style={{
        position: 'fixed',
        right: 22,
        bottom: 22,
        zIndex: 60,
        width: 60,
        height: 60,
        borderRadius: '50%',
        background: '#1fa855',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 10px 26px rgba(31,168,85,0.45)',
      }}
    >
      <WhatsAppIcon size={30} />
    </a>
  );
}
