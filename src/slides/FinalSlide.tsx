import { SlideDefinition } from '../types/slides';
import { SlideItem, Emphasis, SlideLink } from '../components/SlideElements';
import linkedinQr from '/linkedin-qr.jpeg?url';

export const FinalSlide: SlideDefinition = {
  id: 'final',
  content: (
    <>
      <h2 style={{ marginBottom: '2rem', textAlign: 'center', color: 'var(--terminal-blue)' }}>
        compacting the conversation...
      </h2>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'var(--space-3xl)',
          width: '100%',
          paddingBottom: 'var(--space-xl)',
        }}
      >
        {/* Left column - bullets */}
        <div
          style={{
            flex: 1,
            maxWidth: '650px',
            textAlign: 'left',
          }}
        >
          <SlideItem delay={0.05}>
            не обмежуйте себе образом автокомпліта чи код генератора,
            імпровізуйте, спілкуйтеся наче з{' '}
            <Emphasis color="green">партнером в чаті</Emphasis>
          </SlideItem>

          <SlideItem delay={0.10}>
            зареєструйтеся в твіттері (хоч ілон маск і лох), слідкуйте за
            важливими АІ-інженерами:{' '}
            <SlideLink href="https://x.com/bcherny">@bcherny</SlideLink>,{' '}
            <SlideLink href="https://x.com/trq212">@trq212</SlideLink>,{' '}
            <SlideLink href="https://x.com/ClaudeCodeLog">@ClaudeCodeLog</SlideLink>,{' '}
            <SlideLink href="https://x.com/mitchellh">@mitchellh</SlideLink>,{' '}
            <SlideLink href="https://x.com/steipete">@steipete</SlideLink>
          </SlideItem>

          <SlideItem delay={0.15}>
            лайкайте твіти про клод код щоб натренувати алгоритм, але фільтруйте
            хайп і пустий трьоп
          </SlideItem>

          <SlideItem delay={0.20}>
            пробуйте нові підходи, але адаптуйте їх до своїх потреб
          </SlideItem>

          <SlideItem delay={0.25}>
            використовуйте клод код щоб збільшити свій{' '}
            <Emphasis color="green">throughput</Emphasis> а не{' '}
            <Emphasis color="orange">latency</Emphasis>
          </SlideItem>

          <SlideItem delay={0.30}>
            пишіть мені в лінкедіні{' '}
            <span style={{ color: 'var(--terminal-blue)' }}>→</span>
          </SlideItem>
        </div>

        {/* Right column - QR code */}
        <img
          src={linkedinQr}
          alt="LinkedIn QR code - Yarik Yermilov"
          style={{
            flexShrink: 0,
            maxWidth: '600px',
            maxHeight: 'calc(100vh - 180px)',
            objectFit: 'contain',
            borderRadius: 'var(--input-border-radius)',
            border: '2px solid var(--terminal-border)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            opacity: 0,
            animation: 'slideItemFadeIn 0.5s ease-out forwards',
            animationDelay: '0.35s',
          }}
        />
      </div>
    </>
  ),
  notes:
    'Final slide - closing thoughts: think beyond autocomplete, follow AI engineers on Twitter, filter hype, adapt approaches to your needs, focus on throughput not latency, connect on LinkedIn',
};
