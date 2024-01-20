import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';
import { Link }from 'react-router-dom';
import '../css/style.css';

function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
 <Navbar  fixed="top" expand="lg" className="bg-body-tertiary" bg="light" data-bs-theme="light">
      <Container fluid>
          <Nav className="mx-auto " >
            <Button variant="light" onClick={handleShow}>
            <Image src='images/menu.png'
                  style={{ width: '40px', height: '40px' }}/>
            </Button>
          </Nav>
      </Container>
    </Navbar>


    <Offcanvas show={show} onHide={handleClose} style={{ width: '20%' }} className='bg-black text-opacity-100 opacity-75 offcanvas '>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='text-center  '>
          <div className=''>
        <Link to={'/'} className='link-light link-underline-opacity-0' ><p><strong >Home</strong></p></Link>
        <Link to={'/about'} className='link-light link-underline-opacity-0'><p><strong >About</strong></p></Link>
        <Link to={'/contact'} className='link-light link-underline-opacity-0'><p><strong>Contact</strong></p></Link>
        </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Header