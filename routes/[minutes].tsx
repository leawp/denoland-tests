/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import Home from "./index.tsx";

export default function Greet(props: PageProps) {
  return <Home minutes={props.params.minutes} />;
}
