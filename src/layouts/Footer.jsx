/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import { useGetData } from "@/store/appStore";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function Footer({ data, header }) {
  let hrContainer = useRef(null);
  let loadingOverlap = useRef(null);
  useEffect(() => {
    if (hrContainer) {
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
    if (loadingOverlap) {
      const elem2 = document.querySelector(".footer-log-elem");
      var loadingElem = gsap.timeline();
      elem2.addEventListener("click", function () {
        loadingElem.to(loadingOverlap, {
          duration: 0.3,
          height: "100vh",
          ease: Expo.easeInOut,
        });
        loadingElem.to("html,body", {
          scrollTop: 0,
        });
        loadingElem.to(loadingOverlap, {
          delay: 0.1,
          top: 0,
          height: "0vh",
          duration: 0.4,
          ease: Expo.easeInOut,
        });
        loadingElem.to(loadingOverlap, {
          buttom: 0,
        });
      });
    }
  }, []);

  const { language: language, changeLang: changeLang } = useGetData();
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
            style={{ backgroundImage: `url(assets/img/footer_bg.png)` }}
          />
          <div
            className="container ak-hr-container"
            ref={(el) => {
              hrContainer = el;
            }}
          >
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
                  src="/assets/img/logoPhung.png"
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
                  <a href="mailto:mrphungcuisine@gmail.com">{data?.email}</a>
                </div>
                <div className="footer-menu">
                  <ul>
                    {header?.map((item) => (
                      <li>
                        <Link href={item.url}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="ak-height-75 ak-height-lg-5" />
              <div className="footer-info">
                <div className="fooer-phn">
                  <a href="tel:775 625 678">775625678</a>
                </div>
                <div className="footer-address">
                  <a
                    href="https://maps.app.goo.gl/c8LNNuixixRHEqur9"
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
                    <div className="ak-btn">Reservations</div>
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
      <div
        className="loading-overlap"
        ref={(el) => {
          loadingOverlap = el;
        }}
      />
      {/* End Footer */}
    </>
  );
}

export default Footer;
