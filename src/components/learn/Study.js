import React, {useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import "./Learn.scss"
import correct from '../../audio/correct.mp3';
import error from '../../audio/error.mp3';
import "./Study.scss"
import { FaArrowRight,FaLightbulb, FaUndoAlt } from "react-icons/fa";
import { correctAns, incorrectAns } from '../../features/studyMotivation';
import { congratulations } from '../../features/congratulation';
function Study() {
    const quizzes = useOutletContext();
    
    const correctSound = new Audio(correct);
    const errorSound = new Audio(error);
    const [finish, setFinish] = useState(false);
    const [numCorrect, setNumCorrect] = useState(0);
    const [num, setNum] = useState(0);
    const [perfect, setPerfect] = useState(false);
    const [text, setText] = useState("");
    const [submit, setSubmit] = useState(false);
    const [count, setCount] = useState(0); 
    const [light, setLight] = useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(text.toLowerCase() ===quizzes[count].content.term.toLowerCase()){
            correctSound.play();
            setPerfect(true);
            setText("");
            setNumCorrect(n => n+1);
            
        }
        else {
            errorSound.play();
            setPerfect(false);
        }
        setSubmit(true);
        const randomNumber = () => Math.floor(Math.random() * 11);
        setNum(randomNumber);

    }
    const handleNext=(e)=>{
        e.preventDefault();
        if(count < quizzes.length-1){
            setCount(count =>count +1);
        }
        else {
            setFinish(true);
        }
        setPerfect(false);
        setSubmit(false);
        setText("");
        setLight(false);
        

    }
    const handleAgain=(e)=>{
        e.preventDefault();
        setText("");
        setSubmit(false);
        setLight(false)
    }
    console.log(quizzes)
    if (!quizzes || quizzes.length === 0) {
        return <div>Empty or Loading...</div>;
      }
    
  return (
    <div className="study-container">
        {
            finish&& 
            <div className="congratulation">
                <h1>SCORE {numCorrect} / {quizzes.length}</h1>
                <button onClick={()=>{
                    setFinish(false);
                    setCount(0);
                    setLight(false);
                    setNumCorrect(0);
                    setSubmit(false)
                    }
                }>Restart</button>
                <img src={congratulations[0]} alt="Animated GIF" />

            </div>
        }
        {!finish&&<>
        <div className="study-form">
            <textarea readOnly className="study-term" value={quizzes&&quizzes[count].content.define}></textarea>
            <textarea type="text" value={text} onChange={(e)=>setText(e.target.value)}></textarea>
        </div>
  
        <div className="submit">
            {!submit&&<button onClick={handleSubmit}>Submit</button>}
        </div>
            
        <div className="answer">
        {submit?
            (perfect ? (
                    <div className="perfect">
                        <p>✔️ Correct: {correctAns[num]}</p>
                        <textarea readOnly value={`${quizzes[count].content.term}\n${quizzes[count].content.define}`}></textarea>
                    </div>

                ):(
                    <div>
                        <div className="again-container">
                            <div className="lightbub" onClick={()=>setLight(l => !l)}><FaLightbulb/></div>
                            <div className="again-icon" onClick={handleAgain}><FaUndoAlt/> </div>
                        </div>
                        <div className="perfect">
                            <p>❌ Wrong: {incorrectAns[num]}</p>
                            {
                                light && (
                                    <textarea readOnly value={`Answer: \n\t${quizzes[count].content.term}\n\t${quizzes[count].content.define}`}></textarea>
                                )
                            }
                        </div>
                        
                        
                    </div>
                )):<></>}
        </div>
    
    <div className="next-container">
                <div className="next" onClick={handleNext}>Next <FaArrowRight /></div>
    </div>
    </>}


    </div>
  )
}

export default Study