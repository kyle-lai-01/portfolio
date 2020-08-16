import React from 'react';
import './App.css';
import Terminal from 'terminal-in-react';


function App() {



  const showMsg = () => 'Hello world'
  return (
    <div
      style={{
        width: '100%',
        height: "100vh"
      }}
    >
      <Terminal
        color='green'
        backgroundColor='black'
        outputColor='white'
        barColor='lightgrey'
        allowTabs={false}
        startState='maximised'
        style={{ fontWeight: "bold", fontSize: "1em", width: '100%' }}
        commands={{
          'open-google': () => window.open('https://www.google.com/', '_blank'),
          showmsg: showMsg,
          popup: () => alert('Terminal in React')
        }}
        descriptions={{
          'open-google': 'opens google.com',
          showmsg: 'shows a message',
          alert: 'alert', popup: 'alert'
        }}
        msg='You can write anything here. Example - Hello! My name is Foo and I like Bar.'
      />
    </div>
  );
}

export default App;
