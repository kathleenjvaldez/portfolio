import styled from "styled-components";

const NavBarStyles = styled.nav`
  display: flex;
  margin: 10px;

  span {
    margin: 15px;
    position: relative;
    text-decoration: none;

    &::before {
      content: "";
      width: 100%;
      height: 3px;
      border-bottom: 2px solid #ffc4ff;
      position: absolute;
      bottom: -2px;
      display: none;
    }

    &:hover::before {
      display: inline-block;
    }
  }
`;

const scrollJumper = (id) => {
  let offset = 90; // Size of navbar + 20 pixels for a little padding
  let section = document.getElementById(id);
  window.scrollTo(0, section.offsetTop - offset);
};

const NavBar = () => {
  return (
    <NavBarStyles>
      <span onClick={() => scrollJumper("about")}>About</span>
      <span onClick={() => scrollJumper}>Resume</span>
      <span onClick={() => scrollJumper("projects")}>Projects</span>
      <span onClick={() => scrollJumper("contact")}>Contact</span>
    </NavBarStyles>
  );
};

export default NavBar;
