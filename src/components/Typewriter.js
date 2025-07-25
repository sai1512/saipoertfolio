import React from "react";
import { ReactTyped } from "react-typed";

export default function Typewriter({
  strings,
  typeSpeed = 80,
  backSpeed = 40,
  backDelay = 1200,
  loop = true,
  className,
}) {
  return (
    <span className={className}>
      <ReactTyped
        strings={strings}
        typeSpeed={typeSpeed}
        backSpeed={backSpeed}
        backDelay={backDelay}
        loop={loop}
      />
    </span>
  );
}
