/* eslint-disable @next/next/no-sync-scripts */
"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useQuery } from "react-query";
import { useAppStore } from "@/store/appStore";

const fetchMyLayout = async () => {
  const res = await fetch("https://cms-mr-phung.onrender.com/api/get-layout");
  return res.json();
};

export default function Layout({ children }) {
  const {
    language: language,
    getInitLayout: hanldeInitLayout,
    dataLayout: dataLayoutStore,
  } = useAppStore();
  const [layout, setLayout] = useState(null);
  const { data, isLoading, error } = useQuery("layout", fetchMyLayout);

  useEffect(() => {
    if (!isLoading) {
      setLayout(data.filter((layout) => layout.locale == language)[0]);
      hanldeInitLayout(data);
    }
  }, [isLoading]);

  useEffect(() => {
    if (dataLayoutStore.length > 0) {
      setLayout(
        dataLayoutStore.filter((layout) => layout.locale == language)[0]
      );
    }
  }, [language]);
  return (
    <>
      <div>
        <Header data={layout?.header} />
        <div>{children}</div>
        <Footer data={layout?.footer[0]} header={layout?.header} />
      </div>
    </>
  );
}
