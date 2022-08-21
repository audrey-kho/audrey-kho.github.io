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
                      <h2>{name.toUpperCase()}</h2>
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
                      <h2>{name.toUpperCase()}</h2>
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
                          <LinkArrow width={34} height={34} color={"#889c80"} />
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
        font-family: "Whyte Book", sans-serif;
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
        font-family: "Whyte Book", sans-serif;
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
          font-family: "Whyte Book", sans-serif;
          font-size: 16px;
          letter-spacing: 1px;

          a {
            background-image: linear-gradient(#889c80, #889c80);
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

      h2 {
        margin: 10px 0;
      }

      span {
        font-family: "Whyte Book", sans-serif;
        font-size: 12px;
        margin: 0;
        text-transform: uppercase;
      }
    }

    .project:first-child, .project:nth-child(3), .project:nth-child(4) {
      &::before {
        position: absolute;
        top: 16px;
        right: 16px;
        // content: url("data:image/svg+xml;base64,");
        content: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMjciIHZpZXdCb3g9IjAgMCAyMyAyNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjcwMzIgOC44MTU3NUwxNi4zMTU4IDE1LjI2NDNDMTUuMDIzIDE1LjU4MDcgMTMuMjk4OCAxNS43ODcyIDExLjM2OTggMTUuNzg3MkM5LjQ0MDgzIDE1Ljc4NzIgNy43MTgyOCAxNS41ODA3IDYuNDIzODMgMTUuMjY0M0w4LjAzNjM5IDguODE1NzVDOS4wNjAxMSA4Ljk0NjA0IDEwLjE4NTMgOS4wMTg4IDExLjM2OTggOS4wMTg4QzEyLjU1NDMgOS4wMTg4IDEzLjY3OTUgOC45NDYwNCAxNC43MDMyIDguODE1NzVaTTE0LjI4ODcgNy4xNjA4OEwxMy4wMTExIDIuMDQ3MzhDMTIuNTg0NyAwLjMzODM3MiAxMC4xNTQ5IDAuMzM4MzcyIDkuNzI4NDggMi4wNDczOEw4LjQ1MDk1IDcuMTU3NUM5LjMzOTMgNy4yNjc0OSAxMC4zMjQxIDcuMzI2NzEgMTEuMzY5OCA3LjMyNjcxQzEyLjQxNTUgNy4zMjY3MSAxMy40MDAzIDcuMjY1NzkgMTQuMjg4NyA3LjE2MDg4VjcuMTYwODhaTTIxLjcyNzEgMjEuNzM0OUMyMS45MDUyIDIxLjc3OSAyMi4wNjQxIDIxLjg3OTcgMjIuMTc5OSAyMi4wMjJDMjIuMjk1NyAyMi4xNjQyIDIyLjM2MjEgMjIuMzQwMiAyMi4zNjkyIDIyLjUyMzVDMjIuMzc2MiAyMi43MDY4IDIyLjMyMzYgMjIuODg3NCAyMi4yMTkgMjMuMDM4MkMyMi4xMTQ1IDIzLjE4ODkgMjEuOTYzOCAyMy4zMDE2IDIxLjc4OTcgMjMuMzU5M0wxMS42MzcyIDI2Ljc0MzVDMTEuNDYzNiAyNi44MDEzIDExLjI3NiAyNi44MDEzIDExLjEwMjUgMjYuNzQzNUwwLjk0OTkxMyAyMy4zNTkzQzAuNzc1NzgyIDIzLjMwMTYgMC42MjUxMDYgMjMuMTg4OSAwLjUyMDU4OSAyMy4wMzgyQzAuNDE2MDcyIDIyLjg4NzQgMC4zNjMzNzYgMjIuNzA2OCAwLjM3MDQ0IDIyLjUyMzVDMC4zNzc1MDQgMjIuMzQwMiAwLjQ0Mzk0NyAyMi4xNjQyIDAuNTU5NzU2IDIyLjAyMkMwLjY3NTU2NSAyMS44Nzk3IDAuODM0NDY4IDIxLjc3OSAxLjAxMjUyIDIxLjczNDlMNS4wNTgzMSAyMC43MjNMNi4wMTQzNCAxNi45MDM5QzcuNDcyOTMgMTcuMjYyNyA5LjMzNzYxIDE3LjQ3NzYgMTEuMzY5OCAxNy40Nzc2QzEzLjQwMiAxNy40Nzc2IDE1LjI2NjcgMTcuMjYyNyAxNi43MjUzIDE2LjkwMzlMMTcuNjgxMyAyMC43MjNMMjEuNzI3MSAyMS43MzQ5WiIgZmlsbD0iIzg4OUM4MCIvPgo8L3N2Zz4K");
      }
    }

    .project {
      flex: 1 1 360px;
      border: solid 0.5px #485A3D;
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
          background-image: linear-gradient(#889c80, #889c80);
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
          font-family: "Whyte Book", sans-serif;
          font-size: 12px;
          letter-spacing: 1px;
          margin-right: 8px;
          margin-bottom: 8px;
          padding: 4px 11px 3px;
          text-transform: uppercase;
          border: solid 0.2px #485A3D;
          border-radius: 22px;
        }
      }

      &:hover {
        box-shadow: 0 6px 24px rgba(10, 20, 10, 0.12);
        transform: translateY(-2px);
      }
    }
  }
`;
