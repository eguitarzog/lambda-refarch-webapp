import { useEffect, useState } from "react";

const ONE_SECOND = 1000;

export default function Timer(props: ITimerProps) {
  const { duration, onTimeUp } = props;
  const [currentDuration, setCurrentDuration] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);

  console.log("render", isRunning);
  useEffect(() => {
    if (isRunning) {
      if (currentDuration > 0) {
        setTimeout(() => {
          setCurrentDuration(currentDuration - ONE_SECOND);
        }, ONE_SECOND);
      }

      if (currentDuration <= ONE_SECOND) {
        console.log("isRunning", isRunning);
        setIsRunning(false);
        onTimeUp();
      }
    }
  }, [currentDuration, isRunning, onTimeUp]);

  function start() {
    setIsRunning(true);
  }

  function stop() {
    setIsRunning(false);
  }

  return (
    <div>
      <div>{currentDuration}</div>
      <div>
        <button onClick={start}>RUN</button>
        <button onClick={stop}>STOP</button>
      </div>
    </div>
  );
}
