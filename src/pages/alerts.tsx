import { NextPage } from "next";
import { Template } from "@4i4/theme-registry";
import { withIronSessionSsr } from "iron-session/next";

import { sessionOptions } from "@lib://session";
import { withServerSidePropsStorage } from "~/storage";
import {
  setBreadcrumbs,
  setPageTitle,
  setPageType
} from "@store://slices/pageSlice";

const Index: NextPage = () => {
  return (
    <Template template="page" context="layout">
      <Template template="alerts" context="page" />
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

    store.dispatch(setPageTitle("Alert History"));
    store.dispatch(setPageType(""));
    store.dispatch(
      setBreadcrumbs([
        {
          title: "Home",
          link: "/"
        },
        {
          title: "Alerts"
        }
      ])
    );

    return {
      props: {}
    };
  }, sessionOptions)(context)
);

export default Index;
