import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { NextDrupalModalProvider as ModalProvider } from "@ffw/next-drupal-components";
import { ThemeProvider } from "@4i4/theme-registry";
import { wrapper } from "@store://wrapper";
import themes from "@lib://themes";
import { selectDomainConfig } from "@store://slices/domainSlice";

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const theme = selectDomainConfig("theme")(store.getState());
  return (
    <ReduxProvider store={store}>
      <ThemeProvider registry={themes.get(theme?.theme ?? "default")}>
        <ModalProvider>
          <Component {...props.pageProps} />
        </ModalProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;
