import styled from "styled-components";
import { MainSection, SectionTitle, SectionHeading } from "./Elements";
import { ResponsiveContainer } from "./ResponsiveContainer";
import { getDatabase, ref, set, push } from "firebase/database";
import { useRef } from "react";

export default function Contact({ firebaseConfig }) {
  const nameInput = useRef();
  const emailInput = useRef();
  const msgInput = useRef();

  function writeUserData(name, email, msg) {
    const db = getDatabase(firebaseConfig);

    const postRef = push(ref(db));

    if (name.current.value && email.current.value && msg.current.value) {
      set(postRef, {
        name: name.current.value,
        email: email.current.value,
        message: msg.current.value,
      });
    }
  }

  return (
    <ResponsiveContainer>
      <ContactStyles id="contact">
        <SectionTitle href="contact">CONTACT</SectionTitle>
        <MainSection>
          <SectionHeading>SAY HELLO!</SectionHeading>
          <p style={{ fontSize: "0.85em" }}>
            Feel free to leave a message here and I'll send back a reply as soon
            as I can. If this is an urgent matter, shoot me an email via{" "}
            <a href="mail:audreyckho@gmail.com">audreyckho@gmail.com</a> :)
          </p>
          <form autoComplete="on">
            <div className="short-input">
              <input
                ref={nameInput}
                type="text"
                autoComplete="name"
                placeholder="Name*"
                required
              ></input>
              <input
                ref={emailInput}
                type="email"
                autoComplete="email"
                placeholder="Email*"
                required
              ></input>
            </div>
            <textarea ref={msgInput} placeholder="Message*" required />
            <input
              type="submit"
              value="SEND MESSAGE"
              onClick={(e) => {
                writeUserData(nameInput, emailInput, msgInput);
              }}
            ></input>
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

  section p {
    width: 90%;
  }

  section a {
    background-image: linear-gradient(to left, #8787ff, #8787ff);
    background-repeat: repeat-x;
    background-position: 0 92%;
    background-size: 1px 1px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 2.2em 0;
    width: 88%;
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

  .short-input input,
  textarea {
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
    transition: all 0.3s;

    &:hover {
      cursor: pointer;
      box-shadow: 0 3px 18px rgba(15, 22, 48, 0.18);
      opacity: 0.8;
    }
  }
`;
