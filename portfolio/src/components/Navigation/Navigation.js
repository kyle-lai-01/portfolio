import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import './Navigation.css'
import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FileCopyIcon from '@material-ui/icons/FileCopy';


function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="#home">Kyle Lai</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">About</Nav.Link>
        <Nav.Link href="#">Projects</Nav.Link>
      </Nav>

      <Nav.Link href="/">
        <IconButton>
          <GitHubIcon
            style={{
              fontSize: '30',
              color: 'white'
            }} />
        </IconButton>
      </Nav.Link>
      <Nav.Link href="/">
        <IconButton>
          <LinkedInIcon
            style={{
              fontSize: '40',
              color: 'white'
            }} />
        </IconButton>
      </Nav.Link>
      <Nav.Link href="/">
        <IconButton>
          <FileCopyIcon
            style={{
              fontSize: '30',
              color: 'white'
            }} />
        </IconButton>
      </Nav.Link>

    </Navbar>
  )

}

export default Navigation;
