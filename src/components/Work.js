import styled from "styled-components";
import LinkArrow from "../assets/LinkArrow";
import { MainSection, SectionTitle, SectionHeading } from "./Elements";
import { ResponsiveContainer } from "./ResponsiveContainer";

export default function Work() {
  const { experience, projects } = require("../data/work.json");

  return (
    <ResponsiveContainer>
      <WorkStyles id="work">
        <SectionTitle href="work">WORK</SectionTitle>
        <MainSection>
          <ul className="work__list">
            {experience.map(({ name, link, position, description, time }, index) => {
              return (
                <li key={name}>
                  <a href={link} target="_blank" rel="noreferrer">
                    <em dangerouslySetInnerHTML={{__html: time}}/>
                    <div>
                      <h2>{name.toUpperCase()}<LinkArrow width={38} height={38} /></h2>
                      <h6>{position}</h6>
                      <p>{description}</p>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
          <SectionHeading>SELECTED PROJECTS</SectionHeading>
          <ul className="project__list">
            {projects.map(({ name, link, type, description, technologies }) => {
              return (
                <li key={name}>
                  <a href={link} target="_blank" rel="noreferrer">
                    <span>{type}</span>
                    <h3>{name.toUpperCase()}</h3>
                    <p>{description}</p>
                  </a>
                </li>
              );
            })}
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
  margin: 160px 0;

  .work__list {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    list-style: none;
    margin: 0 0 62px;
    padding: 0;

    > li + li {
      margin-top: 48px;
    }

    li {
      h2 {
        display: inline-block;
        font-size: 32px;
        letter-spacing: 3px;
        margin: -7px 0 4px;

        svg {
          margin-bottom: -5px;
          margin-left: -4px;
          transition: 0.3s all;
        }
      }

      span, h6 {
        font-family: "Whyte Light", sans-serif;
        font-size: 14px;
        margin: 0;
        text-transform: uppercase;
      }

      a {
        display: flex;
        align-items: flex-start;
        padding: 2px 0;

        &:hover svg {
          transform: translate(2px, -2px);
        }
      }

      div {
        position: relative;
        width: 100%;
        margin-left: 12px;
      }

      em {
        font-family: "Whyte Light", sans-serif;
        font-size: 14px;
        margin: 0;
        letter-spacing: 1px;
        width: 60px;
        font-style: normal;
      }
    }
  }

  .project__list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0 0 62px;
    padding: 0;

    a {
      display: block;
      padding: 18px 32px;
      opacity: 1;

      h3 {
        margin: 10px 0;
      }

      span {
        font-family: "Whyte Light", sans-serif;
        font-size: 12px;
        margin: 0;
        text-transform: uppercase;
      }
    }

    > li + li {
      margin-left: 24px;
    }

    li {
      flex: 1 1 280px;
      border: solid 0.5px #c0c0c0;
      border-radius: 12px;
      transition: 0.3s all;
      margin-bottom: 38px;

      &:hover {
        box-shadow: 0 3px 18px #111e3675;
      }
    }
  }
`;
