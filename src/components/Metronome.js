import React, { useEffect, useRef } from "react";
import { AiTwotoneCheckCircle } from "react-icons/ai";

export default function Metronome({ tempo, play }) {
  const dotArray = new Array(19).fill(1);
  const duration = (60000 * 2) / tempo;
  const dotRef = useRef();
  const metRef = useRef();

  useEffect(() => {
    if (dotRef.current) {
      dotRef.current.style.animation = "none";
      const offset = dotRef.current.offsetHeight;
      dotRef.current.style.animation = null;
    }
  }, [play]);
  return (
    <div className="metronomeContainer" ref={metRef}>
      {play
        ? dotArray.map((dot, i) => (
            <AiTwotoneCheckCircle
              className="theDot"
              ref={dotRef}
              style={{
                animationDelay: `${i * ((1 / tempo) * 1000)}ms`,
                animationDuration: play ? `${duration}ms` : "",
                opacity: `${100 - i * 5}%`,
                margin: 0,
              }}
            />
          ))
        : ""}
    </div>
  );
}
