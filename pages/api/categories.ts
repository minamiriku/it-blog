import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "libs/client";

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const categories = await client.get({ endpoint: "categories" });
  return res.status(200).json(categories);
};

export default handler;
