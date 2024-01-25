import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

function Contact() {
  return (
    <div>
        <Header/>
        <Container fluid  className="bg-black mt-5 pb-5 ">
          <Container>
            <Row className=''>
              <Col className='mt-5 pt-5'>
                <Row className="" >
              <Col  className='' lg={5} >
                <Card className="bg-black text-light">
                <h1 className=' display-5 fw-bold'>
                  FAQ
                </h1>
                <br />
                <br />
                <p>
"Dive into our comprehensive Frequently Asked Questions (FAQ) section, designed to provide in-depth insights and clear answers to address any queries you may have. We aim to make your experience seamless, and this resource is tailored to offer valuable information and guidance at your fingertips."</p>
                </Card>
              </Col>

              <Col className="bg-black vh-100">
                <Accordion className=''>
                  <Accordion.Item eventKey="0" className="mb-2">
                    <Accordion.Header className='p-2'><strong>In what ways does the FAQ section on your website contribute to a smooth communication flow, ensuring potential clients can easily gather information and make informed decisions about your photography and web designing offerings?</strong></Accordion.Header>
                    <Accordion.Body >
                      The FAQ section is designed to facilitate seamless communication by addressing common queries, ensuring potential clients can easily access essential details about our photography and web designing services. This helps them make informed decisions and enhances their overall experience with us.
                    </Accordion.Body>
                  </Accordion.Item>
                  
                  <Accordion.Item eventKey="1" className="mb-2">
                    <Accordion.Header className='p-2'><strong>What key details can I find in the FAQ section regarding your photography services, such as packages, photo delivery, and customization options?</strong></Accordion.Header>
                    <Accordion.Body>
                      Our FAQ section provides detailed information on our photography services, covering aspects such as customizable packages, turnaround times for photo delivery, and special features included in each offering.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header className='p-2'><strong>How does the FAQ section address common queries related to your web designing services, including the design process, timelines, and collaboration with clients?</strong></Accordion.Header>
                    <Accordion.Body>
                      Explore our FAQ for insights into our web designing services, offering clarity on our design process, project timelines, and how we collaborate with clients to bring their unique visions to life.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>

              </Row>
              </Col>
            </Row>
            </Container>
        </Container>
        <Footer />
    </div>
  )
}

export default Contact