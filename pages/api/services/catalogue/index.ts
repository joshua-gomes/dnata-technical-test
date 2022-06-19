// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "isomorphic-unfetch";
import { getServerBaseUrl } from "@helpers/next/getEnv";

const getCatalogueRequest = async (req: NextApiRequest) => {
  const baseUrl = getServerBaseUrl();
  const apiResponse = await fetch(`${baseUrl}/api/services/catalogue`, {
    method: req.method,
  });

  const body = await apiResponse.json();

  return { status: apiResponse.status, body };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let apiResponse;
  try {
    // Would move the host domain to an .env file to allow flexibility between different environments

    switch (req.method) {
      case "GET":
        apiResponse = await getCatalogueRequest(req);
        break;
      default:
        apiResponse = {
          status: 400,
          body: {
            message: "Bad Request",
          },
        };
    }

    res.status(apiResponse.status).json(apiResponse.body);
  } catch (e) {
    res.status(500).json({ message: "Server Error" });
  }
}
