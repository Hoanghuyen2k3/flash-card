
import SingleCard from "./SingleCard";
import "./Card.scss"
import React from "react"
function Card({quiz, image, setImage}){
    
    return(  
        <div className="cards">
            {
                quiz&&quiz.map((e, i)=>{
                    return(
                        <SingleCard key={e.id}id={e.id} quiz={e} index ={i} image={image} setImage={setImage} />
                        
                    )
                })
            }
        </div>
    )
}
export default Card;