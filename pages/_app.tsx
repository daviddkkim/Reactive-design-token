import { ConvexReactClient, ConvexProvider } from "convex/react";
import clientConfig from "../convex/_generated/clientConfig";
import { ThemeProvider } from "next-themes";
import { darkTheme, globalCss } from "../stitches.config";
import convexConfig from "../convex.json";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { NextPage } from "next";
import React from "react";

const globalStyles = globalCss({

  html: {
    overflowX: "hidden",
  },

  body: {
    margin: 0,
    backgroundColor: "$bgPrimary",
    '.dark-theme': {
      color: "$textPrimary",
    }
  },

  "body, button": {
    fontFamily: "$untitled",
  },

  svg: { display: "block" },

  "pre, code": { margin: 0, fontFamily: "$mono" },

  "::selection": {
    backgroundColor: "$mint11",
    color: "$sage1",
  },
  "*": {
    boxSizing: "border-box",
  },
  h1: {
    fontSize: "$6",
    fontWeight: 500,
  },
  "h2, h3": {
    fontSize: "$5",
    fontWeight: 500,
  },
});

const convex = new ConvexReactClient(clientConfig);

const authInfo = convexConfig.authInfo[0];

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  globalStyles();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: "light-theme", dark: darkTheme.className }}
      defaultTheme="dark"
    >
      <ConvexProvider
        client={convex}
      >
        {mounted ? (
          getLayout(<Component {...pageProps} />)
        ) : (
          <div style={{ visibility: "hidden" }}>
            <Component {...pageProps} />
          </div>
        )}
      </ConvexProvider>
    </ThemeProvider>
  );
}
