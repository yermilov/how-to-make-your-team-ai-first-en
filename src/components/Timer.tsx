interface TimerProps {
  seconds: number;
  isRunning: boolean;
  onStartPause: () => void;
  onReset: () => void;
}

export function Timer({ seconds, isRunning, onStartPause, onReset }: TimerProps) {
  const minutes = Math.floor(seconds / 60);

  return (
    <div className="timer">
      <span className="timer-display">{minutes} min</span>
      <button className="timer-btn" onClick={onStartPause}>
        [{isRunning ? 'pause' : 'start'}]
      </button>
      <button className="timer-btn" onClick={onReset}>
        [reset]
      </button>
    </div>
  );
}
