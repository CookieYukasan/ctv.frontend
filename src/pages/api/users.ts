import { NextApiRequest, NextApiResponse } from "next";

const users = [
  {
    id: 1,
    username: "Adson",
  },
  {
    id: 2,
    username: "Cookie Yukasan",
  },
  {
    id: 3,
    username: "Victor Rajk",
  },
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.json(users);
};
