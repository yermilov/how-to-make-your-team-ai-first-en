import { SlideDefinition } from '../types/slides';

import haikuImg from '/model-haiku.png?url';
import sonnetImg from '/model-sonnet.png?url';
import opusImg from '/model-opus.png?url';

type ModelTier = 'haiku' | 'sonnet' | 'opus';

const tierColors: Record<ModelTier, { primary: string; glow: string }> = {
  haiku: {
    primary: 'var(--terminal-cyan)',
    glow: 'var(--terminal-cyan-glow)',
  },
  sonnet: {
    primary: 'var(--terminal-orange)',
    glow: 'var(--terminal-orange-glow)',
  },
  opus: {
    primary: 'var(--terminal-purple)',
    glow: 'var(--terminal-purple-glow)',
  },
};

function ModelBadge({
  tier,
  image,
  label,
  delay,
}: {
  tier: ModelTier;
  image: string;
  label: string;
  delay: number;
}) {
  const colors = tierColors[tier];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.75rem',
        opacity: 0,
        animation: 'badgePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        animationDelay: `${delay}s`,
      }}
    >
      <img
        src={image}
        alt={label}
        style={{
          width: '140px',
          height: '140px',
          objectFit: 'contain',
          filter: `drop-shadow(0 0 15px ${colors.glow})`,
        }}
      />
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '1.1rem',
          fontWeight: 700,
          color: colors.primary,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          textShadow: `0 0 10px ${colors.glow}`,
        }}
      >
        {label}
      </span>
    </div>
  );
}

function ModelPoint({
  children,
  tier,
  delay,
}: {
  children: React.ReactNode;
  tier?: ModelTier;
  delay: number;
}) {
  const accentColor = tier ? tierColors[tier].primary : 'var(--terminal-white-dim)';
  const glowColor = tier ? tierColors[tier].glow : 'transparent';

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.75rem',
        opacity: 0,
        animation: 'slideIn 0.4s ease-out forwards',
        animationDelay: `${delay}s`,
        marginBottom: '0.6rem',
      }}
    >
      <span
        style={{
          color: accentColor,
          fontSize: '1.35rem',
          flexShrink: 0,
          textShadow: `0 0 8px ${glowColor}`,
        }}
      >
        &gt;
      </span>
      <span
        style={{
          fontSize: '1.35rem',
          color: 'var(--terminal-white)',
          lineHeight: 1.5,
        }}
      >
        {children}
      </span>
    </div>
  );
}

function Accent({ children, tier }: { children: React.ReactNode; tier: ModelTier }) {
  const colors = tierColors[tier];
  return (
    <span
      style={{
        color: colors.primary,
        fontWeight: 600,
        textShadow: `0 0 8px ${colors.glow}`,
      }}
    >
      {children}
    </span>
  );
}

function TokenNum({ children }: { children: string }) {
  return (
    <code
      style={{
        background: 'rgba(118, 228, 247, 0.1)',
        padding: '0.1rem 0.4rem',
        borderRadius: '4px',
        color: 'var(--terminal-cyan)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.9em',
        fontWeight: 600,
        border: '1px solid rgba(118, 228, 247, 0.3)',
      }}
    >
      {children}
    </code>
  );
}

export const ModelsSlide: SlideDefinition = {
  id: 'models',
  content: (
    <>
      <style>
        {`
          @keyframes badgePop {
            from {
              opacity: 0;
              transform: scale(0.5) translateY(20px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-15px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>

      <h2 style={{ marginBottom: '1.5rem' }}>
        <span className="text-dim">$</span> якщо вже заговорили за моделі
      </h2>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem',
          marginBottom: '2rem',
        }}
      >
        <ModelBadge tier="haiku" image={haikuImg} label="haiku" delay={0.1} />
        <ModelBadge tier="sonnet" image={sonnetImg} label="sonnet" delay={0.2} />
        <ModelBadge tier="opus" image={opusImg} label="opus" delay={0.3} />
      </div>

      <div
        style={{
          textAlign: 'left',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        <ModelPoint tier="haiku" delay={0.5}>
          <Accent tier="haiku">haiku</Accent> — швидка і гарно розуміє код
        </ModelPoint>

        <ModelPoint tier="sonnet" delay={0.6}>
          <Accent tier="sonnet">sonnet</Accent> — не така швидка, але має великий контекст (до <TokenNum>1_000_000</TokenNum> токенів)
        </ModelPoint>

        <ModelPoint tier="opus" delay={0.7}>
          <Accent tier="opus">opus</Accent> — найкраща модель для написання коду в світі, <TokenNum>200_000</TokenNum> токенів
        </ModelPoint>

        <ModelPoint delay={0.8}>
          перформенс <Accent tier="sonnet">sonnet</Accent> падає на відмітці <TokenNum>250_000</TokenNum>-<TokenNum>300_000</TokenNum> токенів, єдиний плюс — відсутність "страху" моделі починаючи з відмітки <TokenNum>150_000</TokenNum>
        </ModelPoint>

        <ModelPoint tier="opus" delay={0.9}>
          насправді просто завжди користуйтеся <Accent tier="opus">opus</Accent> — ціна дорожче, але за рахунок кращих "мізків" вартість вийде дешевше в кінці кінців
        </ModelPoint>

        <ModelPoint tier="haiku" delay={1.0}>
          <Accent tier="haiku">haiku</Accent> корисна для вивчення коду, клод уміє сам переключатися на неї коли треба
        </ModelPoint>
      </div>
    </>
  ),
};
