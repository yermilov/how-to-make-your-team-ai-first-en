import { SlideDefinition } from '../types/slides';

type ColorKey = 'orange' | 'green' | 'cyan' | 'purple' | 'blue';

const colorMap: Record<ColorKey, { border: string; glow: string; text: string }> = {
  orange: {
    border: 'var(--terminal-orange)',
    glow: 'var(--terminal-orange-glow)',
    text: 'var(--terminal-orange)',
  },
  green: {
    border: 'var(--terminal-green)',
    glow: 'var(--terminal-green-glow)',
    text: 'var(--terminal-green)',
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
  blue: {
    border: 'var(--terminal-blue)',
    glow: 'var(--terminal-blue-glow)',
    text: 'var(--terminal-blue)',
  },
};

function ContextLayer({
  index,
  label,
  example,
  color,
  delay,
}: {
  index: number;
  label: string;
  example?: string;
  color: ColorKey;
  delay: number;
}) {
  const c = colorMap[color];
  const hexIndex = `0x0${index}`;

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
        animation: 'contextLayerSlide 0.4s ease-out forwards',
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
        {/* Memory address index */}
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1rem',
            color: c.text,
            opacity: 0.7,
            fontWeight: 600,
            letterSpacing: '0.05em',
            flexShrink: 0,
            textShadow: `0 0 10px ${c.glow}`,
          }}
        >
          [{hexIndex}]
        </span>

        {/* Content */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: '1.5rem',
              fontWeight: 500,
              color: 'var(--terminal-white)',
              marginBottom: example ? '0.35rem' : 0,
            }}
          >
            {label}
          </div>

          {example && (
            <div
              style={{
                fontSize: '1.1rem',
                color: 'var(--terminal-white-muted)',
                fontStyle: 'italic',
                opacity: 0.75,
              }}
            >
              "{example}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export const ContextSlide: SlideDefinition = {
  id: 'context',
  content: (
    <>
      <style>
        {`
          @keyframes contextLayerSlide {
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
        <span className="text-dim">$</span> що в контексті<span className="text-orange">?</span>
      </h2>

      <div
        style={{
          textAlign: 'left',
          maxWidth: '800px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        <ContextLayer
          index={1}
          label="системний промпт"
          example="ти інженер який веде діалог з іншим інженером..."
          color="orange"
          delay={0.1}
        />
        <ContextLayer
          index={2}
          label="опис тулів"
          example="для того щоб відредагувати файл..."
          color="green"
          delay={0.2}
        />
        <ContextLayer
          index={3}
          label="опис MCP серверів"
          color="cyan"
          delay={0.3}
        />
        <ContextLayer
          index={4}
          label="зміст CLAUDE.md файлу"
          color="purple"
          delay={0.4}
        />
        <ContextLayer
          index={5}
          label="весь діалог з початку сесії"
          color="blue"
          delay={0.5}
        />
      </div>
    </>
  ),
};
