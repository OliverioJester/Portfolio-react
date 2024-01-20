import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button'
import '../css/style.css'

function Home() {
  return (
    <div>
{/* 1st Page */}
      <Container fluid  className='bg-dark mt-5'>
        <Container fluid>
        <Row xs="auto" className="container justify-content-md-center">
          <Col xs={10}>
          <div className=' mt-5 text-light'><span className='h2'>Lorem ipsum dolor sit,</span> <span className='h1 text-warning'>amet consectetur adipisicing elit.</span> 
              <p>Aliquid accusamus nam delectus omnis minus quibusdam harum consequuntur, asperiores veniam corrupti nihil maiores. Laudantium praesentium nemo architecto animi, odit deleniti illo. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste maiores quam vitae quasi minima repellat ullam incidunt assumenda tempore eveniet tempora, optio ex harum quo quaerat voluptas ut consectetur praesentium.</p>
          </div>
          </Col>
 
      <Col md={6}></Col>

      <Col>
              <Image src='images/Blackrain.jpg' fluid
                className='mb-5 border border-5 border-light '
                style={{ width: '430px', height: '400px' }}/>
      </Col>

        </Row>
        </Container> 
     </Container>

     <Container fluid className=''>
      <Container>
        <Row className='mt-5 mb-2 '>
            <Col className='' >    
              <div className='position-sticky sentence1 mb-5'>
                <h1 className=' a text-black'><strong>We<br />capture <br />best photos.</strong></h1>
              </div>
            </Col>
          <Col className='justify-content-xs-center' xs="auto">
          <Image src='images/umbrelaguy.jpg' fluid
            className='mb-5 border border-5 border-light'
            style={{ width: '440px', height: '450px' }}/>   
          </Col>
          <Col> <p><b>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias ducimus magni nemo odio libero eveniet? Praesentium, distinctio aliquam blanditiis enim voluptas ipsum maxime magni dignissimos voluptate qui reprehenderit rerum! Sit.</b></p></Col>
        </Row>

        </Container> 
     </Container>
{/* 2nd Page */}
    <Container fluid className="bg-body-secondary pb-4">
      <Container className="">
        <Row>
          <Col>
            <h1 className='mt-5 a text-black'><strong>How does it work</strong></h1>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <p className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore illo nam quibusdam quisquam aut. Vero sunt aliquam fugit eaque illo nihil libero totam. Quisquam, obcaecati! Neque delectus nisi necessitatibus veniam.s</p>
          </Col>
        </Row>
 
          <Row className='text-center '>
            <Col className="">
              <div className='bg-transparent border-0'>
                <div className="text-center ">
                <Image fluid src='images/smartphone.png'
                  className=''
                  style={{ width: '50px', height: '50px' }}/> 
                <h5 className='mt-3 mb-3'>STEP 1</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur excepturi maxime consectetur. Fugit dolores fuga dolor perspiciatis amet totam. Laudantium expedita inventore sint culpa, veniam commodi sapiente saepe quaerat magni?</p>
                </div>
              </div>
            </Col>

            <Col className="text-center" >
            <Image src='images/right-arrow.png'
                  className=''
                  style={{ width: '50px', height: '50px' }}/>       
          
             </Col>
            <Col className="">
            <div className=' bg-transparent border-0'>
                <div className="text-center">
                <Image src='images/profile.png'
                  className=''
                  style={{ width: '50px', height: '50px' }}/> 
                   <h5 className='mt-3 mb-3'>STEP 2</h5>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur excepturi maxime consectetur. Fugit dolores fuga dolor perspiciatis amet totam. Laudantium expedita inventore sint culpa, veniam commodi sapiente saepe quaerat magni?</p>
                </div>
              </div>            
            </Col>

            <Col className="text-center" >
            <Image src='images/right-arrow.png'
                  className=''
                  style={{ width: '50px', height: '50px' }}/>             
            </Col>

            <Col>
            <div className=' bg-transparent border-0' >
                <div className="text-center">
                <Image src='images/checklist.png'
                  className=''
                  style={{ width: '50px', height: '50px' }}/> 
                   <h5 className='mt-3 mb-3'>STEP 3</h5>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur excepturi maxime consectetur. Fugit dolores fuga dolor perspiciatis amet totam. Laudantium expedita inventore sint culpa, veniam commodi sapiente saepe quaerat magni?</p>                  
                </div>
              </div>               
            </Col>

            <Col className="text-center">
            <Image src='images/right-arrow.png'
                  className=''
                  style={{ width: '50px', height: '50px' }}/>             
            </Col>
            
            <Col className="">
            <div className=' bg-transparent border-0'>
                <div className="text-center">
                <Image src='images/star.png'
                  className=''
                  style={{ width: '50px', height: '50px' }}/> 
                   <h5 className='mt-3 mb-3'>STEP 4</h5>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur excepturi maxime consectetur. Fugit dolores fuga dolor perspiciatis amet totam. Laudantium expedita inventore sint culpa, veniam commodi sapiente saepe quaerat magni?</p>                  
                </div>
              </div>               
            </Col>
          </Row>
          {/* </Container> */}
      </Container>
    </Container>

{/* 3rdPage */}
    <Container fluid className="bg-black pb-5"> 
      <Container className="">
          <Row className='text-light'>
            <Col className='mt-5' >
            <h4>John Lester R. Oliverio</h4>
           " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi necessitatibus doloremque, iure at id repellendus qui tempore ad, sint sit dolorum asperiores. Rerum aliquid eum commodi, ullam recusandae est neque."

            </Col>
            <Col className='mt-5 text-center '>
              <h1 className="mb-5">Testimonials</h1>
              <div className="text-center"> 
                <Image src='images/model2.jpg'
                  className=''
                  fluid
                  style={{ width: '400px', height: '500px' }}/>
              </div>

            </Col>
            <Col >
            <div className='d-block position-sticky sentence1 mt-5'>
              <h4 >Stephielle Princess Madrid</h4>
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus atque incidunt odit, libero ipsum fuga? Ea, eos est omnis possimus qui sapiente exercitationem, voluptates dicta debitis eum reiciendis amet enim?"               
            </div>
            </Col>
          </Row>
          <Row>
            <Col xs={5}>
            <h1 className="rectangle_yellow2  me-5 bg-warning text-warning">
                 <p className='opacity-0'>Love</p>
              </h1>
            </Col>
          </Row>
      </Container>
    </Container>

{/* 4thPage */}
    <Container fluid className="mb-5">
      <Container>
        <Row>
          <Col className="mt-5 pt-5 pb-5 mb-5">
              <Table className='rectangle_yellow '>
                <thead>
                  <tr>
                    <th className='bg-warning'>
                    
                    </th>
                  </tr>
                </thead>
              </Table>
              <h5 className='mb-4'>
                WE DWELLING ELEGANCE DO SHUTTERS <br /> APPETITE YOURSELF DIVERTED.
              </h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aliquam et ipsam. Totam, repudiandae? Dicta quas maiores, veritatis necessitatibus eaque libero cum sapiente, reiciendis eos aliquam incidunt dolor molestias sint?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aliquam et ipsam. Totam, repudiandae? Dicta quas maiores, veritatis necessitatibus eaque libero cum sapiente, reiciendis eos aliquam incidunt dolor molestias sint?</p>
          </Col>
        </Row>
        <Row className="text-black">
        <Col className='mt-5' >
            <h4>John Lester R. Oliverio</h4>
           " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi necessitatibus doloremque, iure at id repellendus qui tempore ad, sint sit dolorum asperiores. Rerum aliquid eum commodi, ullam recusandae est neque."

            </Col>
            <Col className='mt-5 text-center'>
              <h1 className="mb-5" style={{fontSize: '60px'}}><strong>Team</strong></h1>
              <Image src='images/model3.jpg'
                  className=''
                  fluid
                  style={{ width: '400px', height: '500px' }}/>
            <Table className=' rectangle_yellow2 '>
                <thead>
                  <tr>
                    <th className='bg-warning'>
                    
                    </th>
                  </tr>
                </thead>
              </Table>  
            </Col>
            <Col >
            <div className='d-block position-sticky sentence1 mt-5'>
              <h4 >Stephielle Princess Madrid</h4>
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus atque incidunt odit, libero ipsum fuga? Ea, eos est omnis possimus qui sapiente exercitationem, voluptates dicta debitis eum reiciendis amet enim?"               
            </div>
            </Col>
        </Row>
      </Container>
    </Container>

{/* 6thPage */}
<Container fluid className="bg-body-secondary">
  <Container>
      <Row>
        <Col className='mt-4 mb-5 pb-5'>
              <h1 className='bg-warning text-light p-3'  style={{fontSize: '60px'}}>
                <strong>Frequently asked questions</strong>
              </h1>
              <Accordion>
      <Accordion.Item eventKey="0" >
        <Accordion.Header>WHO IS JOHN LESTER R. OLIVERIO?</Accordion.Header>

        <Accordion.Body >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>IS ORAL SEX NOT VEGAN?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>WOULD VEGANS EAT ME IF THEY BECAME ZOMBIES?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Col>
      </Row>
  </Container>
</Container>

{/* 7thpage */}
<Container fluid className="bg_image "> 
    <Container className=' '>
      
      <Row className="g-0" xs="auto" >
      <Col sm></Col>
      <Col className="mt-5 mb-5 " >      
      <Image src='images/model3.jpg'
                  fluid
                  className=' '
                  style={{ width: '345px', height: '500px' }}/> 
         </Col>         
        <Col className="mt-5 mb-5 " >
      
          <Card  className="sendMessageCard" >
            
            <Form className='theform ms-4 me-4 '>
            <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3 mt-4"
              >
                <Form.Control type="email" placeholder="Enter your email saddress" className=" paddingForm" />
              </FloatingLabel>

              <FloatingLabel controlId="floatingAddress" label="Address" className="mb-3">
                <Form.Control type="text" placeholder="Enter your address" className=" paddingForm"/>
              </FloatingLabel>    
              
              <FloatingLabel controlId="floatingTextarea2" label="Leave a message here" >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a message here"
                  style={{ height: '150px' }}
                  className='mb-4  paddingForm'
                />
              </FloatingLabel>     

              <Button size="lg" variant="warning" className="text-light" style={{marginBottom: '105px'}}>
                Submit
              </Button>
              </Form>
          </Card>
          
      </Col>
      <Col sm></Col>
      </Row>
    </Container>
</Container>
    </div> 
    
  )
}

export default Home