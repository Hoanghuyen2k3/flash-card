import React, {useState,useEffect} from 'react'
import "./DashBoard.scss"
function DashBoard() {
    const [dayOfWeek, setDayOfWeek] = useState('');

    useEffect(() => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const today = new Date();
        const dayIndex = today.getDay(); 
        const currentDay = days[dayIndex];
        setDayOfWeek(currentDay);
    }, []);
    console.log(dayOfWeek)

  return (
    <div className="dashboard-container">
        <h1>🔥 0 day streak</h1>
        <div className="days">
        <ul>
            <li><div className="day1">Mon</div></li>
            <li><div className="day1">Tue</div></li>
            <li><div className="day1">Wed</div></li>
            <li><div className="day1">Thu</div></li>
            <li><div className="day1">Fri</div></li>
            <li><div className="day1">Sat</div></li>
            <li><div className="day1">Sun</div></li>
        </ul>
        <ul>
            <li><div className="day"></div></li>
            <li><div className="day"></div></li>
            <li><div className="day"></div></li>
            <li><div className="day"></div></li>
            <li><div className="day"></div></li>
            <li><div className="day"></div></li>
            <li><div className="day"></div></li>
        </ul>
        <ul>
            <li><div className="day"></div></li>
            <li><div className="day"></div></li>
            <li><div className="day"></div></li>
            <li><div className="day"></div></li>
            <li><div className="day"></div></li>
            <li><div className="day"></div></li>
            <li><div className="day"></div></li>
        </ul>
        <ul>
            <li><div className="day"></div></li>
            <li><div className="day"></div></li>
            <li><div className="day"></div></li>
            <li><div className="day"></div></li>
            <li><div className="day"></div></li>
            <li><div className="day"></div></li>
            <li><div className="day"></div></li>
        </ul>
        
        <ul>
            <li><div className={dayOfWeek==="Mon"?"highlight day" : "day"}></div></li>
            <li><div className={dayOfWeek==="Tue"?"highlight day" : "day"}></div></li>
            <li><div className={dayOfWeek==="Wed"?"highlight day" : "day"}></div></li>
            <li><div className={dayOfWeek==="Thu"?"highlight day" : "day"}></div></li>
            <li><div className={dayOfWeek==="Fri"?"highlight day" : "day"}></div></li>
            <li><div className={dayOfWeek==="Sat"?"highlight day" : "day"}></div></li>
            <li><div className={dayOfWeek==="Sun"?"highlight day" : "day"}></div></li>
        </ul>

        </div>
        
    </div>
  )
}

export default DashBoard