import { NavLink, Outlet } from "react-router-dom"
import './Nav.scss'
import { useState } from "react"
import Pomodoro from "../pomodoro/Pomodoro"
import { FaBars } from "react-icons/fa";

const Nav =()=>{   
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen((prevOpen) => !prevOpen);
    }; 
    return(
        <div>
          <div className="header">
            <div className="nav-container">
              <div className="nav">
                <div className="dropdown-menu" onClick={toggleDropdown}><FaBars /></div>
                <h2 className="name">MEMORITOO</h2>
                <div className="link">
                  <NavLink to="/" >
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
                      <NavLink to="/" >
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
            <div className="pomodoro">
              <Pomodoro />
            </div>
          </div>
        <Outlet />
      </div>
    )
}
export default Nav;