import React from 'react';
import "./LandingPage.scss"
import YouTubeVideo from './YouTubeVideo';
import {Link} from "react-router-dom"
function LandingPage() {
  return(
    <div className="landing-container">
      <Link to="/login">Get Started</Link>
      
      <div className="headingT">MEMORITO</div>
      
      <h1 class="heading">
        <span>🚀</span> <span>Welcome</span> <span>to</span> <span>Memorito</span> 
        <span>-</span>
        <span>Supercharge</span> <span>Your</span> <span>Memory!</span> <span>🧠</span> 
        <br></br>
        <span>powered</span> <span>by</span> <span>OPENAI</span>
      </h1>
      <div className="get-attention">
      
          <p>Are you tired of forgetting important information?</p>
          <p>Do you struggle to retain new knowledge?</p>
      
          <h2>Say hello to Memorito</h2>
      </div>
      <h2>How it works</h2>
      
      <div className="works-container">
        <p>🧠 AI-Powered Quizzes</p>
        <p>MindCraftMode: create quizzes manually.</p>
        <p>QuestAI Mode: AI-generated definitions.</p>
        <p>GeniusMode: multiple-choice questions powered by AI.</p>
        <YouTubeVideo videoId={"BgSgm1A1P4k"} />
      </div>
      <div className="works-container">
        <p>📖 Learn by Story</p>
        <p>Experience learning like never before with our AI-generated funny stories based on your quizzes. Learning will become an exciting adventure you won't want to miss!</p>
        <YouTubeVideo videoId={"A_RZPNCHL70"} />
      </div>
      <div className="works-container">
        <p>📚 Multiple Learning Modes</p>
        <p>Choose your favorite learning style with Memorito's versatile modes. Immerse yourself in Flashcards, jot down notes in Study Mode, or challenge yourself with fun games in Game Mode.</p>

      </div>
      <div className="works-container">
        <p>📁 Organized Learning</p>
        <p>Organize your quizzes effortlessly with our intuitive folder and module system. Dive deep into specific topics or explore a whole folder filled with exciting quizzes!</p>

      </div>
      <div className="works-container">
        <p>💡Stay Motivated</p>
        <p>Need a burst of energy? Just hit the "Generate Quote" button to receive a fresh dose of inspiration that will keep you going strong.</p>

      </div>
      <div className="works-container">
        <p>🕰️ Time Your Learning</p>
        <p>Set custom study sessions and breaks to optimize your learning efficiency. With Memorito, you're in control of your learning schedule!</p>

      </div>
      <div className="works-container">
        <p>🌟 Memorable Images</p>
        <p>Boost your memory retention by using images in your quizzes. Memorito makes it easy to attach images to your questions for an enhanced learning experience.</p>


      </div>

     

      



      

      <p>Don't let your precious knowledge slip away! Join Memorito and unlock the true potential of your memory. Start your learning journey today and become a memory master! 🌟</p>
          </div>
  )
  
}

export default LandingPage;
