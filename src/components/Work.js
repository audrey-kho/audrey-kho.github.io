import styled from "styled-components";
import { MainSection, SectionTitle, SectionHeading } from "./Elements";
import { ResponsiveContainer } from "./ResponsiveContainer";

export default function Work() {
  const data = require('../data/work.json');
  console.log(data);
  return (
    <ResponsiveContainer>
      <WorkStyles id="work">
        <SectionTitle href="work">WORK</SectionTitle>
        <MainSection>
          <SectionHeading>EXPERIENCE</SectionHeading>
          <ul className="work__list">
            <li>
              
            </li>
          </ul>
          <SectionHeading>SELECTED PROJECTS</SectionHeading>
          <ul className="project__list">
            <li></li>
          </ul>
        </MainSection>
      </WorkStyles>
    </ResponsiveContainer>
  );
}

const WorkStyles = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 200px 0;

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;

    li {
      flex: 0 1 1000px;


    }
  }
`