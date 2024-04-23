/* eslint-disable @next/next/no-sync-scripts */
"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useGetData } from "@/store/appStore";
import PreLoader from "./PreLoader";

export default function Layout({ children }) {
  const {
    language: language,
    isLoading: isLoading,
    dataLayout: dataLayout,
    execute: execute,
  } = useGetData();
  const [layout, setLayout] = useState(null);
  useEffect(() => {
    execute();
  }, []);

  useEffect(() => {
    if (dataLayout?.length > 0) {
      setLayout(dataLayout.find((layout) => layout.locale === language));
    }
  }, [isLoading, language]);
  return (
    <>
      {isLoading ? (
        <PreLoader />
      ) : (
        <div>
          <Header data={layout?.header} />
          <div>{children}</div>
          <Footer data={layout?.footer[0]} header={layout?.header} />
        </div>
      )}
    </>
  );
}
