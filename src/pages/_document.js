/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="/assets/css/plugins/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/lightgallery.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/swiper.min.css" />
        <link rel="stylesheet" href="/assets/sass/style.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
          type="text/javascript"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/isotope-packery/2.0.1/packery-mode.pkgd.min.js"
          type="text/javascript"
          strategy="beforeInteractive"
        />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.js" type="text/javascript" strategy="beforeInteractive" />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.2/lightgallery.min.js"
          type="text/javascript"
          strategy="beforeInteractive"
        />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" type="text/javascript" strategy="beforeInteractive" />
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
      </body>
    </Html>
  );
}
