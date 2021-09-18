import styled from "styled-components";
import { ArrowForwardSharp } from "react-ionicons";
import { Link } from "react-scroll";

export const SectionTitle = (...props) => {
  const { href, children } = props[0];
  return (
    <SectionTitleStyles>
      <Link to={href} smooth={true} offset={-92}>
        {children}&nbsp;
        <ArrowForwardSharp color={"#d8dbdb"} width="10px" height="10px" />
      </Link>
    </SectionTitleStyles>
  );
};

const SectionTitleStyles = styled.p`
  display: flex;
  position: sticky;
  top: 80px;
  margin: 1px 0 0 !important;
  font-family: "Whyte", sans-serif;
  font-size: 11px;
  font-weight: 600;
  min-width: 120px;

  svg {
    transition: 0.3s all;
  }

  a:hover svg {
    transform: translateX(3px);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SectionHeading = styled.h5`
  font-family: 'Whyte Book', sans-serif;
  margin: 0 0 14px;
  font-size: 14px;
`

// provides spacing between main content and the clickable section title
export const MainSection = (props) => {
  return <MainStyles>{props.children}</MainStyles>;
};

const MainStyles = styled.section`
  margin-left: 60px;
  width: 100%;

  @media (max-width: 768px) {
    margin: 0;
  }
`;
