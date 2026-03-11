import { SlideDefinition } from '../types/slides';
import { Code, Emphasis, SlideItem } from '../components/SlideElements';

// Command styling (orange code)
function Command({ children }: { children: string }) {
  return <code className="code-inline code-inline--orange">{children}</code>;
}

export const VibeFlowSlide: SlideDefinition = {
  id: 'vibe-flow',
  content: ({ revealStage }) => (
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
          <Command>/clear</Command> clear the session
        </SlideItem>

        {revealStage >= 1 && (
          <SlideItem delay={0}>
            switch to <Code>plan mode</Code>
          </SlideItem>
        )}

        {revealStage >= 2 && (
          <SlideItem delay={0}>describe the feature / bug, <span className="text-orange" style={{ textShadow: '0 0 8px rgba(240, 136, 62, 0.9), 0 0 20px rgba(240, 136, 62, 0.6), 0 0 40px rgba(240, 136, 62, 0.3)' }}>form the context</span></SlideItem>
        )}

        {revealStage >= 3 && (
          <SlideItem delay={0}>
            wait for the plan, review it, and iterate
          </SlideItem>
        )}

        {revealStage >= 4 && (
          <SlideItem delay={0}>
            <Code>Yes, and auto-accept edits</Code>
          </SlideItem>
        )}

        {revealStage >= 5 && (
          <SlideItem delay={0}>
            if Claude Code asks you whether it can do something read-only and not very dangerous — always choose{' '}
            <Emphasis>Yes, and don't ask me again</Emphasis>
          </SlideItem>
        )}

        {revealStage >= 6 && (
          <SlideItem delay={0}>
            <Command>/commit-push-pr</Command>
          </SlideItem>
        )}

        {revealStage >= 7 && (
          <SlideItem delay={0}>
            <Command>/clear</Command>
          </SlideItem>
        )}

        {revealStage >= 8 && (
          <SlideItem delay={0}>
            <Command>/simplify</Command> or <Command>/review</Command>
          </SlideItem>
        )}
      </div>
    </>
  ),
  maxRevealStages: 8,
  notes:
    'The vibe flow workflow - clear session, plan mode, describe problem, iterate on plan, auto-accept, commit',
};
