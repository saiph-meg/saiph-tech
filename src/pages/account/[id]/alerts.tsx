import { NextPage } from "next";
import { Template } from "@4i4/theme-registry";
import { withIronSessionSsr } from "iron-session/next";

import { sessionOptions } from "@lib://session";
import { withServerSidePropsStorage } from "@store://index";
import {
  setBreadcrumbs,
  setPageTitle,
  setPageType
} from "@store://slices/pageSlice";
import accounts from "@data://accounts.json";

const Account: NextPage = props => {
  return (
    <Template template="page" context="layout">
      <Template template="account--alerts" context="page" {...props} />
    </Template>
  );
};

export const getServerSideProps = withServerSidePropsStorage((context, store) =>
  // @ts-ignore
  withIronSessionSsr(async ({ req, res }) => {
    const user = req.session.user;

    if (!user) {
      res.setHeader("location", "/user/login");
      res.statusCode = 302;
      res.end();
      return;
    }

    const { id } = context.query;

    const account = accounts.find((account: any) => account.id == id);

    if (!account) {
      return {
        props: {},
        notFound: true
      };
    }

    store.dispatch(setPageTitle(account.title));
    store.dispatch(setPageType("account"));
    store.dispatch(
      setBreadcrumbs([
        {
          title: "Home",
          link: "/"
        },
        {
          title: "Accounts"
        },
        {
          title: `${account.id}`,
          link: `/account/${account.id}`
        },
        {
          title: "Alerts"
        }
      ])
    );

    return {
      props: {
        account
      }
    };
  }, sessionOptions)(context)
);

export default Account;
