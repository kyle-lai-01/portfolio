import React from 'react';
import Terminal from 'react-animated-term'
import 'react-animated-term/dist/react-animated-term.css'

function TerminalScreen() {
  const spinner = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
  const termLines = [
    {
      text: 'npm start',
      cmd: true,
      delay: 80
    },
    {
      text: '✔ Hello! I\'m Kyle. Welcome to my site! ',
      cmd: false,
      repeat: false,
      frames: spinner.map(function (spinner) {
        return {
          text: spinner + ' Loading info',
          delay: 150
        }
      })
    },
    {
      text: 'about',
      cmd: true,
      delay: 80
    },
    {
      text: '✔ CS \'23 at Cornell University',
      cmd: false,
      delay: 600
    },
    {
      text: '✔ Full stack web developer',
      cmd: false,
      delay: 600
    },
    {
      text: '✔ Aviation enthusiast',
      cmd: false,
      delay: 600
    },
    {
      text: 'help',
      cmd: true,
      delay: 80
    },
    {
      text: 'Learn more about what I do below!',
      cmd: false,
      delay: 200
    },
    {
      text: '',
      cmd: true,
      delay: 200
    }
  ]

  return (

    <Terminal
      lines={termLines}
      interval={80}

    />
  )

}

export default TerminalScreen;