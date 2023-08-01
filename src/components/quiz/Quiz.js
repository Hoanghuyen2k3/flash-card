import FormQuiz from "./FormQuiz";
import Card from "./Card";
import { selectQuiz } from "../../features/quizzSlice";
import { useSelector } from "react-redux";
import React, {useState} from 'react';
import FormAI from './FormAI';
import QuestAI from './QuestAI';
import "./Module.scss";
const Quiz =()=>{
    const quiz= useSelector(selectQuiz)
    const [image, setImage] = useState(null);
    const [mode, setMode] = useState("low")
    const handleChange=(e)=>{
      setMode(e.target.value);
    }
    return(
        <div>
            <select className="formMode" value={mode} onChange={handleChange}>
                <option value="low">MindCraft Mode</option>
                <option value="high">Enigma Mode</option>
                <option value="highest">QuestGenius Mode</option>
            </select>
            {mode==="low"&&<FormQuiz module="" image={image} setImage={setImage}/>}
            {mode==="high"&&<FormAI module="" image={image} setImage={setImage}/>}
            {mode==="highest"&&<QuestAI module="" image={image} setImage={setImage}/>}
            <div>
                <Card quiz={quiz} image={image} setImage={setImage} />
            </div>
            

        </div>

    )
}
export default Quiz;