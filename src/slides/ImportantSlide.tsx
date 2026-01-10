import { SlideDefinition } from '../types/slides';
import { Emphasis, SlideItem } from '../components/SlideElements';
import importantImage from '/important-slide.png?url';

export const ImportantSlide: SlideDefinition = {
  id: 'important',
  content: (
    <div className="bg-image-slide">
      <img
        src={importantImage}
        alt="Important balance between human expertise and AI"
        className="bg-image-slide__background"
      />

      <div className="bg-image-slide__content">
        <h2 style={{ marginBottom: '1.5rem' }}>
          <span className="text-orange">ВАЖЛИВО!</span>
        </h2>

        <SlideItem delay={0.05}>
          якщо ви розумієтеся в якійсь темі, то клод майже напевне розбирається
          в ній <Emphasis color="orange">гірше</Emphasis>
        </SlideItem>

        <SlideItem delay={0.12}>
          часто ви можете написати код{' '}
          <Emphasis color="orange">НАБАГАТО</Emphasis> краще за нього
        </SlideItem>

        <SlideItem delay={0.19}>
          нерідко також ви можете написати код ще і{' '}
          <Emphasis color="orange">швидше</Emphasis> за нього
        </SlideItem>

        <SlideItem delay={0.26}>
          але його цінність у тому що ви можете дати йому задачу і{' '}
          <Emphasis>переключитися на щось інше</Emphasis>
        </SlideItem>

        <SlideItem delay={0.33}>
          або запустити дві задачі в паралель двом клодам і переключитися на
          щось інше
        </SlideItem>

        <SlideItem delay={0.40}>
          або запустити чотири задачі і піти поїсти / поспати
        </SlideItem>

        <SlideItem delay={0.47}>
          в більшості випадків клод не підвищує якість чи швидкість вашої роботи
          — він підвищує <Emphasis>об'єми</Emphasis> вашої роботи
        </SlideItem>

        <SlideItem delay={0.54}>
          якщо ви запускаєте його працювати а самі просто дивитеся на термінал —
          ви скоріше за все{' '}
          <Emphasis color="orange">втрачаєте в продуктивності</Emphasis>
        </SlideItem>

        <SlideItem delay={0.61}>
          <Emphasis>єдиний важливий виняток</Emphasis> — технології в яких ви
          нічого не розумієте, тут ви можете виграти від годин до тижнів
        </SlideItem>
      </div>
    </div>
  ),
  notes:
    'Important reality check - Claude is not better than you in your domain, value is in parallelization and delegation, watching Claude work is often counterproductive, exception is unfamiliar technologies',
};
