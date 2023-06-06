import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Home from './components/Home'
import Project from './components/Project'
import Skill from './components/Skill'
import Resume from './components/Resume'
import Contact from './components/Contact'

const App = () => {

  useEffect(() => {

  }, [])
  return (
    <div>
      <Home/>
      <Project/>
      <Resume/>
      <Skill/>
      <Contact/>
    </div>
  );
}

export default App;
