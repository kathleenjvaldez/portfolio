import styled from "styled-components";
import meteorlog from "../assets/meteorlog.jpeg";
import store from "../assets/store.jpeg";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import GitHubIcon from "@material-ui/icons/GitHub";

const ProjectStyles = styled.div`
  margin: 50px;
  position: relative;

  .layout,
  .layout2 {
    background: #191919;
    height: 400px;
    width: 80%;
    border: white;
    color: white;
    margin: 50px 50px 10px;
    border-radius: 10px;
    position: relative;
  }

  .layout2 {
    margin-top: 100px;
  }

  .projHeading {
    color: white;
    font-size: 2rem;
    top: 725px;
    left: 450px;
  }

  p {
    padding: 30px;
    float: right;
    width: 50%;
  }

  img {
    position: absolute;
    left: 1.5em;
    width: 40%;
    height: 50%;
    object-fit: cover;
    object-position: center center;
    opacity: 1;
    transition: opacity 500ms ease 0s;
    border-radius: 8px;
  }
`;

const LinkStyles = styled.div`
  a {
    position: absolute;
    display: inline-block;
    top: 300px;
    left: 700px;
    background: linear-gradient(180deg, #db85b4, #b097f2);
    border-radius: 20px;
    padding: 15px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 2px 5px rgb(0 0 0 / 20%);
    text-decoration: none;
    background-color: transparent;
    color: black;
  }

  .github {
    position: absolute;
    top: 300px;
    left: 850px;
  }

  svg {
    height: 0.75em;
  }
`;

const Projects = () => {
  return (
    <ProjectStyles id="projects">
      <h1 className="projHeading">Projects</h1>
      <div className="layout">
        <h2>Meteor Log</h2>
        <img src={meteorlog} alt="Meteor Log" />
        <p>
          A Weather app made with React that utilizes the Open Weather API to
          fetch data based on a given city and help you view the local weather.
          It utilizes Netlify serverless functions in order to talk to the API.
        </p>
        <LinkStyles>
          <a
            className="weatherapp"
            href="https://epic-hodgkin-d51bdf.netlify.app"
          >
            <OpenInNewIcon />
            Visit
          </a>
          <a
            className="github"
            href="https://github.com/kathleenjvaldez/weather-app"
          >
            <GitHubIcon />
            Visit
          </a>
        </LinkStyles>
      </div>
      <div className="layout2">
        <h2>Collective Coffee</h2>
        <img src={store} alt="store" />
        <p>
          This is an interactive website for a coffee shop. It is built with
          ReactJS, Node.js, Express JS, and MongoDB. It features product
          selection and checkout landing pages.
        </p>
        <LinkStyles>
          <a className="weatherapp" href="https://collectivecoffee.netlify.app">
            <OpenInNewIcon />
            Visit
          </a>
          <a className="github" href="https://github.com/kathleenjvaldez/store">
            <GitHubIcon />
            Visit
          </a>
        </LinkStyles>
      </div>
    </ProjectStyles>
  );
};

export default Projects;
