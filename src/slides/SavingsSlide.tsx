import { SlideDefinition } from '../types/slides';

// Price styling (green) - money highlight
function Price({ children }: { children: string }) {
  return (
    <span
      style={{
        color: 'var(--terminal-green)',
        fontWeight: 700,
        textShadow: '0 0 8px var(--terminal-green-glow)',
        letterSpacing: '0.02em',
      }}
    >
      {children}
    </span>
  );
}

// Inline code styling (cyan) - for tool names
function Tool({ children }: { children: string }) {
  return (
    <code
      style={{
        background: 'rgba(118, 228, 247, 0.1)',
        padding: '0.1rem 0.4rem',
        borderRadius: '4px',
        color: 'var(--terminal-cyan)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.95em',
        fontWeight: 600,
        border: '1px solid rgba(118, 228, 247, 0.3)',
        textShadow: '0 0 8px var(--terminal-cyan-glow)',
      }}
    >
      {children}
    </code>
  );
}

// External link styling
function Link({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: 'var(--terminal-blue)',
        textDecoration: 'none',
        borderBottom: '1px dashed var(--terminal-blue)',
        transition: 'all 0.15s ease',
        textShadow: '0 0 8px var(--terminal-blue-glow)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = 'var(--terminal-cyan)';
        e.currentTarget.style.borderBottomColor = 'var(--terminal-cyan)';
        e.currentTarget.style.textShadow = '0 0 12px var(--terminal-cyan-glow)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'var(--terminal-blue)';
        e.currentTarget.style.borderBottomColor = 'var(--terminal-blue)';
        e.currentTarget.style.textShadow = '0 0 8px var(--terminal-blue-glow)';
      }}
    >
      {children}
    </a>
  );
}

// Dimmed parenthetical text
function Dim({ children }: { children: string }) {
  return (
    <span style={{ color: 'var(--terminal-white-muted)', fontSize: '0.9em' }}>
      ({children})
    </span>
  );
}

// Section header with colored prefix
function SectionHeader({
  children,
  color,
  delay,
}: {
  children: string;
  color: 'green' | 'purple' | 'blue';
  delay: number;
}) {
  const colors = {
    green: {
      main: 'var(--terminal-green)',
      glow: 'var(--terminal-green-glow)',
    },
    purple: {
      main: 'var(--terminal-purple)',
      glow: 'var(--terminal-purple-glow)',
    },
    blue: {
      main: 'var(--terminal-blue)',
      glow: 'var(--terminal-blue-glow)',
    },
  };

  return (
    <div
      style={{
        fontSize: '0.85rem',
        fontWeight: 700,
        color: colors[color].main,
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        marginTop: '1rem',
        marginBottom: '0.5rem',
        textShadow: `0 0 10px ${colors[color].glow}`,
        opacity: 0,
        animation: 'savingsItemFadeIn 0.35s ease-out forwards',
        animationDelay: `${delay}s`,
      }}
    >
      {'// '}
      {children}
    </div>
  );
}

// List item with > prefix and staggered animation
function SavingsItem({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.2rem 1fr',
        alignItems: 'start',
        gap: '0.5rem',
        fontSize: '1.05rem',
        marginBottom: '0.7rem',
        lineHeight: 1.5,
        opacity: 0,
        animation: 'savingsItemFadeIn 0.35s ease-out forwards',
        animationDelay: `${delay}s`,
      }}
    >
      <span
        style={{
          color: 'var(--terminal-orange)',
          fontWeight: 'bold',
          textShadow: '0 0 10px var(--terminal-orange-glow)',
          marginTop: '0.05rem',
        }}
      >
        &gt;
      </span>
      <span style={{ color: 'var(--terminal-white)' }}>{children}</span>
    </div>
  );
}

export const SavingsSlide: SlideDefinition = {
  id: 'savings',
  content: (
    <>
      <style>
        {`
          @keyframes savingsItemFadeIn {
            from {
              opacity: 0;
              transform: translateX(-12px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes coinPulse {
            0%, 100% {
              text-shadow: 0 0 10px var(--terminal-green-glow);
              filter: brightness(1);
            }
            50% {
              text-shadow: 0 0 25px var(--terminal-green-glow), 0 0 45px var(--terminal-green-glow);
              filter: brightness(1.15);
            }
          }
        `}
      </style>

      <h2
        style={{
          marginBottom: '1.5rem',
          animation: 'coinPulse 2s ease-in-out infinite',
        }}
      >
        <span className="text-dim">$</span>{' '}
        <span className="text-green">budget</span>{' '}
        <span className="text-orange">--optimize</span>
      </h2>

      <div
        style={{
          textAlign: 'left',
          maxWidth: '1150px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        <SectionHeader color="green" delay={0.03}>
          pricing tiers
        </SectionHeader>

        <SavingsItem delay={0.08}>
          антропік видасть певну кількість токенів на 5 годин — і зупинить як
          тільки використаєте
        </SavingsItem>

        <SavingsItem delay={0.14}>
          з мого досвіду: <Price>$17</Price> — 1-1.5 год вайб-кодінгу,{' '}
          <Price>$100</Price> — 3.5-4 год, <Price>$200</Price> — повні 5 годин
        </SavingsItem>

        <SavingsItem delay={0.20}>
          <Price>$100</Price> — sweet spot, але гроші немаленькі; якщо можете —{' '}
          <Price>$200</Price> або <Price>$100</Price> + один-два на{' '}
          <Price>$17</Price>
        </SavingsItem>

        <SectionHeader color="purple" delay={0.26}>
          codex cli
        </SectionHeader>

        <SavingsItem delay={0.32}>
          варіант: <Price>$20</Price> підписка на ChatGPT + встановіть{' '}
          <Tool>codex cli</Tool>
        </SavingsItem>

        <SavingsItem delay={0.38}>
          <Tool>codex</Tool> — клон клод кода: погано в довгих сесіях, але добре
          ван-шотить майже робочі рішення
        </SavingsItem>

        <SavingsItem delay={0.44}>
          стратегія: ван-шот в <Tool>codex</Tool> → переходьте в{' '}
          <Tool>claude code</Tool> і попередьте що стаб вже готовий
        </SavingsItem>

        <SectionHeader color="blue" delay={0.50}>
          alternatives
        </SectionHeader>

        <SavingsItem delay={0.56}>
          <Dim>перевірено</Dim> тріал <Tool>Cursor</Tool> — в комбінації IDE або{' '}
          <Tool>cursor-cli</Tool>
        </SavingsItem>

        <SavingsItem delay={0.62}>
          <Dim>не перевірено</Dim>{' '}
          <Link href="https://ampcode.com/free">ampcode.com/free</Link> —
          безкоштовний клон з рейт лімітом і рекламою (не жарт)
        </SavingsItem>
      </div>
    </>
  ),
  notes:
    'Budget optimization - pricing tiers ($17/1-1.5h, $100/3.5-4h sweet spot, $200/5h full), Codex CLI alternative with one-shot strategy, Cursor trial, Ampcode free option',
};
