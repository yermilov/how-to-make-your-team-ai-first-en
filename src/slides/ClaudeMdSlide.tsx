import { SlideDefinition } from '../types/slides';
import { Code, Quote, SlideItem } from '../components/SlideElements';

// Command styling (orange code)
function Command({ children }: { children: string }) {
  return <code className="code-inline code-inline--orange">{children}</code>;
}

export const ClaudeMdSlide: SlideDefinition = {
  id: 'claude-md',
  content: (
    <>
      <h2 style={{ marginBottom: '2rem' }}>
        <span className="text-dim">$</span>{' '}
        <span className="text-green">cat</span>{' '}
        <span className="text-orange">CLAUDE.md</span>
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
          <Code>CLAUDE.md</Code> для Claude Code — те саме, що{' '}
          <Code>README.md</Code> для людей-розробників
        </SlideItem>

        <SlideItem delay={0.1}>
          Claude перечитує його кожного разу, коли робить щось в репозиторії
        </SlideItem>

        <SlideItem delay={0.15}>
          автоматично генерується через команду <Command>/init</Command>
        </SlideItem>

        <SlideItem delay={0.2}>
          можна редагувати вручну, щоб виправити неправильні висновки
        </SlideItem>

        <SlideItem delay={0.25}>
          якщо Claude робить систематичні помилки — скажіть йому{' '}
          <Quote>instead do X and remember this information in CLAUDE.md</Quote>
        </SlideItem>

        <SlideItem delay={0.3}>
          комітьте <Code>CLAUDE.md</Code> в git, щоб ділитися best
          practices
        </SlideItem>

        <SlideItem delay={0.35}>
          можна класти <Code>CLAUDE.md</Code> в будь-яку підпапку для
          локальних інструкцій в монорепозиторіях
        </SlideItem>
      </div>
    </>
  ),
  notes: 'How to work with CLAUDE.md files - best practices and configuration options',
};
