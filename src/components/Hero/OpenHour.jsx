/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function OpenHour({ data, form }) {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    const overlapImage = document.getElementsByClassName("overlap-opening-img");
    if (overlapImage) {
      let blogAnim = gsap.utils.toArray(overlapImage);
      const tl3 = gsap.timeline({
        ScrollTrigger: {
          trigger: ".overlap-opening-img",
          start: "top 60%",
          end: "bottom 10%",
          scrub: false,
          markers: false,
        },
      });

      tl3.to(blogAnim, {
        ease: Expo.easeInOut,
        height: "0%",
        duration: 1,
        stagger: 2,
      });
    }
  }

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
            {data?.schedue.map((item) => (
              <div className="opening-hour-date">
                <p>{item?.date}</p>
                <div className="opening-hour-hr" />
                <p> {item?.time}</p>
                <div className="ak-height-30 ak-height-lg-30" />
              </div>
            ))}
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
