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
                  <em dangerouslySetInnerHTML={{ __html: time }} />
                  <div>
                    <a href={link} target="_blank" rel="noreferrer">
                      <h2>
                        {name.toUpperCase()}
                        <LinkArrow width={34} height={34} />
                      </h2>
                    </a>
                    <h6>{position}</h6>
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
              return (
                <li className="project" key={name}>
                  <a href={link} target="_blank" rel="noreferrer">
                    <span>{type}</span>
                    <h3>{name.toUpperCase()}</h3>
                    <p dangerouslySetInnerHTML={{ __html: description }} />
                    <ul className="tech__list">
                      {technologies.map((t) => {
                        return <li key={name + "-" + t}>{t}</li>;
                      })}
                    </ul>
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
    margin: 0 0 82px;
    padding: 0;

    > li + li {
      margin-top: 68px;
    }

    li {
      display: flex;

      h2 {
        display: inline-block;
        font-size: 28px;
        letter-spacing: 3px;
        margin: -7px 0 4px;

        svg {
          margin-bottom: -5px;
          margin-left: -3px;
          transition: 0.3s all;
        }
      }

      span,
      h6 {
        font-family: "Whyte Light", sans-serif;
        font-size: 14px;
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

      em {
        font-family: "Whyte Light", sans-serif;
        font-size: 14px;
        margin: 0;
        letter-spacing: 1px;
        width: 60px;
        font-style: normal;
      }

      .desc__list {
        margin: 6px 0;
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

    a {
      display: block;
      padding: 18px 32px;
      opacity: 1;
      height: auto;

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
      flex: 1 1 280px;
      border: solid 0.5px #d8dbdb;
      border-radius: 12px;
      transition: 0.3s all;
      margin-right: 16px;
      margin-bottom: 38px;

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
          // padding-right: 12.3px;

          // &::after {
          //   position: absolute;
          //   bottom: -3.2px;
          //   right: -3px;
          //   content: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYuNSIgaGVpZ2h0PSIxNi41IiB2aWV3Qm94PSIwIDAgMjUgMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik03LjMwMjggMTcuODk2MUwxNy4zMDI4IDcuODk2MTIiIHN0cm9rZT0iI2Q4ZGJkYiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49ImFyY3MiLz4KPHBhdGggZD0iTTcuMzAyOCA3Ljg5NjEySDE3LjMwMjhWMTcuODk2MSIgc3Ryb2tlPSIjZDhkYmRiIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0iYXJjcyIvPgo8L3N2Zz4K");
          // }
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
