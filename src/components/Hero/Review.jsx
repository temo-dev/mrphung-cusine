import React from "react";

function Review() {
  return (
    <>
      <div className="ak-height-150 ak-height-lg-60" />
      {/* Start Testimonial */}
      <section className="container">
        <div className="ak-slider ak-slider-3">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="container">
                <div className="testimonial-section">
                  <div className="testimonial-icon-1">
                    <img src="assets/img/testimonial_icon_l.svg" alt="..." />
                  </div>
                  <div className="testimonial-info-section">
                    <div className="testimonial-info">
                      <img
                        src="assets/img/testimonial_1.jpg"
                        className="testimonial-info-img"
                        alt="..."
                      />
                      <h6 className="testimonial-info-title">
                        Steven K. Roberts
                      </h6>
                      <p className="short-title">From USA</p>
                      <p className="testimonial-info-subtitle">
                        “Their 1 talented team of passionate chefs masterfully
                        crafts each dish, combining the finest ingredients with
                        innovative techniques to present culinary creations that
                        are as visually stunning as they are delicious.”
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-icon-1">
                    <img src="assets/img/testimonial_icon_r.svg" alt="..." />
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="container">
                <div className="testimonial-section">
                  <div className="testimonial-icon-1">
                    <img src="assets/img/testimonial_icon_l.svg" alt="..." />
                  </div>
                  <div className="testimonial-info-section">
                    <div className="testimonial-info">
                      <img
                        src="assets/img/testimonial_2.jpg"
                        className="testimonial-info-img"
                        alt="..."
                      />
                      <h6 className="testimonial-info-title">
                        Steven K. Roberts
                      </h6>
                      <p className="short-title">From USA</p>
                      <p className="testimonial-info-subtitle">
                        “Their 2 talented team of passionate chefs masterfully
                        crafts each dish, combining the finest ingredients with
                        innovative techniques to present culinary creations that
                        are as visually stunning as they are delicious.”
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-icon-1">
                    <img src="assets/img/testimonial_icon_r.svg" alt="..." />
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="container">
                <div className="testimonial-section">
                  <div className="testimonial-icon-1">
                    <img src="assets/img/testimonial_icon_l.svg" alt="..." />
                  </div>
                  <div className="testimonial-info-section">
                    <div className="testimonial-info">
                      <img
                        src="assets/img/testimonial_3.jpg"
                        className="testimonial-info-img"
                        alt="..."
                      />
                      <h6 className="testimonial-info-title">
                        Steven K. Roberts
                      </h6>
                      <p className="short-title">From USA</p>
                      <p className="testimonial-info-subtitle">
                        “Their talented team of passionate chefs masterfully
                        crafts each dish, combining the finest ingredients with
                        innovative techniques to present culinary creations that
                        are as visually stunning as they are delicious.”
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-icon-1">
                    <img src="assets/img/testimonial_icon_r.svg" alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="ak-swiper-controll-3">
            <div className="ak-swiper-navigation-wrap">
              <div className="ak-swiper-button-prev-3">
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
              <div className="ak-swiper-button-next-3">
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
      </section>
      {/* End Testimonial */}
    </>
  );
}

export default Review;
