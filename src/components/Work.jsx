import styled from "styled-components";
import LinkArrow from "../assets/LinkArrow";
import { MainSection, SectionTitle, SectionHeading } from "./Elements";
import { ResponsiveContainer } from "./ResponsiveContainer";
import { prev_experience, curr_experience, projects } from "../data/work.json";

export default function Work() {
  return (
    <ResponsiveContainer>
      <WorkStyles id="work">
        <SectionTitle href="work">WORK</SectionTitle>
        <MainSection>
          <SectionHeading>SELECTED PROJECTS</SectionHeading>
          <ul className="project__list">
            {projects.map(({ name, link, type, description, technologies }) => {
              let tileClass = "project ";
              if (link) {
                tileClass += "clickable";
              }
              return (
                <li className={tileClass} key={name}>
                  {link ? (
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
                  ) : (
                    <div className="project__inner">
                      <span className="project__type">{type}</span>
                      <h2>{name.toUpperCase()}</h2>
                      <p dangerouslySetInnerHTML={{ __html: description }} />
                      <ul className="tech__list">
                        {technologies.map((t) => {
                          return <li key={name + "-" + t}>{t}</li>;
                        })}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          <SectionHeading>CURRENTLY</SectionHeading>
          <ul className="work__list">
            {curr_experience.map((exp) => {
              return (
                <li key={exp.name} className="work__item">
                  <a href={exp.link} target="_blank" rel="noreferrer">
                    {exp.name}
                    <LinkArrow width={18} height={18} position={-2.5} />
                  </a>
                  &nbsp;
                  <br /> <span>{exp.role}</span>
                </li>
              );
            })}
          </ul>
          <SectionHeading>PREVIOUSLY</SectionHeading>
          <ul className="work__list">
            {prev_experience.map((exp) => {
              return (
                <li key={exp.name} className="work__item">
                  <a href={exp.link} target="_blank" rel="noreferrer">
                    {exp.name}
                    <LinkArrow width={18} height={18} position={-2.5} />
                  </a>
                  &nbsp;
                  <br /> <span>{exp.role}</span>
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

  ul {
    margin: 28px 0 72px;
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
        font-family: "DM Mono", monospace;
        margin: 10px 0;
      }

      span {
        font-family: "DM Mono", monospace;
        font-weight: 300;
        font-size: 13px;
        margin: 0;
        text-transform: uppercase;
      }
    }

    .project:nth-child(2) {
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
      border: solid 0.5px #485a3d;
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
        letter-spacing: 0.5px;

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
          font-family: "DM Mono", monospace;
          font-size: 12px;
          font-weight: 300;
          letter-spacing: 1px;
          margin-right: 8px;
          margin-bottom: 8px;
          padding: 4px 12px 3px;
          text-transform: uppercase;
          border: solid 0.2px #485a3d;
          border-radius: 22px;
        }
      }

      &:hover {
        cursor: default;
      }

      &.clickable:hover {
        box-shadow: 0 6px 14px rgba(136, 156, 128, 0.15);
        transform: translateY(-2px);
        cursor: pointer;
      }
    }
  }

  .work__list {
    list-style: none;
    padding: 0;
    text-transform: uppercase;
    font-size: 1.12em;

    .work__item {
      margin: 8px 0;

      a {
        font-family: "DM Mono", monospace;
        font-weight: 600;

        svg {
          transition: 0.3s all;
        }

        &:hover svg {
          transform: translate(1px, -1px);
        }
      }

      span {
        color: #88ad71;
        letter-spacing: 0.5px;
        text-transform: none;
      }

      @media (min-width: 500px) {
        br {
          display: none;
        }
      }

      @media (max-width: 500px) {
        br {
          display: block;
        }
      }
    }
  }
`;
