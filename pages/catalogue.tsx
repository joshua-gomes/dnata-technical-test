import { NextPage } from "next";
import { getNextApiBaseUrl } from "@libs/shared/helpers/next/getEnv";
import CataloguePage from "@libs/pages/CataloguePage";
import { CatalogueItemsType } from "@libs/shared/types/api/services/catalogue";

interface CatalogueProps {
  catalogueItems: CatalogueItemsType;
}

const Catalogue = ({ catalogueItems, ...props }: CatalogueProps) => {
  return <CataloguePage catalogueItems={catalogueItems} {...props} />;
};

export async function getServerSideProps() {
  try {
    const nextApiBaseUrl = getNextApiBaseUrl();

    const response = await fetch(`${nextApiBaseUrl}/api/services/catalogue`, {
      method: "GET",
    });

    const { data } = await response.json();

    return { props: { catalogueItems: data } };
  } catch (e) {
    return {
      redirect: {
        destination: "/404",
      },
    };
  }
}

export default Catalogue;
