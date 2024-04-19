import React from "react";

function PreLoader() {
  return (
    <>
      {/* Preloader */}
      <div id="preloader">
        <div id="ak-preloader" className="ak-preloader">
          <div className="animation-preloader">
            <div className="spinner" />
            <div className="txt-loading">
              <span data-text-preloader="E" className="letters-loading">
                E
              </span>
              <span data-text-preloader="L" className="letters-loading">
                L
              </span>
              <span data-text-preloader="E" className="letters-loading">
                E
              </span>
              <span data-text-preloader="G" className="letters-loading">
                G
              </span>
              <span data-text-preloader="E" className="letters-loading">
                E
              </span>
              <span data-text-preloader="N" className="letters-loading">
                N
              </span>
              <span data-text-preloader="C" className="letters-loading">
                C
              </span>
              <span data-text-preloader="I" className="letters-loading">
                I
              </span>
              <span data-text-preloader="A" className="letters-loading">
                A
              </span>
            </div>
          </div>
          <div className="loader-section section-left" />
          <div className="loader-section section-right" />
        </div>
      </div>
    </>
  );
}

export default PreLoader;
