import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap"
import React from 'react';
import LinkedinLogo from './SVGs/LinkedinLogo'
import GithubLogo from './SVGs/GithubLogo'



function Contact() {
  return (
    <>


      <Container>


        {/* <Image src="holder.js/100px250" fluid /> */}
        <Row>
          <Col>
          <LinkedinLogo
              width={"1em"} 
              height={"1em"} 
              />
          </Col>
          <Col>
            <GithubLogo 
              width={"1em"} 
              height={"1em"} 
              />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;