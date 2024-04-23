/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Hero01 from "@/components/Hero/Hero01";
import OpenHour from "@/components/Hero/OpenHour";
import ListFood from "@/components/Hero/ListFood";
import Hero02 from "@/components/Hero/Hero02";
import Review from "@/components/Hero/Review";
import { useEffect, useState } from "react";
import { useGetData } from "@/store/appStore";
import Booking from "@/components/BookingSystem/Booking";

export default function Home() {
  const [home, setHome] = useState();
  const { language: language, dataHome: dataHome } = useGetData();
  useEffect(() => {
    if (dataHome?.length > 0) {
      setHome(dataHome.find((home) => home.locale === language));
    }
  }, [language]);
  return (
    <>
      <Hero01 data={home?.hero01[0]} form={home?.forms[0]} />
      <OpenHour data={home?.openHour[0]} form={home?.forms[0]} />
      <ListFood data={home?.listFood[0]} />
      <Hero02 data={home?.hero02[0]} />
      <Review data={home?.reviews} />
      <Booking form={home?.forms[0]} />
    </>
  );
}
