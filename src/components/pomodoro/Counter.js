import React from 'react';
import {FaArrowUp, FaArrowDown} from "react-icons/fa";
function Counter({setRemainder, count, name, setCount, play}){
    
    const handleUP=(e)=>{
        e.preventDefault();
        if(play===false){
            if(count.minute ===60){
                return;
            }
            
            else{
                setCount((count)=>{
                return({
                    ...count,
                    minute: count.minute+ 1,
                    second:0
                })
            }); 
            if(count.name==="session" ){

             setRemainder(()=>{
                return({
                    name: "session",
                    minute: count.minute+ 1,
                    second:0
                })
            })
        }         
        }}

        
    }
    const handleDown=(e)=>{
        e.preventDefault();
        if(play ===false ){
            if(count.minute ===0){
                return;

            }
            else{
                setCount((count)=>{
                    return({
                        ...count,
                        minute: count.minute - 1,
                        second:0
                    })
                });
                if(count.name==="session"){

                    setRemainder(()=>{
                    return({
                        name: "session",
                        minute: count.minute- 1,
                        second:0
                    })
                })}    

            }
            

        }
        
    }
    
    return(
        <div className="counter">
            <h3>{name}</h3>
            <div className="number">
                <div className="icon" onClick={handleDown}><FaArrowDown className="icon" /></div>
                <div >{count.minute}</div>
                <div className="icon" onClick={handleUP}><FaArrowUp className="icon" /></div>
            </div>
            
        </div>

    )
}
export default Counter;
