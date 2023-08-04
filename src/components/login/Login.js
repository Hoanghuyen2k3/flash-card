import React, {useState} from 'react'
import { editLogin } from '../../features/loginSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./Login.scss"
function Login() {
  const [gm, setGm] = useState("");
  const [ps, setPs] = useState("");
  const [mess, setMess] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (gm === 'demo@gmail.com' && ps === 'demo123') {
      dispatch(editLogin());
      setMess('');
      navigate('/memoritoo/home');
    } else {
      setMess('No user with those credentials found');
    }
  };
  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {mess &&<h3>{mess}</h3>}
      <form className="login" onSubmit={handleSubmit}>
        <label htmlFor="gmail">Email</label>
        <input id="gmail" type="gmail" onChange={(e)=>setGm(e.target.value)} className="gmail" placeholder="demo@gmail.com..."></input>
        <label for="pasw">Password</label>
        <input id="pasw" type="password" onChange={(e)=>setPs(e.target.value)} className="password" placeholder="demo123..."></input>
        <button type="submit" className="submit">Login</button>
      </form>
      <p>Don't have an account? Create one now</p>
    </div>
  );
}

export default Login