import { School, SchoolOutline } from "react-ionicons";
import styled from "styled-components";
import { MainSection, SectionTitle } from "./Elements";
import { ResponsiveContainer } from "./ResponsiveContainer";

export default function About() {
  return (
    <ResponsiveContainer>
      <AboutStyles id="about">
        <SectionTitle href="about">ABOUT ME</SectionTitle>
        <MainSection>
          <h5>HELLO! MY NAME IS</h5>
          <h2>Audrey&mdash;</h2>
          <ul className="details__list">
            <li>
              <SchoolOutline color="#d8dbdb" width="20px" height="20px" />
              <p>
                I'm majoring in&nbsp;
                <a href="https://ischool.uw.edu/" target="_blank" rel="noreferrer">
                  Informatics
                </a>
                &nbsp;with a focus in Software Development &amp; Human-Computer Interaction at the&nbsp;
                <a href="https://www.washington.edu/" target="_blank" rel="noreferrer">
                  University of Washington&ndash;Seattle.
                </a>
              </p>
            </li>
            <li>
              <School color="#d8dbdb" width="20px" height="20px" />
              <p>
              </p>
            </li>
            <li>
              <School color="#d8dbdb" width="20px" height="20px" />
              <p>
              </p>
            </li>
          </ul>
        </MainSection>
      </AboutStyles>
    </ResponsiveContainer>
  );
}

const AboutStyles = styled.section`
  margin-top: 120px;
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  h2,
  h5 {
    margin: 0;
  }

  h2 {
    font-size: 82px;
    letter-spacing: 3px;
  }

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: flex-start;
      max-width: 312px;
      letter-spacing: 1px;
      padding: 0;
      line-height: 1.5;

      span {
        margin-right: 16px;
      }

      p {
        margin: 0;
      }

      a {
        position: relative;
        // background: linear-gradient(to left, #2bad7c, #3581de)
        //   left bottom no-repeat;
        // background-size: 100% 1px;
        border-bottom: solid 1px #35a66f;
      }
    }

    > * + * {
      padding-left: 20px !important;
    }
  }
`;
