import { SlideDefinition } from '../types/slides';
import { SlideItem, Emphasis } from '../components/SlideElements';
import aiFirstToolsBg from '/ai-first-tools.png?url';

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

export const AIFirstToolsSlide: SlideDefinition = {
  id: 'ai-first-tools',
  content: (
    <div className="bg-image-slide">
      <img
        src={aiFirstToolsBg}
        alt="AI-First 10x thinking"
        className="bg-image-slide__background"
      />

      <div className="bg-image-slide__content">
        <h2 style={{ marginBottom: '2rem' }}>
          <span className="text-dim">$</span>{' '}
          <span className="text-green">mindset</span>{' '}
          <span className="text-orange">--ai-first</span>
        </h2>

        <AnimatedSectionHeader color="purple" delay={0.03}>
          подумайте над тим
        </AnimatedSectionHeader>

        <SlideItem delay={0.08}>
          якщо ви збільшите кількість коду в 10 разів — чи будуть встигати інші
          процеси? <Emphasis color="orange">якщо ні, то ви не отримали жодної користі від АІ</Emphasis>
        </SlideItem>

        <SlideItem delay={0.14} size="compact">
          чи можете ви придумувати в 10 разів більше фічей?
        </SlideItem>
        <SlideItem delay={0.17} size="compact">
          чи можете ви приймати в 10 разів більше рішень?
        </SlideItem>
        <SlideItem delay={0.20} size="compact">
          чи можете ви запускати в 10 разів більше експериментів?
        </SlideItem>
        <SlideItem delay={0.23} size="compact">
          чи можете ви рев'ювати в 10 разів більше коду?
        </SlideItem>

        <SlideItem delay={0.30}>
          подумайте на що вам варто виділити більше власного часу, а{' '}
          <Emphasis color="green">які задачі можна відправити АІ</Emphasis>
        </SlideItem>
      </div>
    </div>
  ),
  notes:
    'Think about 10x: if you generate 10x more code, will other processes keep up? Can you ideate 10x more features, make 10x more decisions, run 10x more experiments, review 10x more code? Think about what to spend your time on vs delegate to AI.',
};
