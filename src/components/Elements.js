import styled from "styled-components";
import { ArrowForwardSharp } from "react-ionicons";
import { Link } from "react-scroll";

export const SectionTitle = (...props) => {
  const {href, children} = props[0];
  return (
    <SectionTitleStyles>
      <Link to={href} smooth={true} offset={-50}>
        {children}&nbsp;
        <ArrowForwardSharp color={"#fff"} width="12px" height="12px" />
      </Link>
    </SectionTitleStyles>
  );
};

const SectionTitleStyles = styled.span`
  display: flex;
  align-items: flex-start;
  position: sticky;
  top: 20px;
  left: 0;
  margin: 0 !important;
  display: inline;
  font-family: "Whyte Book", sans-serif;
  font-size: 12px;
  font-weight: 600;
`;

export const MainSection = (props) => {
  return <MainStyles>{props.children}</MainStyles>;
};

const MainStyles = styled.section`
  margin-left: 80px;
`;
