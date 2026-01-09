import { SlideDefinition } from '../types/slides';
import { Code, SlideItem } from '../components/SlideElements';

// Hint styling (orange code) - for quoted instructions
function Hint({ children }: { children: string }) {
  return <code className="code-inline code-inline--orange">{children}</code>;
}

export const ResearchSlide: SlideDefinition = {
  id: 'research',
  content: (
    <>
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
        <SlideItem delay={0.05}>
          візьміть свій улюблений АІ асистент (бажано з режимом{' '}
          <Code>Deep Research</Code> і <Code>Web Search</Code>) — ChatGPT,
          Gemini, Claude, Perplexity, ...
        </SlideItem>

        <SlideItem delay={0.1}>
          опишіть йому детально проєкт над яким ви плануєте працювати, які фічі
          вам потрібні, дайте референси на існуючі сервіси, викладіть свої думки
          про технології які вам потрібні
        </SlideItem>

        <SlideItem delay={0.15}>
          попросіть його прорісерчити надійний і модерновий технічний стек і
          архітектуру для вашого проєкту
        </SlideItem>

        <SlideItem delay={0.2}>
          в кінці попросіть згенерувати{' '}
          <Hint>"comprehensive step-by-step guide for Claude Code"</Hint> який
          допоможе забустрапити основу проєкту із пустого репозиторію
        </SlideItem>
      </div>
    </>
  ),
  notes:
    'Start with AI-assisted research before coding - use Deep Research mode to plan your tech stack',
};
