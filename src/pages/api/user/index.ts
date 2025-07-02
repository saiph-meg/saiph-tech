import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import { sessionOptions } from "@lib://session";
import { User } from "@lib://default.types";

async function userRoute(req: NextApiRequest, res: NextApiResponse<User>) {
  const user = req.session.user;
  if (!user || !user.isLoggedIn) {
    res.status(401).end();
    return;
  }
  res.status(200).json(user);
}

export default withIronSessionApiRoute(userRoute, sessionOptions);
