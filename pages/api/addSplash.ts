// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { SplashBody } from "../../typings";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("addSplash fired!");
  const data: SplashBody = JSON.parse(req.body);

  console.log("fromAddSplash: ", data);

  const mutations = {
    mutations: [
      {
        create: {
          _type: "splash",
          text: data.text,
          username: data.username,
          blockSplash: false,
          profileImg: data.profileImg,
          image: data.image,
        },
      },
    ],
  };

  console.log("MUTATIONS BE LIKE: ", JSON.stringify(mutations));

  const apiEndpoint = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`;

  const result = await fetch(apiEndpoint, {
    headers: {
      "Content-Type": `application/json`,
      Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
    },
    body: JSON.stringify(mutations),
    method: "POST",
  });

  const json = await result.json();

  // res.status(200).json({ message: "SPLASHY SPLASH ADDED!" });
}
