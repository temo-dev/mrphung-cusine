"use client";
import React, { useEffect, useState } from "react";
import Gallery01 from "../components/Gallery/Gallery01";
import ListFood from "../components/Hero/ListFood";
import Booking from "@/components/BookingSystem/Booking";
import { useGetData } from "@/store/appStore";

function Gallery() {
  const { dataGallery: dataGallery, language: language } = useGetData();
  const [gallery, setGallery] = useState(null);

  useEffect(() => {
    if (dataGallery?.length > 0) {
      setGallery(dataGallery.find((gallery) => gallery.locale === language));
    }
  }, [dataGallery, language]);
  return (
    <>
      <div className="ak-height-180 ak-height-lg-90"></div>
      {/* <StartHero /> */}
      <div className="ak-height-180 ak-height-lg-90"></div>
      <Gallery01 listFoods={gallery?.listFoods[0]} />
      <div className="ak-height-180 ak-height-lg-90"></div>
      <ListFood data={gallery?.listFoods[1]} />
      <div className="ak-height-180 ak-height-lg-90"></div>
      {/* <Review /> */}
      <Booking form={gallery?.form[0]} />
    </>
  );
}

export default Gallery;
