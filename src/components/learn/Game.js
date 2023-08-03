import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Game.scss"
function Game() {
  const quizzes = useOutletContext();
  const [game, setGame] = useState([]);
  const [define, setDefine] = useState([]);
  const [match, setMatch] = useState([]);
 
  const generateRandomNumbers = (length, min, max) => {
    const randomNumbers = [];
    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      randomNumbers.push(randomNumber);
    }
    return randomNumbers;
  };
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleStart =(e) => {
    e.preventDefault();
    const length = quizzes.length > 8 ? 8 : quizzes.length;
    const randomIndices = generateRandomNumbers(length, 0, quizzes.length);
    setGame(randomIndices);
    setDefine(shuffleArray(randomIndices));
  };
  const handleMatch=(obj)=>{
    if(match.length ===1){
        if(match[0].term && obj.define){
            if(match[0].term ===obj.define){
                toast.success('🍀Welldone 💕!', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 1000
                    });
                setGame(g=>[...g.slice(0, match[0].index),100, ...g.slice(match[0].index+1)])
                setDefine(g => [...g.slice(0, obj.index),100, ...g.slice(obj.index+1)] )
            }
            else {
                toast.error('Oh oh 🥹!', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 1000
                });
            }
        }
        else if(match[0].define && obj.term){
            if(match[0].define ===obj.term){
                toast.success('🍀Welldone 💕!', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 1000
                    });
                setDefine(g => [...g.slice(0, match[0].index),100, ...g.slice(match[0].index+1)])
                setGame(g => [...g.slice(0, obj.index),100, ...g.slice(obj.index+1)] )
            }
            else {
                toast.error('Oh oh 🥹!', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 1000
                });
            }
        }
        else {
            toast.error('Oh oh 🥹!', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1000
            });
        }
        setMatch([])
    }
    else {
        setMatch(match=>[...match,obj])
    }
  }
  if (!quizzes || quizzes.length === 0) {
    return <div>Empty or Loading...</div>;
  }

  return (
    <div className="game-container">
        <ToastContainer />
      <button onClick={handleStart}>Start Game</button>
      <div className="game">
        {game&&game.map((index, i) => (
            <div className={`termCard${i} card-game`} key={`term${i}`} onClick={() => handleMatch({ term: quizzes[index]?.id, index: i })}>

            <p>{quizzes[index]?.content?.term}</p>
            </div>
        ))}
        {define&&define.map((index, i) => (
            <div className={`defineCard${i} card-game`} key={`define${i}`} onClick={() => handleMatch({ define: quizzes[index]?.id, index: i })}>
            <p>{quizzes[index]?.content?.define}</p>
            </div>
        ))}
        </div>

    </div>
  );
}

export default Game;


