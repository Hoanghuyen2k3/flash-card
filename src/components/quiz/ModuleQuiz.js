import React from 'react';
import {useParams} from "react-router-dom";
import FormQuiz from  "./FormQuiz";
import Card from './Card';
import {useSelector} from 'react-redux';
import {selectQuiz} from '../../features/quizzSlice';
import { selectModule } from '../../features/moduleSlice';
import { useState } from "react";
import FormAI from './FormAI';
import QuestAI from './QuestAI';
import { selectFolder } from '../../features/folderSlice';
import "./Module.scss"
import { FaSun, FaMoon } from "react-icons/fa";

function ModuleQuiz() {
    const param = useParams();
    const [image, setImage] = useState(null);
    const quizzes = useSelector(selectQuiz);
    const folders = useSelector(selectFolder);
    const folder = param.folder ? folders.filter(f => f.id === param.folder):"";
    const quiz = quizzes.filter(q => q.module === param.module)
    const modules = useSelector(selectModule);
    const module = modules.filter(m => m.id === param.module)
    const [mode, setMode] = useState("low")
    const handleChange=(e)=>{
      setMode(e.target.value);
    }
  return (
    <div>
      <div className="moduleTitle">
          <h1 className="corner"><FaSun className="iconSun" />    {folder && folder[0].name.toUpperCase()}</h1>
          <h2 className={folder? "corner":"inMiddle"}><FaMoon className="iconMoon" />    {module[0].name.toUpperCase()}</h2>
          <select className="formMode" value={mode} onChange={handleChange}>
            <option value="low">MindCraft Mode</option>
            <option value="high">Enigma Mode</option>
            <option value="highest">QuestGenius Mode</option>
          </select>

      </div>
        
        {mode==="low"&&<FormQuiz module={param.module} image={image} setImage={setImage}/>}
        {mode==="high"&&<FormAI module={param.module} image={image} setImage={setImage}/>}
        {mode==="highest"&&<QuestAI module={param.module} image={image} setImage={setImage}/>}

        <div>
            <Card quiz={quiz} image={image} setImage={setImage} />
        </div>
        
    </div>
  )
}

export default ModuleQuiz