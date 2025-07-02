import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "@lib://session";
import accounts from "@data://accounts.json";
import profiles from "@data://profiles.json";

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

  const data = account.profiles.map((ref: any) => {
    const profile = profiles.find((profile: any) => profile.id == ref.id) ?? {};
    return { ...profile, main: ref.main };
  });

  res.status(200).json(data);
}

export default withIronSessionApiRoute(loginRoute, sessionOptions);
