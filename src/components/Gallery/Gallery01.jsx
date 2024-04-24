"use client";
import Link from "next/link";
import React from "react";

function Gallery01({ listFoods }) {
  return (
    <>
      {/* Start Gallery */}
      <section className="container">
        <div id="static-thumbnails">
          <div className="row row-cols-1 row-cols-md-2  row-cols-xl-3 g-5">
            <div className="col ak-border drop-anim-gallery">
              <div
                className="gallery ak-bg"
                data-src="assets/img/gallery_1.jpg"
                style={{ backgroundImage: `url(${listFoods?.foods[0].image})` }}
              >
                <div className="gallery style-1">
                  <div className="gallery-hover">
                    <div className="gallery-hover-icon"></div>
                    <div className="gallery-hover-info">
                      <Link href="/chef">
                        <h6>{listFoods?.foods[0].name}</h6>
                        <p>{listFoods?.foods[0].cuisine}</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col ak-border drop-anim-gallery">
              <div
                className="gallery ak-bg"
                data-src="assets/img/gallery_1.jpg"
                style={{ backgroundImage: `url(${listFoods?.foods[1].image})` }}
              >
                <div className="gallery style-1">
                  <div className="gallery-hover">
                    <div className="gallery-hover-icon"></div>
                    <div className="gallery-hover-info">
                      <Link href="/chef">
                        <h6>{listFoods?.foods[1].name}</h6>
                        <p>{listFoods?.foods[1].cuisine}</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col ak-border border-none-right">
              <div
                className="gallery ak-bg"
                data-src="assets/img/gallery_1.jpg"
                style={{ backgroundImage: `url(${listFoods?.foods[2].image})` }}
              >
                <div className="gallery style-1">
                  <div className="gallery-hover">
                    <div className="gallery-hover-icon"></div>
                    <div className="gallery-hover-info">
                      <Link href="/chef">
                        <h6>{listFoods?.foods[2].name}</h6>
                        <p>{listFoods?.foods[2].cuisine}</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col ak-border border-none-bottom drop-anim-gallery">
              <div
                className="gallery ak-bg"
                data-src="assets/img/gallery_1.jpg"
                style={{ backgroundImage: `url(${listFoods?.foods[3].image})` }}
              >
                <div className="gallery style-1">
                  <div className="gallery-hover">
                    <div className="gallery-hover-icon"></div>
                    <div className="gallery-hover-info">
                      <Link href="/chef">
                        <h6>{listFoods?.foods[3].name}</h6>
                        <p>{listFoods?.foods[3].cuisine}</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col ak-border border-none-bottom drop-anim-gallery">
              <div
                className="gallery ak-bg"
                data-src="assets/img/gallery_1.jpg"
                style={{ backgroundImage: `url(${listFoods?.foods[4].image})` }}
              >
                <div className="gallery style-1">
                  <div className="gallery-hover">
                    <div className="gallery-hover-icon"></div>
                    <div className="gallery-hover-info">
                      <Link href="/chef">
                        <h6>{listFoods?.foods[4].name}</h6>
                        <p>{listFoods?.foods[4].cuisine}</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col ak-border border-none-right border-none-bottom">
              <div
                className="gallery ak-bg"
                data-src="assets/img/gallery_1.jpg"
                style={{ backgroundImage: `url(${listFoods?.foods[0].image})` }}
              >
                <div className="gallery style-1">
                  <div className="gallery-hover">
                    <div className="gallery-hover-icon"></div>
                    <div className="gallery-hover-info">
                      <Link href="/chef">
                        <h6>{listFoods?.foods[0].name}</h6>
                        <p>{listFoods?.foods[0].cuisine}</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Gallery */}
    </>
  );
}

export default Gallery01;
