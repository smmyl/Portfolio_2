import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Home from './components/Home'
import Project from './components/Project'
import Skill from './components/Skill'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import About from './components/About'

const App = () => {
  const [mode, setMode] = useState(true)

  const toggleMode = () => {
    setMode(!mode)
  }

  useEffect(() => {

  }, [])
  return (
    <div class={mode ? ('body'):('bodyd')}>
      <Home
        mode={mode}
        toggleMode={toggleMode}
      />
      <NavBar/>
      <Project
        mode={mode}
      />
      <Skill
        mode={mode}
      />
      <About/>
      <Contact
        mode={mode}
      />
      <Footer
        mode={mode}
      />
    </div>
  );
}

export default App;
