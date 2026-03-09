import { SlideDefinition } from '../types/slides';
import { SlideItem, Emphasis } from '../components/SlideElements';

export const SkillsActivatorSlide: SlideDefinition = {
  id: 'skills-activator',
  content: (
    <>
      <h2 style={{ marginBottom: '2rem' }}>
        <span className="text-dim">$</span>{' '}
        <span className="text-green">skills</span>{' '}
        <span className="text-orange">--activator</span>
      </h2>

      <div
        style={{
          textAlign: 'left',
          maxWidth: '1000px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        <SlideItem delay={0.08}>
          skills are super powerful because they don't clutter the context window yet claude can use them when it needs them
        </SlideItem>

        <SlideItem delay={0.18}>
          additionally they have progressive disclosure so you can make them as detailed as needed in any exotic case
        </SlideItem>

        <SlideItem delay={0.26}>
          but claude is still not very good at loading the <Emphasis color="orange">right skill</Emphasis>
        </SlideItem>

        <SlideItem delay={0.34}>
          invest your time to build a system that invokes the right skill when needed — use claude code hooks to intercept session events, analyze them (by keywords, pattern matching, or even llm analysis) and inject skill suggestions or even block execution without required skills loaded
        </SlideItem>

        <SlideItem delay={0.42}>
          heh, Anthropic doesn't have a native solution for it <Emphasis color="green">(yet?)</Emphasis>
        </SlideItem>
      </div>
    </>
  ),
  notes: 'Skills discovery is the last mile problem. Hooks are the bridge until Anthropic ships native skill routing.',
};
