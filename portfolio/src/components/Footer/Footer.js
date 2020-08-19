import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ListGroup, Nav } from 'react-bootstrap';
import './Footer.css';
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

        <Container fluid className='about-tech-container'>
          <ListGroup className="list-group list-group-horizontal">
            <ListGroup.Item className='col-md-4 list-group-item'>
              <Nav.Link href="https://github.com/kyle-lai-01" rel="noopener noreferrer" target="_blank">

                <GitHubIcon
                  style={{
                    fontSize: '5rem',
                    color: 'black',
                    width: '100%'
                  }} />

              </Nav.Link>
            </ListGroup.Item>
            <ListGroup.Item className='col-md-4 list-group-item'>
              <Nav.Link href="https://linkedin.com/in/klai01" rel="noopener noreferrer" target="_blank">

                <LinkedInIcon
                  style={{
                    fontSize: '5rem',
                    color: '#0077B5',
                    width: '100%'
                  }} />


              </Nav.Link>
            </ListGroup.Item>
            <ListGroup.Item className='col-md-4 list-group-item'>
              <Nav.Link href={Resume} download='KyleLaiResume.pdf' rel="noopener noreferrer" target="_blank">

                <FileCopyIcon
                  style={{
                    fontSize: '5rem',
                    color: '#0B6623',
                    width: '100%'
                  }} />


              </Nav.Link>
            </ListGroup.Item>

          </ListGroup>
        </Container>
      </Container>

    </div>
  )

}

export default Footer;