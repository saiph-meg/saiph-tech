import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "@lib://session";
import alerts from "@data://alerts.json";
import accounts from "@data://accounts.json";

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const user = req.session.user;
  if (!user || !user.isLoggedIn) {
    res.status(401).end();
    return;
  }

  const account = accounts.find((account: any) => account.id == req.query.id);

  if (!account) {
    res.status(404).end();
    return;
  }

  res
    .status(200)
    .json(alerts.filter((alert: any) => alert.account == account.id));
}

export default withIronSessionApiRoute(loginRoute, sessionOptions);
