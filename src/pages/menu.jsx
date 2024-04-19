import React from "react";
import Layout from "../layouts/Layout";
import StartHero from "../components/Hero/StartHero";
import Menu01 from "../components/Menu/Menu01";

function Menu() {
  return (
    <Layout>
      <StartHero />
      <Menu01 />
      <Menu01 />
    </Layout>
  );
}

export default Menu;
