import styled from "styled-components";
import { MainSection, SectionTitle, SectionHeading } from "./Elements";
import { ResponsiveContainer } from "./ResponsiveContainer";

export default function Contact() {

  return (
    <ResponsiveContainer>
      <ContactStyles id="contact">
        <SectionTitle href="contact">CONTACT</SectionTitle>
        <MainSection>
          <SectionHeading>SAY HELLO!</SectionHeading>
          <form autoComplete="on">
            <div className="short-input">
              <input type="text" autoComplete="name" placeholder="Name*" required></input>
              <input type="email" autoComplete="email" placeholder="Email*" required></input>
            </div>
            <textarea placeholder="Message*" required/>
            <input type="submit" value="SEND MESSAGE"></input>
          </form>
        </MainSection>
      </ContactStyles>
    </ResponsiveContainer>
  );
}

const ContactStyles = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 120px 0 180px;
  font-size: 1.16em;

  form {
    display: flex;
    flex-direction: column;
    margin: 2.2em 0;
    width: 88%;

    // > * {
    //   width: 96%;
    // }
  }

  .short-input {
    display: flex;
    width: 100% !important;

    > input + input {
      margin-left: 18px;

      @media (max-width: 768px) {
        margin-left: 0;
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .short-input input {
    max-width: 600px;
    height: 32px;
    padding: 2px 8px;
  }

  textarea {
    width: 98.5% !important;
    height: 88px;
    padding: 8px;
  }

  .short-input input, textarea {
    font-family: "Whyte Light", sans-serif;
    background: rgba(255, 255, 255, 0.1);
    outline: none;
    border: #d8dbdb solid 1px;
    border-radius: 5px;
    margin-bottom: 16px;
    color: #fff;
    font-size: 0.85em;
    letter-spacing: 1px;
    width: inherit;

    &::placeholder {
      color: #c0c0c0;
    }
  }

  input[type="submit"] {
    font-family: "Whyte", sans-serif;
    display: inline;
    height: 36px;
    color: #455d97;
    font-size: 0.88em;
    font-weight: 600;
    letter-spacing: 1px;
    background: #d8dbdb;
    outline: none;
    border: none;
    border-radius: 5px;
    margin: 1.5em 0;
    padding: 4px 28px;
    max-width: 280px;
  }
`