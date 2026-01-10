import { useEffect, useState, useRef } from 'react';
import { SlideDefinition } from '../types/slides';

const PROMPT_URL = 'https://raw.githubusercontent.com/marckrenn/claude-code-changelog/refs/heads/main/cc-prompt.md';

function SystemPromptContent() {
  const [content, setContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Fetch content on mount
  useEffect(() => {
    fetch(PROMPT_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.text();
      })
      .then((text) => {
        setContent(text);
      })
      .catch(() => {
        setError('CONNECTION_REFUSED: Unable to establish link');
      });
  }, []);

  // Start auto-scroll after content loads
  useEffect(() => {
    if (!content || !contentRef.current || !containerRef.current) return;

    // Small delay before starting scroll for dramatic effect
    const startDelay = setTimeout(() => {
      setIsScrolling(true);
    }, 800);

    return () => clearTimeout(startDelay);
  }, [content]);

  // Loading state - terminal boot sequence
  if (!content && !error) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '60vh',
          gap: '1.5rem',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1.1rem',
            color: 'var(--terminal-orange)',
            textShadow: '0 0 10px var(--terminal-orange-glow)',
            animation: 'terminalPulse 1.5s ease-in-out infinite',
          }}
        >
          <span style={{ opacity: 0.6 }}>[</span>
          INITIALIZING SECURE CONNECTION
          <span style={{ opacity: 0.6 }}>]</span>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
          }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              style={{
                width: '8px',
                height: '8px',
                background: 'var(--terminal-orange)',
                boxShadow: '0 0 8px var(--terminal-orange-glow)',
                animation: 'loadingDot 1.2s ease-in-out infinite',
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            color: 'var(--terminal-white-muted)',
            letterSpacing: '0.1em',
          }}
        >
          RETRIEVING SYSTEM PROMPT...
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '60vh',
          gap: '1rem',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1.2rem',
            color: 'var(--terminal-red)',
            textShadow: '0 0 10px var(--terminal-red-glow)',
          }}
        >
          ERROR
        </div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.9rem',
            color: 'var(--terminal-white-muted)',
          }}
        >
          {error}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="system-prompt-container"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '900px',
        height: 'calc(100vh - 300px)',
        margin: '0 auto',
        overflow: 'hidden',
        borderRadius: '8px',
        background: 'linear-gradient(180deg, var(--terminal-bg) 0%, var(--terminal-bg-secondary) 100%)',
        border: '1px solid var(--terminal-border)',
        boxShadow: `
          0 0 40px rgba(0, 0, 0, 0.5),
          inset 0 0 80px rgba(0, 0, 0, 0.3),
          0 0 2px var(--terminal-orange-glow)
        `,
      }}
    >
      {/* CRT scan lines overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 0, 0, 0.04) 2px,
            rgba(0, 0, 0, 0.04) 4px
          )`,
          pointerEvents: 'none',
          zIndex: 10,
        }}
      />

      {/* Top fade gradient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '60px',
          background: 'linear-gradient(to bottom, var(--terminal-bg) 0%, transparent 100%)',
          zIndex: 5,
          pointerEvents: 'none',
        }}
      />

      {/* Bottom fade gradient */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '80px',
          background: 'linear-gradient(to top, var(--terminal-bg-secondary) 0%, transparent 100%)',
          zIndex: 5,
          pointerEvents: 'none',
        }}
      />

      {/* Scrolling content */}
      <div
        ref={contentRef}
        className={isScrolling ? 'system-prompt-scroll' : ''}
        style={{
          padding: '2rem 2.5rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.85rem',
          lineHeight: '1.7',
          color: 'var(--terminal-white)',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          textAlign: 'left',
          textShadow: '0 0 8px rgba(240, 136, 62, 0.15)',
        }}
      >
        {/* Header decoration */}
        <div
          style={{
            color: 'var(--terminal-orange)',
            marginBottom: '1.5rem',
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            opacity: 0.8,
          }}
        >
          {'═'.repeat(60)}
          <br />
          ░░░ SYSTEM PROMPT - CLAUDE CODE v1.0.33 ░░░
          <br />
          {'═'.repeat(60)}
        </div>

        {/* Actual content */}
        <div style={{ opacity: 0.95 }}>{content}</div>

        {/* Footer decoration */}
        <div
          style={{
            color: 'var(--terminal-green)',
            marginTop: '2rem',
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            opacity: 0.7,
          }}
        >
          <br />
          {'─'.repeat(60)}
          <br />
          [END OF TRANSMISSION]
          <br />
          {'─'.repeat(60)}
        </div>
      </div>

      {/* Subtle vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0, 0, 0, 0.4) 100%)',
          pointerEvents: 'none',
          zIndex: 8,
        }}
      />

      {/* Corner decorations */}
      <div
        style={{
          position: 'absolute',
          top: '8px',
          left: '8px',
          width: '12px',
          height: '12px',
          borderLeft: '2px solid var(--terminal-orange)',
          borderTop: '2px solid var(--terminal-orange)',
          opacity: 0.5,
          zIndex: 15,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          width: '12px',
          height: '12px',
          borderRight: '2px solid var(--terminal-orange)',
          borderTop: '2px solid var(--terminal-orange)',
          opacity: 0.5,
          zIndex: 15,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '8px',
          left: '8px',
          width: '12px',
          height: '12px',
          borderLeft: '2px solid var(--terminal-orange)',
          borderBottom: '2px solid var(--terminal-orange)',
          opacity: 0.5,
          zIndex: 15,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '8px',
          right: '8px',
          width: '12px',
          height: '12px',
          borderRight: '2px solid var(--terminal-orange)',
          borderBottom: '2px solid var(--terminal-orange)',
          opacity: 0.5,
          zIndex: 15,
        }}
      />
    </div>
  );
}

export const SystemPromptSlide: SlideDefinition = {
  id: 'system-prompt',
  content: (
    <>
      <style>
        {`
          @keyframes terminalPulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.6; }
          }

          @keyframes loadingDot {
            0%, 100% {
              transform: scale(1);
              opacity: 0.4;
            }
            50% {
              transform: scale(1.4);
              opacity: 1;
            }
          }

          @keyframes systemPromptScroll {
            0% {
              transform: translateY(0);
            }
            /* Speed increases monotonically: 0.1 → 0.4 → 0.75 → 1.25 → 2.5 */
            20% {
              transform: translateY(-2%);
            }
            40% {
              transform: translateY(-10%);
            }
            60% {
              transform: translateY(-25%);
            }
            80% {
              transform: translateY(-50%);
            }
            100% {
              transform: translateY(calc(-100% + calc(100vh - 300px)));
            }
          }

          .system-prompt-scroll {
            animation: systemPromptScroll 90s linear forwards;
          }
        `}
      </style>

      <h2 style={{ marginBottom: '1.5rem' }}>
        <span className="text-dim">$</span> системний промпт
      </h2>

      <SystemPromptContent />
    </>
  ),
};
