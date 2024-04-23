/* eslint-disable @next/next/no-img-element */
import React from "react";

function Chef01({ aboutChef }) {
  function jsonToHtml(jsonData) {
    if (jsonData) {
      const jsondata = JSON.parse(jsonData);
      var html = "";
      jsondata.forEach(function (item) {
        if (item.type === "paragraph") {
          html += "<p>";
          item.children.forEach(function (child) {
            if (child.type === "text") {
              html += child.text;
            }
          });
          html += "</p>";
        }
      });
      document.getElementById("content").innerHTML = html;
    }
  }
  return (
    <>
      {/* Start About Content */}
      <section>
        <div className="ak-height-150 ak-height-lg-60" />
        <div className="container">
          <div className="meet-the-content-about-section">
            <div className="about-info">
              <div className="ak-section-heading ak-style-1 ak-color-1">
                <p>{aboutChef?.subtitle}</p>
                <h2 className="ak-section-title anim-title-3">
                  {aboutChef?.title}
                </h2>
              </div>
              <div className="ak-height-25 ak-height-lg-25" />
              <div id="content">{jsonToHtml(aboutChef?.content)}</div>
              <div className="ak-height-45 ak-height-lg-30" />
            </div>
            <div className="about-img">
              <img
                src={aboutChef?.image}
                className="imagesZoom"
                data-speed="1.1"
                alt="meetAbout"
              />
            </div>
          </div>
        </div>
      </section>
      {/* End About Content */}
    </>
  );
}

export default Chef01;
