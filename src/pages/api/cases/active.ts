import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "@lib://session";
import cases from "@data://cases.json";

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const user = req.session.user;
  if (!user || !user.isLoggedIn) {
    res.status(401).end();
    return;
  }
  res.status(200).json(cases.filter((_case: any) => _case.active));
}

export default withIronSessionApiRoute(loginRoute, sessionOptions);
