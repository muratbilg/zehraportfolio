import React, { useState } from "react";
import Link from "next/link";
import ScrollspyNav from "react-scrollspy-nav";
import sidebarContent from "../../data/sidebar";
import Image from "next/image";
import logo from "../../public/img/logo/dark.png";
import logo2 from "../../public/img/logo/light.png";

// sidebar footer bottom content
const sidebarFooterContent = {
  name: "Zehra",
  email: "support@gmail.com",
  emailRef: "mailto:ib-themes21@gmail.com",
};

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Mobile Header */}

      <div
        className={click ? "zehra_tm_sidebar menu-open" : "zehra_tm_sidebar"}
      >
        <div className="sidebar_inner">
          <Link href="/">
            <div className="logo">
              <Image className="logo_light" src={logo} alt="brand" />
              <Image className="logo_dark" src={logo2} alt="brand" />
              <p>Zehra Güler</p> 
            </div>
          </Link>
          {/* End .logo */}

          <div className="menu">
            <ScrollspyNav
              scrollTargetIds={[
                "home",
                "about",
                "service",
                "testimonial",
                "blog",
                "appointment",
                "contact",
              ]}
              activeNavClass="active"
              offset={0}
              scrollDuration="100"
            >
              <ul className="anchor_nav">
                {sidebarContent.map((val, i) => (
                  <li key={i}>
                    <div className="list_inner">
                      <a
                        href={val.itemRoute}
                        className={val.activeClass}
                        onClick={handleClick}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            alignContent: "center",
                          }}
                        >
                          <div style={{marginRight:"10px",height:"26px"}}>{val.icon}</div>
                          <p>{val.itemName}</p>
                        </div>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollspyNav>
          </div>
          {/* End .menu */}

          <div className="author">
            <div className="inner">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(img/about/avatar.jpg)",
                  }}
                ></div>
              </div>
              <div className="short">
                <h3>{sidebarFooterContent.name}</h3>
                <a href={sidebarFooterContent.emailRef}>
                  {sidebarFooterContent.email}
                </a>
              </div>
            </div>
          </div>
          {/* End author */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
