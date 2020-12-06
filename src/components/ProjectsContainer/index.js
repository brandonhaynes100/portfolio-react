// import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCard from "../ProjectCard"
import {CardDeck} from "react-bootstrap"

function ProjectsContainer() {

let projectArrayOne = [
  {
    title: "title",
    text: "text",
    deployedLink: "https://www.google.com/",
    githubLink: "https://www.google.com/"
  },
  {
    title: "title2",
    text: "text2",
    deployedLink: "https://www.google.com/",
    githubLink: "https://www.google.com/"
  },
  {
    title: "title3",
    text: "text3",
    deployedLink: "https://www.google.com/",
    githubLink: "https://www.google.com/"
  }
]



  return (
    <>
    <CardDeck>
      {projectArrayOne.map((projectInfo) => {
      return (
        <ProjectCard 
          title={projectInfo.title}
          text={projectInfo.text}
          deployedLink={projectInfo.deployedLink}
          githubLink={projectInfo.githubLink}
        />
      )
      })}
    </CardDeck>
    </>
  );
}

export default ProjectsContainer;