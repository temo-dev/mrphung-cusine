/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

function OpenHour({ data, form }) {
  return (
    <>
      {/* Start Opening Hour */}
      <section className="container">
        <div className="ak-height-150 ak-height-lg-60" />
        <div className="opening-hour type-2">
          <div className="opening-hour-img-section style-2">
            <img
              src={data?.url}
              className="imagesZoom opening-bg-img ak-bg"
              alt="..."
            />
            <div className="overlap-opening-img" />
          </div>
          <div className="opening-hour-text-section type-2">
            <h2 className="opening-hour-title  anim-title-2">{data?.title}</h2>
            <div className="ak-height-30 ak-height-lg-30" />
            <p className="opening-hour-subtext">{data?.description}</p>
            <div className="ak-height-30 ak-height-lg-30" />
            <div className="opening-hour-date">
              <p>{data?.date}</p>
              <div className="opening-hour-hr" />
              <p> {data?.time}</p>
            </div>
            <div className="ak-height-70 ak-height-lg-30" />
            <div className="text-btn">
              <a href="#booking" className="text-btn1 smooth-goto">
                {form?.title}
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
