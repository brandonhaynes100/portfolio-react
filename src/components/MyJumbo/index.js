import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Container } from "react-bootstrap"

function MyJumbo() {
  return (
    <>
      <Jumbotron fluid>
      <Container>
        <h1>Brandon Haynes</h1>
        <p>
          Mentor, Developer, Veteran
        </p>
      </Container>
    </Jumbotron>
    </>
  );
}

export default MyJumbo;