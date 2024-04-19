import React from "react";
import Header from "./Header";
import Booking from "../components/BookingSystem/Booking";
import Footer from "./Footer";
import { useQuery } from "react-query";

const fetchMyLayout = async () => {
  const res = await fetch("https://cms-mr-phung.onrender.com/api/get-layout");
  return res.json();
};

export default function Layout({ children }) {
  const { data, isLoading, error } = useQuery("layout", fetchMyLayout);
  console.log("data", data);
  return (
    <div>
      <div>
        <Header />
        <div>{children}</div>
      </div>
      <Booking />
      <Footer />
    </div>
  );
}
