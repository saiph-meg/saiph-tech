import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "@lib://session";
import { User } from "@lib://default.types";
import users from "@data://users.json";

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = await req.body;

  const user = users.find(
    (user: any) => user.mail === email && user.pass === password
  );

  if (!user) {
    res.status(401).json({ message: "Wrong email or password" });
    return;
  }

  // eslint-disable-next-line no-unused-vars
  const { mail, pass, ...profile } = user;

  req.session.user = { isLoggedIn: true, profile, email } as User;
  await req.session.save();

  res.status(200).json(user);
}

export default withIronSessionApiRoute(loginRoute, sessionOptions);
