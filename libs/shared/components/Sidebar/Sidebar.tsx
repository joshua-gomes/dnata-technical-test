import React, { ReactElement } from "react";
import styled from "styled-components";

const SidebarSC = styled.aside`
  width: 300px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
`;

const Sidebar = ({ ...props }): ReactElement => {
  return (
    <SidebarSC {...props}>
      <span>Sidebar</span>
    </SidebarSC>
  );
};

export default Sidebar;
