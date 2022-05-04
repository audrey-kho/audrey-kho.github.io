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
          <SectionHeading>SELECTED PROJECTS</SectionHeading>
          <ul className="project__list">
            {projects.map(({ name, link, type, description, technologies }) => {
              let projectObj = undefined;
              if (!link.startsWith("/")) {
                projectObj = () => {
                  return (
                    <a
                      className="project__inner"
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                    >
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
                };
              } else {
                projectObj = () => {
                  return (
                    <a className="project__inner" href={link}>
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
                };
              }
              return (
                <li className="project" key={name}>
                  {projectObj()}
                </li>
              );
            })}
          </ul>
          <SectionHeading>EXPERIENCE</SectionHeading>
          <ul className="work__list">
            {experience.map(
              ({ name, link, role, description, time }, index) => {
                return (
                  <li key={name}>
                    <em
                      className="timeframe"
                      dangerouslySetInnerHTML={{ __html: time }}
                    />
                    <div>
                      <a
                        className="company__name"
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <h2>
                          {name.toUpperCase()}
                          <LinkArrow width={34} height={34} color={"#5cffc0"} />
                        </h2>
                      </a>
                      <h6 className="work__role">{role}</h6>
                      {/* <ul className="desc__list">
                      {description.map((d) => {
                        return <li className="list__item" key={d} dangerouslySetInnerHTML={{ __html: d }} />;
                      })}
                    </ul> */}
                    </div>
                  </li>
                );
              }
            )}
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
  margin: 160px 0 120px;

  ul {
    margin: 28px 0 72px;
  }

  .work__list {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;

    > li + li {
      margin-top: 38px;
    }

    > li {
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

      .company__name {
        padding: 2px;

        &:hover svg {
          transform: translate(1px, -1px);
        }
      }

      div {
        position: relative;
        width: 100%;
        margin-left: 16px;
      }

      .timeframe {
        font-family: "Whyte Light", sans-serif;
        font-size: 14px;
        font-weight: 100;
        margin: 0;
        letter-spacing: 1px;
        width: 54px;
        font-style: normal;
      }

      .desc__list {
        margin: 9px 0;
        padding-left: 24px;
        list-style: none;

        li {
          font-family: "Whyte Light", sans-serif;
          font-size: 16px;
          letter-spacing: 1px;

          a {
            background-image: linear-gradient(#5cffc0, #5cffc0);
            background-size: 1px 1px;
            background-repeat: repeat-x;
            background-position: 0 92%;
          }

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

    .project:nth-child(2), .project:nth-child(3) {
      &::before {
        position: absolute;
        top: 16px;
        right: 16px;
        content: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyMCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjAzMDQgNy4zMTgzTDE0LjQ5NjMgMTMuMTgwNkMxMy4zMjExIDEzLjQ2ODMgMTEuNzUzNiAxMy42NTU5IDEwIDEzLjY1NTlDOC4yNDYzOCAxMy42NTU5IDYuNjgwNDIgMTMuNDY4MyA1LjUwMzY1IDEzLjE4MDZMNi45Njk2MiA3LjMxODNDNy45MDAyNyA3LjQzNjc0IDguOTIzMjEgNy41MDI4OSAxMCA3LjUwMjg5QzExLjA3NjggNy41MDI4OSAxMi4wOTk3IDcuNDM2NzQgMTMuMDMwNCA3LjMxODNaTTEyLjY1MzUgNS44MTM4N0wxMS40OTIxIDEuMTY1MjRDMTEuMTA0NSAtMC4zODg0MTIgOC44OTU1MyAtMC4zODg0MTIgOC41MDc4OCAxLjE2NTI0TDcuMzQ2NDkgNS44MTA4QzguMTU0MDggNS45MTA3OCA5LjA0OTM1IDUuOTY0NjIgMTAgNS45NjQ2MkMxMC45NTA2IDUuOTY0NjIgMTEuODQ1OSA1LjkwOTI0IDEyLjY1MzUgNS44MTM4N1Y1LjgxMzg3Wk0xOS40MTU3IDE5LjA2MjlDMTkuNTc3NiAxOS4xMDMgMTkuNzIyIDE5LjE5NDYgMTkuODI3MyAxOS4zMjM5QzE5LjkzMjYgMTkuNDUzMyAxOS45OTMgMTkuNjEzMyAxOS45OTk0IDE5Ljc3OTlDMjAuMDA1OSAxOS45NDY1IDE5Ljk1NzkgMjAuMTEwNyAxOS44NjI5IDIwLjI0NzhDMTkuNzY3OSAyMC4zODQ4IDE5LjYzMDkgMjAuNDg3MyAxOS40NzI2IDIwLjUzOTdMMTAuMjQzIDIzLjYxNjJDMTAuMDg1MyAyMy42Njg4IDkuOTE0NzIgMjMuNjY4OCA5Ljc1Njk1IDIzLjYxNjJMMC41MjczNjUgMjAuNTM5N0MwLjM2OTA2MyAyMC40ODczIDAuMjMyMDg1IDIwLjM4NDggMC4xMzcwNyAyMC4yNDc4QzAuMDQyMDU0NCAyMC4xMTA3IC0wLjAwNTg1MTMyIDE5Ljk0NjUgMC4wMDA1NzA4ODQgMTkuNzc5OUMwLjAwNjk5MzA4IDE5LjYxMzMgMC4wNjczOTUzIDE5LjQ1MzMgMC4xNzI2NzYgMTkuMzIzOUMwLjI3Nzk1OCAxOS4xOTQ2IDAuNDIyNDE0IDE5LjEwMyAwLjU4NDI4IDE5LjA2MjlMNC4yNjIyNyAxOC4xNDMxTDUuMTMxMzkgMTQuNjcxMkM2LjQ1NzM4IDE0Ljk5NzMgOC4xNTI1NCAxNS4xOTI3IDEwIDE1LjE5MjdDMTEuODQ3NSAxNS4xOTI3IDEzLjU0MjYgMTQuOTk3MyAxNC44Njg2IDE0LjY3MTJMMTUuNzM3NyAxOC4xNDMxTDE5LjQxNTcgMTkuMDYyOVoiIGZpbGw9IiNEOERCREIiLz4KPC9zdmc+Cg==");
      }
    }

    .project {
      flex: 1 1 360px;
      border: solid 0.5px #d8dbdb;
      border-radius: 12px;
      transition: 0.3s all;
      margin-right: 20px;
      margin-bottom: 22px;
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
          background-image: linear-gradient(#5cffc0, #5cffc0);
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
        box-shadow: 0 6px 28px rgba(0, 0, 0, 0.25);
        transform: translateY(-2px);
      }
    }
  }
`;
