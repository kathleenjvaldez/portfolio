import styled from "styled-components";

const ContactStyles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;

  h3,
  p,
  code {
    color: white;
  }

  .contact {
    margin: 10px;
    left: 2rem;
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
    <ContactStyles>
      <h3 className="contact">Contact Me</h3>
      <p>
        I can be reacted at:
        <br />
        <code>hello@kvaldez.dev</code>
      </p>
    </ContactStyles>
  );
};

export default ContactMe;
