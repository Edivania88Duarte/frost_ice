import { useState } from 'react';
import { faqs } from '../data';

export default function FAQ() {
  const [open, setOpen] = useState({});

  const toggle = (i) => setOpen((s) => ({ ...s, [i]: !s[i] }));

  return (
    <section id="faq" style={{ background: '#ffffff' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '84px 28px' }}>
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              fontSize: 13,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#1fa855',
              fontWeight: 600,
            }}
          >
            Dúvidas frequentes
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
            Perguntas frequentes
          </h2>
        </div>
        <div style={{ marginTop: 42, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((item, i) => {
            const isOpen = !!open[i];
            return (
              <div
                key={item.q}
                style={{
                  border: '1px solid #e3e9f1',
                  borderRadius: 14,
                  background: '#fafbfd',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 16,
                    padding: '20px 22px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span style={{ fontWeight: 600, fontSize: 16.5, color: '#0c2143' }}>
                    {item.q}
                  </span>
                  <span
                    style={{
                      flexShrink: 0,
                      width: 26,
                      height: 26,
                      borderRadius: '50%',
                      background: '#14325d',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 18,
                      fontWeight: 700,
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform .2s',
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? 260 : 0,
                    overflow: 'hidden',
                    transition: 'max-height .28s ease',
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      padding: '0 22px 22px',
                      fontSize: 15.5,
                      lineHeight: 1.6,
                      color: '#5a6b80',
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
