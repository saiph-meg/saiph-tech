import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "@lib://session";
import profiles from "@data://profiles.json";

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

  res.status(200).json(profile);
}

export default withIronSessionApiRoute(loginRoute, sessionOptions);
