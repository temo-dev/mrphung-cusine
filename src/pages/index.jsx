/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Layout from "@/layouts/Layout";
import Hero01 from "@/components/Hero/Hero01";
import OpenHour from "@/components/Hero/OpenHour";
import ListFood from "@/components/Hero/ListFood";
import Hero02 from "@/components/Hero/Hero02";
import Review from "@/components/Hero/Review";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useAppStore } from "@/store/appStore";
import Booking from "@/components/BookingSystem/Booking";

const fetchMyHome = async () => {
  const res = await fetch(
    "https://cms-mr-phung.onrender.com/api/get-home-page"
  );
  return res.json();
};

export default function Home() {
  const [home, setHome] = useState();
  const {
    language: language,
    dataHome: dataHomeStore,
    getInitHome: handleInitHome,
  } = useAppStore();
  const { data, isLoading, error } = useQuery("home", fetchMyHome);
  useEffect(() => {
    if (!isLoading) {
      setHome(data.filter((home) => home.locale == language)[0]);
      handleInitHome(data);
    }
  }, [isLoading]);
  useEffect(() => {
    if (dataHomeStore.length > 0) {
      setHome(dataHomeStore.filter((home) => home.locale == language)[0]);
    }
  }, [language]);

  return (
    <>
      <Layout>
        <Hero01 data={home?.hero01[0]} form={home?.forms[0]} />
        <OpenHour data={home?.openHour[0]} form={home?.forms[0]} />
        <ListFood data={home?.listFood[0]} />
        <Hero02 data={home?.hero02[0]} />
        <Review data={home?.reviews} />
        <Booking form={home?.forms[0]} />
      </Layout>
    </>
  );
}
