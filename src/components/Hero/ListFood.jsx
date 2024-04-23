/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

function ListFood({ data }) {
  return (
    <>
      {/* Start Food item show case */}
      <section>
        <div className="ak-height-150 ak-height-lg-60" />
        <div className="container-fluid">
          <div className="ak-section-heading ak-style-1 ak-type-1">
            <div className="ak-section-subtitle">{data?.subtitle}</div>
            <h2 className="ak-section-title anim-title">{data?.title}</h2>
          </div>
          <div className="ak-height-65 ak-height-lg-30" />
          <div className="ak-slider ak-slider-2">
            <Swiper
              modules={[Navigation, Pagination]}
              loop={true}
              speed={1000}
              autoplay={true}
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                el: ".ak-pagination-2",
                clickable: true,
              }}
              navigation={{
                nextEl: ".ak-swiper-button-prev-2",
                prevEl: ".ak-swiper-button-next-2",
              }}
            >
              {data?.foods?.map((food) => {
                return (
                  <SwiperSlide key={food.id}>
                    <div className="ak-card ak-style-1">
                      <a href="/menu" className="ak-card-img">
                        <img src={food?.image} alt="..." />
                      </a>
                      <div className="card-info">
                        <div className="card-text style-1">
                          <a href="/menu">
                            <h5 className="card-title text-capitalize">
                              {food?.name}
                            </h5>
                          </a>
                          <div className="card-subtitle">{food?.cuisine}</div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="container">
            <div className="ak-next-prev-2">
              <div className="ak-next-prev-2 ak-style-1">
                <div className="ak-swiper-button-prev-2">
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
                <div className="ak-pagination-2 ak-style1" />
                <div className="ak-swiper-button-next-2">
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
        </div>
      </section>
      {/* End Food item show case */}
    </>
  );
}

export default ListFood;
