/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import StartHero from "../components/Hero/StartHero";
import Chef01 from "../components/Chef/Chef01";
import Booking from "@/components/BookingSystem/Booking";
import { useGetData } from "@/store/appStore";
import Review from "@/components/Hero/Review";

function Chef() {
  const {
    dataChef: dataChef,
    language: language,
    dataHome: dataHome,
  } = useGetData();
  const [chef, setChef] = useState(null);
  const [home, setHome] = useState(null);

  useEffect(() => {
    if (dataChef?.length > 0) {
      setChef(dataChef.find((chef) => chef.locale === language));
      setHome(dataHome.find((home) => home.locale === language));
    }
  }, [dataChef, language]);
  return (
    <>
      <StartHero component={chef?.openComponent[0]} />
      <Chef01 aboutChef={chef?.aboutChef[0]} />
      <div className="ak-height-100 ak-height-lg-90"></div>
      <Review data={home?.reviews} />
      <Booking form={chef?.form[0]} />
    </>
  );
}

export default Chef;
