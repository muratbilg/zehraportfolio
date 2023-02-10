import React, { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import Sidebar from "../../header/Sidebar";
import Hero from "../../hero/Hero";
import About from "../../about/About";
import Service from "../../service/Service";
import Portfolio from "../../portfolio/Portfolio";
import Testimonial from "../../testimonial/Testimonial";
import Blog from "../../blog/Blog";
import Contact from "../../Contact";
import Address from "../../Address";
import Map from "../../Map";
import HeaderMobile from "../../header/HeaderMobile";
import Appointment from "../../Appointment";

const zehraHomeSidebar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.querySelector("body").classList.remove("rtl");
  }, []);

  const handleLabelClick = () => {
    if (isDark) {
      localStorage.setItem("theme-color", "theme-light");
      document.querySelector("body").classList.add("theme-light");
      document.querySelector("body").classList.remove("theme-dark");
      setIsDark(false);
    } else {
      localStorage.setItem("theme-color", "theme-dark");
      document.querySelector("body").classList.add("theme-dark");
      document.querySelector("body").classList.remove("theme-light");
      setIsDark(true);
    }
  };

  return (
    <div
      className={`home-light zehra_tm_mainpart ${isDark ? "theme-dark" : ""}`}
    >
      {/* Start Dark & Light Mode Swicher  */}
      <label
        className={`theme-switcher-label d-flex  ${isDark ? "active" : ""}`}
      >
        <input
          type="checkbox"
          onClick={handleLabelClick}
          className="theme-switcher"
        />
        <div className="switch-handle">
          <i className="light-text" title="Switch to Dark">
            <FaMoon />
          </i>
          <i className="dark-text" title="Switch to Light">
            <FaSun />
          </i>
        </div>
      </label>
      {/* End Dark & Light Mode Swicher  */}

      <header className="header-area">
        <div className="header-inner">
          <HeaderMobile />
        </div>
      </header>
      {/* End mobile-header */}

      <Sidebar />
      {/* End Header */}
      <Hero />
      {/* End Hero */}
      <About />
      {/* End Hero */}
      <div className="zehra_tm_services" id="service">
        <div className="container">
          <div className="zehra_tm_title">
            <h3>Çalışma ve Uzmanlık Alanlarım</h3>
            <p>Çalışma ve Uzmanlık Alanlarımla ilgili kısa bilgiler</p>
          </div>
          {/* End edian_tm_title */}
          <Service />
        </div>
      </div>
      {/* End Services */}

      {/*<div className="zehra_tm_portfolio" id="portfolio">
        <div className="container">
          <div className="zehra_tm_title">
            <h3>Portfolio</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p>
          </div>
          <Portfolio />
        </div>
  </div>*/}

      <div className="zehra_tm_testimonials" id="testimonial">
        <div className="container">
          <div className="zehra_tm_title">
            <h3>Danışan Yorumlar</h3>
            <p></p>
          </div>
          {/* End edian_tm_title */}
          <div className="list ">
            <ul>
              <Testimonial />
            </ul>
          </div>
        </div>
      </div>
      {/* End Testimonial */}

      <div className="zehra_tm_news" id="blog">
        <div className="container">
          <div className="zehra_tm_title">
            <h3>Blog</h3>
            <p>Blog yazıları</p>
          </div>
          {/* End edian_tm_title */}
          <Blog />
        </div>
      </div>
      {/* End Blog */}
      <div className="zehra_tm_contact" id="appointment">
        <div className="container">
          <div className="zehra_tm_title">
            <h3>Randevu</h3>
            <p>Online ve yüz yüze randevu alabilirsiniz</p>
          </div>
          <div className="extra_info">
            <Address />
          </div>
          {/* End Address Info */}
          <div className="mainpart">
            <div
              className="left"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="title">
                <p>
                  Her zaman <span> destek ve yardım </span> için
                  <br />
                  iletişime geçebilirsiniz.
                </p>
              </div>
              {/* End title */}
              <div className="fields">
                <Appointment />
              </div>
              {/* End Contact Form */}
            </div>
            <div
              className="right"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <Map />
            </div>
            {/* End Map */}
          </div>
        </div>
      </div>
      {/* /Appointment */}
      <div className="zehra_tm_contact" id="contact">
        <div className="container">
          <div className="zehra_tm_title">
            <h3>Iletisim</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p>
          </div>
          <div className="extra_info">
            <Address />
          </div>
          {/* End Address Info */}
          <div className="mainpart">
            <div
              className="left"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="title">
                <p>
                  I am always open to discussing product
                  <br />
                  <span> design work or partnerships.</span>
                </p>
              </div>
              {/* End title */}
              <div className="fields">
                <Contact />
              </div>
              {/* End Contact Form */}
            </div>
            <div
              className="right"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <Map />
            </div>
            {/* End Map */}
          </div>
        </div>
      </div>
      {/* /CONTACT */}
    </div>
  );
};

export default zehraHomeSidebar;
