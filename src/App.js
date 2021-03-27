// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from "./components/MyNav"
import MyJumbo from "./components/MyJumbo"
import ProjectsContainer from "./components/ProjectsContainer"
import Contact from "./components/Contact"

// import React from 'react';
import {ReactComponent as ReactLogo} from './logo.svg';


function App() {
  return (
    <>
      <MyNav></MyNav>
      <MyJumbo></MyJumbo>
      <ProjectsContainer></ProjectsContainer>
      <Contact></Contact>
      <ReactLogo />
    </>
  );
}

export default App;
