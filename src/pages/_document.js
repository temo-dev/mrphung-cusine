/* eslint-disable @next/next/no-css-tags */
"use client";
import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <link rel="stylesheet" href="assets/css/plugins/bootstrap.min.css" />
      <link rel="stylesheet" href="assets/css/plugins/lightgallery.min.css" />
      <link rel="stylesheet" href="assets/css/plugins/swiper.min.css" />
      <link rel="stylesheet" href="assets/sass/style.css" />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
