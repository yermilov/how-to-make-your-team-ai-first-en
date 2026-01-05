import { ReactNode } from 'react';

interface PointerTooltipProps {
  position: 'left' | 'right';
  visible?: boolean;
  children: ReactNode;
}

export function PointerTooltip({ position, visible = true, children }: PointerTooltipProps) {
  if (!visible) return null;

  return (
    <div className={`pointer-tooltip pointer-tooltip--${position}`}>
      {children}
      <div className="pointer-tooltip-arrow" />
    </div>
  );
}
