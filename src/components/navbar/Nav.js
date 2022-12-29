import React, { useState, useEffect } from "react";
import "./nav.css";
export default function Nav() {
  const [navSize, setnavSize] = useState("4.375rem");
  const [navWidth, setnavWidth] = useState("100%");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#000") : setnavColor("transparent");
    window.scrollY > 10 ? setnavWidth("100%") : setnavWidth("100%");
    window.scrollY > 10 ? setnavSize("4.375rem") : setnavSize("4.375rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  


  return (
    <div className="container_nav ">
          <header id="header" className="fixed-top ">
      <nav id="navbar" className="navbar h-100 d-flex align-items-center justify-content-center"  style={{
          backgroundColor: navColor,
          height: navSize,
          width:navWidth,
          transition: "all 1s"
        }}>
        <ul  >
        <div className='left'>
            <li><a className="nav-link scrollto active" href="#home">Home</a></li>
            <li><a className="nav-link scrollto" href="#services">Services</a></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
        </div>
        <div className="logo">
                            <a href="#home"><img src="/img/logo.png"  alt="" /></a>
                        </div>
     
        <div className='right'>
            <li><a className="nav-link scrollto" href="#latest">Latest</a></li>
            <li><a className="nav-link scrollto" href="#portfolio">Portfolio</a></li>
            <li><a className="nav-link scrollto" href="#cta">Contact</a></li>
        </div>
        </ul>
      </nav>
        <i class="bi bi-list fixed-top mobile-nav-toggle "></i>
      </header>
      </div>
 
  );
}


