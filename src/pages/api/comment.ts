import { Comment } from "@/types/Comment";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const comment: Comment = {
    createdAt: "17/01/2020",
    user: "Some random user",
    body: "Lorem ipsum dolor sit amet",
  };
  res.json(comment);
}
