import { SlideDefinition } from '../types/slides';
import { CodeBlock } from '../components/CodeBlock';
import claudePricing from '/claude-pricing.png?url';

export const InstallSlide: SlideDefinition = {
  id: 'install',
  content: (
    <div className="install-slide">
      <h2>як почати?</h2>
      <p>
        <a href="https://claude.com/product/claude-code" target="_blank" rel="noopener noreferrer">
          claude.com/product/claude-code
        </a>
      </p>
      <CodeBlock
        language="bash"
        filename="terminal"
        code={`curl -fsSL https://claude.ai/install.sh | bash`}
      />
      <div className="install-slide-image-wrapper">
        <img
          src={claudePricing}
          alt="Claude pricing tiers: Free, Pro, Max"
          className="install-slide-image"
        />
      </div>
    </div>
  ),
};
