/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import { useAppStore } from "@/store/appStore";
import Image from "next/image";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
function Footer({ data, header }) {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    /*--------------------------------------------------------------
   Footer Animations
--------------------------------------------------------------*/
    const container = document.getElementsByClassName("ak-hr-container");
    if (container) {
      const tl7 = gsap.timeline({
        scrollTrigger: {
          trigger: ".ak-hr-container",
          start: "top 90%",
          end: "bottom 10%",
          scrub: false,
          markers: false,
        },
      });

      tl7.fromTo(
        ".ak-footer-hr-top",
        {
          width: "0%",
          duration: 0.5,
        },
        {
          delay: 0.3,
          duration: 0.5,
          width: "100%",
        }
      );
      tl7.fromTo(
        ".ak-footer-hr-bottom",
        {
          width: "0%",
        },
        {
          duration: 0.5,
          width: "100%",
        }
      );
      tl7.to(".footer-time-border", {
        width: "100%",
      });
    }
    /*--------------------------------------------------------------
    Food Menu Animations
--------------------------------------------------------------*/
    const food_menu_hr = document.querySelectorAll(".food-menu-hr.style-1");
    if (food_menu_hr) {
    }
  }
  const { language: language, changeLang: changeLang } = useAppStore();
  const handleChangeLang = (e) => {
    changeLang(e.target.value);
  };
  return (
    <>
      {/* Start Footer */}
      <footer>
        <div className="ak-footer ak-style-1">
          <div
            className="ak-bg footer-bg-img"
            data-src="assets/img/footer_bg.png"
            style={{ backgroundImage: `url(/assets/img/footer_bg.png)` }}
          />
          <div className="container ak-hr-container">
            <div className="ak-braner-logo type-color-1 footer-logo">
              <div className="footer-log-elem">
                <div className="footer-log-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={13}
                    viewBox="0 0 30 13"
                    fill="none"
                  >
                    <path
                      d="M28.991 12.2063L14.8322 1L0.67334 12.2063"
                      stroke="white"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <Image
                  src="/assets/img/Elegencia.png"
                  alt="..."
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="ak-height-100 ak-height-lg-60" />
            <div className="ak-footer-hr-top" />
            <div className="footer-main">
              <div className="footer-eamil-menu">
                <div className="footer-email">
                  <a href="mailto:info@example.com">{data?.email}</a>
                </div>
                <div className="footer-menu">
                  <ul>
                    {header?.map((item) => (
                      <li>
                        <a href={item.url}>{item.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="ak-height-75 ak-height-lg-5" />
              <div className="footer-info">
                <div className="fooer-phn">
                  <a href="tel:1-800-915-6271">{data?.phone}</a>
                </div>
                <div className="footer-address">
                  <a
                    href="https://maps.app.goo.gl/gAd1JdfRW5d6eHkn7"
                    target="_blank"
                  >
                    {data?.adress}
                  </a>
                </div>
                <div className="footer-time">
                  <p>
                    {data?.date}: {data?.time}
                  </p>
                </div>
                <div className="footer-btn">
                  <Link href="#booking" className="smooth-goto">
                    <div className="ak-btn style-5">Reservations</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="ak-footer-hr-bottom qodef-grid-item" />
            <div className="ak-height-130 ak-height-lg-30" />
            <div className="copy-right-section">
              <div className="my-2 w-25 m-auto">
                <select
                  className="form-select"
                  defaultValue={language}
                  onChange={handleChangeLang}
                >
                  <option value="vi">VietNam</option>
                  <option value="cs">Czech</option>
                  <option value="en">English</option>
                </select>
              </div>
              <p className="text-uppercase text-md-center text-white">
                {data?.copyright}
              </p>
            </div>
            <div className="ak-height-45 ak-height-lg-30" />
          </div>
        </div>
      </footer>
      <div className="loading-overlap" />
      {/* End Footer */}
    </>
  );
}

export default Footer;
