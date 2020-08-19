import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ListGroup, Nav } from 'react-bootstrap';
import './Footer.css';
import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Resume from './../Resume/Resume.pdf';
import Emoji from './../More/Emoji.js';

function Footer() {
  return (
    <div>
      <Container className='h1 footer-container'>
        <h1 className='footer-header'> <Emoji symbol="©️" label="copyright" style={{ width: '100%' }} /> Kyle Lai 2020</h1>
        <h1 className='footer-email'>kl655@cornell.edu</h1>

        <ListGroup className="list-group list-group-horizontal">
          <ListGroup.Item className='col-md-4 list-group-item' style={{ textAlign: 'center' }}>
            <Nav.Link href="https://github.com/kyle-lai-01" rel="noopener noreferrer" target="_blank">
              <IconButton>
                <GitHubIcon
                  style={{
                    fontSize: '50',
                    color: 'black'
                  }} />
              </IconButton>

            </Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item className='col-md-4 list-group-item' style={{ textAlign: 'center' }}>
            <Nav.Link href="https://linkedin.com/in/klai01" rel="noopener noreferrer" target="_blank">
              <IconButton>
                <LinkedInIcon
                  style={{
                    fontSize: '50',
                    color: '#0077B5'
                  }} />
              </IconButton>

            </Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item className='col-md-4 list-group-item' style={{ textAlign: 'center' }}>
            <Nav.Link href={Resume} download='KyleLaiResume.pdf' rel="noopener noreferrer" target="_blank">
              <IconButton>
                <FileCopyIcon
                  style={{
                    fontSize: '50',
                    color: '#0B6623'
                  }} />
              </IconButton>
            </Nav.Link>
          </ListGroup.Item>
        </ListGroup>
      </Container>

    </div>
  )

}

export default Footer;