import styled from "styled-components";
import { Link } from "react-scroll";
import { IoArrowForwardSharp } from "react-icons/io5";

export const SectionTitle = (...props) => {
  const { href, children } = props[0];
  return (
    <SectionTitleStyles>
      <Link to={href} smooth={true} offset={-92}>
        {children}&nbsp;
        <IoArrowForwardSharp color={"#485A3D"} width="10px" height="10px" />
      </Link>
    </SectionTitleStyles>
  );
};

const SectionTitleStyles = styled.p`
  display: flex;
  position: sticky;
  top: 80px;
  margin: 1px 0 0 !important;
  font-family: "DM Mono", monospace;
  font-size: 13px;
  font-weight: 400;
  min-width: 120px;
  letter-spacing: 1px;

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

export const SectionHeading = styled.h2`
  font-family: "DM Mono", monospace;
  font-size: 15px;
  font-weight: 500;
  margin: 0 0 14px;
  letter-spacing: 1.5px;
`;

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
