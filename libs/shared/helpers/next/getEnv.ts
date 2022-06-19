import getConfig from "next/config";

// Would write test for these if given more time
export const getServerRuntimeConfig = () => {
  return getConfig()?.serverRuntimeConfig;
};

export const getPublicRuntimeConfig = () => {
  return getConfig()?.publicRuntimeConfig;
};

export const getDnataApiBaseUrl = () => {
  const { dnataApiBaseUrl } = getServerRuntimeConfig();

  return dnataApiBaseUrl;
};

export const getNextApiBaseUrl = () => {
  const { nextApiBaseUrl } = getPublicRuntimeConfig();

  return nextApiBaseUrl;
};
