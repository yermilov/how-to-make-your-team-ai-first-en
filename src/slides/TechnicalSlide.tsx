import { SlideDefinition } from '../types/slides';
import { Code, SlideItem, SlideLink } from '../components/SlideElements';

export const TechnicalSlide: SlideDefinition = {
  id: 'technical',
  content: (
    <>
      <h2 style={{ marginBottom: '2rem' }}>
        <span className="text-dim">$</span>{' '}
        <span className="text-green">setup</span>{' '}
        <span className="text-orange">--technical</span>
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
          робіть вибір на користь рішень які зроблять життя{' '}
          <Code>Claude Code</Code> (а значить і ваше) зручнішим
        </SlideItem>

        <SlideItem delay={0.1}>
          зберігайте весь код в одній монорепі на <Code>GitHub</Code>
        </SlideItem>

        <SlideItem delay={0.15}>
          насетапте (тобто попросіть клод) пайплайн з юніт тестами
        </SlideItem>

        <SlideItem delay={0.2}>
          запускайтеся локально, або підключіть клаудний сервіс напряму до{' '}
          <Code>GitHub</Code> (наприклад <SlideLink href="https://render.com/">render.com</SlideLink> і, але знову ж таки проговоріть це на першому етапі{' '}
          <Code>Deep Research</Code>)
        </SlideItem>

        <SlideItem delay={0.25}>
          якщо немає протипоказань — використовуйте full-stack{' '}
          <Code>TypeScript</Code>, <Code>React</Code>, максимально популярні і
          перевірені технології
        </SlideItem>

        <SlideItem delay={0.3}>
          краще працюйте в бранчах, комітьтеся після кожної сесії а робочий код почастіше мержіть в мейн
        </SlideItem>
      </div>
    </>
  ),
  notes:
    'Technical setup recommendations - monorepo, CI/CD, TypeScript/React stack',
};
