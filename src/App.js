import "./App.css";
import useSound from "use-sound";
import beep from "./assets/metro.wav";
import TempoSetter from "./components/TempoSetter";
import { useState, useEffect } from "react";
import TapAndPlay from "./components/TapAndPlay";
import Metronome from "./components/Metronome";
const now = new Date().getTime();

function App() {
  const [click] = useSound(beep);
  const [tempo, setTempo] = useState(120);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    let bpm = 60000 / tempo;
    if (play) {
      var interval = setInterval(() => {
        console.log(new Date().getTime() - now);
        click();
      }, bpm);
    }
    return () => clearInterval(interval);
  }, [tempo, play, click]);

  return (
    <div className="App">
      <div className="controlContainer">
        <TempoSetter tempo={tempo} setTempo={setTempo} play={play} />
        <TapAndPlay setTempo={setTempo} setPlay={setPlay} play={play} />
      </div>
      <Metronome tempo={tempo} play={play} />
      <div id="logoHolder">
        <h1 className="logo">BeatKeeper&#8482;</h1>
      </div>
    </div>
  );
}

export default App;
