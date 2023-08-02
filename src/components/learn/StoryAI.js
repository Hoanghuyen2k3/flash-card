import React from 'react'
import {useState} from 'react'
import { openAIkey } from '../../apikey'
import { useOutletContext } from 'react-router-dom';
import "./StoryAI.scss"
function StoryAI() {
    const quizzes = useOutletContext();
    const [title, setTitle] = useState('');
    const [bodyStory, setBody] = useState('');
    const content = quizzes.map(q=>q.content.term);
    const [imgTitle, setImgTitle] = useState();
    const contentTerm = content.filter(e => !e.includes('\n'));
    console.log(contentTerm);

    const extractBodyAndTitle = (messages) => {
      const lines = messages.split('\n');
      const body = [];
      const title = [];
        for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();     
        if (line.startsWith('Title:')) {
          const answer = line.substring('Answer:'.length).trim();
          title.push(answer);
        }
        else {
          body.push(line);     
        }
      }  
      return { body, title };
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      alert("I'm writing a story ... 5s.....");
      const options ={
        method: "POST",
        headers:{
          "Authorization": `Bearer ${openAIkey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{
            role: "user",
            content: `Write 1 full funny story less than 150 words and have a title based on these keywords: ${contentTerm.join(", ")}`,
          }],
          max_tokens: 600

        })
      }
  
      try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json();
        console.log(data.choices[0].message.content);
        const {body, title} = extractBodyAndTitle(data.choices[0].message.content); 
        setBody(body)
        setTitle(title)

        const img = await fetch('https://api.openai.com/v1/images/generations',{
        method: "POST",
        headers: {
          "Authorization": `Bearer ${openAIkey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          prompt : title.join(", "),
          n: 1,
          size:"512x512"
        })})
        const image = await img.json();
        console.log(image.data[0].url)
        setImgTitle(image.data[0].url)

      } catch (error) {
        console.error('Error fetching data:', error);
      }   
    };
    if (!quizzes || quizzes.length === 0) {
      return <div>Empty or Loading...</div>;
    }
  
    return (
      title ?
      <div className="story-container">
          
        <button onClick={handleSubmit}>New Story</button>
        <div className="story">
          <div className="img">
            {imgTitle&&<img src={imgTitle} alt={title} />}
          </div>
          <div className="content">
            {title&&<h2>{title}</h2>}
            {bodyStory&&<textarea readOnly value={bodyStory.join('\n')}></textarea>}
          </div>   
        </div>
      </div>
      :<div className="story-no">  
        <button onClick={handleSubmit}>New Story</button>
      </div>
    );
  };

export default StoryAI

