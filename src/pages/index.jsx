import { Inter } from "next/font/google";
import Layout from "@/layouts/Layout";
import Hero01 from "@/components/Hero/Hero01";
import OpenHour from "@/components/Hero/OpenHour";
import ListFood from "@/components/Hero/ListFood";
import Hero02 from "@/components/Hero/Hero02";
import Review from "@/components/Hero/Review";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <Hero01 />
        <OpenHour />
        <ListFood />
        <Hero02 />
        <Review />
      </Layout>
    </>
  );
}
