import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Link } from 'react-router-dom'
import '../css/style.css'

function Footer() {
  return (
    <div>
      <Container fluid className="text-center bg-dark footer" >
          {/* <Container className='bg-secondary'> */}

      <p className=' pt-5'>
        <Link to={'/'} className='text-light link-warning link-underline-opacity-0 ms-5 '   >Home</Link>
        <Link to={'/about'} className='text-light link-warning link-underline-opacity-0 ms-5 '  >About</Link>
        <Link to={'/contact'} className='text-light link-warning link-underline-opacity-0 ms-5  me-5'  >Contact</Link>
        </p> 
        <br />
        <p className='text-light pb-5'><span className=''>Created by John Lester R. Oliverio </span><br /> Thank you for visiting</p>
        {/* </Container> */}
      </Container>
    </div>
  )
}

export default Footer