import React, { useState, useEffect } from 'react';
import { FaPauseCircle, FaPlayCircle, FaCompressArrowsAlt, FaExpandArrowsAlt } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import Counter from './Counter';
import "./Pomodoro.scss"

function Pomodoro() {
  const [full, setFull] = useState(false);
  const [br, setBr] = useState({
    name: "break",
    minute: 5,
    second: 0
  });
  const [session, setSession] = useState({
    name: "session",
    minute: 25,
    second: 0
  });
  const [remainder, setRemainder] = useState({
    name: "session",
    minute: 25,
    second: 0
  });

  const [play, setPlay] = useState(false);

  
  useEffect(() => {
    let timer;
    const audio = new Audio("https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav");

    const reset = (name) => {
        if (name === "break") {
          setRemainder({ ...session });
        } else {
          setRemainder({ ...br });
        }
      }
  
    const showTime = (r, setR) => {
      if (r.second < 3 && r.minute === 0) {
        console.log("end");
        reset(r.name);
        audio.play();
      } else if (r.second === 0) {
        setR(remain => ({
          ...remain,
          minute: remain.minute - 1,
          second: 59
        }));
      } else {
        setR(remain => ({
          ...remain,
          second: remain.second - 1
        }));
      }
    };
  
    if (play) {
      timer = setTimeout(() => showTime(remainder, setRemainder), 1000);
    }
  
    return () => clearTimeout(timer); // Cleanup the previous timeout
  }, [play, remainder, br, session]);
  



  const handleClick = (e) => {
    e.preventDefault();
    setPlay(play => !play);
  }

  const handleRestart = (e) => {
    e.preventDefault();
    if (!play) {
      setSession({
        name: "session",
        minute: 25,
        second: 0
      });
      setBr({
        name: "break",
        minute: 5,
        second: 0
      });
      setRemainder({
        name: "session",
        minute: 25,
        second: 0
      });
    }
  }

  const formatSecond = (s) => {
    if (s === 60) {
      return "00";
    } else if (s < 10) {
      return `0${s}`;
    } else {
      return s;
    }
  }

  return (
    <div className="Pomodoro">
      <div className={remainder.minute <= 1 ? "break red" : "break normal"}>
        <h1>{`${remainder.minute} : ` + formatSecond(remainder.second)}</h1>
      </div>
      <div className="controler">
        {
          play ? <div className="icon c" onClick={handleClick}><FaPauseCircle /></div> : <div className="icon c" onClick={handleClick}><FaPlayCircle /></div>
        }
        <div className="icon c" onClick={handleRestart}><VscDebugRestart /></div>
        {
          full ? <div className="icon c" onClick={() => setFull(full => !full)}><FaCompressArrowsAlt /></div> :
            <div className="icon c" onClick={() => setFull(full => !full)}><FaExpandArrowsAlt /></div>
        }
      </div>
      {
        full && (
          <div className="setTime">
            <Counter setRemainder={setRemainder} name="Session" count={session} setCount={setSession} play={play} />
            <Counter setRemainder={setRemainder} name="Break" count={br} setCount={setBr} play={play} />
          </div>)
      }
    </div>
  );
}

export default Pomodoro;
