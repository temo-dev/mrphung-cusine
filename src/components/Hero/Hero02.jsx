"use client";
import React from "react";

function Hero02() {
  return (
    <>
      <div className="ak-height-150 ak-height-lg-60" />
      {/* Start Best Item */}
      <section>
        <div className="container">
          <div className="ak-best-item">
            <div className="best-item-section-1">
              <div className="ak-section-heading ak-style-1">
                <div className="ak-section-subtitle">Our food philosophy</div>
                <h2 className="ak-section-title anim-title-2">
                  <span className="text-white"> Our</span> <br />
                  Specialties
                </h2>
              </div>
              <div className="ak-height-30 ak-height-lg-30" />
              <div>
                <p>
                  Welcome to our restaurant, where culinary artistry meets
                  exceptional dining experiences. At, we strive to create a
                  gastronomic haven that tantalizes your taste buds.
                </p>
              </div>
              <div className="ak-height-50 ak-height-lg-30" />
              <div className="img-one">
                <img
                  src="assets/img/bestItem2.jpg"
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
                  src="assets/img/bestItem1.jpg"
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
