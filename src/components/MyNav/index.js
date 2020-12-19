// import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Collapse, Container } from "react-bootstrap"
import {useState} from "react"

function MyNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">brandonhaynes100</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link
            onClick={() => setOpen(!open)}
            aria-controls="about-text"
            aria-expanded={open} >About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        
      </Navbar>

      <Collapse in={open}>
        <Container id="about-text">
        Hi, I'm Brandon - a web developer specializing in Reactjs. I began my coding journey studying Java, branching from there into C++, Python, and eventually JavaScript. Now I create websites for fun, profit, and glory.
        </Container>
      </Collapse>
    </>
  );
}

export default MyNav;