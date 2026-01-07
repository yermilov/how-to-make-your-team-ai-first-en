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

// Hint/quote styling (orange)
function Hint({ children }: { children: string }) {
  return (
    <code
      style={{
        background: 'rgba(240, 136, 62, 0.1)',
        padding: '0.1rem 0.4rem',
        borderRadius: '4px',
        color: 'var(--terminal-orange)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.95em',
        fontWeight: 600,
        border: '1px solid rgba(240, 136, 62, 0.3)',
        textShadow: '0 0 8px var(--terminal-orange-glow)',
      }}
    >
      {children}
    </code>
  );
}

// List item with > prefix
function ResearchItem({
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
        animation: 'researchItemFadeIn 0.3s ease-out forwards',
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

export const ResearchSlide: SlideDefinition = {
  id: 'research',
  content: (
    <>
      <style>
        {`
          @keyframes researchItemFadeIn {
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
        <span className="text-green">research</span>{' '}
        <span className="text-orange">--start</span>
      </h2>

      <div
        style={{
          textAlign: 'left',
          maxWidth: '1000px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        <ResearchItem delay={0.05}>
          візьміть свій улюблений АІ асистент (бажано з режимом{' '}
          <Code>Deep Research</Code> і <Code>Web Search</Code>) — ChatGPT,
          Gemini, Claude, Perplexity, ...
        </ResearchItem>

        <ResearchItem delay={0.1}>
          опишіть йому детально проєкт над яким ви плануєте працювати, які фічі
          вам потрібні, дайте референси на існуючі сервіси, викладіть свої думки
          про технології які вам потрібні
        </ResearchItem>

        <ResearchItem delay={0.15}>
          попросіть його прорісерчити надійний і модерновий технічний стек і
          архітектуру для вашого проєкту
        </ResearchItem>

        <ResearchItem delay={0.2}>
          в кінці попросіть згенерувати{' '}
          <Hint>"comprehensive step-by-step guide for Claude Code"</Hint> який
          допоможе забустрапити основу проєкту із пустого репозиторію
        </ResearchItem>
      </div>
    </>
  ),
  notes:
    'Start with AI-assisted research before coding - use Deep Research mode to plan your tech stack',
};
