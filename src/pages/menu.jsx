"use client";
import React, { useEffect, useState } from "react";
import StartHero from "../components/Hero/StartHero";
import Menu01 from "../components/Menu/Menu01";
import Booking from "@/components/BookingSystem/Booking";
import { useGetData } from "@/store/appStore";

function Menu() {
  const { dataGallery: dataGallery, language: language } = useGetData();
  const [gallery, setGallery] = useState(null);

  useEffect(() => {
    if (dataGallery?.length > 0) {
      setGallery(dataGallery.find((gallery) => gallery.locale === language));
    }
  }, [dataGallery, language]);
  return (
    <>
      <StartHero />
      <div className="ak-height-150 ak-height-lg-60" />
      <Menu01 data={gallery?.listFoods[0].foods} />
      <div className="ak-height-150 ak-height-lg-60" />
      <Menu01 data={gallery?.listFoods[1].foods} />
      <div className="ak-height-150 ak-height-lg-60" />
      <Booking />
    </>
  );
}

export default Menu;
