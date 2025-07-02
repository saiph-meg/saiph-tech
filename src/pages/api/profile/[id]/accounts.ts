import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "@lib://session";
import profiles from "@data://profiles.json";
import accounts from "@data://accounts.json";

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const user = req.session.user;
  if (!user || !user.isLoggedIn) {
    res.status(401).end();
    return;
  }

  const profile = profiles.find((profile: any) => profile.id == req.query.id);

  if (!profile) {
    res.status(404).end();
    return;
  }

  const data = accounts.filter((account: any) =>
    account.profiles.find((p: any) => profile.id == p.id)
  );

  res.status(200).json(data);
}

export default withIronSessionApiRoute(loginRoute, sessionOptions);
