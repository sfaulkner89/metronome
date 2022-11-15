import React, { useState, useRef } from "react";
import { Button } from "@mui/material";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

export default function TapAndPlay({ setTempo, setPlay, play }) {
  const [firstTap, setFirstTap] = useState(true);
  const tapTime = useRef();
  const intArr = useRef([]);
  const tapHandler = (e) => {
    let now = e.timeStamp;
    if (firstTap) {
      tapTime.current = now;
      setFirstTap(false);
    } else {
      let newInt = now - tapTime.current;
      intArr.current.push(newInt);
      const sum =
        intArr.current.reduce((a, b) => a + b, 0) / intArr.current.length;
      setTempo(60000 / sum);
      tapTime.current = now;
    }
  };

  const resetHandler = () => {
    setFirstTap(true);
    tapTime.current = undefined;
    intArr.current = [];
  };

  const playHandler = () => {
    setPlay((play) => !play);
    resetHandler();
  };

  return (
    <div className="tapAndPlayContainer">
      {play ? (
        ""
      ) : (
        <Button
          onClick={(e) => tapHandler(e)}
          style={{
            color: "black",
            fontSize: "150%",
            border: "2px solid black",
          }}
        >
          Tap
        </Button>
      )}
      <Button onClick={playHandler}>
        {play ? (
          <BsPauseFill style={{ color: "black", fontSize: "300%" }} />
        ) : (
          <BsFillPlayFill style={{ color: "black", fontSize: "300%" }} />
        )}
      </Button>
      {play ? (
        ""
      ) : (
        <Button style={{ color: "black" }} onClick={resetHandler}>
          Reset
        </Button>
      )}
    </div>
  );
}
