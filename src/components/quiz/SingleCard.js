import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaRegEdit, FaRegImage, FaRegTrashAlt,FaStar, FaRegStar } from 'react-icons/fa';
import { removeQuiz, editQuiz } from '../../features/quizzSlice';
import {BsFillVolumeDownFill, BsFillVolumeMuteFill } from "react-icons/bs";

import "./Card.scss"
function SingleCard({ id, quiz, index, image, setImage }) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [term, setTerm] = useState(quiz.content.term);
  const [define, setDefine] = useState(quiz.content.define);
  const [speak, setSpeak] = useState(false);
  
  const handleTerm = (e) => {
    setTerm(e.target.value);
  };

  const handleDefine = (e) => {
    setDefine(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
    dispatch(
      editQuiz({
        index: index,
        newQuiz: {
          id: quiz.id,
          image: image? image: quiz.image,
          content: {
            term: term,
            define: define,
          },
          module: quiz.module,
          star: quiz.star
        },
      })
    );
  };
  const handleStar =(e)=>{
    e.preventDefault();
    dispatch(
      editQuiz({
        index: index,
        newQuiz: {
          id: quiz.id,
          image: quiz.image,
          content: quiz.content,
          module: quiz.module,
          star: !quiz.star
        },
      })
    );
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

  return (
    
      edit === true ? (
        <form className="new" onSubmit={handleSubmit}>
              <textarea type="text" onChange={handleTerm} value={term} />
              <textarea type="text" onChange={handleDefine} value={define} />
          <div className="image-upload">
            <label htmlFor="icon-button-file">
              <div>
                <FaRegImage className="icon" />
              </div>
            </label>
            <input  style={{ display: 'none' }} id="icon-button-file"
                type="file" onChange={(e)=>{
                    const file = e.target.files[0];
                    file &&setImage(URL.createObjectURL(e.target.files[0]))}} />
            <input type="text" onChange={(e)=>{setImage(e.target.value)}} placeholder="Or enter image url ..." />

            {image && <img className="image" src={image} alt="card" />}
          </div>
          <button type="submit">✔️</button>
        </form>
      ) : (
        <div key={id} className="single-card">
          <div className="contents">
            <textarea className="content" readOnly value={quiz.content.term}></textarea>
            <div className="content">{quiz.content.define}</div>
            {quiz.image && <img className="image" src={quiz.image} alt="card" />}
          </div>
          <div className="adjust-button">
            <button onClick={() =>handleReadClick(quiz.content.term +"     "+ quiz.content.define)}>{ !speak ?<BsFillVolumeDownFill /> : <BsFillVolumeMuteFill />}</button>
            <button onClick={() => setEdit(true)}>
              <FaRegEdit />
            </button>
            <button onClick={handleStar}>
              {quiz.star ? <FaStar className="star" /> :<FaRegStar />}
            </button>
            <button onClick={() => dispatch(removeQuiz(quiz))}><FaRegTrashAlt /></button>
          </div>
        </div>
      )
   
  );
}

export default SingleCard;
