import React, { useState, useEffect } from "react";
import "./style.css";
export default function Nav() {
  const [navSize, setnavSize] = useState("70px");
  const [navWidth, setnavWidth] = useState("100%");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#000") : setnavColor("transparent");
    window.scrollY > 10 ? setnavWidth("100%") : setnavWidth("100%");
    window.scrollY > 10 ? setnavSize("70px") : setnavSize("70px");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div class="container_nav d-flex align-items-center justify-content-between">
          <header id="header" class="fixed-top d-flex align-items-center">
      <nav id="navbar" class="navbar"  style={{
          backgroundColor: navColor,
          height: navSize,
          width:navWidth,
          transition: "all 0.5s"
        }}>
        <ul>
        <div class='left'>
            <li><a class="nav-link scrollto" href="#header">Home</a></li>
            <li><a class="nav-link scrollto" href="#about">About</a></li>
            <li><a class="nav-link scrollto" href="#services">Services</a></li>
        </div>
        <div class="logo">
                            <a href="index.html"><img src="/img/logo.png" alt=""  /></a>
                        </div>
     
        <div class='right'>
            <li><a class="nav-link scrollto" href="#portfolio">Portfolio</a></li>
            <li><a class="nav-link scrollto" href="#latest">Latest</a></li>
            <li><a class="nav-link scrollto" href="#cta">Contact</a></li>
        </div>
        
        </ul>
      </nav>
      </header>
      </div>
 
  );
}


// import React from 'react';
// import './Nav.css';

// function nav() {
//     return (<>
//         <div class="container_nav d-flex align-items-center justify-content-between">
//             <header id="header" class="fixed-top d-flex align-items-center">
//                 <nav id="navbar" class="navbar">
//                     <ul>
//                         <div class='left'>
//                             <li><a class="nav-link scrollto" href="#header">Home</a></li>
//                             <li><a class="nav-link scrollto" href="#about">About</a></li>
//                             <li><a class="nav-link scrollto" href="#services">Services</a></li>
//                         </div>
//                         <div class="logo">
//                             <a href="index.html"><img src="/img/logo.png" alt="" class="img-fluid" /></a>
//                         </div>
//                         <div class='right'>
//                             <li><a class="nav-link scrollto" href="#portfolio">Portfolio</a></li>
//                             <li><a class="nav-link scrollto" href="#latest">Latest</a></li>
//                             <li><a class="nav-link scrollto" href="#cta">Contact</a></li>
//                         </div>
//                     </ul>
//                     {/* <i class="bi bi-list mobile-nav-toggle"></i> */}
//                 </nav>

//             </header>

//         </div>
//     </>
//     )
// }
// export default nav;