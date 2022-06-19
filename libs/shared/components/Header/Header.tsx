import React, { ReactElement } from "react";
import styled from "styled-components";

export const HeaderSC = styled.header`
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = (): ReactElement => {
  return (
    <HeaderSC>
      <h1>Header</h1>
    </HeaderSC>
  );
};

export default Header;
