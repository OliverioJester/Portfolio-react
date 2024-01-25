import React, { useState } from 'react'
import Header from '../components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import '../css/style.css'
import Image from 'react-bootstrap/esm/Image';
import Card from 'react-bootstrap/esm/Card';
import  Button  from 'react-bootstrap/esm/Button';
import Carousel from 'react-bootstrap/Carousel';
import Form  from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Footer from '../components/Footer';

const imageFilenames = [
  'Blackrain.jpg',
  'Blackrain.jpg',
  'Blackrain.jpg',
  'Blackrain.jpg',
  'Blackrain.jpg',
  'Blackrain.jpg',
  'Blackrain.jpg',
  'Blackrain.jpg',
  'Blackrain.jpg',
  // Add more image filenames as needed
];



function About() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  const [itemsToShow, setItemsToShow] = useState(3);
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
    setItemsToShow(showAll ? 3 : imageFilenames.length);
  };



  return (
    
    <div>
        <Header />  
        <Container  className=" mt-5" >
            <Row className="text-center mx-auto">
              <Col className="mt-5 pt-5">
                 <h1 className="fontfamily  display-5 fw-bold">
                  John Lester R. Oliverio <span className="text-warning">resume</span>
                 </h1> 
                 <h4 className="mb-5"><strong>What i do</strong></h4>
                 <Image src='images/profile.jpg' 
                className='mx-auto d-block shadow border-1'
                fluid
                roundedCircle
                style={{ width: '330px', height: '400px' }}/>
              </Col>
            </Row>
            <Row className=" mx-5 mt-1" xs='auto'>
              <Col className='mx-auto ' >
                <Card className="shadow p-3 border-0" style={{width: '18rem', height: "18rem"}}>          
                  <div className="hstack gap-0 mt-3">
                        <div className=" pe-3">
                          <Image src='images/layers.png' 
                          className=''
                          roundedCircle
                          style={{ width: '80px', height: '80px' }}/>
                      </div>
                      <div className="vstack gap-2">
                        <div className="h4 ">Web Design</div>
                        <div className="">I create user-friendly and visually appealing websites, seamlessly blending creativity with functionality.<br /><span className="opacity-0">ddd</span></div>
                        
                        <div className=''>
                        <Image src='images/right-arrow.png' 
                          className=''
                          style={{ width: '40px', height: '40px' }}/>                          
                        </div>
                      </div>
                  </div>
                </Card>
              </Col>
              <Col className="mx-auto" >
                <Card className="shadow border-0 p-3" style={{width: '18rem', height: "18rem"}}>
                <div className="hstack gap-0 mt-3">
                        <div className=" pe-3">
                          <Image src='images/palette.png' 
                          className=''
                          roundedCircle
                          style={{ width: '80px', height: '80px' }}/>
                      </div>
                      <div className="vstack gap-2">
                        <div className="h4 ">Branding</div>
                        <div className="">I specialize in creating memorable brands that resonate and leave a lasting impact.<br /><span className="opacity-0">ddd</span><br /><span className="opacity-0">ddd</span></div>
                        
                        <div>
                        <Image src='images/right-arrow.png' 
                          className=''
                          style={{ width: '40px', height: '40px' }}/>                          
                        </div>                      
                      </div>
                  </div>
                </Card>
              </Col>
              <Col className="mx-auto" >
                <Card className="shadow border-0 p-3" style={{width: '18rem', height: "18rem"}}>
                <div className="hstack gap-0 mt-3">
                        <div className=" pe-3">
                          <Image src='images/coding.png' 
                          className=''
                          roundedCircle
                          style={{ width: '80px', height: '80px' }}/>
                      </div>
                      <div className="vstack gap-2">
                        <div className="h4 ">Development</div>
                        <div className="">I specialize in efficient and innovative development solutions, creating impactful digital experiences.</div>
                        <div>
                        <Image src='images/right-arrow.png' 
                          className=''
                          style={{ width: '40px', height: '40px' }}/>                          
                        </div>
                      </div>
                  </div>
                </Card>
              </Col>
            </Row>

            <Row className="mt-5 pt-5">
            <Col className="mt-5">
              <hr className='border border-dark border-2'/>

              <div class="row">
                  <div class="col-7"><h4>About company</h4></div>
                  <div class="col">We are a dynamic company dedicated to delivering innovative solutions and exceptional experiences.</div>

                </div>
              <hr className='border border-dark border-2'/>
            </Col>
          </Row> 

          <Row className="mt-5 pt-5">
            <Col className="mt-5">
                <h1 className='text-center ms-5 me-5'>
                "I possess strong web development skills, seamlessly merging creativity with technical expertise to build engaging and functional online experiences."
                </h1>
                <h1 className='text-center mt-3 text-warning'>
                Turning ideas into captivating websites through creative coding expertise.
                </h1>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1 className="text-center fontfamily  display-3 fw-bold"><strong>My Work</strong></h1>
                <Card className="mb-3 border border-0">
                    <Row className='mt-4  text-center  mx-auto'>
                      {imageFilenames.slice(0, itemsToShow).map((filename, index) => (
                        <Col key={index} className='mx-auto'>
                          <Image
                            src={`images/${filename}`}
                            className='mb-4'
                            style={{ width: '300px', height: '300px' }}
                            alt={`Image ${index + 1}`}
                          />
                        </Col> 
                      ))}
                    </Row>
                    <Row className="mt-3">
                      <Col className="text-center">
                      {(itemsToShow < imageFilenames.length || showAll) && (
                        <Button variant="warning text-light" onClick={toggleShowAll}>
                          {showAll ? 'Show Less' : 'Load More'}
                        </Button>
                      )}
                    </Col> 
                    </Row>
                </Card>
             </Col>
          </Row>        
  </Container>
          <br /><br /><br /><br />
  <Container>
    <Row>
      <Col className="">
      <Carousel className="carosel d-flex mx-auto" data-bs-theme="dark" >

                    <Carousel.Item interval={10000} className="mx-auto">
                      <Row  className="grid gap-0">
                        <Col className='text-center '>
                      <Image
                        src="images/model1.jpg"
                        className='mb-4'
                        style={{ width: '300px', height: '300px' }}
                        alt=""
                      />
                      </Col>
                      <Col className="me-5 ">
                      <span className='h4'>John Lester R. Oliverio,</span><span className='fst-italic fs-5'> Designer</span>
                      <br />
                      <br />
                      <p className="">                 
                            "Design is where creativity meets purpose, transforming visions into visual stories that resonate with the world."
                      </p>
                        <br></br>
                        <Button variant="dark">READ MORE</Button>                        
                      </Col>
                      </Row>
                    </Carousel.Item>
                    <Carousel.Item interval={10000} className="mx-auto">
                      <Row  className="grid gap-0">
                        <Col className='text-center '>
                      <Image
                        src="images/umbrelaguy.jpg"
                        className='mb-4'
                        style={{ width: '300px', height: '300px' }}
                        alt=""
                      />
                      </Col>
                      <Col className="me-5 ">
                        <span className='h4'>John Lester R. Oliverio,</span><span className='fst-italic fs-5'> Developer</span>
                        <br />
                        <br />
                        <p className="">                        
                            "Coding is not just about building websites; it's about crafting digital experiences that leave a lasting impact on the world."
                        </p>
                        <br></br>
                        <Button variant="dark">READ MORE</Button>
                      </Col>
                      </Row>
                    </Carousel.Item>
                  </Carousel>
                          
      </Col>
    </Row>
  </Container>
  <br />
  <br />
  <br />
  <br />
 <Container>
  <Row>
    <Col>
      <h1 className="fontfamily display-3 fw-bold">Contacts</h1>
      <br />
      For inquiries or messages, feel free to reach out. I'm here to connect and ready to listen.
      <br />
      <br />
      <h4><strong>+639942210389</strong></h4>
      <h4><strong>+639942210389</strong></h4>
    </Col>
    <Col>
    <Form className=' ms-4 me-4 '>
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
    </Col>
  </Row>
 </Container>
 <Footer />
    </div>
  )
}

export default About