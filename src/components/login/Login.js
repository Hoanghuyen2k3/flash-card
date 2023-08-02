import React, {useState} from 'react'
import { editLogin } from '../../features/loginSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [gm, setGm] = useState("");
  const [ps, setPs] = useState("");
  const [mess, setMess] = useState("");
  const [login, setLogin] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (gm === 'demo@d.com' && ps === 'demo123') {
      dispatch(editLogin());
      setMess('');
      setTimeout(() => {
        navigate('/', {replace: true});
      }, 5000);
    } else {
      setMess('No user with those credentials found');
    }
  };
  return (
    <div className="Login-container">
      <h1>Sign in to your account</h1>
      {mess &&<h3>{mess}</h3>}
      <form onSubmit={handleSubmit}>
        <input type="gmail" onChange={(e)=>setGm(e.target.value)} className="gmail" placeholder="Enter your gmail..."></input>
        <input type="password" onChange={(e)=>setPs(e.target.value)} className="password" placeholder="Enter your password..."></input>
        <button type="submit" className="submit">Login</button>
        

      </form>
      {login&&<h1>hi</h1>}
      <p>Don't have an account? Create one now</p>
    </div>
  );
}

export default Login