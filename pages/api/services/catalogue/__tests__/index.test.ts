import { testApiHandler } from "next-test-api-route-handler";
import { WireMockRestClient } from "wiremock-rest-client";
import { LoggedRequest } from "wiremock-rest-client/dist/model/logged-request.model";
import { StubMapping } from "wiremock-rest-client/dist/model/stub-mapping.model";
import endpoint from "../index";

const dnataApiClient = new WireMockRestClient("http://localhost:8080", {
  logLevel: "DEBUG",
});

const catalogueApiUrl = "/api/services/catalogue";

const testStub: StubMapping = {
  request: {
    url: catalogueApiUrl,
    method: "GET",
  },
  response: {
    status: 200,
    headers: {
      Content: "application/json",
      "Access-Allow-All-Origins": "*",
    },
  },
};

describe("Catalogue api", () => {
  it("makes a successful request", async () => {
    await dnataApiClient.mappings.createMapping(testStub);

    await testApiHandler({
      handler: endpoint,
      test: async ({ fetch }) => {
        await fetch({
          method: "GET",
        });

        const { requests } = await dnataApiClient.requests.getAllRequests();

        const matchedRequestIsMatched = requests.find((req: LoggedRequest) => {
          return req.request.url === catalogueApiUrl && req.wasMatched;
        });

        expect(matchedRequestIsMatched).not.toBeUndefined();
      },
    });
  });

  it("responds with the expecpted catalogue response body", () => {});

  it("sends an expected error response when an unhandled request is made", () => {});
});
