import styled from "styled-components";

const AboutMeStyles = styled.div`
  margin: 160px 100px;

  h2,
  p {
    color: white;
    width: 80%;
  }

  .projHeading {
    padding: 0;
  }
`;

const AboutMe = () => {
  return (
    <AboutMeStyles id="about">
      <h2 className="projHeading">About Me</h2>
      <p>
        My background is as an accountant and I obtained my Bachelors degree in
        Economics from the University of California, San Diego. However I
        decided to make a career change and through my studies I have learned
        the fundamentals of Object-oriented programming languages such as
        Python. My areas of interest are web development so for the past year I
        have been working with HTML, CSS, Javascript, and Node.js for the
        backend. Most recently, I have learned to build websites using React.
      </p>
    </AboutMeStyles>
  );
};

export default AboutMe;
