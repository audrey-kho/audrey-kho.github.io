import styled from "styled-components";
import { MainSection, SectionTitle } from "./Elements";
import { ResponsiveContainer } from "./ResponsiveContainer";

export default function Skills() {
  return (
    <ResponsiveContainer>
      <SkillsStyles id="skills">
        <SectionTitle href="skills">SKILLS</SectionTitle>
        <MainSection>
          
        </MainSection>
      </SkillsStyles>
    </ResponsiveContainer>
  );
}

const SkillsStyles = styled.section`
  margin: 200px 0;
`