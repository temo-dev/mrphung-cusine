/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Booking from "../components/BookingSystem/Booking";
import Footer from "./Footer";
import { useQuery } from "react-query";

const fetchMyLayout = async () => {
  const res = await fetch("https://cms-mr-phung.onrender.com/api/get-layout");
  return res.json();
};

export default function Layout({ children }) {
  const [layout, setLayout] = useState(null);
  const { data, isLoading, error } = useQuery("layout", fetchMyLayout);
  useEffect(() => {
    const dataLayoutInLocal = localStorage.getItem("layout");
    const dataLanguage = localStorage.getItem("languege");

    if (!isLoading && dataLayoutInLocal == null && dataLanguage == null) {
      setLayout(data.filter((layout) => layout.locale == "cs")[0]);
      localStorage.setItem("layout", JSON.stringify(data));
      localStorage.setItem("languege", "cs");
    } else if (dataLayoutInLocal != null) {
      const language = localStorage.getItem("languege");
      setLayout(
        JSON.parse(dataLayoutInLocal).filter(
          (layout) => layout.locale == language
        )[0]
      );
    }
  }, [isLoading]);
  return (
    <div>
      <div>
        <Header data={layout?.header} />
        <div>{children}</div>
      </div>
      <Booking />
      <Footer data={layout?.footer[0]} />
    </div>
  );
}
