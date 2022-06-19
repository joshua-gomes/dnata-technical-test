import { testApiHandler } from "next-test-api-route-handler";
import { WireMockRestClient } from "wiremock-rest-client";
import { LoggedRequest } from "wiremock-rest-client/dist/model/logged-request.model";
import { StubMapping } from "wiremock-rest-client/dist/model/stub-mapping.model";
import { catalogueApiResponseBody } from "./constants";
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
    jsonBody: catalogueApiResponseBody,
    headers: {
      Content: "application/json",
      "Access-Allow-All-Origins": "*",
    },
  },
};

describe("Catalogue api", () => {
  beforeAll(async () => {
    await dnataApiClient.mappings.createMapping(testStub);
  });

  beforeEach(async () => {
    await dnataApiClient.requests.resetAllRequests();
  });

  it("makes a successful request", async () => {
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

  it("responds with the expected catalogue response body", async () => {
    await testApiHandler({
      handler: endpoint,
      test: async ({ fetch }) => {
        const response = await fetch({
          method: "GET",
        });

        const body = await response.json();

        expect(body).toEqual(catalogueApiResponseBody);
      },
    });
  });

  it.each(["POST", "DELETE", "OPTIONS", "PATCH", "PUT"])(
    "sends an expected error response when an unhandled request when %s method is made",
    async (requestMethod) => {
      await testApiHandler({
        handler: endpoint,
        test: async ({ fetch }) => {
          const response = await fetch({
            method: requestMethod,
          });

          const body = await response.json();

          expect(response.status).toEqual(400);
          expect(body).toEqual({ message: "Bad Request" });
        },
      });
    }
  );
});
