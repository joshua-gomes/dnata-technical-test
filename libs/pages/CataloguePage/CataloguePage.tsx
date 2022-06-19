import React, { ReactElement } from "react";
import Header from "@components/Header";
import { PageWrapper, CatalogueSideBar, StyledCatalogueList } from "./styles";
import { CatalogueItemsType } from "@libs/shared/types/api/services/catalogue";

interface CataloguePageProps {
  catalogueItems: CatalogueItemsType;
}

const CataloguePage = ({
  catalogueItems,
}: CataloguePageProps): ReactElement => {
  return (
    <div>
      <Header />
      <PageWrapper>
        <CatalogueSideBar />
        <StyledCatalogueList catalogueItems={catalogueItems} />
      </PageWrapper>
    </div>
  );
};

export default CataloguePage;
