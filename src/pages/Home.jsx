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
          <div className=' mt-5 text-light'><span className='h2'>Capture Life's Moments in Perfect Pixels,</span> <span className='h1 text-warning'>Elevate Your Memories with Our Stunning Photography Services.</span> 
              <p>
              Professional, Passionate, and Picture-Perfect – Because Every Click Counts. Unleash the Power of Visual Storytelling. Freeze Time with Our Expert Photography. From Candid to Captivating, We Frame Your World. Your Moments, Our Expertise – Turning Ordinary into Extraordinary. Click, Smile, Repeat – Your Journey through a Lens of Excellence. Let Us Paint Your Story in Every Frame. Cherish the Now, Forever. Book Your Session Today
              </p>
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
          <Col>
            <p><b>
            Unlock the Magic of Memories with Our Artistry Behind the Lens. Timeless Elegance, Captured Just for You. Where Every Snapshot is a Work of Heart. Experience Photography Redefined – Where Passion Meets Precision.
            </b></p></Col>
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
            <p className='mt-3'>To capture the best photo, focus on framing your subject with attention to lighting, composition, and details, while embracing unique perspectives and patiently waiting for genuine moments to unfold.</p>
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
                <p>Find the Right Lighting: Seek natural light for a soft, flattering effect. Avoid harsh midday sun and experiment with morning or evening light for more dimension.</p>
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
                   <p>Composition is Key: Frame your subject thoughtfully using the rule of thirds. Create interest with angles and perspectives; consider foreground and background elements.</p>
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
                   <p>Focus on Details: Pay attention to sharpness and clarity. Use your camera's autofocus feature or manually focus to ensure your subject is crisp and well-defined.</p>                  
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
                   <p>Capture Genuine Moments: Encourage natural expressions and candid interactions. Be patient and ready to click when authentic emotions unfold, resulting in a photo that tells a compelling story.</p>                  
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
            "In every photograph, there's a story waiting to be told. Capture the essence, freeze the moment, and let the image speak for itself."

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
              "Photography is not just about capturing smiles; it's about preserving the emotions, the soul of the moment, in every frame."               
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
              "HARMONIZING VISION AND EXPERTISE: <br />MANAGING AND PERFECTING PHOTOGRAPHY WITH OUR DYNAMIC TEAM."
              </h5>
              <p>To manage and perfect the art of photography with my team, we collaborate seamlessly, leveraging each member's strengths, communicating effectively, and embracing a shared vision, ensuring that every shot we capture reflects our collective passion and expertise.</p>
          </Col>
        </Row>
        <Row className="text-black">
        <Col className='mt-5' >
        <h4 >Stephielle Princess Madrid</h4>
            "Through the lens, discover the extraordinary in the ordinary. A great photo is not just taken; it's crafted with a keen eye and a heart that sees beauty in everything."

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
            <h4>John Lester R. Oliverio</h4>
              "Photography is the art of making the ordinary extraordinary. Let your lens be the storyteller, and every click, a chapter in the visual novel of life."               
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
        <Accordion.Header>"WHAT INSPIRED YOU TO CAPTURE THIS PARTICULAR MOMENT OR SUBJECT IN YOUR PHOTOGRAPHY?"</Accordion.Header>

        <Accordion.Body >
        "I was inspired to capture this moment by the play of light and shadow, creating a captivating atmosphere that beautifully highlighted the subject's emotion and the surrounding environment."
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>"HOW DO YOU APPROACH THE TECHNICAL ASPECTS OF PHOTOGRAPHY, SUCH AS LIGHTING AND COMPOSITION, TO ACHIEVE YOUR DESIRED VISUAL IMPACT?</Accordion.Header>
        <Accordion.Body>
        "I approach the technical aspects of photography meticulously, paying careful attention to natural lighting, experimenting with different angles, and framing the shot using the rule of thirds to ensure a visually striking and well-composed image."
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>"CAN YOU SHARE A MEMORABLE EXPERIENCE OR STORY BEHIND ONE OF YOUR FAVORITE PHOTOS, HIGHLIGHTING THE CREATIVE PROCESS OR CHALLENGES YOU OVERCAME?"</Accordion.Header>
        <Accordion.Body>
        "One of my favorite photos was taken during a spontaneous street photography session. The challenge was to capture authentic expressions amidst the bustling cityscape. The memorable experience came when I seized a fleeting moment of connection between strangers, turning a seemingly ordinary scene into a powerful narrative through the lens."
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