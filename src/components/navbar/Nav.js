import React from 'react';
import './nav.css';

function nav() {
    return ( <>
    <div class="container_nav d-flex align-items-center justify-content-between  ">
    <header id="header" class="fixed-top d-flex align-items-center ">
                <nav id="navbar" class="navbar">
                    <ul>
                        <div class='left'>
                            <li><a class="nav-link scrollto " href="#header">Home</a></li>
                            <li><a class="nav-link scrollto" href="#about">About</a></li>
                            <li><a class="nav-link scrollto" href="#services">Services</a></li>
                        </div>
                        <div class="logo">
                            <a href="index.html"><img src="/img/logo.png" alt="" class="img-fluid" /></a>
                        </div>
                        <div class='right'>
                            <li><a class="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                            <li><a class="nav-link scrollto" href="#latest">Latest</a></li>
                            <li><a class="nav-link scrollto" href="#cta">Contact</a></li>
                        </div>
                    </ul>
                    {/* <i class="bi bi-list mobile-nav-toggle"></i> */}
                </nav>

            </header>
    
    </div>
    </>
    )
}
export default nav;