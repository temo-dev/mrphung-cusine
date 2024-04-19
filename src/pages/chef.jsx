"use client";
import React from "react";
import Layout from "../layouts/Layout";
import StartHero from "../components/Hero/StartHero";
import Chef01 from "../components/Chef/Chef01";

function Chef() {
  return (
    <Layout>
      <StartHero />
      <div className="ak-height-180 ak-height-lg-90"></div>
      <Chef01 />
      <div className="ak-height-180 ak-height-lg-90"></div>
    </Layout>
  );
}

export default Chef;
