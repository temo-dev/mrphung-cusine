/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import StartHero from "../components/Hero/StartHero";
import Chef01 from "../components/Chef/Chef01";
import Booking from "@/components/BookingSystem/Booking";
import { useGetData } from "@/store/appStore";

function Chef() {
  const { dataChef: dataChef, language: language } = useGetData();
  const [chef, setChef] = useState(null);

  useEffect(() => {
    if (dataChef?.length > 0) {
      setChef(dataChef.find((chef) => chef.locale === language));
    }
  }, [dataChef, language]);
  return (
    <>
      <StartHero component={chef?.openComponent[0]} />
      <Chef01 aboutChef={chef?.aboutChef[0]} />
      <div className="ak-height-180 ak-height-lg-90"></div>
      <Booking form={chef?.form[0]} />
    </>
  );
}

export default Chef;
