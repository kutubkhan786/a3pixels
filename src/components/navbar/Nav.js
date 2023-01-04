import React, { useState, useEffect } from "react";
import "./nav.css";
import { HashLink } from 'react-router-hash-link';

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
      <header id="header" className="fixed-top">
        <nav id="navbar" className="navbar h-100 d-flex align-items-center justify-content-center" style={{
          backgroundColor: navColor,
          height: navSize,
          width: navWidth,
          transition: "all 1s"
        }}>
          <ul  >
            <div className="logo_drop">
              <HashLink to="/#home"><img src="/img/logo.png" alt="" /></HashLink>
            </div>
            <div className='left'>
              <li><HashLink className="nav-link scrollto active" to="/#home">Home</HashLink></li>
              <li><a className="nav-link scrollto" href="#services">Services</a></li>
              <li><a className="nav-link scrollto" href="#about">About</a></li>
            </div>
            <div className="logo">
              <HashLink to="/#home"><img src="/img/logo.png" alt="" /></HashLink>
            </div>

            <div className='right'>
              <li><HashLink className="nav-link scrollto" smooth to="/career">Career</HashLink></li>
              <li><a className="nav-link scrollto" href="#portfolio">Portfolio</a></li>
              <li><a className="nav-link scrollto" href="#cta">Contact</a></li>
            </div>
          </ul>
        </nav>
        <div class="container dropleft fixed-top hider float-right">

          <button class="fa fa-bars btn-lg button1" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          </button>


          <section class="dropdown-menu " aria-labelledby="dropdownMenu2">
            <button class="dropdown-item" type="button"><HashLink className="nav-link scrollto active" smooth to="/#home">Home</HashLink></button>
            <button class="dropdown-item" type="button"><a className="nav-link scrollto" href="#services">Services</a></button>
            <button class="dropdown-item" type="button"><a className="nav-link scrollto" href="#about">About</a></button>
            <button class="dropdown-item" type="button"> <HashLink className="nav-link scrollto" smooth to="/career">Career</HashLink></button>
            <button class="dropdown-item" type="button"><a className="nav-link scrollto" href="#portfolio">Portfolio</a></button>
            <button class="dropdown-item" type="button"><a className="nav-link scrollto" href="#cta">Contact</a></button>
          </section>

        </div>
      </header>
    </div>

  );

}


