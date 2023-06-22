import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Home from './components/Home'
import Project from './components/Project'
import Skill from './components/Skill'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

const App = () => {

  useEffect(() => {

  }, [])
  return (
    <div>
      <Home/>
      <NavBar/>
      <Project/>
      <Skill/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
