import { SlideDefinition } from '../types/slides';
import { Code, SlideItem, Emphasis } from '../components/SlideElements';
import aiFirstWorkflowBg from '/ai-first-workflow.png?url';

// Section header with animation
function AnimatedSectionHeader({
  children,
  color,
  delay,
}: {
  children: string;
  color: 'green' | 'purple' | 'blue';
  delay: number;
}) {
  return (
    <div
      className={`section-header section-header--${color}`}
      style={{
        opacity: 0,
        animation: 'slideItemFadeIn 0.35s ease-out forwards',
        animationDelay: `${delay}s`,
      }}
    >
      {'// '}
      {children}
    </div>
  );
}

// Tool tag styling
function Tool({ children }: { children: string }) {
  return (
    <span
      style={{
        color: 'var(--terminal-cyan)',
        backgroundColor: 'rgba(118, 228, 247, 0.1)',
        padding: '0.1em 0.4em',
        borderRadius: '4px',
        fontSize: '0.9em',
      }}
    >
      {children}
    </span>
  );
}

export const AIFirstWorkflowSlide: SlideDefinition = {
  id: 'ai-first-workflow',
  content: (
    <div className="bg-image-slide">
      <img
        src={aiFirstWorkflowBg}
        alt="AI-First workflow and tools"
        className="bg-image-slide__background"
      />

      <div className="bg-image-slide__content">
        <h2 style={{ marginBottom: '2rem' }}>
          <span className="text-dim">$</span>{' '}
          <span className="text-green">mindset</span>{' '}
          <span className="text-orange">--ai-first</span>
        </h2>

        <AnimatedSectionHeader color="purple" delay={0.03}>
          як працювати
        </AnimatedSectionHeader>

        <SlideItem delay={0.08}>
          використовуйте <Emphasis color="green">GitHub issues</Emphasis> для
          постановки задач замість промптів, просто пишіть{' '}
          <Code variant="orange">please work on github issue #...</Code>,
          звичайно ж зробіть скіл
        </SlideItem>

        <SlideItem delay={0.14}>
          зберігайте всю документацію, яка може змінюватися з часом, в
          спеціальній папці всередині вашої монорепи, звичайно ж зробіть скіл
        </SlideItem>

        <SlideItem delay={0.20}>
          зберігайте більш фундаментальні незмінні знання в скілах
        </SlideItem>

        <SlideItem delay={0.26}>
          найбільш фундаментальні принципи роботи (фактично ваш контракт з
          клодом) опишіть в <Code>CLAUDE.md</Code>
        </SlideItem>

        <AnimatedSectionHeader color="blue" delay={0.32}>
          інструменти
        </AnimatedSectionHeader>

        <SlideItem delay={0.38}>
          організуйте клод доступ до усіх можливих інструментів, описавши в
          скілах як з ними працювати:
        </SlideItem>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginLeft: '2rem',
            marginBottom: '1.5rem',
            opacity: 0,
            animation: 'slideItemFadeIn 0.35s ease-out forwards',
            animationDelay: '0.44s',
          }}
        >
          <Tool>chatgpt</Tool>
          <Tool>codex</Tool>
          <Tool>logs</Tool>
          <Tool>metrics</Tool>
          <Tool>nano banana</Tool>
          <Tool>figma</Tool>
          <Tool>deep research</Tool>
          <Tool>bug reports</Tool>
          <Tool>cost tracking</Tool>
          <Tool>...</Tool>
        </div>
      </div>
    </div>
  ),
  notes:
    'AI-First workflow: use GitHub issues for tasks, store docs in monorepo folders, fundamental knowledge in skills, core principles in CLAUDE.md. Give Claude access to all tools via skills.',
};
