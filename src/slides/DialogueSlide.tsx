import { SlideDefinition } from '../types/slides';
import { Quote, SlideItem } from '../components/SlideElements';

export const DialogueSlide: SlideDefinition = {
  id: 'dialogue',
  content: (
    <>
      <h2 style={{ marginBottom: '2rem' }}>
        <span className="text-dim">$</span> діалог
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
          використовуйте принцип <Quote>сім раз відмір - один раз відріж</Quote>
        </SlideItem>

        <SlideItem delay={0.1}>
          за допомогою покрокового діалогу направляйте клод у правильний напрямок
        </SlideItem>

        <SlideItem delay={0.15}>
          <Quote>а подумай про ...</Quote>, <Quote>почитай тут ...</Quote>,{' '}
          <Quote>розглянь це ...</Quote>
        </SlideItem>

        <SlideItem delay={0.2}>
          для ллм-ок <Quote>найсвіжіші</Quote> <Quote>спогади</Quote>{' '}
          <Quote>найякравіші</Quote> — сформуйте їй правильне світосприйняття і
          тоді дайте задачу на вирішення останнім промптом
        </SlideItem>
      </div>
    </>
  ),
  notes: 'Dialogue principles for working with LLMs - measure twice, cut once',
};
