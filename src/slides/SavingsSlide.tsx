import { SlideDefinition } from '../types/slides';
import { Code, SlideItem, SlideLink } from '../components/SlideElements';
import budgetPricingTiers from '/budget-pricing-tiers.png?url';
import budgetWorkflowStrategy from '/budget-workflow-strategy.png?url';

// Price styling (green) - money highlight
function Price({ children }: { children: string }) {
  return (
    <span className="text-emphasis text-emphasis--green">
      {children}
    </span>
  );
}

// Dimmed parenthetical text
function Dim({ children }: { children: string }) {
  return (
    <span style={{ color: 'var(--terminal-white-muted)', fontSize: '0.9em' }}>
      ({children})
    </span>
  );
}

// Section header with animation for this slide
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

export const SavingsSlide: SlideDefinition = {
  id: 'savings',
  content: (
    <div className="mcp-slide">
      <img
        src={budgetPricingTiers}
        alt="Pricing tiers visualization"
        className="mcp-slide-image-left"
      />

      <div className="mcp-slide-content">
        <h2 style={{ marginBottom: '1.5rem' }}>
          <span className="text-dim">$</span>{' '}
          <span className="text-green">budget</span>{' '}
          <span className="text-orange">--optimize</span>
        </h2>

        <AnimatedSectionHeader color="green" delay={0.03}>
          pricing tiers
        </AnimatedSectionHeader>

        <SlideItem delay={0.08}>
          антропік видає певну кількість токенів на 5 годин — і зупинить вас як
          тільки ви їх використаєте
        </SlideItem>

        <SlideItem delay={0.14}>
          з мого досвіду: <Price>$17</Price> — 1-1.5 години,{' '}
          <Price>$100</Price> — 3-4 години, <Price>$200</Price> — повні 5 годин
        </SlideItem>

        <SlideItem delay={0.20}>
          <Price>$100</Price> — sweet spot; якщо ви багаті — купіть{' '}
          <Price>$200</Price>
        </SlideItem>

        <AnimatedSectionHeader color="purple" delay={0.26}>
          якщо ви не багачі
        </AnimatedSectionHeader>

        <SlideItem delay={0.32}>
          оформіть <Price>$20</Price> підписку на ChatGPT і встановіть{' '}
          <Code>codex cli</Code>
        </SlideItem>

        <SlideItem delay={0.38}>
          <Code>codex</Code> — клон клод кода: погано працює в довгих сесіях, але добре
          ван-шотить
        </SlideItem>

        <SlideItem delay={0.44}>
          стратегія: ван-шот в <Code>codex</Code> → потім в{' '}
          <Code>claude code</Code>
        </SlideItem>

        <AnimatedSectionHeader color="blue" delay={0.50}>
          ще дешевші варіанти
        </AnimatedSectionHeader>

        <SlideItem delay={0.56}>
          <Dim>перевірено</Dim> тріал <Code>Cursor</Code> — IDE або{' '}
          <Code>cursor-cli</Code>
        </SlideItem>

        <SlideItem delay={0.62}>
          <Dim>не перевірено</Dim>{' '}
          <SlideLink href="https://ampcode.com/free">ampcode.com/free</SlideLink> —
          безкоштовний клон
        </SlideItem>
      </div>

      <img
        src={budgetWorkflowStrategy}
        alt="Budget workflow strategy"
        className="mcp-slide-image-right"
      />
    </div>
  ),
  notes:
    'Budget optimization - pricing tiers ($17/1-1.5h, $100/3.5-4h sweet spot, $200/5h full), Codex CLI alternative with one-shot strategy, Cursor trial, Ampcode free option',
};
