import styled from "styled-components";

const ContactStyles = styled.div`
  margin: 160px 100px;
  display: flex;
  align-items: center;
  flex-direction: column;

  h3,
  p,
  code {
    color: white;
  }

  h3 {
    margin: 0;
  }

  p {
    text-align: center;
  }

  code {
    padding: 0.1em 0.25em;
    border-radius: 5px;
    background-color: gray;
  }
`;

const ContactMe = () => {
  return (
    <ContactStyles id="contact">
      <h3>Contact Me</h3>
      <p>
        I can be reacted at:
        <br />
        <code>hello@kvaldez.dev</code>
      </p>
    </ContactStyles>
  );
};

export default ContactMe;
