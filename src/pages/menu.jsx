"use client";
import React from "react";
import StartHero from "../components/Hero/StartHero";
import Menu01 from "../components/Menu/Menu01";
import Booking from "@/components/BookingSystem/Booking";

function Menu() {
  return (
    <>
      <StartHero />
      <Menu01 />
      <Menu01 />
      <Booking />
    </>
  );
}

export default Menu;
