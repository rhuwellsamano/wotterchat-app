// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../sanity";
import { Splash } from "./../../typings.d";
import { groq } from "next-sanity";

const feedQuery = groq`
    *[_type == "splash"] {
        _id,
        ...
    } | order(createdAt asc)
`;

type Data = {
  splashes: Splash[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const splashes: Splash[] = await sanityClient.fetch(feedQuery);

  res.status(200).json({ splashes });
}
