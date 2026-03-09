import { SlideDefinition } from '../types/slides';
import { SlideItem, Emphasis } from '../components/SlideElements';

export const SkillMarketplaceSlide: SlideDefinition = {
  id: 'skill-marketplace',
  content: (
    <>
      <h2 style={{ marginBottom: '2rem' }}>
        <span className="text-dim">$</span>{' '}
        <span className="text-green">skills</span>{' '}
        <span className="text-orange">--marketplace</span>
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
          first thing you would need to make it work is a way to distribute a skill
        </SlideItem>

        <SlideItem delay={0.15}>
          if you have exactly ONE repository you may commit skills there, but even for monorepo organizations this is rarely the case
        </SlideItem>

        <SlideItem delay={0.25}>
          at Superhuman, I have built a system that clones a github repo with the skills, symlinks it to user <code>.claude</code> directory and periodically fetches updates from remote
        </SlideItem>

        <SlideItem delay={0.35}>
          later Anthropic introduced <Emphasis color="green">marketplaces</Emphasis> which basically works exactly like that but natively
        </SlideItem>

        <SlideItem delay={0.40}>
          create ONE central internal marketplace for skills inside your organization
        </SlideItem>

        <SlideItem delay={0.45}>
          use plugins for <Emphasis color="orange">namespacing</Emphasis> — every user can select which plugins to install
        </SlideItem>
      </div>
    </>
  ),
  notes: 'Distribution is the unsexy but critical part. Without a marketplace, skills stay siloed. With one, they compound.',
};
