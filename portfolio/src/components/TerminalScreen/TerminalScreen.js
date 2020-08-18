import React from 'react';
import Terminal from 'react-animated-term'
import 'react-animated-term/dist/react-animated-term.css'
import { ListItemSecondaryAction } from '@material-ui/core';

function TerminalScreen() {
  const spinner = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦']
  const load = ['.', ' ']
  const termLines = [
    {
      text: 'npm start',
      cmd: true,
      delay: 80
    },
    {
      text: '✔ Hello! I\'m Kyle Lai. Welcome to my site! ',
      cmd: false,
      repeat: false,
      frames: spinner.map(function (spinner) {
        return {
          text: spinner + ' Loading info',
          delay: 120
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
      text: '✔ Learn more about what I do below! Email me at kl655@cornell.edu',
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