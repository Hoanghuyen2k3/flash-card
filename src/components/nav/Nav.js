import { NavLink, Outlet, Link , useNavigate} from "react-router-dom"
import './Nav.scss'
import { useState } from "react"
import Pomodoro from "../pomodoro/Pomodoro"
import { FaBars } from "react-icons/fa";
import { FaToggleOff,FaToggleOn  } from "react-icons/fa6";
const Nav =()=>{   
    const [isOpen, setIsOpen] = useState(false);
    const [bg, setBg] = useState(false);
    const navigate = useNavigate();

    const navigateToRoot = () => {
      navigate('/');
    };
      const toggleDropdown = () => {
        setIsOpen((prevOpen) => !prevOpen);
    }; 
    return(
        <div className={bg?"black":"white"}>
          <div className="header">
            <div className="container">
              <div className="nav-container">
                <div className="nav">
                  <div className="dropdown-menu" onClick={toggleDropdown}><FaBars /></div>
                  <h2 className="name" onClick={navigateToRoot}>MEMORITOO</h2>
                  <div className="link">
                    <NavLink to="/home" >
                      Home
                    </NavLink>
                    <NavLink to="/folder">
                      Folder
                    </NavLink>
                    <NavLink to="/module">
                      Module
                    </NavLink>
                    <NavLink to="/quiz">
                      Quiz
                    </NavLink>
                  </div>
                </div>
                <div className="nav-menu">
                  {
                    isOpen&& (
                      <div className="menu-link" onClick={toggleDropdown}>
                        <NavLink to="/home" >
                          Home
                        </NavLink>
                        <NavLink to="/folder">
                          Folder
                        </NavLink>
                        <NavLink to="/module">
                          Module
                        </NavLink>
                        <NavLink to="/quiz">
                          Quiz
                        </NavLink>
                      </div>
                    )
                  }

                </div>

              </div>
              <div className="icon" onClick={()=>setBg(b =>!b)}>{bg ? <FaToggleOff/> : <FaToggleOn />}</div>
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