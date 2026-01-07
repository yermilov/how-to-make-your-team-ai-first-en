import { SlideDefinition } from '../types/slides';

// Inline code styling (cyan)
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

// List item with > prefix
function TechnicalItem({
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
        gap: '0.75rem',
        fontSize: '1.35rem',
        marginBottom: '1.25rem',
        lineHeight: 1.5,
        opacity: 0,
        animation: 'technicalItemFadeIn 0.3s ease-out forwards',
        animationDelay: `${delay}s`,
      }}
    >
      <span
        style={{
          color: 'var(--terminal-orange)',
          fontWeight: 'bold',
          textShadow: '0 0 10px var(--terminal-orange-glow)',
        }}
      >
        &gt;
      </span>
      <span style={{ color: 'var(--terminal-white)' }}>{children}</span>
    </div>
  );
}

export const TechnicalSlide: SlideDefinition = {
  id: 'technical',
  content: (
    <>
      <style>
        {`
          @keyframes technicalItemFadeIn {
            from {
              opacity: 0;
              transform: translateX(-10px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>

      <h2 style={{ marginBottom: '2rem' }}>
        <span className="text-dim">$</span>{' '}
        <span className="text-green">setup</span>{' '}
        <span className="text-orange">--technical</span>
      </h2>

      <div
        style={{
          textAlign: 'left',
          maxWidth: '1000px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        <TechnicalItem delay={0.05}>
          робіть вибір на користь рішень які зроблять життя{' '}
          <Code>Claude Code</Code> (а значить і ваше) зручнішим
        </TechnicalItem>

        <TechnicalItem delay={0.1}>
          зберігайте весь код в одній монорепі на <Code>GitHub</Code>
        </TechnicalItem>

        <TechnicalItem delay={0.15}>
          насетапте (тобто попросіть клод) пайплайн з юніт тестами
        </TechnicalItem>

        <TechnicalItem delay={0.2}>
          запускайтеся локально, або підключіть клаудний сервіс напряму до{' '}
          <Code>GitHub</Code> (знову ж таки проговоріть це на першому етапі{' '}
          <Code>Deep Research</Code>)
        </TechnicalItem>

        <TechnicalItem delay={0.25}>
          якщо немає протипоказань — використовуйте full-stack{' '}
          <Code>TypeScript</Code>, <Code>React</Code>, максимально популярні і
          перевірені технології
        </TechnicalItem>
      </div>
    </>
  ),
  notes:
    'Technical setup recommendations - monorepo, CI/CD, TypeScript/React stack',
};
