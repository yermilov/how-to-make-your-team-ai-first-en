import { SlideDefinition } from '../types/slides';
import { CodeBlock } from '../components/CodeBlock';
import claudePricing from '/claude-pricing.png?url';

export const InstallSlide: SlideDefinition = {
  id: 'install',
  content: (
    <>
      <h2>як почати?</h2>
      <CodeBlock
        language="bash"
        filename="terminal"
        code={`curl -fsSL https://claude.ai/install.sh | bash`}
      />
      <img
        src={claudePricing}
        alt="Claude pricing tiers: Free, Pro, Max"
        style={{ maxWidth: '80%', marginTop: '2rem', borderRadius: '0.5rem' }}
      />
    </>
  ),
};
