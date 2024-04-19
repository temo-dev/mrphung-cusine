import React from "react";

function ListFood() {
  return (
    <>
      {/* Start Food item show case */}
      <section>
        <div className="ak-height-150 ak-height-lg-60" />
        <div className="container-fluid">
          <div className="ak-section-heading ak-style-1 ak-type-1">
            <div className="ak-section-subtitle">Food Items</div>
            <h2 className="ak-section-title anim-title">Food Showcase</h2>
          </div>
          <div className="ak-height-65 ak-height-lg-30" />
          <div className="ak-slider ak-slider-2">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="ak-card ak-style-1">
                  <a href="portfolio-details.html" className="ak-card-img">
                    <img src="assets/img/food_item_1.jpg" alt="..." />
                  </a>
                  <div className="card-info">
                    <div className="card-text style-1">
                      <a href="portfolio-details.html">
                        <h5 className="card-title">Spaghetti Carbonara</h5>
                      </a>
                      <div className="card-subtitle">Desserts</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="ak-card ak-style-1">
                  <a href="portfolio-details.html" className="ak-card-img">
                    <img src="assets/img/food_item_2.jpg" alt="..." />
                  </a>
                  <div className="card-info">
                    <div className="card-text style-1">
                      <a href="portfolio-details.html">
                        <h5 className="card-title">Spaghetti Carbonara</h5>
                      </a>
                      <div className="card-subtitle">Desserts</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="ak-card ak-style-1">
                  <a href="portfolio-details.html" className="ak-card-img">
                    <img src="assets/img/food_item_3.jpg" alt="..." />
                  </a>
                  <div className="card-info">
                    <div className="card-text style-1">
                      <a href="portfolio-details.html">
                        <h5 className="card-title">Spaghetti Carbonara</h5>
                      </a>
                      <div className="card-subtitle">Desserts</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="ak-card ak-style-1">
                  <a href="portfolio-details.html" className="ak-card-img">
                    <img src="assets/img/food_item_5.jpg" alt="..." />
                  </a>
                  <div className="card-info">
                    <div className="card-text style-1">
                      <a href="portfolio-details.html">
                        <h5 className="card-title">Spaghetti Carbonara</h5>
                      </a>
                      <div className="card-subtitle">Desserts</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="ak-card ak-style-1">
                  <a href="portfolio-details.html" className="ak-card-img">
                    <img src="assets/img/food_item_4.jpg" alt="..." />
                  </a>
                  <div className="card-info">
                    <div className="card-text style-1">
                      <a href="portfolio-details.html">
                        <h5 className="card-title">Spaghetti Carbonara</h5>
                      </a>
                      <div className="card-subtitle">Desserts</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
