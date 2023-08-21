import {useDispatch} from 'react-redux';
import {addQuiz} from '../../features/quizzSlice';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import { FaRegImage } from "react-icons/fa";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import "./FormAI.scss";
import Loading from '../loading/Loading';
function FormAI({module, setImage, image}){
    const [term, setTerm] = useState("");
    const [define, setDefine] = useState("");
    const [loading, setLoading] = useState(false);

    const dispatch=useDispatch();
    
    const handleTerm=(e)=>{
        setTerm(e.target.value)};
    const showToastMessage = () => {
        toast.success('🍀Success create new quiz 💕!', {
            position: toast.POSITION.BOTTOM_RIGHT
            });
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
            setLoading(true);
            const response = await axios.post('https://memoritoo-server.onrender.com/formAI', {
              term: term
            });
            setDefine(response.data.answer);
        
            console.log('Answer:', response.data.answer);
          } catch (error) {
            console.error('An error occurred:', error);
          }
          finally{
            setLoading(false)
          }
        
    
        
      };
    return(
        <div className="formQuiz">
            <ToastContainer />
            {
                loading ? <Loading/>:(
                    <form onSubmit={handleSubmit} >
                <div className="input-container formAI">
    
                    <div className="term">
                        <label>Term: </label>
                        <input type="text" value={term} onChange={handleTerm}  placeholder="Enter Term ..." />       
                        <button onClick={handleDefine}>Define me!</button>

                    </div>
                    <div className="define-container">
                        <label>Define: </label>
                        <textarea value={define} onChange={(e)=>setDefine(e.target.value)}></textarea>

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

                )
            }

            
        </div>
        
    )
}
export default FormAI;