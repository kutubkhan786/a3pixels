import './App.css';
import Services from './components/index/Services.js';
import About from './components/index/About.js';
import Career from './components/index/Career';
import Portfolio from './components/index/Portfolio.js';
import Company from './components/index/company.js';
import { useEffect } from 'react';

function App() {

    const scroll0 = () => {
        setTimeout(() => {
            // location.replace("/")
            console.log('hello');
        }, 200);

    }

    return (<>
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
                            <li><a class="nav-link scrollto" href="#Career">Career</a></li>
                            <li><a class="nav-link scrollto" href="#cta">Contact</a></li>
                        </div>
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </header>
        </div>

        {/* <!-- ======= Head Section ======= --> */}

        <section class="el">
            <a href="#" class="tilter tilter--2">
                <figure class="tilter__figure">
                    <img class="tilter__image" src="assets/img/logos/hand.png" alt="img03" />
                    <div class="tilter__deco tilter__deco--shine">
                        <div></div>
                    </div>
                    <div class="tilter__deco tilter__deco--overlay"></div>
                    <figcaption class="tilter__caption">
                        <h3 class="tilter__title">Helen Portland</h3>
                        <p class="tilter__description">Seattle</p>
                    </figcaption>
                    <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                        <path d="M20.5,20.5h260v375h-260V20.5z" />
                    </svg>
                </figure>
            </a>
        </section>

        {/* <!-- ======= Services Section ======= --> */}
        {/* <!-- <div class='merg' id="services"> --> */}
        <section class="til" data-aos="fade-up" data-aos-duration="1000" onClick={useEffect(() => {
            scroll0();
        })}>
            <div class='container'>            <div class="row" data-aos="zoom-out">

                <Services name1="E-LEARNING &" name2="DEVELOPMENT" logo="/img/logos/1.png" />
                <Services name1="TRANSLATION &" name2="LOCALIZATION" logo="/img/logos/4.png" />
                <Services name1="WEBSITE & " name2="MULTIMEDIA DEVELOPEMENT" logo="/img/logos/3.png" />
                <Services name1="PRINT &" name2="IDENTITY" logo="/img/logos/2.png" />

            </div>
            </div>
            {/* <!-- End Services Section --> */}

        </section>


        {/* <!-- ======= About Section ======= --> */}
        <section id="about" class="about">
            <div class="container">
                <div class="section-title" data-aos="zoom-out">
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
                                <img class='img-fluid about0' src="/assets/img/logos/about-side.png" alt="" />
                            </div>
                            <div class="col-lg-6 pt-4 pt-lg-0 ">
                                <h4 class="section-title"><b>WHAT WE DO</b></h4>
                                <div class="row content yello-box">

                                </div>
                                <div class="container-fluid">
                                    <div class="row">
                                        <About Aboutlogo="/img/logos/1.png" Aboutdec="Good user interface design helps people work more assertively, complete tasks more efficiently and build brand loyalty at the same time." AboutTitle="UI DESIGN" />
                                        <About Aboutlogo="/img/logos/2.png" Aboutdec="We specialize in creating customized learning solutions with latest technical language to cultivate visually outstanding, animated text, frame and more informative design.</p>
                                               " AboutTitle="CUSTOMIZE SOLUTION" />
                                        <About Aboutlogo="/img/logos/3.png" Aboutdec="Our experienced & talented professionals analyse the existing website and identify the most vital content for mobile browser compatibility.
                                                    " AboutTitle="MOBILE WEBSITE DESIGN" />
                                        <About Aboutlogo="/img/logos/4.png" Aboutdec=" Our innovative graphic designers create brochure designs, flyers, business cards, datasheets, magazines, post cards, booklets, newsletters." AboutTitle="BRANDING DESIGN" />
                                    </div>
                                </div>                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End About Section --> */}
        {/* <!-- this is the call for enquiry --> */}
        {/* <!-- ======= Cta Section ======= --> */}
        <section id="cta" class="cta">
            <div class="container">

                <div class="row" data-aos="zoom-out">
                    <div class="col-lg-9 text-center text-lg-start">
                        <h3>Call To Action</h3>
                        <p> click the button and fill the form if having any query or want to contact us we will reach to you as soon as we recive your form</p>
                    </div>

                    <div class="col-lg-3 cta-btn-container text-center">
                        <a class="cta-btn align-middle button" id="button" data-toggle="modal" data-target="#myModal">Call
                            To Action</a>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Cta Section --> */}


        {/* <!-- cta code donot remove it bsdk --> */}
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                    </div>
                    <div class="modal-body">
                        <div id="response"></div>

                        <div class="form-group">
                            <input type="text" class="form-control" />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>


        {/* <!-- =====Our Latest Work====== --> */}

        <section class="latest">

            <div class="row1">

                <Career logo="/img/logos/1.png" CareerTitle="Our Work" CareerDec="Lorem ipsum dolor sit amet consectetur adipisicing elit. At numquam velit maiores, doloribus quae architecto error. Incidunt alias blanditiis tempore?" />
                <Career logo="/img/logos/1.png" CareerTitle="Our Work" CareerDec="Lorem ipsum dolor sit amet consectetur adipisicing elit. At numquam velit maiores, doloribus quae architecto error. Incidunt alias blanditiis tempore?" />
                <Career logo="/img/logos/1.png" CareerTitle="Our Work" CareerDec="Lorem ipsum dolor sit amet consectetur adipisicing elit. At numquam velit maiores, doloribus quae architecto error. Incidunt alias blanditiis tempore?" />

            </div>
        </section>


        {/* <!-- ======= Portfolio Section ======= --> */}
        <section id="portfolio" class="portfolio">
            <div class="container">

                <div class="section-title" data-aos="zoom-out">
                    <h2>Portfolio</h2>
                    <p>What we've done</p>
                </div>

                <ul id="portfolio-flters" class="d-flex justify-content-end" data-aos="fade-up">
                    <li data-filter="*" class="filter-active">All</li>
                    <li data-filter=".e-learning" class="e-learning">E-LEARNING</li>
                    <li data-filter=".localization">LOCALIZATION</li>
                    <li data-filter=".web">WEB DESIGN</li>
                    <li data-filter=".mobile">MOBILE SOLUTION</li>
                    <li data-filter=".multitude">MULTIMEDIA PRESENTATION</li>
                    <li data-filter=".logo">LOGO & PRINT DESIGN</li>
                </ul>
                <div class="divScroll">
                    <div class="row portfolio-container" data-aos="fade-up">
                        <div class="container portfolio-item ">
                            <div class="image-gallery ">
                                <div class="column e-Learning">
                                    <Portfolio logo="/img/logos/1.png" PortTitle="Banking & Finance" PortDec="E-learning" />
                                    <Portfolio logo="/img/logos/1.png" PortTitle="Banking & Finance" PortDec="E-learning" />


                                </div>
                                <div class="column">
                                    <Portfolio logo="/img/logos/1.png" PortTitle="Banking & Finance" PortDec="E-learning" />
                                    <Portfolio logo="/img/logos/1.png" PortTitle="Banking & Finance" PortDec="E-learning" />

                                </div>


                                <div class="column">
                                    <Portfolio logo="/img/logos/1.png" PortTitle="Banking & Finance" PortDec="E-learning" />
                                    <Portfolio logo="/img/logos/1.png" PortTitle="Banking & Finance" PortDec="E-learning" />
                                    <Portfolio logo="/img/logos/1.png" PortTitle="Banking & Finance" PortDec="E-learning" />
                                </div>

                                <div class="column">
                                    <Portfolio logo="/img/logos/1.png" PortTitle="Banking & Finance" PortDec="E-learning" />
                                    <Portfolio logo="/img/logos/1.png" PortTitle="Banking & Finance" PortDec="E-learning" />
                                    <Portfolio logo="/img/logos/1.png" PortTitle="Banking & Finance" PortDec="E-learning" />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </section>
        {/* <!-- End Portfolio Section --> */}


        {/* <!-- ======= Testimonials Section ======= --> */}

        <section id="testimonials" class="testimonials">
            <div class="container">

                <div class="section-title" data-aos="zoom-out">
                    <h2>Testimonials</h2>
                    <p>What they are saying about us</p>
                </div>

                <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                    <div class="swiper-wrapper">

                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <p>
                                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>The A3 Pixels team understands the work well and then performs with full enthusiasm. Output provided in our project was good. Help is extended whenever asked. We look
                                    forward working with you in future too.
                                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                                <h3>Heeshma Shah, Signet Chemical Corporation Pvt. Ltd.</h3>
                                <h4>Manager-Technical Services</h4>
                            </div>
                        </div>
                        {/* <!-- End testimonial item --> */}


                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <p>
                                    <i class="bx bxs-quote-alt-left quote-icon-left"></i> A terrific team to work with: splendid support and excellent work! With your extraordinary efforts, we delivered an eLearning program that met nearly all expectations
                                    and an aggressive deadline. I would like to thank everyone who worked on the project. Highly recommend this team and would seek out every opportunity to work with you in future.
                                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                                <h3>ShabbeerZafar, Aptara Inc.</h3>
                                <h4>Project Manager</h4>
                            </div>
                        </div>
                        {/* <!-- End testimonial item --> */}

                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <p>
                                    <i class="bx bxs-quote-alt-left quote-icon-left"></i> Excellent team, led by a well-informed manager.
                                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                                <h3>Neel Parnaik, Aptara Inc.</h3>
                                <h4>Associate Project Manager</h4>
                            </div>
                        </div>
                        {/* <!-- End testimonial item --> */}

                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <p>
                                    <i class="bx bxs-quote-alt-left quote-icon-left"></i> A3 Pixels is a highly responsive team. During our interaction, changes or additions were immediately implemented either on the same day or the next. On completion of
                                    the task, we were informed of the same via email by their Admin. Much appreciated!
                                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                                <h3>Roshni Udyavar Yehuda, Rachana Sansad Institute of Environmental Architecture</h3>
                                <h4>Head</h4>
                            </div>
                        </div>
                        {/* <!-- End testimonial item --> */}

                    </div>
                    <div class="swiper-pagination"></div>
                </div>

            </div>
        </section>

        {/* <!-- End Testimonials Section --> */}

        {/* <!-- Our Company --> */}
        <section id="team" class="team">
            <div class="container1">
                <div class="section-title" data-aos="zoom-out">
                    <h2>Team</h2>
                    <p>clients</p>
                </div>
                <div id="image-ticker ">
                    <div class='container1'>
                        <div class="ticker-box-2" data-aos="fade-up " data-aos-delay="100 ">
                            <div class="marquee">
                                <ul class="marquee-content">
                                    <li><i class="fab fa-github"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>    {/* <!-- ======= Footer ======= --> */}
        <footer class="footer-distributed">

            <div class="footer-left">

                <h3><img src="/img/logo.png" /></h3>

                <p class="footer-company-name">Company Name © 2015</p>

                <div class="footer-icons">

                    <a href="# " class="twitter "><i class="bx bxl-twitter "></i></a>
                    <a href="# " class="facebook "><i class="bx bxl-facebook "></i></a>
                    <a href="# " class="instagram "><i class="bx bxl-instagram "></i></a>
                    <a href="# " class="google-plus "><i class="bx bxl-skype "></i></a>
                    <a href="# " class="linkedin "><i class="bx bxl-linkedin "></i></a>
                </div>

            </div>

            <div class="footer-right">
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.4051603706222!3d28.50292593193056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1585040658255!5m2!1sen!2sin"
                    width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
                </iframe> */}
            </div>

        </footer>
        {/* <!-- End Footer --> */}

    </>

    );
}

export default App;