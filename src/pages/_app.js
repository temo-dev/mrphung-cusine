/* eslint-disable @next/next/no-before-interactive-script-outside-document */
"use client";
import "@/styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>MrPhung Cusine</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
      <Script
        src="/assets/js/plugins/jquery-3.7.1.min.js"
        type="text/javascript"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/plugins/isotope.pkg.min.js"
        type="text/javascript"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/plugins/swiper.min.js"
        type="text/javascript"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/plugins/lightgallery.min.js"
        type="text/javascript"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/plugins/ScrollSmoother.min.js"
        type="text/javascript"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/plugins/SplitText.min.js"
        type="text/javascript"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/plugins/ScrollTrigger.min.js"
        type="text/javascript"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/plugins/ScrollToPlugin.min.js"
        type="text/javascript"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/plugins/gsap.min.js"
        type="text/javascript"
        strategy="beforeInteractive"
      />
      <Script src="/assets/js/main.js" type="text/javascript" defer />
    </QueryClientProvider>
  )
}
