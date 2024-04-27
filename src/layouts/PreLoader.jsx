import Image from "next/image";
import React from "react";

function PreLoader() {
  return (
    <>
      {/* Preloader */}
      <div id="preloader">
        <div id="ak-preloader" className="ak-preloader">
          <div className="animation-preloader">
            <div
              className="spinner"
              style={{
                backgroundImage: `url(${"/assets/img/logoPhung.png"})`,
              }}
            />

            <div className="txt-loading">
              <span data-text-preloader="M" className="letters-loading">
                M
              </span>
              <span data-text-preloader="R" className="letters-loading">
                R
              </span>
              <span data-text-preloader="." className="letters-loading">
                .
              </span>
              <span data-text-preloader="P" className="letters-loading">
                P
              </span>
              <span data-text-preloader="H" className="letters-loading">
                H
              </span>
              <span data-text-preloader="U" className="letters-loading">
                U
              </span>
              <span data-text-preloader="N" className="letters-loading">
                N
              </span>
              <span data-text-preloader="G" className="letters-loading">
                G
              </span>
              <span data-text-preloader="&#9818;" className="letters-loading">
                &#9818;
              </span>
              <span data-text-preloader="C" className="letters-loading">
                C
              </span>
              <span data-text-preloader="U" className="letters-loading">
                U
              </span>
              <span data-text-preloader="I" className="letters-loading">
                I
              </span>
              <span data-text-preloader="S" className="letters-loading">
                S
              </span>
              <span data-text-preloader="I" className="letters-loading">
                I
              </span>
              <span data-text-preloader="N" className="letters-loading">
                N
              </span>
              <span data-text-preloader="E" className="letters-loading">
                E
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
