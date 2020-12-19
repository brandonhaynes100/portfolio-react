// import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCard from "../ProjectCard"
import { CardDeck, Container } from "react-bootstrap"

function ProjectsContainer() {

  let projectArrayOne = [
    {
      image: "https://via.placeholder.com/150",
      title: "title",
      text: "text",
      deployedLink: "https://www.google.com/",
      githubLink: "https://www.google.com/"
    },
    {
      image: "https://via.placeholder.com/150",
      title: "title2",
      text: "text2",
      deployedLink: "https://www.google.com/",
      githubLink: "https://www.google.com/"
    },
    {
      image: "https://via.placeholder.com/150",
      title: "title3",
      text: "text3",
      deployedLink: "https://www.google.com/",
      githubLink: "https://www.google.com/"
    }
  ]

  return (
    <>
      <Container>
        <h2 id="projects">Projects</h2>

        <CardDeck>
          {projectArrayOne.map((projectInfo) => {
            return (
              <ProjectCard
                image={projectInfo.image}
                title={projectInfo.title}
                text={projectInfo.text}
                deployedLink={projectInfo.deployedLink}
                githubLink={projectInfo.githubLink}
              />
            )
          })}
        </CardDeck>
      </Container>
    </>
  );
}

export default ProjectsContainer;