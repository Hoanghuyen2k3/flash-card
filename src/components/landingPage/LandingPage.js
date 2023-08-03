import React from 'react';
import "./LandingPage.scss"
import {Link} from "react-router-dom"
import VideoPlayer from './VideoPlayer';
function LandingPage() {
  return(
    <div className="landing-container"> 
      <Link className="start-login" to="/login">Get Started</Link>
     
      <div className="headingT">MEMORITOO</div>
      
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
      
          <h2>Say hello <span className="hand">👋</span> to Memorito</h2>
          <Link className="start-login" to="/login">Get Started</Link>

      </div>
      <h2>...How it works...</h2>
      <div className="video-container">
        <div className="video">
          <VideoPlayer />
        </div>
        <Link className="start-login" to="/login">Get Started</Link>


      </div>
      
      <div className="content-containers">
      <div className="works-container">
        <p className="bold">🧠 AI-Powered Quizzes</p>
        <p><span className="bold">MindCraft Mode</span>: create quizzes manually.</p>
        <p><span className="bold">QuestAI Mode</span>: AI-generated definitions.</p>
        <p><span className="bold">Genius Mode</span>: multiple-choice questions powered by AI.</p>
      </div>
      <div className="works-container">
        <p className="bold">📖 Learn by Story</p>
        <p>Experience learning like never before with <span className="bold">AI-generated</span> funny stories based on your quizzes.</p>
        <p>Learning will become an exciting adventure you won't want to miss!</p>
      </div>
      <div className="works-container">
        <p className="bold">📚 Multiple Learning Modes</p>
        <p>Choose your favorite learning style with Memorito's versatile modes.</p>
        <p>Immerse yourself in <span className="bold">Flashcards</span> or challenge yourself with fun games in <span className="bold">Game</span> Mode.</p>
      </div>
      <div className="works-container">
        <p className="bold">📁 Organized Learning</p>
        <p>Organize your quizzes effortlessly with our intuitive folder and module system.</p>
        <p>Dive deep into specific topics or explore a whole folder filled with exciting quizzes!</p>

      </div>
        <div className="works-container">
          <p className="bold">💡Stay Motivated</p>
          <p>Need a burst of energy?</p>
          <p>Just hit the <span className="bold">"Motivate Me"</span> button to receive a fresh dose of inspiration that will keep you going strong.</p>

        </div>
        <div className="works-container">
          <p className="bold">🕰️ Time Your Learning</p>
          <p>Set custom study sessions and breaks to optimize your learning efficiency.</p>
          <p>With Memorito, you're in control of your learning schedule!</p>
        </div>
      </div>
      <div className="get-attention">
        <p>Don't let your precious knowledge slip away!</p>
        <p>Join <span className='bold'>Memorito</span> and unlock the true potential of your memory. Start your learning journey today and become a memory master! 🌟</p>
      </div>
      
      <Link className="start-login" to="/login">Get Started</Link>
      <footer className="footer">
            <p className="bold">&copy; 2023 Memoritoo. All rights reserved.</p>
        </footer>

          </div>
  )
  
}

export default LandingPage;
