import React, {useState, useEffect, useCallback } from 'react'
import { selectQuiz } from '../../features/quizzSlice';
import { useSelector } from 'react-redux';
import { Outlet,useNavigate , useParams, NavLink } from 'react-router-dom';
import { selectModule } from '../../features/moduleSlice';
import {selectFolder} from '../../features/folderSlice';
import "./Learn.scss"
import { FaSun, FaMoon} from "react-icons/fa";

function Learn() {
  const quizz = useSelector(selectQuiz);

  const modules = useSelector(selectModule);
  const folders = useSelector(selectFolder);
  const [navLinkVisible, setNavLinkVisible] = useState(false);
  const [filter, setFilter] = useState("no");
  const params = useParams();

  const moduleFilter = params.folder ? modules.filter((m) => m.folder === params.folder) : [];
  const module = params.module? [params.module] :moduleFilter.map(m => m.id);
  const folder = params.folder ? folders.filter(f => f.id === params.folder) : "";
  const moduleL = params.module ? modules.filter(m => m.id === params.module) : "";
  const quiz = quizz.filter(a => module.includes(a.module)) ;
  // console.log(quiz);
  const [quizzes, setQuizzes] = useState(quiz);
  useEffect(() => {
    // Check if 'quiz' has changed before updating 'quizzes'
    if (JSON.stringify(quiz) !== JSON.stringify(quizzes)) {
      filter === "star" ? setQuizzes(quiz.filter(q => q.star === true)) : setQuizzes(quiz);
    }
    else {
      filter === "star" ? setQuizzes(quizzes.filter(q => q.star === true)) : setQuizzes(quizzes);
    }
    console.log(quizzes);
  }, [quiz, quizzes, filter]);

  



  // const filterQuizzes = useCallback(() => {
  //   return filter === "star" ? quiz.filter(q => q.star === true) : quiz;
  // }, [filter, quiz]);

  

  const handleStar = (e) => {
    setFilter(e.target.value);
    // const filteredQuizzes = filterQuizzes();
    // setQuizzes(filteredQuizzes);
  };

  const toggleNavLink = () => {
    setNavLinkVisible(!navLinkVisible);
  };

  const navigate = useNavigate();

  useEffect(() => {
    navigate('cards');
  }, [navigate]);

  return (
    <div className="container">
      <h1 className="corner"><FaSun className="iconSun" />    {folder[0] && folder[0].name.toUpperCase()}</h1>
      <h2 className={folder? "corner":"inMiddle"}><FaMoon className="iconMoon" />    {moduleL&&moduleL[0].name.toUpperCase()}</h2>
      <div className="menu">
        <select onChange={handleStar}>
          <option value="no">All</option>
          <option value="star">Star</option>
        </select> 
        <button onClick={toggleNavLink}>{`Menu >`}</button>
        <div className="link-container">
          {navLinkVisible && (
            <div className="button">
              <NavLink onClick={toggleNavLink} to="cards">Cards</NavLink>
              <NavLink onClick={toggleNavLink} to="flashcard">Flashcard</NavLink>
              <NavLink onClick={toggleNavLink} to="study">Study</NavLink>
              <NavLink onClick={toggleNavLink} to="game">Game</NavLink>
              <NavLink onClick={toggleNavLink} to="story">AI Story</NavLink>
            </div>       
        )}  

        </div>
        
      </div>
      <div className="child">
        <Outlet context={quizzes} />      
      </div>
      

    </div>
  )
}

export default Learn;