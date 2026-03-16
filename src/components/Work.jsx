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
            {projects.map(({ name, link, type, featured, description, technologies }) => {
              let tileClass = "project ";
              if (link) tileClass += "clickable ";
              if (featured) tileClass += "featured";
              return (
                <li className={tileClass} key={name}>
                  {link ? (
                    <a
                      className="project__inner"
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {type && <span className="project__type">{type}</span>}
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
                      {type && <span className="project__type">{type}</span>}
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

    .project.featured {
      flex: 1 1 100%;
    }

    .project {
      flex: 1 1 360px;
      border: solid 0.5px var(--border);
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
          background-image: linear-gradient(var(--accent), var(--accent));
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
          border: solid 0.5px var(--border-strong);
          border-radius: 22px;
        }
      }

      &:hover {
        cursor: default;
      }

      &.clickable:hover {
        box-shadow: 0 6px 18px rgba(61, 59, 56, 0.1);
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
        color: var(--text-secondary);
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
