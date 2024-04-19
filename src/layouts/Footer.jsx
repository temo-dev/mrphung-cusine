/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import React from "react";

function Footer({ data }) {
  return (
    <>
      {/* Start Footer */}
      <footer>
        <div className="ak-footer ak-style-1">
          <div
            className="ak-bg footer-bg-img"
            data-src="assets/img/footer_bg.png"
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
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/menu">Menu</a>
                    </li>
                    <li>
                      <a href="/gallery">Gallery</a>
                    </li>
                    <li>
                      <a href="/reservations">Chef</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ak-height-75 ak-height-lg-5" />
              <div className="footer-info">
                <div className="fooer-phn">
                  <a href="tel:1-800-915-6271">1-800-915-6271</a>
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
                  <a href="/reservations">
                    <div className="ak-btn style-5">Reservations</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="ak-footer-hr-bottom qodef-grid-item" />
            <div className="ak-height-130 ak-height-lg-30" />
            <div className="copy-right-section">
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
