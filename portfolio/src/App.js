import React from 'react';
import './App.css';
import TerminalScreen from './components/TerminalScreen.js'
import Navigation from './components/Navigation/Navigation.js'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div>
      <Navigation />
      <div style={{ height: "100rem", position: 'fixed', width: '100%', zIndex: '-1', marginTop: '6rem' }}>
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
