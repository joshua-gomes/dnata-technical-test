jest.mock("next/config", () => () => ({
  serverRuntimeConfig: {
    baseUrl: "http://localhost:8080",
  },
}));
