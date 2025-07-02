import { AppStore, wrapper } from "@store://wrapper";
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  GetStaticPropsContext,
  GetStaticPropsResult
} from "next";

import { setPageState } from "@store://slices/pageSlice";

export function withServerSidePropsStorage<
  P extends { [key: string]: unknown } = { [key: string]: unknown }
>(
  handler: (
    _context: GetServerSidePropsContext & { data?: { [key: string]: any } },
    _store: AppStore
  ) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>
) {
  return wrapper.getServerSideProps(store => async context => {
    store.dispatch(
      setPageState({
        route: context.resolvedUrl,
        locale: context?.locale ?? "en",
        title: ""
      })
    );

    return handler(context, store);
  });
}
export function withStaticPropsStorage<
  P extends { [key: string]: unknown } = { [key: string]: unknown }
>(
  handler: (
    _context: GetStaticPropsContext & { data?: { [key: string]: any } },
    _store: AppStore
  ) => GetStaticPropsResult<P> | Promise<GetStaticPropsResult<P>>
) {
  return wrapper.getStaticProps(store => async context => {
    store.dispatch(
      setPageState({
        route: context?.params?.route ?? [],
        locale: context?.locale ?? "en",
        title: ""
      })
    );

    return handler(context, store);
  });
}
