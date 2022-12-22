import React from 'react';
import './New-Service.css';
import Navbar from '../navbar/Nav.js';
import Footer from '../footer/Footer.js';
import About from './About.js';
import Testimonial from './testimonial';
function contact() {
    return ( <>
        <Navbar/>
        {/* <Testimonial/> */}
        <section id="about" class="about">
            <div class="container">
                <div class="section-title mb-2" data-aos="zoom-out">
                    <p>About Us</p>
                    <h2>Below you can find more information about our company</h2>
                </div>


                <div class="row content" data-aos="fade-up">
                    <p>The company provides effective web and e-Learning solutions that are easy to implement and use. Our efforts are directed at consistently building stimulating and state-of-the-art e-Learning products for our clients that makes online learning
                        a fun and enriching experience for the users. Over the years, we have perfected the ability to handle unstructured situations with ease, to give life to ideas and concepts that have never been implemented before, and to manage a multitude
                        of projects without slipping on deadlines. In each project that we undertake, we make every effort to maintain the highest standards of quality and efficiency. A3PIXELS has been profitable in every quarter and has shown a 100% growth
                        in revenues in every successive year since inception.</p>
                    <ul>
                        <li>
                            <h4 class="section-title"><b>OUR MISSION:</b></h4>
                        </li>
                        <li> To provide our customers timely and cost-effective e-learning solutions and services aligned to their business goals. </li>
                    </ul>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-6">
                                <img class='img-fluid about0' src="/img/logos/about-side.png" alt="" />
                            </div>
                            <div class="col-lg-6 pt-4 pt-lg-0 ">
                                <h4 class="section-title ml-3"><b>WHAT WE DO</b></h4>
                                <div class="row content yello-box">

                                </div>
                                <div class="container-fluid">
                                    <div class="row">
                                        <About Aboutstyle="card yellow" Aboutlogo="/img/logos/1.png" Aboutdec="Good user interface design helps people work more assertively, complete tasks more efficiently and build brand loyalty at the same time." AboutTitle="UI DESIGN" />
                                        <About Aboutstyle="card grey " Aboutlogo="/img/logos/2.png" Aboutdec="We specialize in creating customized learning solutions with latest technical language to cultivate visually outstanding, animated text, frame and more informative design.
                                               " AboutTitle="CUSTOMIZE SOLUTION" />
                                        <About Aboutstyle="card yellow" Aboutlogo="/img/logos/3.png" Aboutdec="Our experienced & talented professionals analyse the existing website and identify the most vital content for mobile browser compatibility.
                                                    " AboutTitle="MOBILE WEBSITE DESIGN" />
                                        <About Aboutstyle="card grey" Aboutlogo="/img/logos/4.png" Aboutdec=" Our innovative graphic designers create brochure designs, flyers, business cards, datasheets, magazines, post cards, booklets, newsletters." AboutTitle="BRANDING DESIGN" />
                                    </div>
                                </div>                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
        </>
    )
}

export default contact