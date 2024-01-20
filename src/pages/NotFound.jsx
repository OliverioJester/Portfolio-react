import React from 'react'
import Container  from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
       <Container className="position-absolute top-50 start-50 translate-middle text-center">
            <h1>You're Lost My Friend</h1>
            <Link to={'/'}>Go Back</Link>
       </Container>
    </div>
  )
}

export default NotFound