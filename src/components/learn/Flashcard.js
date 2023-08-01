import { useOutletContext } from "react-router-dom"
import React, {useState } from 'react'
import { BsShuffle, BsChevronRight, BsChevronLeft, BsFillVolumeDownFill, BsFillVolumeMuteFill } from "react-icons/bs";
import { FaStar,FaTools,  FaRegStar, FaAlignCenter, FaAlignLeft, FaAlignRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { editQuiz } from '../../features/quizzSlice';
import "./Flashcard.scss"
function Flashcard() {
    const dispatch = useDispatch();
    const quizzes = useOutletContext();
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false)
    const [speak, setSpeak] = useState(false);
    const [op, setOp]= useState(false);
    const [align, setAlign] = useState("center");
    const handleStar =(e)=>{
        e.preventDefault();
        dispatch(
          editQuiz({
            index: count,
            newQuiz: {
              id: quizzes[count].id,
              image: quizzes[count].image,
              content: quizzes[count].content,
              module: quizzes[count].module,
              star: !quizzes[count].star
            },
          })
        );
      }

    const handleToggle =(e)=>{
        e.preventDefault();
        setToggle(toggle =>!toggle);
    }
    const handleReadClick = (textToRead) => {
        if ('speechSynthesis' in window) {
          if (!speak) {
            const utterance = new SpeechSynthesisUtterance(textToRead);
            window.speechSynthesis.speak(utterance);
            utterance.onend = () => {
              setSpeak(false); 
            };
            setSpeak(true);
          } else {
            window.speechSynthesis.cancel(); 
            setSpeak(false);
          }
        } else {
          alert('Web Speech API is not supported in this browser.');
        }
      };
      if (!quizzes || quizzes.length === 0) {
        return <div>Empty or Loading...</div>;
      }
  return (
    <div className="container-flashcard">
      
        {
          quizzes.length>0&&quizzes[count]?
            <div>
              <div className= "flip" key={quizzes[count].id}>
                <div className="s icon" onClick={()=>{
                    if(count === 0){
                        return count;
                    }
                    else {
                        setCount(count =>count -1)
                    }
                }}><BsChevronLeft/></div>
                {
                  toggle?
                  <>
                    <textarea readOnly value={quizzes[count].content.term} className={`c ${align}`}></textarea>
                    <div className="v icon" onClick={() =>handleReadClick(quizzes[count].content.term)}>{ !speak ?<BsFillVolumeDownFill /> : <BsFillVolumeMuteFill />}</div>

                  </>: 
                  <>
                    <textarea readOnly value={quizzes[count].content.define} className={`c ${align}`}></textarea> 
                    <img className="img" src={quizzes[count].image} alt="illustration" />
                    <div className="v icon" onClick={() =>handleReadClick(quizzes[count].content.define)}>{ !speak ?<BsFillVolumeDownFill /> : <BsFillVolumeMuteFill />}</div>

                  </>
                }
              
              <div className="t icon" onClick={handleToggle}><BsShuffle/></div>
              <div className="w icon" onClick={handleStar} >
              {quizzes[count].star ? <FaStar className="star" /> :<FaRegStar />}
              </div> 
              <div className="toolbar-container d">
                <div className="icon" onClick={()=>setOp(op =>!op)}><FaTools /></div>
                <div className="tools">
                  {
                    op&&(
                      <div className="toolbar">
                        <div className="icon" onClick={()=>setAlign("left")}><FaAlignLeft /></div>
                  
                        <div className="icon" onClick={()=>setAlign("center")}><FaAlignCenter /></div>
                        <div className="icon" onClick={()=>setAlign("right")}><FaAlignRight /></div>
                      </div>
                    )
                  }

                </div>
                
                
              </div>           

              <div className="r icon" onClick={()=>{
                  if(count ===quizzes.length - 1){
                      return count;
                  }
                  else {
                      setCount(count => count +1)
                  }
              }}><BsChevronRight/></div>

            </div>
          </div>:<></>
        } 
               
    </div>
  )
}

export default Flashcard