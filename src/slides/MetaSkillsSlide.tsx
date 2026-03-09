import { SlideDefinition } from '../types/slides';
import { SlideItem, Emphasis, SlideLink } from '../components/SlideElements';

export const MetaSkillsSlide: SlideDefinition = {
  id: 'meta-skills',
  content: (
    <>
      <h2 style={{ marginBottom: '2rem' }}>
        <span className="text-dim">$</span>{' '}
        <span className="text-green">skills</span>{' '}
        <span className="text-orange">--meta</span>
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
          first most important skill in your marketplace to create is a skill to <Emphasis color="green">create skills</Emphasis>
        </SlideItem>

        <SlideItem delay={0.18}>
          use{' '}
          <SlideLink href="https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices">
            platform.claude.com/docs/.../best-practices
          </SlideLink>{' '}
          as a starting point
        </SlideItem>

        <SlideItem delay={0.28}>
          embrace all best practices: update with learnings after every usage, feed it with deep research reports and blog posts
        </SlideItem>

        <SlideItem delay={0.38}>
          or just switch to the off-the-shelf skills-creator skill from Anthropic:{' '}
          <SlideLink href="https://github.com/anthropics/claude-plugins-official/tree/main/plugins/skill-creator">
            github.com/anthropics/claude-plugins-official
          </SlideLink>
        </SlideItem>
      </div>
    </>
  ),
  notes: 'Meta-skills are the highest leverage investment. One good skill-creation skill multiplies the quality of everything else.',
};
