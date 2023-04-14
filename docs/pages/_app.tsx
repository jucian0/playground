import "../globals.css";
import "rehype-playground/styles.css";
import { SSRProvider } from "@react-aria/ssr";
import type { AppProps } from "next/app";
import type { ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";

type NextraAppProps = AppProps & {
  Component: AppProps["Component"] & {
    getLayout: (page: ReactNode) => ReactNode;
  };
};

// Shim requestIdleCallback in Safari
if (typeof window !== "undefined" && !("requestIdleCallback" in window)) {
  (window as any).requestIdleCallback = (fn) => setTimeout(fn, 1);
  (window as any).cancelIdleCallback = (e) => clearTimeout(e);
}

export default function Nextra({ Component, pageProps }: NextraAppProps) {
  return (
    <SSRProvider>
      <>
        {/**
         * Globally defined svg linear gradient, for use in icons
         */}
        <svg height="0px" width="0px">
          <defs>
            <linearGradient
              id="pink-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgba(156, 81, 161, 1)" />
              <stop offset="70%" stopColor="rgba(255, 30, 86, 1)" />
            </linearGradient>
          </defs>
        </svg>
      </>
      <MDXProvider>
        <Component {...pageProps} />
      </MDXProvider>
    </SSRProvider>
  );
}
