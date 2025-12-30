import { SlideProgressProps } from '../types/slides';

export function SlideProgress({ current, total }: SlideProgressProps) {
  return (
    <div className="slide-progress">
      <span className="slide-progress-current">{current}</span>
      <span className="slide-progress-separator">/</span>
      <span className="slide-progress-total">{total}</span>
    </div>
  );
}
