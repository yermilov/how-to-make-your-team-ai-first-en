import { SlideDefinition } from '../types/slides';
import { Code, Quote, SlideItem } from '../components/SlideElements';

// Command styling (orange code)
function Command({ children }: { children: string }) {
  return <code className="code-inline code-inline--orange">{children}</code>;
}

export const TryItSlide: SlideDefinition = {
  id: 'try-it',
  content: (
    <>
      <h2 style={{ marginBottom: '2rem' }}>
        <span className="text-dim">$</span>{' '}
        <span className="text-green">bootstrap</span>{' '}
        <span className="text-orange">--try</span>
      </h2>

      <div
        style={{
          textAlign: 'left',
          maxWidth: '1000px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        <SlideItem delay={0.05}>чиста сесія</SlideItem>

        <SlideItem delay={0.1}>
          переходимо в <Code>plan mode</Code>
        </SlideItem>

        <SlideItem delay={0.15}>
          копіюємо репорт від <Code>Deep Research</Code> агента і просимо клод{' '}
          <Quote>
            please bootstrap the project from scratch using this guide, include
            initial version of CLAUDE.md
          </Quote>
        </SlideItem>

        <SlideItem delay={0.2}>
          чекаємо і чекаємо план, вичитуємо його і ітеруємося
        </SlideItem>

        <SlideItem delay={0.25}>
          <Code>Yes, and auto-accept edits</Code>
        </SlideItem>

        <SlideItem delay={0.3}>
          <Command>/commit-push-pr</Command>
        </SlideItem>
      </div>
    </>
  ),
  notes:
    'First try workflow - clean session, plan mode, paste Deep Research report, iterate, auto-accept, commit',
};
