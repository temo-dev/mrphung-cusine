
import "@/styles/globals.css";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
// import "../jquery/js/plugins/bootstrap.bundle.min.js"
// import "../jquery/js/plugins/gsap.min.js"
// import "..//jquery/js/plugins/isotope.pkg.min.js"
// import "../jquery/js/plugins/jquery-3.7.1.min.js"
// import "../jquery/js/plugins/jquery.slick.min.js"
// import "../jquery/js/plugins/lightgallery.min.js"
// import "../jquery/js/plugins/locomotive-scroll.js"
// import "../jquery/js/plugins/pagination.min.js"
// import "../jquery/js/plugins/ScrollSmoother.min.js"
// import "../jquery/js/plugins/ScrollToPlugin.min.js"
// import "../jquery/js/plugins/ScrollTrigger.min.js"
// import "../jquery/js/plugins/SplitText.min.js"
// import "../jquery/js/plugins/swiper.min.js"
// import "../jquery/js/main.js"

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
    </QueryClientProvider>
  )
}
