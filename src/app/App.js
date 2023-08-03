import React from 'react';
import './App.scss';
import Home from '../components/home/Home';
import Nav from '../components/nav/Nav';
import Quiz from '../components/quiz/Quiz';
import Folder from '../components/folderModule/Folder';
import Module from '../components/folderModule/Module';
import ModuleQuiz from '../components/quiz/ModuleQuiz';
import FolderModule from '../components/folderModule/FolderModule';
import Learn from '../components/learn/Learn';
import NotFound from '../components/notFoundPage/NotFound';
import Study from '../components/learn/Study';
import Login from '../components/login/Login';
import Game from '../components/learn/Game';
import Flashcard from '../components/learn/Flashcard';
import Cards from '../components/learn/Cards'
import LandingPage from '../components/landingPage/LandingPage';
import StoryAI from '../components/learn/StoryAI';
import { selectLogin } from '../features/loginSlice';
import {useSelector } from 'react-redux/es/hooks/useSelector';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";



function App() {
  const isLoggedIn = useSelector(selectLogin)
  console.log(isLoggedIn);
  
  const router = createBrowserRouter(createRoutesFromElements(
    
    <Route  path="/memoritoo" element={<Nav />}>      
      <Route path="home" element={<Home />} />
        
      <Route index element={<LandingPage />} />
      <Route path="login" element={<Login />} />
      <Route path="landing" element={<LandingPage />} />
      <Route path="folder" element={<Folder />} />
      <Route path="learn/:folder" element={<Learn />}>
        <Route path="cards" element={<Cards />} />
        <Route path="game" element={<Game />} />
        <Route path="flashcard" element={<Flashcard />} />
        <Route path="study" element={<Study />} />
        <Route path="story" element={<StoryAI />} />
  
      </Route>
      <Route path="folder/learn/:folder" element={<Learn />}>
        <Route path="cards" element={<Cards />} />
        <Route path="game" element={<Game />} />
        <Route path="flashcard" element={<Flashcard />} />
        <Route path="study" element={<Study />} />
        <Route path="story" element={<StoryAI />} />
  
      </Route>
  
      <Route path="folder/:folder" element={<FolderModule />} />
      <Route path="home/:folder" element={<FolderModule />} />
      <Route path="folder/:folder/:module" element ={<ModuleQuiz />} />
      <Route path="home/:folder/:module" element ={<ModuleQuiz />} />
      <Route path="folder/:folder/learn/:module" element ={<Learn />} >
        <Route path="cards" element={<Cards />} />
        <Route path="game" element={<Game />} />
        <Route path="flashcard" element={<Flashcard />} />
        <Route path="study" element={<Study />} />
        <Route path="story" element={<StoryAI />} />

  
      </Route>
      <Route path="home/:folder/learn/:module" element ={<Learn />} >
        <Route path="cards" element={<Cards />} />
        <Route path="game" element={<Game />} />
        <Route path="flashcard" element={<Flashcard />} />
        <Route path="study" element={<Study />} />
        <Route path="story" element={<StoryAI />} />

  
      </Route>
  
      <Route path="module" element={<Module />} />
      <Route path="module/:module" element ={<ModuleQuiz />} />
      <Route path="home/:module" element ={<ModuleQuiz />} />
      <Route path="module/learn/:module" element ={<Learn />} >
        <Route path="game" element={<Game />} />
        <Route path="cards" element={<Cards />} />
        <Route path="flashcard" element={<Flashcard />} />
        <Route path="study" element={<Study />} />
        <Route path="story" element={<StoryAI />} />

  
      </Route>
      <Route path="learn/:module" element ={<Learn />} >
        <Route path="game" element={<Game />} />
        <Route path="cards" element={<Cards />} />
        <Route path="flashcard" element={<Flashcard />} />
        <Route path="study" element={<Study />} />
        <Route path="story" element={<StoryAI />} />

  
      </Route>
  
      <Route path="quiz" element={<Quiz />} />
      <Route path="*" element={<NotFound />} />
  
    </Route>))
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
