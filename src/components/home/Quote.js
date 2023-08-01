import React from 'react';
function Quote(props){
    const {quote, data} = props;
    return(
        <figure className="quote-box">
            <blockquote id="text"><h2>{data.quote}</h2></blockquote>
            <figcaption id="author">__{data.author}__</figcaption>
            <div className="social">          
                <button id="new-quote" onClick={quote}>Motivate Me !</button>
            </div>
            
        </figure>

    )
}
export default Quote;