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
            {experience.map(({ name, link, role, description, time }, index) => {
              return (
                <li key={name}>
                  <em className="timeframe" dangerouslySetInnerHTML={{ __html: time }} />
                  <div>
                    <a href={link} target="_blank" rel="noreferrer">
                      <h2>
                        {name.toUpperCase()}
                        <LinkArrow width={34} height={34} color={"#8787ff"} />
                      </h2>
                    </a>
                    <h6 className="work__role">{role}</h6>
                    <ul className="desc__list">
                      {description.map((d) => {
                        return <li key={d} dangerouslySetInnerHTML={{ __html: d }} />;
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
          <SectionHeading>SELECTED PROJECTS</SectionHeading>
          <ul className="project__list">
            {projects.map(({ name, link, type, description, technologies }) => {
              let projectObj = undefined;
              if (link !== "") {
                projectObj = () => {
                  return (
                    <a className="project__inner" href={link} target="_blank" rel="noreferrer">
                      <span className="project__type">{type}</span>
                      <h3>{name.toUpperCase()}</h3>
                      <p dangerouslySetInnerHTML={{ __html: description }} />
                      <ul className="tech__list">
                        {technologies.map((t) => {
                          return <li key={name + "-" + t}>{t}</li>;
                        })}
                      </ul>
                    </a>
                  );
                }
              } else {
                projectObj = () => {
                  return (
                    <div className="project__inner">
                      <span className="project__type">{type}</span>
                      <h3>{name.toUpperCase()}</h3>
                      <p dangerouslySetInnerHTML={{ __html: description }} />
                      <ul className="tech__list">
                        {technologies.map((t) => {
                          return <li key={name + "-" + t}>{t}</li>;
                        })}
                      </ul>
                    </div>
                  );
                }
              }
              return (
                <li className="project" key={name}>
                  {projectObj()}
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
    margin: 0 0 72px;
    padding: 0;

    > li + li {
      margin-top: 32px;
    }

    li {
      display: flex;

      h2 {
        display: inline-block;
        font-size: 29px;
        letter-spacing: 3px;
        margin: -7px 0 4px;

        svg {
          margin-bottom: -5px;
          margin-left: -3px;
          transition: 0.3s all;
        }
      }

      .work__role {
        font-family: "Whyte Light", sans-serif;
        font-size: 14px;
        font-weight: 100;
        margin: 0;
        text-transform: uppercase;
      }

      a {
        padding: 2px;

        &:hover svg {
          transform: translate(1px, -1px);
        }
      }

      div {
        position: relative;
        width: 100%;
        margin-left: 12px;
      }

      .timeframe {
        font-family: "Whyte Light", sans-serif;
        font-size: 14px;
        font-weight: 100;
        margin: 0;
        letter-spacing: 1px;
        width: 60px;
        font-style: normal;
      }

      .desc__list {
        margin: 9px 0;
        padding-left: 24px;

        li {
          font-family: "Whyte Light", sans-serif;
          font-size: 16px;
          letter-spacing: 1px;

          &::before {
            position: absolute;
            content: "-";
            left: 1px;
          }
        }
      }
    }
  }

  .project__list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0 0 62px;
    padding: 0;

    .project__inner {
      display: block;
      padding: 18px 32px;
      height: 88%;
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

    .project {
      flex: 1 1 360px;
      border: solid 0.5px #d8dbdb;
      border-radius: 12px;
      transition: 0.3s all;
      margin-right: 20px;
      margin-bottom: 20px;
      position: relative;

      @media (max-width: 800px) {
        margin-right: 0;
        margin-bottom: 34px;
      }

      p {
        letter-spacing: 1px;

        a {
          position: relative;
          display: inline;
          padding: 0;
          background-image: linear-gradient(#8787ff, #8787ff);
          background-size: 1px 1px;
          background-repeat: repeat-x;
          background-position: 0 92%;
        }
      }

      .tech__list {
        margin: 28px 0 2px;
        padding: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;

        li {
          display: inline;
          font-family: "Whyte Light", sans-serif;
          font-size: 12px;
          letter-spacing: 1px;
          margin-right: 8px;
          margin-bottom: 8px;
          padding: 4px 11px 3px;
          text-transform: uppercase;
          border: solid 0.2px #d8dbdb;
          border-radius: 22px;
        }
      }

      &:hover {
        box-shadow: 0 6px 28px rgba(22, 34, 56, 0.4);
        transform: translateY(-2px);
      }
    }
  }
`;
