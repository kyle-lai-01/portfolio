import React from 'react';
import Terminal from 'terminal-in-react';

function TerminalScreen() {
  const showMsg = () => 'Hello world'
  return (

    < Terminal
      color='green'
      backgroundColor='black'
      outputColor='white'
      barColor='lightgrey'
      startState='maximised'
      allowTabs={false}
      style={{ fontWeight: "bold", fontSize: "2em", width: '100%' }
      }
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
      msg="Hello! My name is Kyle. Type `help` to get a list of commands!"
    />
  )

}

export default TerminalScreen;