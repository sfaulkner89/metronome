import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default function TempoSetter({ tempo, setTempo, play }) {
  const [fineTune, setFineTune] = useState(false);
  return (
    <div className="tempoContainer">
      <div className="numberHolder">
        <h1 id="numberDisplay">{Number(tempo).toFixed(1)}</h1>
      </div>
      {play ? (
        ""
      ) : (
        <React.Fragment>
          <div className="upDownHolder">
            <button
              className="arrowButton"
              onClick={() => setTempo((tempo) => tempo + (fineTune ? 0.1 : 1))}
            >
              <IoIosArrowUp />
            </button>
            <button
              className="arrowButton"
              onClick={() => setTempo((tempo) => tempo - (fineTune ? 0.1 : 1))}
            >
              <IoIosArrowDown />
            </button>
          </div>

          <div>
            <button
              className={fineTune ? "fineOn" : "fineOff"}
              onClick={() => setFineTune((ft) => !ft)}
            >
              Fine
            </button>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
