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
`