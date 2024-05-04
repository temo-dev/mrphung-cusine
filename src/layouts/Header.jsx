/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { gsap, Power3, Power2, Expo, TweenTarget } from "gsap";

function Header({ data }) {
  let akMenuToggle = useRef(null);
  let hamsdf = useRef(null);
  let menuRef = useRef(null);
  let border1 = useRef(null);

  useEffect(() => {
    const menu = menuRef.current;
    const links = menuRef.current.children;
    const menuItemBar = gsap.timeline();
    var navtl = gsap.timeline({ paused: true });
    navtl.set(hamsdf, {
      opacity: 0,
      transition: "all 0.5s ease-in",
    });
    menuItemBar.to(
      ".bar-1",
      0.5,
      {
        attr: { d: "M20,0 L2,9" },
        x: 1,
        ease: Power2.easeInOut,
      },
      "start"
    );

    menuItemBar.to(
      ".bar-2",
      0.5,
      {
        autoAlpha: 0,
      },
      "start"
    );
    menuItemBar.to(
      ".bar-3",
      0.5,
      {
        attr: { d: "M22,12 L2,0" },
        x: 1,
        ease: Power2.easeInOut,
      },
      "start"
    );

    gsap.fromTo(
      akMenuToggle,
      {
        duration: 1,
        height: "0%",
      },
      {
        duration: 1,
        height: "100%",
      }
    );

    navtl
      .to(menu, {
        duration: 0.3,
        opacity: 1,
        height: "116vh",
        ease: Expo.easeInOut,
        stagger: 0.1,
        background: "#040d10e0",
      })
      .fromTo(
        links,
        {
          duration: 0.3,
          opacity: 0,
          y: 30,
          ease: Expo.easeInOut,
        },
        {
          duration: 0.3,
          opacity: 1,
          y: -20,
          stagger: 0.1,
          ease: Expo.easeInOut,
        }
      );

    navtl.reverse();
    menuItemBar.reverse();

    akMenuToggle.addEventListener("click", () => {
      if (!navtl.reversed()) {
        gsap.set(links, {
          padding: "0%",
          display: "block",
          paddingLeft: "0%",
          paddingRight: "0%",
        });
        gsap.set(menu, {
          opacity: 1,
          transition: "all 0.5s ease-in",
        });
      } else {
        gsap.set(links, {
          display: "flex",
          paddingLeft: "15%",
          paddingRight: "5%",
          opacity: 1,
        });
        gsap.set(menu, {
          opacity: 0,
          transition: "all 0.5s ease-in",
        });
      }
      navtl.reversed(!navtl.reversed());
      menuItemBar.reversed(!menuItemBar.reversed());
    });

    /*--------------------------------------------------------------
  //      1. Heder Border Animations
  //  --------------------------------------------------------------*/
    gsap.fromTo(
      border1,
      {
        duration: 1,
        width: "0%",
      },
      {
        delay: 1,
        duration: 1,
        width: "100%",
      }
    );
  }, []);

  return (
    <header className="ak-site_header ak-style1 ak-sticky_header ak-site_header_full_width">
      <div className="header-top">
        <div className="wrapper">
          <div className="header-logo">
            <Link href="#booking" className="logo smooth-goto">
              Reservation
            </Link>
          </div>
          <div className="center-log">
            <Link href="/">
              <Image
                src="/assets/img/logo.jpg"
                alt="logo"
                width={70}
                height={70}
              />
            </Link>
          </div>
          <button
            className="ak-menu-toggle"
            id="akMenuToggle"
            type="button"
            ref={(el) => {
              akMenuToggle = el;
            }}
          >
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

          <ul className="top-main-menu" ref={menuRef}>
            {data?.map((item) => (
              <li className="top-main-menu-li">
                <Link href={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="nav-bar-border"
        ref={(el) => {
          border1 = el;
        }}
      />
      <div className="ak-main_header">
        <div className="container">
          <div className="ak-main_header_in">
            <div
              className="ak-main_header_right"
              ref={(el) => {
                hamsdf = el;
              }}
            >
              <div className="ak-nav ak-medium">
                <ul className="ak-nav_list">
                  {data?.map((item) => (
                    <li>
                      <Link href={item.url}>{item.name}</Link>
                    </li>
                  ))}
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
