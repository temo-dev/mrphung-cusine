"use client";
import Link from "next/link";
import React from "react";

function StartHero({ component }) {
  return (
    <>
      {/* Start Hero */}
      <section>
        <div
          className="ak-commmon-hero ak-style1 ak-bg"
          data-src="assets/img/banner_top_all.jpg"
          style={{ backgroundImage: `url(${component?.background})` }}
        >
          <div className="ak-commmon-heading">
            <div className="ak-section-heading ak-style-1 ak-type-1 ak-color-1 page-top-title">
              <div className="ak-section-subtitle">
                <Link href="/">MrPhung</Link> / {component?.title}
              </div>
              <h2 className="ak-section-title page-title-anim">
                {component?.title}
              </h2>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero */}
    </>
  );
}

export default StartHero;
