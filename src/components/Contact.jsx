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

    console.log(name);

    if (name && email && msg) {
      set(postRef, {
        name: name,
        email: email,
        message: msg,
      });
    }
  }

  return (
    <ResponsiveContainer>
      <ContactStyles id="contact">
        <SectionTitle href="contact">CONTACT</SectionTitle>
        <MainSection>
          <SectionHeading>SAY HELLO!</SectionHeading>
          <form
            autoComplete="on"
            onSubmit={(e) => {
              e.preventDefault();
              writeUserData(
                nameInput.current.value,
                emailInput.current.value,
                msgInput.current.value
              );
              nameInput.current.value = "";
              emailInput.current.value = "";
              msgInput.current.value = "";
            }}
          >
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
            <button type="submit">SEND MESSAGE</button>
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
    width: 96%;
  }

  section a {
    background-image: linear-gradient(to left, var(--accent), var(--accent));
    background-repeat: repeat-x;
    background-position: 0 92%;
    background-size: 1px 1px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 2.2em 0;
    width: 94%;
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
    height: 42px;
    padding: 2px 12px 1px;
  }

  textarea {
    width: 98.5% !important;
    height: 108px;
    padding: 12px;
  }

  .short-input input,
  textarea {
    font-family: "Hanken Grotesk", sans-serif;
    background: var(--surface);
    outline: none;
    border: var(--border) solid 1px;
    border-radius: 5px;
    margin-bottom: 16px;
    color: var(--text);
    font-size: 0.85em;
    letter-spacing: 0.5px;
    width: inherit;

    &::placeholder {
      color: var(--placeholder);
    }
  }

  button[type="submit"] {
    --webkit-appearance: none;
    font-family: "DM Mono", monospace;
    font-weight: 600;
    display: inline;
    height: 46px;
    color: var(--bg);
    font-size: 0.88em;
    letter-spacing: 2px;
    background: var(--text);
    outline: none;
    border: none;
    border-radius: 5px;
    margin: 1.2em 0;
    padding: 7px 28px 5px;
    max-width: 200px;
    transition: all 0.3s;

    &:hover {
      cursor: pointer;
      box-shadow: 0 3px 18px rgba(61, 59, 56, 0.2);
      opacity: 0.85;
    }

    @media (max-width: 425px) {
      margin: 1.5em auto;
    }
  }
`;
