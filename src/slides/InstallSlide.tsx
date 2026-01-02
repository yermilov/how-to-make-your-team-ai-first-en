import { SlideDefinition } from '../types/slides';
import { CodeBlock } from '../components/CodeBlock';

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
    </>
  ),
};
