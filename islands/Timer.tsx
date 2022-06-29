/** @jsx h */
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

interface TimerProps {
  minutes: number;
}

let interval = 0;
const setupTimers = (setTime: any) => {
  console.log(new Date().toISOString(), "[timer.tsx]", "setting up timers");
  clearInterval(interval);
  interval = setInterval(() => {
    setTime((prevtime) => prevtime + 1000);
  }, 1000);
};

const padTime = (time: number) => {
  return time.toString().padStart(2, "0");
};

export default function Timer(props: TimerProps) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setupTimers(setTime);
  }, [props.minutes]);

  if (time >= 60_000 * props.minutes) {
    console.log(new Date().toISOString(), "[timer.tsx]", "time's up");
    alert("time's up"); // when SSR takes place and 
    setTime(0);
  }
  const date = new Date(time);
  return (
    <div>
      <p>
        {padTime(date.getMinutes())} : {padTime(date.getSeconds())}
      </p>
    </div>
  );
}
