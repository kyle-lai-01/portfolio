import React from 'react';
import './App.css';
import TerminalScreen from './components/TerminalScreen/TerminalScreen.js'
import Navigation from './components/Navigation/Navigation.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import About from './components/About/About.js';
import Projects from './components/Projects/Projects.js'

function App() {

  return (
    <div>
      <Navigation id="navbar" />
      <div style={{ height: "100rem", position: 'fixed', width: '100%', zIndex: '-1', marginTop: '6rem' }}>
        <TerminalScreen />
      </div>


      <div className='page-content'>
        <div className='about-section'>
          <About />
        </div>
        <div className='projects-section'>
          <Projects />
        </div>

      </div>




    </div >
  )
}

export default App;
