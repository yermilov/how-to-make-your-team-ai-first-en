import { SlideDefinition } from '../types/slides';
import { Code, Quote, SlideItem, SlideLink } from '../components/SlideElements';

export const ContextToolsSlide: SlideDefinition = {
  id: 'context-tools',
  content: (
    <>
      <style>
        {`
          @keyframes titleGlitch {
            0%, 100% { text-shadow: 0 0 10px var(--terminal-green-glow); }
            50% { text-shadow: 0 0 20px var(--terminal-green-glow), 2px 0 var(--terminal-cyan); }
          }
        `}
      </style>

      <h2
        style={{
          marginBottom: '2.5rem',
          animation: 'titleGlitch 3s ease-in-out infinite',
        }}
      >
        <span className="text-dim">$</span>{' '}
        <span className="text-green">context</span>{' '}
        <span className="text-orange">--tools</span>
      </h2>

      <div
        style={{
          textAlign: 'left',
          maxWidth: '1100px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        <SlideItem size="compact" delay={0.05}>
          опишіть свою задачу максимально детально наскільки тільки можете (або
          використовуйте <SlideLink href="https://handy.computer/">handy.computer</SlideLink>{' '}
          чи <SlideLink href="https://wisprflow.ai/">wisprflow.ai</SlideLink> якщо вам
          зручніше надиктувати)
        </SlideItem>

        <SlideItem size="compact" delay={0.15}>
          якщо проблема достатньо складна — спочатку обговоріть її з{' '}
          <Code>Deep Research</Code> агентом як от ChatGPT чи Gemini, і додайте
          ріпорт до Claude Code
        </SlideItem>

        <SlideItem size="compact" delay={0.25}>
          пошукайте блогпости чи статті на тему і додайте лінки (або{' '}
          <Code>pdf</Code>-ки)
        </SlideItem>

        <SlideItem size="compact" delay={0.35}>
          пошукайте опен-сорс проєкти які вирішують схожі задачі, попросіть
          клода <Quote>install gh cli and browse these repos for inspiration</Quote>
        </SlideItem>

        <SlideItem size="compact" delay={0.45}>
          намалюйте схему чи дизайн на листочку, дошці чи у цифровому вигляді,
          сфоткайте або зробіть скріншот і додайте до Claude Code
        </SlideItem>
      </div>
    </>
  ),
  notes:
    'Context building tools - describe task in detail, use Deep Research, add articles/PDFs, browse open-source repos, add diagrams/screenshots',
};
