"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { useWindowSize } from "react-use";

function Menu01({ data }) {
  const [windowWidth, setWindowWidth] = useState(600);
  const { width } = useWindowSize();
  useEffect(() => {
    let checked = width * 0.8;
    if (checked > 600) {
      setWindowWidth(600);
    }
    setWindowWidth(checked);
  }, [width]);
  return (
    <>
      {/* Start Food Menu  Appetizers*/}
      <section className="set-bg-img-section">
        <div className="container">
          <div className="ak-section-heading ak-style-1 ak-type-1">
            <div className="ak-section-subtitle">{data?.subtitle}</div>
            <h2 className="ak-section-title anim-title">{data?.title}</h2>
          </div>
          <div className="ak-height-150 ak-height-lg-60" />
          <div className="ak-menu-list">
            <HTMLFlipBook width={windowWidth} height={1200} showCover={true}>
              {data?.images.map((item) => (
                <div key={item.id}>
                  <Image
                    src={item.url}
                    alt="mrPhung"
                    height={1200}
                    width={windowWidth}
                    priority
                  />
                </div>
              ))}
            </HTMLFlipBook>
          </div>
        </div>
      </section>
      {/* End Food Menu Appetizers*/}
    </>
  );
}

export default Menu01;
