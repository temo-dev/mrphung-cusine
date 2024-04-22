/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Hero02({ data }) {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    const overlapImage = document.querySelectorAll(".img-overlay");
    if (overlapImage) {
      overlapImage.forEach((item) => {
        const tl4 = gsap.timeline({
          ScrollTrigger: {
            trigger: item,
            start: "top 60%",
            end: "bottom 10%",
            scrub: false,
            markers: false,
          },
        });
        tl4.to(item, {
          ease: Expo.easeInOut,
          height: "0%",
          duration: 1,
          stagger: 2,
        });
      });
    }
  }
  return (
    <>
      <div className="ak-height-150 ak-height-lg-60" />
      {/* Start Best Item */}
      <section>
        <div className="container">
          <div className="ak-best-item">
            <div className="best-item-section-1">
              <div className="ak-section-heading ak-style-1">
                <div className="ak-section-subtitle">{data?.subtitle}</div>
                <h2 className="ak-section-title anim-title-2">{data?.title}</h2>
              </div>
              <div className="ak-height-30 ak-height-lg-30" />
              <div>
                <p>{data?.description}</p>
              </div>
              <div className="ak-height-50 ak-height-lg-30" />
              <div className="img-one">
                <img
                  src={
                    data?.media.find((item) => item.field == "smallImage").url
                  }
                  alt="..."
                  data-speed="1.2"
                  data-lag={0}
                />
                <div className="img-overlay" />
              </div>
            </div>
            <div className="best-item-section-2" data-speed="1.1" data-lag={1}>
              <img src="assets/img/star_line.svg" alt="..." />
            </div>
            <div className="best-item-section-3">
              <div className="img-two">
                <img
                  src={data?.media.find((item) => item.field == "bigImage").url}
                  alt="..."
                  data-speed="1.1"
                  data-lag={0}
                />
                <div className="img-overlay" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Best Item */}
    </>
  );
}

export default Hero02;
