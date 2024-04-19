/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="ak-site_header ak-style1 ak-sticky_header ak-site_header_full_width">
      <div className="header-top">
        <div className="wrapper">
          <div className="header-logo">
            <a href="/reservations" className="logo">
              Reservation
            </a>
          </div>
          <div className="center-log">
            <a href="index.html">
              <Image
                src="/assets/img/logo.png"
                alt="logo"
                width={150}
                height={150}
              />
            </a>
          </div>
          <button className="ak-menu-toggle" id="akMenuToggle" type="button">
            <svg
              viewBox="0 0 20 15"
              width="40px"
              height="30px"
              className="ak-menu-icon"
            >
              <path d="M20,2 L2,2" className="bar-1" />
              <path d="M2,7 L20,7" className="bar-2" />
              <path d="M30,12 L2,12" className="bar-3" />
            </svg>
          </button>
          <ul className="top-main-menu">
            <li className="top-main-menu-li">
              <a href="/">Home</a>
              <img
                className="top-main-menu-img"
                src="assets/img/fullWM_1.jpg"
                alt="..."
              />
            </li>
            <li className="top-main-menu-li">
              <a href="/gallery">Gallery</a>
              <img
                className="top-main-menu-img"
                src="assets/img/fullWM_about.jpg"
                alt="..."
              />
            </li>
            <li className="top-main-menu-li">
              <a href="/menu">Menu</a>
              <img
                className="top-main-menu-img menu-img"
                src="assets/img/fullWM_menu.jpg"
                alt="..."
              />
            </li>
            <li className="top-main-menu-li">
              <a href="/reservations">Chef</a>
              <img
                className="top-main-menu-img menu-img"
                src="assets/img/fullWM_menu.jpg"
                alt="..."
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-bar-border" />
      <div className="ak-main_header">
        <div className="container">
          <div className="ak-main_header_in">
            <div className="ak-main_header_left">
              <a className="ak-site_branding" href="index.html">
                <Image
                  src="/assets/img/logo.png"
                  alt="logo"
                  width={100}
                  height={100}
                />
              </a>
            </div>
            <div className="ak-main_header_right">
              <div className="ak-nav ak-medium">
                <ul className="ak-nav_list">
                  <li className="menu-item-has-children">
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
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
