import { SlideProgressProps } from '../types/slides';

export function SlideProgress({ current, total, slideId }: SlideProgressProps) {
  const percentage = Math.round((current / total) * 100);
  const remaining = 100 - percentage;
  const isContextSlide = slideId === 'context-principles';

  return (
    <div className="slide-progress">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percentage}%` }} />
      </div>
      <span className={`progress-text${isContextSlide ? ' progress-text--glow' : ''}`}>
        context left until auto-compact {remaining}%
      </span>
    </div>
  );
}
