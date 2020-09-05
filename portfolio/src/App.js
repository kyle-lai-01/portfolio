import React from 'react';
import './App.css';
import TerminalScreen from './components/TerminalScreen/TerminalScreen.js'
import Navigation from './components/Navigation/Navigation.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About.js';
import Projects from './components/Projects/Projects.js';
import Experience from './components/Experience/Experience.js';
import More from './components/More/More.js';
import Footer from './components/Footer/Footer.js';
import ArrowImage from './images/Arrow.png';

function App() {

  return (
    <div>
      <Navigation id="navbar" />
      <div style={{ height: "100rem", position: 'fixed', width: '100%', zIndex: '-1', marginTop: '6rem' }}>
        <TerminalScreen />
      </div>

      <div class="arrowdiv">
        <img src={ArrowImage} alt="Scroll down" className='arrow box bounce-2' style={{ position: 'fixed', width: '6rem' }} />
      </div>

      <div id={'Home'}></div>
      <div className='page-content'>
        <div id={'About'}></div>
        <div className='about-section'>
          <About />
        </div>
        <div id={'Projects'} className='projects-section'>
          <Projects />
        </div>
        <div id={'Experience'} style={{ paddingTop: '1rem' }}></div>
        <div className='experience-section'>
          <Experience />
        </div>
        <div id={'More'} className='more-section'>
          <More />
        </div>
        <div>
          <Footer />
        </div>


      </div>




    </div >
  )
}

export default App;
