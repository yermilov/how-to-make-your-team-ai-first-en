import { SlideDefinition } from '../types/slides';
import { Code, SlideItem } from '../components/SlideElements';

// Command styling (orange code)
function Command({ children }: { children: string }) {
  return <code className="code-inline code-inline--orange">{children}</code>;
}

export const VibeFlowSlide: SlideDefinition = {
  id: 'vibe-flow',
  content: (
    <>
      <h2 style={{ marginBottom: '2rem' }}>
        <span className="text-dim">$</span>{' '}
        <span className="text-green">vibe</span>{' '}
        <span className="text-orange">--flow</span>
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
          <Command>/clear</Command> очищуємо сесію
        </SlideItem>

        <SlideItem delay={0.1}>
          переходимо у <Code>plan mode</Code>
        </SlideItem>

        <SlideItem delay={0.15}>описуємо фічу / багу, формуємо контекст</SlideItem>

        <SlideItem delay={0.2}>
          чекаємо і чекаємо план, вичитуємо його і ітеруємося
        </SlideItem>

        <SlideItem delay={0.25}>
          <Code>Yes, and auto-accept edits</Code>
        </SlideItem>

        <SlideItem delay={0.3}>
          <Command>/commit-push-pr</Command>
        </SlideItem>

        <SlideItem delay={0.35}>
          <Command>/clear</Command>
        </SlideItem>

        <SlideItem delay={0.4}>
          <Command>/review</Command> або <Command>take a look at the current pr - if you would have a chance to implement it from scratch what would you do differently? clean all ai artifacts, comments, code duplication, unoptimal structures, ...</Command>
        </SlideItem>
      </div>
    </>
  ),
  notes:
    'The vibe flow workflow - clear session, plan mode, describe problem, iterate on plan, auto-accept, commit',
};
