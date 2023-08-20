import {useDispatch} from 'react-redux';
import {addQuiz} from '../../features/quizzSlice';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import { FaRegImage } from "react-icons/fa";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./QuestAI.scss"
import axios from 'axios';
function FormAI({module, setImage, image}){
    const [term, setTerm] = useState("");
    const [define, setDefine] = useState("");
    const [keywords, setKeywords] = useState("");

    const dispatch=useDispatch();
    
    const handleKeyWords=(e)=>{
        setKeywords(e.target.value)};
    const showToastMessage = () => {
        toast.success('🍀Success create new quiz 💕!', {
            position: toast.POSITION.BOTTOM_RIGHT
            });
    };
    const extractQuestionsAndAnswers = (messages) => {
        const lines = messages.split('\n');
        const questions = [];
        const answers = [];
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].trim();
          if (line.startsWith('Answer:')) {
            const answer = line.substring('Answer:'.length).trim();
            answers.push(answer);
          }
          else if (line.startsWith('Correct Answer:')){
            const answer = line.substring('Correct Answer:'.length).trim();
            answers.push(answer);
          }
          else {
            questions.push(line);       
          }
        }  
        return { questions, answers };
      };
    const handleSubmit=(e)=>{
        
        e.preventDefault();
        if(term !=="" ||define !==""){
            const quiz ={
                content: {
                    term: term,
                    define: define
                }, 
                image: image, 
                id: uuidv4(), 
                module:module ? module:"",
                star: false
            }
            dispatch(addQuiz(quiz));
            showToastMessage(); 
        }
        else{
            toast.error('Please type in Term or Define to create me 🥹!', {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        }
    }
    const handleDefine = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post('http://localhost:3003/questAI', {
            keywords: keywords
          });
          
          const { questions, answers } = extractQuestionsAndAnswers(response.data.answer);
          setTerm(questions.join('\n'));
          setDefine(answers)
    
          console.log('Answer:', response.data.answer);
        } catch (error) {
          console.error('An error occurred:', error);
        }
    
        
      };

    
    return(
        <div className="formQuiz">
            <ToastContainer />

            <form onSubmit={handleSubmit} >
                <div className="input-container questAI">
                  <div  className="quest-container inputAI">
                    <h3>Keywords: </h3>
                    <input type="text" value={keywords} onChange={handleKeyWords} placeholder="Enter term or keywords ..." />
                    <button onClick={handleDefine}>Quest me!</button>

                  </div>
                  <div className="quest-container">
                    <textarea value={term} onChange={(e)=>setTerm(e.target.value)}></textarea>
                    <textarea value={define} onChange={(e) =>setDefine(e.target.value)}></textarea>
                  </div>
                
                  

                  
                    
                </div>
                <div className="image-upload">
                    <label htmlFor="icon-button-file">
                        <div><FaRegImage className="icon" /></div>
                    </label>
                    <input  style={{ display: 'none' }} id="icon-button-file"
                type="file" onChange={(e)=>{
                    const file = e.target.files[0];
                    file &&setImage(URL.createObjectURL(e.target.files[0]))}} />
                    <input  type="text" onChange={(e)=>{setImage(e.target.value)}} placeholder="Or enter image url ..." />
                    {image && <img className="image" src={image} alt="card" />}
                </div>
                
                <button type="submit">Submit</button>

            </form>
        </div>      
    )
}
export default FormAI;