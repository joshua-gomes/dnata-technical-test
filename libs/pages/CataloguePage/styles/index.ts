import styled from "styled-components";
import Sidebar from "@components/Sidebar";
import CatalogueList from "../components/CatalogueList";

export const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

export const CatalogueSideBar = styled(Sidebar)`
  && {
    width: unset;
    grid-column: 1 / span 2;
  }
`;

export const StyledCatalogueList = styled(CatalogueList)`
  grid-column: 3 / span 10;
`;
