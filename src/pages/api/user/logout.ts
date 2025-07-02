import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "@lib:///session";

async function logoutRoute(req: NextApiRequest, res: NextApiResponse) {
  req.session.destroy();
  res.redirect(302, "/");
}

export default withIronSessionApiRoute(logoutRoute, sessionOptions);
