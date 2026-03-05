import { ReactNode } from 'react';

interface OnboardingTooltipProps {
  visible?: boolean;
}

export function OnboardingTooltip({ visible = true }: OnboardingTooltipProps) {
  if (!visible) return null;

  return (
    <div className="onboarding-tooltip">
      <div className="onboarding-tooltip-header">
        <span className="onboarding-tooltip-icon">?</span>
        <span className="onboarding-tooltip-title">Navigation</span>
      </div>
      <ul className="onboarding-tooltip-list">
        <li>
          <code>next</code> or <code>n</code> — Next slide
        </li>
        <li>
          <code>prev</code> or <code>p</code> — Previous slide
        </li>
        <li>
          Number (e.g. <code>5</code>) — Go to slide
        </li>
        <li>Arrow keys work too!</li>
      </ul>
    </div>
  );
}

interface ContextTooltipProps {
  visible?: boolean;
  children: ReactNode;
}

export function ContextTooltip({ visible = true, children }: ContextTooltipProps) {
  if (!visible) return null;

  return (
    <div className="onboarding-tooltip">
      {children}
    </div>
  );
}
