"use client";
import React, { useEffect, useState } from "react";
import StartHero from "../components/Hero/StartHero";
import Menu01 from "../components/Menu/Menu01";
import Booking from "@/components/BookingSystem/Booking";
import { useGetData } from "@/store/appStore";
import Review from "@/components/Hero/Review";

function Menu() {
  const {
    dataMenu: dataMenu,
    language: language,
    dataHome: dataHome,
  } = useGetData();
  const [menu, setMenu] = useState(null);
  const [home, setHome] = useState(null);

  useEffect(() => {
    if (dataMenu?.length > 0) {
      setMenu(dataMenu.find((menu) => menu.locale === language));
      setHome(dataHome.find((home) => home.locale === language));
    }
  }, [dataMenu, language]);
  return (
    <>
      <StartHero component={menu?.openPage[0]} />
      <div className="ak-height-150 ak-height-lg-60" />
      <Menu01 data={menu?.menuItems[0]} />
      <div className="ak-height-100 ak-height-lg-60" />
      <Review data={home?.reviews} />
      <Booking form={menu?.form[0]} />
    </>
  );
}

export default Menu;
