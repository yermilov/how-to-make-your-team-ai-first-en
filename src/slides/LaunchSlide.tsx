import { SlideDefinition } from '../types/slides';
import { Code, SlideItem } from '../components/SlideElements';

// Command styling (orange code)
function Command({ children }: { children: string }) {
  return <code className="code-inline code-inline--orange">{children}</code>;
}

export const LaunchSlide: SlideDefinition = {
  id: 'launch',
  content: (
    <>
      <h2 style={{ marginBottom: '2rem' }}>
        <span className="text-dim">$</span>{' '}
        <span className="text-green">claude</span>{' '}
        <span className="text-orange">--launch</span>
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
          зробіть зразу <Command>/model opus</Command>
        </SlideItem>

        <SlideItem delay={0.1}>
          також зробіть зразу{' '}
          <Command>/plugin marketplace add anthropics/claude-code</Command>,{' '}
          <Command>/plugin install commit-commands@claude-plugin-directory</Command>,{' '}
          <Command>/plugin install frontend-design@claude-plugin-directory</Command>,{' '}
          <Command>/plugin install code-review@claude-plugin-directory</Command>
        </SlideItem>

        <SlideItem delay={0.15}>
          якщо клод код питає вас чи можна зробити щось read-only і не дуже
          небезпечне — завжди вибирайте{' '}
          <Code>Yes, and don't ask me again</Code>
        </SlideItem>

        <SlideItem delay={0.2}>
          починайте завжди з <Code>plan mode</Code> (shift+tab двічі), ітеріться
          по плану і далі переходьте в <Code>Auto-accept everything</Code>
        </SlideItem>
      </div>
    </>
  ),
  notes:
    'Claude Code launch checklist - model selection, plugins, permissions, and plan mode workflow',
};
