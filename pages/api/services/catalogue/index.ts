// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "isomorphic-unfetch";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Would move the host domain to an .env file to allow flexibility between different environments
    const apiResponse = await fetch(
      "http://localhost:8080/api/services/catalogue"
    );

    const body = await apiResponse.json();

    res.status(apiResponse.status).json(body);
  } catch (e: any) {
    res.status(500).json({ message: "Server Error" });
  }
}
