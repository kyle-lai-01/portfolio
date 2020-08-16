import React from 'react';
import './App.css';
import TerminalScreen from './components/TerminalScreen.js'
import Navbar from './components/Navbar.js'

function App() {




  return (
    <div>
      <Navbar />
      <div style={{ height: "500px", position: 'fixed', width: '100%', zIndex: '-1' }}>
        <TerminalScreen />
      </div>

      <div className='text'>
        Yes < br />
        Yes < br />
      </div>

    </div >
  );
}

export default App;
