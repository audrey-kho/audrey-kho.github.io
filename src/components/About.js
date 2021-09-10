import styled from "styled-components";
import { MainSection, SectionTitle } from "./Elements";
import { ResponsiveContainer } from "./ResponsiveContainer";

export default function About() {
  return (
    <ResponsiveContainer>
      <AboutStyles id="about">
        <SectionTitle href="about">ABOUT</SectionTitle>
        <MainSection>
          <h5>HELLO! MY NAME IS</h5>
          <h2>Audrey&mdash;</h2>
        </MainSection>
      </AboutStyles>
    </ResponsiveContainer>
  );
}

const AboutStyles = styled.section`
  margin-top: 180px;
  margin-bottom: 80px;
  display: flex;
  align-items: flex-start;

  h2, h5 {
    margin: 2px 0;
  }

  h2 {
    font-size: 82px;
    letter-spacing: 3px;
  }
`