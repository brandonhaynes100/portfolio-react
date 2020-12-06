// import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from "react-bootstrap"

function ProjectCard(props) {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button href={props.deployedLink} variant="primary">Visit App</Button>
          <Button href={props.githubLink} variant="secondary">Visit Github</Button>
        </Card.Body>
      </Card>

    </>
  );
}

export default ProjectCard;