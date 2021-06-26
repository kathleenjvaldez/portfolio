import styled from "styled-components";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import AboutMe from "../styles/About";
import Projects from "../styles/Projects";
import ContactMe from "./Contact";

const MainStyles = styled.main`
  h1 {
    background: linear-gradient(
      271deg,
      #a0e9ff 30%,
      #a162e8 50%,
      #f093b0 70%,
      #edca85 94%
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 4rem;
    margin-left: 50px;
  }

  h3 {
    margin-left: 50px;
  }

  h2 {
    padding: 20px;
  }
`;

const Jumbotron = styled.div`
  margin: 200px 50px;

  button {
    background: linear-gradient(180deg, #db85b4, #b097f2);
    font-size: 20px;
    padding: 20px;
    margin: 50px;
    border-radius: 25px;
    border: none;
  }
`;

const Main = () => {
  return (
    <MainStyles>
      <Jumbotron>
        <h1>
          Hi, I'm Kathleen <br /> and I'm a developer.
        </h1>
        <div>
          <h3>
            I specialize in full stack development and improving the user
            experience.
          </h3>
        </div>
        <button type="button" style={{ display: "flex" }}>
          About Me
          <ArrowDownwardIcon />
        </button>
      </Jumbotron>
      <AboutMe />
      <Projects />
      <ContactMe />
    </MainStyles>
  );
};

export default Main;
