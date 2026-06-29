export function WhatsAppIcon({ size = 19, fill = '#fff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.2 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 .9-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6c-.2.2-.4.4-.2.7.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.2.1.4.1.6-.1l.7-.9c.2-.3.4-.2.7-.1l2 1c.3.1.4.2.5.3.1.2.1.7-.1 1.3Z" />
    </svg>
  );
}

export function PinIcon({ size = 15, fill = '#1fa855' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}>
      <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
    </svg>
  );
}

export function PureIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      stroke="#14325d"
      strokeWidth="1.8"
      fill="none"
      strokeLinecap="round"
    >
      <line x1="12" y1="3" x2="12" y2="21" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="5.6" y1="5.6" x2="18.4" y2="18.4" />
      <line x1="18.4" y1="5.6" x2="5.6" y2="18.4" />
    </svg>
  );
}

export function CubeIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      stroke="#14325d"
      strokeWidth="1.8"
      fill="none"
      strokeLinejoin="round"
    >
      <rect x="5" y="5" width="14" height="14" rx="3" />
      <path d="M9 9l6 6M15 9l-6 6" />
    </svg>
  );
}

export function TruckIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      stroke="#14325d"
      strokeWidth="1.8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7h11v8H3z" />
      <path d="M14 10h4l3 3v2h-7z" />
      <circle cx="7" cy="17.5" r="1.8" />
      <circle cx="17.5" cy="17.5" r="1.8" />
    </svg>
  );
}

export function BarsIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      stroke="#14325d"
      strokeWidth="1.8"
      fill="none"
      strokeLinecap="round"
    >
      <line x1="5" y1="20" x2="5" y2="13" />
      <line x1="12" y1="20" x2="12" y2="8" />
      <line x1="19" y1="20" x2="19" y2="4" />
    </svg>
  );
}

export function GlassIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      stroke="#14325d"
      strokeWidth="1.8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 21h8M12 17v4M5 4h14l-1 6a6 6 0 0 1-12 0Z" />
    </svg>
  );
}

export function BoxIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      stroke="#14325d"
      strokeWidth="1.8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-5 9 5-9 5-9-5Z" />
      <path d="M3 9v6l9 5 9-5V9" />
    </svg>
  );
}

export function ClockIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      stroke="#14325d"
      strokeWidth="1.8"
      fill="none"
      style={{ flexShrink: 0, marginTop: 2 }}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" />
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" stroke="#dce5f2" strokeWidth="1.8" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="#dce5f2" stroke="none" />
    </svg>
  );
}
