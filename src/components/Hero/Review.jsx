/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

function Review({ data }) {
  console.log("data", data);
  return (
    <>
      <div className="ak-height-150 ak-height-lg-60" />
      {/* Start Testimonial */}
      <section className="container">
        <div className="ak-slider ak-slider-3">
          <div className="swiper-wrapper">
            {data?.map((item) => (
              <div className="swiper-slide" key={item.id}>
                <div className="container">
                  <div className="testimonial-section">
                    <div className="testimonial-icon-1">
                      <img src="assets/img/testimonial_icon_l.svg" alt="..." />
                    </div>
                    <div className="testimonial-info-section">
                      <div className="testimonial-info">
                        <img
                          src="assets/img/testimonial_1.jpg"
                          className="testimonial-info-img"
                          alt="..."
                        />
                        <h6 className="testimonial-info-title">{item.name}</h6>
                        <p className="short-title">{item.adress}</p>
                        <p className="testimonial-info-subtitle">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="testimonial-icon-1">
                      <img src="assets/img/testimonial_icon_r.svg" alt="..." />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="ak-swiper-controll-3">
            <div className="ak-swiper-navigation-wrap">
              <div className="ak-swiper-button-prev-3">
                <button
                  className="btn-style-2 btn-size btn-style-round button-prev-next-2 rotate-svg"
                  aria-disabled="false"
                >
                  <svg
                    width={20}
                    height={14}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g stroke="#fff" fill="none" fillRule="evenodd">
                      <path d="M12.743 1.343L18.4 7l-5.657 5.657M18.4 7H.4" />
                    </g>
                  </svg>
                  <svg
                    width={20}
                    height={14}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g stroke="#fff" fill="none" fillRule="evenodd">
                      <path d="M12.743 1.343L18.4 7l-5.657 5.657M18.4 7H.4" />
                    </g>
                  </svg>
                </button>
              </div>
              <div className="ak-swiper-button-next-3">
                <button
                  className="btn-style-2 btn-size btn-style-round button-prev-next-2"
                  aria-disabled="false"
                >
                  <svg
                    width={20}
                    height={14}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g stroke="#fff" fill="none" fillRule="evenodd">
                      <path d="M12.743 1.343L18.4 7l-5.657 5.657M18.4 7H.4" />
                    </g>
                  </svg>
                  <svg
                    width={20}
                    height={14}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g stroke="#fff" fill="none" fillRule="evenodd">
                      <path d="M12.743 1.343L18.4 7l-5.657 5.657M18.4 7H.4" />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Testimonial */}
    </>
  );
}

export default Review;
