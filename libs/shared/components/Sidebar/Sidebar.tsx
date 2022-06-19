import React, { ReactElement } from "react";
import styled from "styled-components";

const SidebarSC = styled.aside`
  width: 300px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Sidebar = (): ReactElement => {
  return (
    <SidebarSC>
      <span>Sidebar</span>
    </SidebarSC>
  );
};

export default Sidebar;
