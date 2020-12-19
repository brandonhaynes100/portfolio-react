import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from "./components/MyNav"
import MyJumbo from "./components/MyJumbo"
import ProjectsContainer from "./components/ProjectsContainer"

function App() {
  return (
    <>
      <MyNav></MyNav>
      <MyJumbo></MyJumbo>
      <ProjectsContainer></ProjectsContainer>
    </>
  );
}

export default App;
