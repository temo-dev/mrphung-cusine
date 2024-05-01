"use client";
import Image from "next/image";
import React from "react";
import HTMLFlipBook from "react-pageflip";

function Menu01({ data }) {
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
            <HTMLFlipBook width={500} height={1200} showCover={true}>
              {data?.images.map((item) => (
                <div key={item.id}>
                  <Image
                    src={item.url}
                    alt="mrPhung"
                    height={1200}
                    width={500}
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
