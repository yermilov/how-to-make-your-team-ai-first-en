import { SlideDefinition } from '../types/slides';
import llmInfographic from '/llm-theory-infographic.png?url';

export const TheorySlide: SlideDefinition = {
  id: 'theory',
  content: (
    <>
      <h2>тепер трохи теорії</h2>
      <div className="theory-image-container">
        <img src={llmInfographic} alt="How LLMs work: context + prompt → continuation" />
      </div>
    </>
  ),
  notes: 'LLM has vast knowledge. Input = context + prompt. Context biases retrieval (our focus), prompt directs action (easy).',
};
