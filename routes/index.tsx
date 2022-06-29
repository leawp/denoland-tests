/** @jsx h */
import { h } from "preact";
import Counter from "../islands/Counter.tsx";
import Timer from "../islands/Timer.tsx";

interface HomeProps {
  minutes: number;
}

export default function Home(props: HomeProps) {
  return (
    <div>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />

      <p>Go to /minutes to start timer for a specific number of minutes</p>
      <Timer minutes={props.minutes ?? 1} />
    </div>
  );
}
