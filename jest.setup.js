jest.mock("next/config", () => () => ({
  serverRuntimeConfig: {
    dnataApiBaseUrl: "http://localhost:8080",
  },
}));
