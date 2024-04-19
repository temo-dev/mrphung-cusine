"use client";
import React from "react";
import Layout from "../layouts/Layout";
import StartHero from "../components/Hero/StartHero";
import Gallery01 from "../components/Gallery/Gallery01";
import ListFood from "../components/Hero/ListFood";
import Review from "../components/Hero/Review";

function Gallery() {
  return (
    <Layout>
      <StartHero />
      <div className="ak-height-180 ak-height-lg-90"></div>
      <Gallery01 />
      <div className="ak-height-180 ak-height-lg-90"></div>
      <ListFood />
      <div className="ak-height-180 ak-height-lg-90"></div>
      <Review />
    </Layout>
  );
}

export default Gallery;
