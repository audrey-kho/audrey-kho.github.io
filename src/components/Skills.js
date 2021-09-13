import {
  CssThree,
  Firebase,
  Html5,
  Java,
  Javascript,
  Nextdotjs,
  Nodedotjs,
  Python,
  ReactJs,
  Styledcomponents,
  Swift,
  Typescript,
} from "@icons-pack/react-simple-icons";
import {
  LogoCss3,
  LogoFirebase,
  LogoHtml5,
  LogoJavascript,
  LogoReact,
  LogoSass,
  LogoWebComponent,
} from "react-ionicons";
import styled from "styled-components";
import { MainSection, SectionHeading, SectionTitle } from "./Elements";
import { ResponsiveContainer } from "./ResponsiveContainer";

export default function Skills() {
  return (
    <ResponsiveContainer>
      <SkillsStyles id="skills">
        <SectionTitle href="skills">SKILLS</SectionTitle>
        <MainSection>
          <SectionHeading>RECENT LANGUAGES &amp; TECHNOLOGIES:</SectionHeading>
          <ul className="skills__list">
            <li>
              <Html5 title="HTML" width="42" height="42" />
            </li>
            <li>
              <CssThree title="CSS" width="42" height="42" />
            </li>
            <li>
              <Javascript title="JavaScript" width="42" height="42" />
            </li>
            <li>
              <Typescript title="Typescript" width="42" height="42" />
            </li>
            <li>
              <ReactJs title="React.js" width="42" height="42" />
            </li>
            <li>
              <Nextdotjs title="Next.js" width="42" height="42" />
            </li>
            <li>
              <Styledcomponents title="styled-components" width="42" height="42" />
            </li>
            <li>
              <Nodedotjs title="Node.js" width="42" height="42" />
            </li>
            <li>
              <Java title="Java" width="42" height="42" />
            </li>
            <li>
              <Python title="Python" width="42" height="42" />
            </li>
            <li>
              <Swift title="Swift" width="42" height="42" />
            </li>
          </ul>
        </MainSection>
      </SkillsStyles>
    </ResponsiveContainer>
  );
}

const SkillsStyles = styled.section`
  margin: 24px 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .skills__list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 12px -20px;
    padding: 0;
    list-style: none;
    overflow: auto;

    li {
      margin: 10px 16px;
    }
  }
`;
