import styled from "styled-components";

export const ResponsiveContainer = styled.div`
  position: relative;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 5px;

  @media (max-width: 1120px) {
    margin: 0 16px;
  }
`;
