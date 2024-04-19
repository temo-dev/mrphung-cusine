"use client";
import React from "react";

function OpenHour() {
  return (
    <>
      {/* Start Opening Hour */}
      <section className="container">
        <div className="ak-height-150 ak-height-lg-60" />
        <div className="opening-hour type-2">
          <div className="opening-hour-img-section style-2">
            <img
              src="assets/img/about_open_hour.jpg"
              className="imagesZoom opening-bg-img ak-bg"
              alt="..."
            />
            <div className="overlap-opening-img" />
          </div>
          <div className="opening-hour-text-section type-2">
            <h2 className="opening-hour-title  anim-title-2">Opening Hours</h2>
            <div className="ak-height-30 ak-height-lg-30" />
            <p className="opening-hour-subtext">
              Lorem to our restaurant, where culinary artistry meets exceptional
              dining experiences. At, we strive to create a gastronomic haven
              that.
            </p>
            <div className="ak-height-30 ak-height-lg-30" />
            <div className="opening-hour-date">
              <p>SUNDAY - THURSDAY: 11:30AM - 11PM</p>
              <div className="opening-hour-hr" />
              <p> FRIDAY &amp; SATURDAY: 11:30AM - 12AM</p>
            </div>
            <div className="ak-height-70 ak-height-lg-30" />
            <div className="text-btn">
              <a href="reservations.html" className="text-btn1">
                Reservation
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* End  Opening Hour  */}
    </>
  );
}

export default OpenHour;
