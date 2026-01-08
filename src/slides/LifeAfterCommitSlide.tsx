import { SlideDefinition } from '../types/slides';

// Inline code styling (cyan) - for technical terms
function Code({ children }: { children: string }) {
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

// External link styling (blue with dashed underline)
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
        fontSize: '0.9rem',
        fontWeight: 700,
        color: colors[color].main,
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        marginTop: '0.8rem',
        marginBottom: '0.6rem',
        textShadow: `0 0 10px ${colors[color].glow}`,
        opacity: 0,
        animation: 'aftercareItemFadeIn 0.35s ease-out forwards',
        animationDelay: `${delay}s`,
      }}
    >
      {'// '}{children}
    </div>
  );
}

// List item with > prefix and staggered animation
function AfterItem({
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
        gridTemplateColumns: '1.5rem 1fr',
        alignItems: 'start',
        gap: '0.6rem',
        fontSize: '1.1rem',
        marginBottom: '0.9rem',
        lineHeight: 1.55,
        opacity: 0,
        animation: 'aftercareItemFadeIn 0.35s ease-out forwards',
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

export const LifeAfterCommitSlide: SlideDefinition = {
  id: 'life-after-commit',
  content: (
    <>
      <style>
        {`
          @keyframes aftercareItemFadeIn {
            from {
              opacity: 0;
              transform: translateX(-12px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes deployPulse {
            0%, 100% {
              text-shadow: 0 0 10px var(--terminal-green-glow);
            }
            50% {
              text-shadow: 0 0 20px var(--terminal-green-glow), 0 0 35px var(--terminal-green-glow);
            }
          }
        `}
      </style>

      <h2
        style={{
          marginBottom: '1.8rem',
          animation: 'deployPulse 3s ease-in-out infinite',
        }}
      >
        <span className="text-dim">$</span>{' '}
        <span className="text-green">deploy</span>{' '}
        <span className="text-orange">--aftercare</span>
      </h2>

      <div
        style={{
          textAlign: 'left',
          maxWidth: '1100px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        <SectionHeader color="green" delay={0.03}>
          logging
        </SectionHeader>

        <AfterItem delay={0.08}>
          попросіть клод додавати багато логів і поясніть як отримати до них
          доступ (в <Code>CLAUDE.md</Code>)
        </AfterItem>

        <AfterItem delay={0.14}>
          якщо запускаєте локально — вкажіть де лежить лог файл
        </AfterItem>

        <AfterItem delay={0.20}>
          якщо в клауді — налаштуйте відправку логів в{' '}
          <Link href="https://betterstack.com/">betterstack.com</Link> і
          налаштуйте <Code>cli</Code> щоб мати до них доступ
        </AfterItem>

        <SectionHeader color="purple" delay={0.26}>
          web testing
        </SectionHeader>

        <AfterItem delay={0.32}>
          встановіть хром плагін{' '}
          <Link href="https://claude.com/chrome">claude.com/chrome</Link> і
          налаштуйте його за допомогою <Code>/chrome</Code>
        </AfterItem>

        <AfterItem delay={0.38}>
          поясніть клод як "проклацати ваш сервіс" щоб він міг його потестувати
          (в <Code>CLAUDE.md</Code>)
        </AfterItem>

        <SectionHeader color="blue" delay={0.44}>
          mcp
        </SectionHeader>

        <AfterItem delay={0.50}>
          <Link href="https://github.com/anthropics/anthropic-quickstarts/tree/main/mcp-chrome-devtools">
            chrome-devtools-mcp
          </Link>{' '}
          — мабуть найбільш корисний <Code>MCP</Code> сервер зараз, але і він
          має свої обмеження
        </AfterItem>
      </div>
    </>
  ),
  notes:
    'Life after commit - logging setup (local vs cloud with BetterStack), web testing with Chrome plugin and /chrome command, MCP Chrome DevTools server',
};
