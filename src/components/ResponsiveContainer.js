import styled from "styled-components";

export const ResponsiveContainer = styled.div`
  position: relative;
  max-width: 1208px;
  margin: 0 auto;
  padding: 0 5px;

  @media (max-width: 1280px) {
    margin: 0 16px;
  }
`;
