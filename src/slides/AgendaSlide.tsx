import agendaEngineerImage from '/agenda-engineer.png?url';
import agendaTeamImage from '/agenda-team.png?url';
import agendaOrgImage from '/agenda-org.png?url';
import { SlideDefinition } from '../types/slides';

function AgendaImageSlide({
  src,
  alt,
  index,
  desc,
}: {
  src: string;
  alt: string;
  index: number;
  desc: string;
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.25rem',
        width: '100%',
      }}
    >
      <h2 style={{ marginBottom: 0 }}>
        <span className="text-dim">$</span> ./talk{' '}
        <span className="text-orange">--help</span>
        <span className="text-dim" style={{ fontSize: '1.5rem', marginLeft: '1.5rem' }}>
          [{index}/3] {desc}
        </span>
      </h2>

      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{
          maxWidth: '100%',
          maxHeight: 'calc(var(--vh-full) - 240px)',
          objectFit: 'contain',
          borderRadius: '8px',
          border: '1px solid var(--terminal-border)',
          boxShadow: '0 0 30px rgba(126, 231, 135, 0.1)',
        }}
      />
    </div>
  );
}

export const AgendaSlides: SlideDefinition[] = [
  {
    id: 'agenda-engineer',
    content: (
      <AgendaImageSlide
        src={agendaEngineerImage}
        alt="AI-First Engineer"
        index={1}
        desc="individual mastery"
      />
    ),
  },
  {
    id: 'agenda-team',
    content: (
      <AgendaImageSlide
        src={agendaTeamImage}
        alt="AI-First Team"
        index={2}
        desc="collective workflows"
      />
    ),
  },
  {
    id: 'agenda-org',
    content: (
      <AgendaImageSlide
        src={agendaOrgImage}
        alt="AI-First Organization"
        index={3}
        desc="culture & process"
      />
    ),
  },
];
