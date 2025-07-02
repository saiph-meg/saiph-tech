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
import cases from "@data://cases.json";

const Account: NextPage = props => {
  return (
    <Template template="page" context="layout">
      <Template template="case" context="page" {...props} />
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

    const item = cases.find((item: any) => item.id == id);

    if (!item) {
      return {
        notFound: true
      };
    }

    store.dispatch(setPageTitle(`Case ${item.id}`));
    store.dispatch(setPageType("case"));
    store.dispatch(
      setBreadcrumbs([
        {
          title: "Home",
          link: "/"
        },
        {
          title: "Cases",
          link: `/cases`
        },
        {
          title: `Case ${item.id}`
        }
      ])
    );

    return {
      props: {
        case: item
      }
    };
  }, sessionOptions)(context)
);

export default Account;
