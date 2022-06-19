import type { NextPage } from "next";
import { getNextApiBaseUrl } from "@libs/helpers/next/getEnv";

const Catalogue: NextPage = () => {
  return <div></div>;
};

export async function getServerSideProps() {
  try {
    const nextApiBaseUrl = getNextApiBaseUrl();

    const response = await fetch(`${nextApiBaseUrl}/api/services/catalogue`, {
      method: "GET",
    });

    const { data } = await response.json();

    return { props: { catalogueData: data } };
  } catch (e) {
    return {
      redirect: {
        destination: "/404",
      },
    };
  }
}

export default Catalogue;
