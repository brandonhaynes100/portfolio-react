// import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Collapse, Container } from "react-bootstrap"
import { useState } from "react"
import Contact from "../Contact"



function MyNav() {
  const [openAbout, setOpenAbout] = useState(false);
  const [openContact, setOpenContact] = useState(false);


  return (
    <>

      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">brandonhaynes100</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link
            onClick={() => setOpenAbout(!openAbout)}
            aria-controls="about-text"
            aria-expanded={openAbout} >About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link
            onClick={() => setOpenContact(!openContact)}
            aria-controls="contact-icons"
            aria-expanded={openContact} >Contact</Nav.Link>
          <Collapse in={openContact}>
            <Nav.Link id="contact-icons">
              <Contact></Contact>
            </Nav.Link>

          </Collapse>
        </Nav>

      </Navbar>
      <Collapse in={openAbout}>
        <Container id="about-text">
          Hi, I'm Brandon - a web developer specializing in Reactjs. I began my coding journey studying Java, branching from there into C++, Python, and eventually JavaScript. Now I create websites for fun, profit, and glory.
        </Container>
      </Collapse>
      {/* <Collapse in={openContact}>
        <Container id="contact-icons">
          <Contact></Contact>
        </Container>

      </Collapse> */}
    </>
  );
}

export default MyNav;