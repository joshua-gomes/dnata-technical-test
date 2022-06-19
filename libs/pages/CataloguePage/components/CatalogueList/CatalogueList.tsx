import React, { ReactElement } from "react";
import { CatalogueItemsType } from "@libs/shared/types/api/services/catalogue";
import CatalogueItem from "../CatalogueItem";
import { CatalogueListSC } from "./styles";

interface CatalogueList {
  catalogueItems: CatalogueItemsType;
}

const CatalogueList = ({
  catalogueItems,
  ...props
}: CatalogueList): ReactElement => {
  return (
    <CatalogueListSC {...props}>
      {catalogueItems.map((catalogueItem) => (
        <CatalogueItem catalogueItem={catalogueItem} key={catalogueItem.id} />
      ))}
    </CatalogueListSC>
  );
};

export default CatalogueList;
