import { SlideDefinition } from '../types/slides';

type ColorKey = 'green' | 'orange' | 'cyan' | 'purple';

const colorMap: Record<ColorKey, { border: string; glow: string; text: string }> = {
  green: {
    border: 'var(--terminal-green)',
    glow: 'var(--terminal-green-glow)',
    text: 'var(--terminal-green)',
  },
  orange: {
    border: 'var(--terminal-orange)',
    glow: 'var(--terminal-orange-glow)',
    text: 'var(--terminal-orange)',
  },
  cyan: {
    border: 'var(--terminal-cyan)',
    glow: 'var(--terminal-cyan-glow)',
    text: 'var(--terminal-cyan)',
  },
  purple: {
    border: 'var(--terminal-purple)',
    glow: 'var(--terminal-purple-glow)',
    text: 'var(--terminal-purple)',
  },
};

function PrincipleDirective({
  ruleNumber,
  children,
  color,
  delay,
}: {
  ruleNumber: number;
  children: React.ReactNode;
  color: ColorKey;
  delay: number;
}) {
  const c = colorMap[color];
  const ruleId = `RULE.0${ruleNumber}`;

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, var(--terminal-bg-elevated) 0%, var(--terminal-bg-secondary) 100%)',
        borderLeft: `4px solid ${c.border}`,
        borderRadius: '0 8px 8px 0',
        padding: '1rem 1.5rem',
        marginBottom: '0.75rem',
        boxShadow: `0 2px 12px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.03), -4px 0 20px ${c.glow}`,
        opacity: 0,
        animation: 'directiveSlide 0.4s ease-out forwards',
        animationDelay: `${delay}s`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle scan line effect */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.03) 2px, rgba(0, 0, 0, 0.03) 4px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', position: 'relative' }}>
        {/* Rule indicator */}
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.9rem',
            color: c.text,
            opacity: 0.85,
            fontWeight: 700,
            letterSpacing: '0.05em',
            flexShrink: 0,
            textShadow: `0 0 10px ${c.glow}`,
            padding: '0.15rem 0.5rem',
            background: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '4px',
            border: `1px solid ${c.border}`,
          }}
        >
          [{ruleId}]
        </span>

        {/* Content */}
        <div
          style={{
            flex: 1,
            fontSize: '1.35rem',
            fontWeight: 400,
            color: 'var(--terminal-white)',
            lineHeight: 1.5,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

// Highlighted text component
function Highlight({ children, color = 'cyan' }: { children: React.ReactNode; color?: ColorKey | 'white' }) {
  const textColor = color === 'white' ? 'var(--terminal-white)' : colorMap[color as ColorKey].text;
  const glowColor = color === 'white' ? 'rgba(255, 255, 255, 0.2)' : colorMap[color as ColorKey].glow;

  return (
    <span
      style={{
        color: textColor,
        fontWeight: 600,
        textShadow: `0 0 8px ${glowColor}`,
      }}
    >
      {children}
    </span>
  );
}

// Token number component with special formatting
function TokenNum({ children }: { children: string }) {
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

export const ContextPrinciplesSlide: SlideDefinition = {
  id: 'context-principles',
  content: (
    <>
      <style>
        {`
          @keyframes directiveSlide {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>

      <h2 style={{ marginBottom: '2rem' }}>
        <span className="text-dim">$</span> принципи роботи з контекстом
      </h2>

      <div
        style={{
          textAlign: 'left',
          maxWidth: '900px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        <PrincipleDirective ruleNumber={1} color="green" delay={0.1}>
          покласти в контекст інформацію (<Highlight color="green">слонів</Highlight>) яка максимально допоможе направити модель на <Highlight color="white">правильний шлях</Highlight>
        </PrincipleDirective>

        <PrincipleDirective ruleNumber={2} color="orange" delay={0.25}>
          контекст має <Highlight color="orange">обмежений розмір</Highlight> (<TokenNum>200_000</TokenNum> токенів для Opus, <TokenNum>1_000_000</TokenNum> токенів для Sonnet)
        </PrincipleDirective>

        <PrincipleDirective ruleNumber={3} color="cyan" delay={0.4}>
          старатися класти поменше інформації (<Highlight color="cyan">слонів</Highlight>) які <Highlight color="white">зіб'ють</Highlight> модель з правильного шляху
        </PrincipleDirective>

        <PrincipleDirective ruleNumber={4} color="purple" delay={0.55}>
          <Highlight color="purple">одна задача</Highlight> за <Highlight color="purple">одну сесію</Highlight>
        </PrincipleDirective>
      </div>
    </>
  ),
};
