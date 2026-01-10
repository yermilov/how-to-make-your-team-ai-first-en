import { SlideDefinition } from '../types/slides';
import { Code, Quote, SlideItem, SlideLink } from '../components/SlideElements';
import contextToolsGathering from '/context-tools-gathering.png?url';

export const ContextToolsSlide: SlideDefinition = {
  id: 'context-tools',
  content: (
    <div className="bg-image-slide">
      <img
        src={contextToolsGathering}
        alt="Context gathering sources - voice, PDFs, research, diagrams"
        className="bg-image-slide__background"
      />

      <div className="bg-image-slide__content">
        <h2 style={{ marginBottom: '2rem' }}>
          <span className="text-dim">$</span>{' '}
          <span className="text-green">context</span>{' '}
          <span className="text-orange">--tools</span>
        </h2>

        <SlideItem delay={0.05}>
          опишіть свою задачу максимально детально наскільки тільки можете (або
          використовуйте <SlideLink href="https://handy.computer/">handy.computer</SlideLink>{' '}
          чи <SlideLink href="https://wisprflow.ai/">wisprflow.ai</SlideLink> якщо вам
          зручніше надиктувати)
        </SlideItem>

        <SlideItem delay={0.15}>
          якщо проблема достатньо складна — спочатку обговоріть її з{' '}
          <Code>Deep Research</Code> агентом як от ChatGPT чи Gemini, і додайте
          ріпорт до Claude Code
        </SlideItem>

        <SlideItem delay={0.25}>
          пошукайте блогпости чи статті на тему і додайте лінки (або{' '}
          <Code>pdf</Code>-ки)
        </SlideItem>

        <SlideItem delay={0.35}>
          пошукайте опен-сорс проєкти які вирішують схожі задачі, попросіть
          клода <Quote>install gh cli and browse these repos for inspiration</Quote>
        </SlideItem>

        <SlideItem delay={0.45}>
          намалюйте схему чи дізайн на листочку, дошці чи у цифровому вигляді,
          сфоткайте або зробіть скріншот і додайте до Claude Code
        </SlideItem>
      </div>
    </div>
  ),
  notes:
    'Context building tools - describe task in detail, use Deep Research, add articles/PDFs, browse open-source repos, add diagrams/screenshots',
};
