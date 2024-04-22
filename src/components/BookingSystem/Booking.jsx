/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const createReservation = async (data) => {
  const res = await fetch(
    "https://cms-mr-phung.onrender.com/api/reservations/",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json; charset=utf-8" },
    }
  );
  return res.json();
};

function Booking({ form }) {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    const imageZoom = document.getElementsByName("imagesZoom");
    if (imageZoom) {
      let imagesZoomAll = gsap.utils.toArray(imageZoom);
      imagesZoomAll.forEach((image) => {
        let tl12 = gsap.timeline({
          ScrollTrigger: {
            trigger: image,
            start: "top 80%",
            end: "bottom 10%",
            scrub: 1,
            markers: false,
          },
        });

        tl12.fromTo(
          image,
          { scale: 1 },
          {
            scale: 1.15,
            duration: 3.5,
            ease: "expoScale(1, 1.15)",
            transformOrigin: "50% 50%",
            z: 0.1,
            rotationZ: "0.01",
          },
          "<"
        );
      });
    }
  }
  const { mutate, isLoading, isError, error } = useMutation(createReservation);
  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name == "reservation_date") {
      const utcDate = new Date(value);
      setInputs({ ...inputs, [name]: utcDate });
    } else {
      setInputs({ ...inputs, [name]: value });
    }
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();
    mutate({
      data: inputs,
    });
  };
  return (
    <>
      {/* Start Booking System */}
      <section id="booking">
        <div className="ak-booking-system">
          <img
            className="ak-booking-system-bg-img ak-bg imagesZoom"
            src="/assets/img/bookingSystemBg.png"
            alt="..."
          />
          <div className="ak-height-150 ak-height-lg-60" />
          <div className="container">
            <div className="row justify-content-center align-content-center align-items-center">
              <div className="col-md-6 col-12">
                <div className="ak-height-lg-60" />
                <div className="text-center">
                  <Link
                    href="https://www.youtube.com/watch?v=UsD1MhKBmD4"
                    className="ak-video-block ak-style1 ak-video-open"
                  >
                    <span className="ak-player-btn ak-accent-color">
                      <span />
                    </span>
                  </Link>
                </div>
                <div className="ak-height-lg-60" />
              </div>
              <div className="col-md-6 col-12">
                <div className="booking-system-heading">
                  <div className="ak-section-heading ak-style-1">
                    <div className="ak-section-subtitle">{form?.subtitle}</div>
                    <h2 className="ak-section-title anim-title-2">
                      {form?.title}
                    </h2>
                  </div>
                  <div className="ak-height-60 ak-height-lg-30" />
                  <div className="booking-system-form">
                    <form onSubmit={hanldeSubmit}>
                      <div className="ak-form-time-date mb-2">
                        <input
                          type="text"
                          name="name"
                          className="ak-form-select form-control"
                          placeholder="Your Name"
                          onChange={handleChange}
                        />
                        <input
                          type="tel"
                          className="ak-form-select"
                          placeholder="Your Phone"
                          name="phone"
                          onChange={handleChange}
                        />
                        <input
                          type="number"
                          name="number_of_people"
                          onChange={handleChange}
                          className="ak-form-select"
                          placeholder="Slots"
                          min="1"
                        />
                      </div>
                      <div className="ak-form-time-date">
                        <input
                          type="email"
                          name="email"
                          onChange={handleChange}
                          className="ak-form-select form-control"
                          placeholder="Your Email"
                        />
                        <div className="ak-time">
                          <input
                            className="time-input"
                            onChange={handleChange}
                            type="datetime-local"
                            name="reservation_date"
                            id="time"
                          />
                          <div className="time-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={25}
                              viewBox="0 0 24 25"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_1166_8212)">
                                <path
                                  d="M12 24.002C5.38581 24.002 0 18.6161 0 12.002C0 5.38777 5.38581 0.00195312 12 0.00195312C18.6142 0.00195312 24 5.38777 24 12.002C24 18.6161 18.6142 24.002 12 24.002ZM12 1.14474C6.01423 1.14474 1.14279 6.01618 1.14279 12.002C1.14279 17.9877 6.01423 22.8592 12 22.8592C17.9858 22.8592 22.8572 17.9877 22.8572 12.002C22.8572 6.01618 17.9858 1.14474 12 1.14474Z"
                                  fill="#FFD28D"
                                />
                                <path
                                  d="M11.4287 4.00195H12.5717V10.2876H11.4287V4.00195Z"
                                  fill="#FFD28D"
                                />
                                <path
                                  d="M11.4287 13.7168H12.5717V16.5739H11.4287V13.7168Z"
                                  fill="#FFD28D"
                                />
                                <path
                                  d="M12.0001 14.2884C10.7431 14.2884 9.71436 13.2596 9.71436 12.0026C9.71436 10.7455 10.7431 9.7168 12.0001 9.7168C13.2572 9.7168 14.2859 10.7455 14.2859 12.0026C14.2859 13.2596 13.2572 14.2884 12.0001 14.2884ZM12.0001 10.8598C11.3715 10.8598 10.8574 11.374 10.8574 12.0026C10.8574 12.6312 11.3715 13.1454 12.0001 13.1454C12.6288 13.1454 13.1429 12.6312 13.1429 12.0026C13.1429 11.374 12.6288 10.8598 12.0001 10.8598Z"
                                  fill="#FFD28D"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1166_8212">
                                  <rect
                                    width={24}
                                    height={24}
                                    fill="white"
                                    transform="translate(0 0.00195312)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="ak-height-110 ak-height-lg-90" />
                      <div>
                        <button type="submit" className="ak-btn style-5">
                          {form?.title}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ak-height-150 ak-height-lg-60" />
        </div>
      </section>
      {/* End Booking System */}
    </>
  );
}

export default Booking;
