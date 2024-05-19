import Image from "next/image";
import Link from "next/link";
import React from "react";

const success = () => {
  return (
    <div className="container">
      <div className="ak-height-180 ak-height-lg-90"></div>
      <section className="login-main-wrapper">
        <div className="main-container">
          <div className="login-process">
            <div className="login-main-container">
              <div className="thankyou-wrapper">
                <h1>
                  <Image
                    src="/assets/img/logoPhung.png"
                    alt="logo"
                    width={100}
                    height={100}
                  />
                </h1>
                <p> Děkujeme, že jste nás kontaktovali!</p>
                <Link href="/">Zpátky domů</Link>
                <div className="clr" />
              </div>
              <div className="clr" />
            </div>
          </div>
          <div className="clr" />
        </div>
      </section>
    </div>
  );
};

export default success;
