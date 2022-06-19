import getConfig from "next/config";

// Would write test for these if given more time
export const getServerRuntimeConfig = () => {
  console.log("getConfig", getConfig());
  return getConfig()?.serverRuntimeConfig;
};

export const getServerBaseUrl = () => {
  const { baseUrl } = getServerRuntimeConfig();

  return baseUrl;
};
