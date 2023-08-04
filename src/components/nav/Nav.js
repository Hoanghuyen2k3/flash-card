import { NavLink, Outlet, useNavigate} from "react-router-dom"
import './Nav.scss'
import { useState } from "react"
import Pomodoro from "../pomodoro/Pomodoro"
import { FaBars } from "react-icons/fa";
import { FaToggleOff,FaToggleOn  } from "react-icons/fa6";
import { selectLogin, logout } from "../../features/loginSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Nav =()=>{   
    const [isOpen, setIsOpen] = useState(false);
    const [bg, setBg] = useState(true);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const login = useSelector(selectLogin);
    const navigateToRoot = () => {
      navigate('/memoritoo/landing');
    };
      const toggleDropdown = () => {
        setIsOpen((prevOpen) => !prevOpen);
    }; 
    const handleLogout =(e)=>{
      e.preventDefault();
      dispatch(logout())
      navigate('/memoritoo/landing');
      
    }
    return(
        <div className={bg?"black":"white"}>
          <div className="header">
            <div className="container">
              <div className="nav-container">
                <div className="nav">
                  <div className="dropdown-menu" onClick={toggleDropdown}><FaBars /></div>
                  <h2 className="name" onClick={navigateToRoot}>MEMORITOO</h2>
                  <div className="link">
                    <NavLink to="home" >
                      Home
                    </NavLink>
                    <NavLink to="folder">
                      Folder
                    </NavLink>
                    <NavLink to="module">
                      Module
                    </NavLink>
                    <NavLink to="quiz">
                      Quiz
                    </NavLink>
                  </div>
                </div>
                <div className="nav-menu">
                  {
                    isOpen&& (
                      <div className="menu-link" onClick={toggleDropdown}>
                        <NavLink to="home" >
                          Home
                        </NavLink>
                        <NavLink to="folder">
                          Folder
                        </NavLink>
                        <NavLink to="module">
                          Module
                        </NavLink>
                        <NavLink to="quiz">
                          Quiz
                        </NavLink>
                      </div>
                    )
                  }

                </div>

              </div>
              <div className="icon-avatar">
                <div className="icon" onClick={()=>setBg(b =>!b)}>{bg ? <FaToggleOff/> : <FaToggleOn />}</div>
                {!login ?<button className="login" onClick={()=>navigate("/memoritoo/login")}>Login</button>:
                <>
                <div className="avatar" onClick={()=>setShow(s =>!s)}>{login&&<img src="https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg" alt="avata"/>}</div>
                {
                  show && 
                    <button className="logout" onClick={handleLogout}>
                      logout

                    </button>
                }
                
                </>}
              </div>
              
            </div>   
            <div className="pomodoro">
              <Pomodoro />
            </div>
          </div>
        <Outlet />
      </div>
    )
}
export default Nav;