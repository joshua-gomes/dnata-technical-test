import React, { ReactElement } from "react";
import Image from "next/image";
import { CatalogueItemType } from "@libs/shared/types/api/services/catalogue";
import { CatalogueItemWrapper } from "./styles";

interface CatalogueItemProps {
  catalogueItem: CatalogueItemType;
}

const CatalogueItem = ({ catalogueItem }: CatalogueItemProps): JSX.Element => {
  return (
    <CatalogueItemWrapper>
      <Image src={catalogueItem.imageSrc} width={200} height={200} />
      <span>{catalogueItem.title}</span>
    </CatalogueItemWrapper>
  );
};

export default CatalogueItem;
