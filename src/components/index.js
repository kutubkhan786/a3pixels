import React, { Component } from 'react'
import './index.css';
import Services from './index/Services.js';
import About from './index/About.js';
import Latest from './index/Latest';
import Portfolio from './index/Portfolio.js';
import Testimonial from './index/testimonial.js';
import Clients from './index/Clients.js';
import Navbar from './navbar/Nav.js';
import Footer from './footer/Footer.js';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Glightbox from 'glightbox';

const options={
    

    loop:'true',
            center:'true',
            items:3,
            margin:0,
            autoplay:'true',
            dots:'true',
            autoplayTimeout:3000,
            smartSpeed:450,
    responsive:{
        0:{
            items:1
        },
        
    }
};
export default class app extends Component {
    componentDidMount() {
        const portfolioLightbox=Glightbox({
          selector: '.portfolio-lightbox'
    
    });
}

    render() {
        return (
            <>
                <div id="loader" ></div>
                <div id="content1">
                    <Navbar />

                    {/* <!-- ======= Head Section ======= --> */}

            <section id='home1' className="el">
                <div className="fit-screen d-flex align-items-center justify-content-center">
                    <div className="fit-card  ">
                        {/* <div className="bg-box"> */}
                        <img id="home" src="/img/Banner1.png" className=" img-fluid " alt=""/>

                    </div>
                </div>

                <section id='services' className="temp">
            </section>
            </section>
            {/* <button id="back-to-top-btn">Back to Top</button> */}

            {/* <!-- ======= Services Section ======= --> */}
            {/* <!-- <div className='merg' id="services"> --> */}
            
            <section className="til pb-0" data-aos="fade-up" data-aos-duration="1000">
                <div className='container'>
                    <div className="row" data-aos="zoom-out">

                                <Services linker="e-learning" name1="E-LEARNING &" name2="DEVELOPMENT" logo="/img/logos/1.png" logoh="/img/logos/1_H.png" />
                                <Services linker="https://www.a3pixels.com/localization.php" name1="TRANSLATION &" name2="LOCALIZATION" logo="/img/logos/4.png" logoh="/img/logos/4_H.png" />
                                <Services linker="website" name1="WEBSITE & MULTIMEDIA" name2=" DEVELOPEMENT" logo="/img/logos/3.png" logoh="/img/logos/3_H.png" />
                                <Services linker="print" name1="PRINT & IDENTITY" logo="/img/logos/2.png" logoh="/img/logos/2_H.png" />

                            </div>
                        </div>
                        {/* <!-- End Services Section --> */}

                    </section>


            {/* <!-- ======= About Section ======= --> */}
            <section id="about" className='p-4 mb-4 '>
            </section>
            <section  className="about pb-0">
                <div className="container">
                    <div className="section-title mb-2" data-aos="zoom-out">
                        <p>About Us</p>
                        {/* <h2>Below you can find more information about our company</h2> */}
                    </div>


                    <div className="row content" data-aos="fade-up">
                        <p>The company provides effective web and e-Learning solutions that are easy to implement and use. Our efforts are directed at consistently building stimulating and state-of-the-art e-Learning products for our clients that makes online learning
                            a fun and enriching experience for the users. Over the years, we have perfected the ability to handle unstructured situations with ease, to give life to ideas and concepts that have never been implemented before, and to manage a multitude
                            of projects without slipping on deadlines. In each project that we undertake, we make every effort to maintain the highest standards of quality and efficiency. A3PIXELS has been profitable in every quarter and has shown a 100% growth
                            in revenues in every successive year since inception.</p>
                        <ul>
                            <li>
                                <h4 className="section-title mb-0"><b>OUR MISSION:</b></h4>
                            </li>
                            <li className="mt-0"> To provide our customers timely and cost-effective e-learning solutions and services aligned to their business goals. </li>
                        </ul>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-5">
                                    <h4 className="section-title  mb-0"><b>WHAT WE DO</b></h4>
                                    <img className='img-fluid about0' src="/img/logos/about-side.png" alt="" />
                                </div>
                                <div className="col-lg-7 pt-4 pt-lg-0 ">
                                    <div className="row content yello-box">
                                    </div>
                                    <div  className="container-fluid">
                                        <div className="row">
                                            <About Aboutstyle="card yellow" Aboutlogo="\img\about\Icon_01.png" Aboutdec="Good user interface design helps people work more assertively, complete tasks more efficiently and build brand loyalty at the same time." AboutTitle="UI DESIGN" />
                                            <About Aboutstyle="card grey " Aboutlogo="\img\about\Icon_03.png" Aboutdec="We specialize in creating customized learning solutions with latest technical language to cultivate visually outstanding, animated text, frame and more informative design.
                                               " AboutTitle="CUSTOMIZE SOLUTION" />
                                                    <About Aboutstyle="card yellow" Aboutlogo="\img\about\Icon_02.png" Aboutdec="Our experienced & talented professionals analyse the existing website and identify the most vital content for mobile browser compatibility.
                                                    " AboutTitle="MOBILE WEBSITE DESIGN" />
                                            <About Aboutstyle="card grey" Aboutlogo="\img\about\Icon_04.png" Aboutdec=" Our innovative graphic designers create brochure designs, flyers, business cards, datasheets, magazines, post cards, booklets, newsletters." AboutTitle="BRANDING DESIGN" />
                                        </div>
                                    </div>                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="cta" className='p-3 m-4 '>
            </section>
            {/* <!-- End About Section --> */}
            {/* <!-- this is the call for enquiry --> */}
            {/* <!-- ======= Cta Section ======= --> */}
            {/* <section id="cta"className='p-3 '>
            </section> */}
            <section  className="cta">
                <div className="container">

                            <div className="row" data-aos="zoom-out">
                                <div className="col-lg-9 text-center text-lg-start">
                                    <h3>Call To Action</h3>
                                    <p> click the button and fill the form if having any query or want to contact us we will reach to you as soon as we recive your form</p>
                                </div>

                        <div className="col-lg-3 cta-btn-container text-center">
                            <a herf="/" className="cta-btn align-middle button" id="button" data-toggle="modal" data-target="#myModal">Call
                                To Action</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&#215;</span></button>
                            <h4 className="modal-title" id="myModalLabel">ENQUIRY</h4>
                        </div>
                        <div className="modal-body">
                            <div id="response"></div>

                            <div className="form-group">
                                <label for="requirements">Select Your requirements:</label>
                                <select name="requirements" id="requirements" className='form-control'>
                                    <option value="elearning">E-Learning Developement</option>
                                    <option value="translation">Translation & Localization</option>
                                    <option value="website">Website Developement</option>
                                    <option value="print">Print & Media</option>
                                </select>
                            </div>


                            <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter your company name" />
                            </div>

                            <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter your Name" />
                            </div>
                           
                            <div className="form-group">
                            <input type="email" className="form-control" placeholder="Enter email e.g example@xyz.com" />
                            </div>

                            <div className="form-group">
                            <textarea type="text" className="form-control" placeholder="Enter your requirement details..." clos='10' rows='2' />
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- End Cta Section --> */}

            {/* <!-- =====Our Latest Work====== --> */}
            <section id='latest'className='p-3 '>
            </section>
            <section  className="latest  ">
                <div className="fix-latest">
                    <div className="section-title ml-4 mb-3 pl-0 w-" data-aos="zoom-out">
                        <p >OUR LATEST WORK</p>
                        {/* <h2>jreiute5yhguteh eurhwe </h2> */}
                    </div>
                    <div className="row m-0 p-0 ">
                        <div className="col-2 d-flex float-right ">
                            <Latest logo="/img/portfolio/print_01.jpg" CareerTitle="WEB SOLUTION" CareerDec="
A Website is an extension of a company's overall communication strategy. We create websites using HTML5, CSS3, Jquery.
" />

                            <Latest logo="/img/portfolio/work10.jpg" CareerTitle="WEB APPLICATION" CareerDec="
We have expertise in Smart Phone Application Development, iPhone Game Development and Custom Mobile Application Development" />

                            <Latest logo="/img/portfolio/work11.jpg" CareerTitle="K12 ANIMATIONS" CareerDec="
We offer full production services in 2D, 3D, cell animation and corporate Videos (Audio and video), Multimedia Presentations / Slideshows.
" />

                            <Latest logo="/img/portfolio/work12.jpg" CareerTitle="PRINT WORK" CareerDec="
We develop the most effective marketing solutions based on your unique business needs, aiming to maximize returns on your marketing efforts." />
                                </div>
                            </div>


                        </div>
                    </section>
                   
                    {/* <!-- ======= Testimonials Section ======= -->- */}
                    
                    <section id="testimonials" className='testi'>
                        <div class="container">
                            <div className="section-title mb-3" data-aos="zoom-out">
                                <p>Testimonial</p>
                                {/* <h2>Who are our clients</h2> */}
                            </div>
                            <div class="row">
                                <div class="col-sm-12 newone" >

                                    <OwlCarousel {...options} id="customers-testimonials" class="owl-carousel">
                                        <Testimonial testidesc=" A terrific team to work with: splendid support and excellent work! With your extraordinary efforts, we delivered an eLearning program that met nearly all expectations and an aggressive deadline. I would like to thank everyone who worked on the project. Highly recommend this team and would seek out every opportunity to work with you in future." testiposition="Project Manager, Aptara Inc." testiname="ShabbeerZafar"/>
                                        <Testimonial testidesc="“ Excellent team, led by a well-informed manager. " testiname="Neel Parnaik" testiposition="Associate Project Manager,  Aptara Inc."/>
                                        <Testimonial testidesc="“ The A3 Pixels team understands the work well and then performs with full enthusiasm. Output provided in our project was good. Help is extended whenever asked. We look forward working with you in future too. " testiname="Heeshma Shah" testiposition="Manager-Technical Services, Signet Chemical Corporation Pvt. Ltd."/>
                                        <Testimonial testidesc="“ A3 Pixels is a highly responsive team. During our interaction, changes or additions were immediately implemented either on the same day or the next. On completion of the task, we were informed of the same via email by their Admin. Much appreciated! " testiname="Roshni Udyavar Yehuda" testiposition="Head, Rachana Sansad Institute of Environmental Architecture"/>
                                    </OwlCarousel></div></div></div>
                                    </section>
                    {/* <!-- End Testimonials Section --> */}

            
            {/* <!-- ======= Portfolio Section ======= --> */}
            <section id="portfolio" className='p-3 '>
            </section>
            <section  className="portfolio">
                <div className="container">

                    <div className="section-title mb-3" data-aos="zoom-out">
                        <p>Portfolio</p>
                        <h2>What we've done</h2>
                    </div>
                    
                    <ul id="portfolio-flters" className=" portfolio-filter d-flex justify-content-center p-0" data-aos="fade-up">
                        <li data-filter="*" className="filter-active pl-4 pr-4">All</li>
                        <li data-filter=".e-learning" >E-LEARNING</li>
                        <li data-filter=".localization">LOCALIZATION</li>
                        <li data-filter=".web">WEB DESIGN</li>
                        <li data-filter=".mobile">MOBILE SOLUTION</li>
                        <li data-filter=".multitude">MULTIMEDIA PRESENTATION</li>
                        <li data-filter=".logo">LOGO & PRINT DESIGN</li>
                    </ul>
                    
                    <div className="divScroll">
                        <div className="row portfolio-container my-lightbox-gallery" data-aos="fade-up">
                            <Portfolio logo="/img/portfolio/Elearning/0_BPCL/01_UI_design_menu.jpg" PortTitle="Banking & Finance" PortDec="E-learning" filter="e-learning" />
                            <Portfolio logo="/img/portfolio/Elearning/0_BPCL/02_UI_design_Intro.jpg" PortTitle="Banking & Finance" PortDec="E-learning" filter="e-learning" />
                            <Portfolio logo="/img/portfolio/Elearning/0_BPCL/05_UI_design_interactive(popup)_04.jpg" PortTitle="Banking & Finance" PortDec="E-learning" filter="e-learning" />
                            <Portfolio logo="/img/portfolio/Elearning/0_BPCL/05_UI_design_interactive(popup)_04.jpg" PortTitle="Banking & Finance" PortDec="E-learning" filter="e-learning" />

                                    <Portfolio logo="/img/portfolio/Elearning/4_SHell ILT/04.jpg" PortTitle="Shell" PortDec="E-learning" filter="e-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/4_SHell ILT/05.jpg" PortTitle="Shell" PortDec="E-learning" filter="e-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/4_SHell ILT/06.jpg" PortTitle="Shell" PortDec="E-learning" filter="e-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/4_SHell ILT/07.jpg" PortTitle="Shell" PortDec="E-learning" filter="e-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/4_SHell ILT/08.jpg" PortTitle="Shell" PortDec="E-learning" filter="e-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/4_SHell ILT/09.jpg" PortTitle="Shell" PortDec="E-learning" filter="e-learning" />


                                    <Portfolio logo="/img/portfolio/Elearning/9_Sp_Jain/01.jpg" PortTitle="Sp_Jain" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/9_Sp_Jain/03.jpg" PortTitle="Sp_Jain" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/9_Sp_Jain/04.jpg" PortTitle="Sp_Jain" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/9_Sp_Jain/05.jpg" PortTitle="Sp_Jain" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/9_Sp_Jain/06.jpg" PortTitle="Sp_Jain" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/9_Sp_Jain/07.jpg" PortTitle="Sp_Jain" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/9_Sp_Jain/08.jpg" PortTitle="Sp_Jain" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/9_Sp_Jain/11.jpg" PortTitle="Sp_Jain" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/9_Sp_Jain/12.jpg" PortTitle="Sp_Jain" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/9_Sp_Jain/108.jpg" PortTitle="Sp_Jain" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/9_Sp_Jain/h.jpg" PortTitle="Sp_Jain" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/9_Sp_Jain/j.jpg" PortTitle="Sp_Jain" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/9_Sp_Jain/k.jpg" PortTitle="Sp_Jain" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/9_Sp_Jain/n.jpg" PortTitle="Sp_Jain" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/9_Sp_Jain/o.jpg" PortTitle="Sp_Jain" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/9_Sp_Jain/p.jpg" PortTitle="Sp_Jain" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/9_Sp_Jain/q.jpg" PortTitle="Sp_Jain" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/9_Sp_Jain/s.jpg" PortTitle="Sp_Jain" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/9_Sp_Jain/spjain.jpg" PortTitle="Sp_Jain" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/9_Sp_Jain/u.jpg" PortTitle="Sp_Jain" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/9_Sp_Jain/v.jpg" PortTitle="Sp_Jain" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/9_Sp_Jain/w.jpg" PortTitle="Sp_Jain" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/9_Sp_Jain/y.jpg" PortTitle="Sp_Jain" PortDec="E-learning" />

                                    <Portfolio logo="/img/portfolio/Elearning/1_BSLI/01.jpg" PortTitle="BSCL" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/1_BSLI/02.jpg" PortTitle="BSCL" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/1_BSLI/03.jpg" PortTitle="BSCL" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/1_BSLI/bsli1.jpg" PortTitle="BSCL" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/1_BSLI/bsli1.jpg" PortTitle="BSCL" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/1_BSLI/work_bsli.jpg" PortTitle="BSCL" PortDec="E-learning" />

                                    <Portfolio logo="/img/portfolio/Elearning/5_Ambhuja Cement/01.jpg" PortTitle="Ambuja" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/5_Ambhuja Cement/02.jpg" PortTitle="Ambuja" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/5_Ambhuja Cement/03.jpg" PortTitle="Ambuja" PortDec="E-learning" />

                                    <Portfolio logo="/img/portfolio/Elearning/8_Hurix/02.jpg" PortTitle="Hurix" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/8_Hurix/03.jpg" PortTitle="Hurix" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/8_Hurix/11_k12.jpg" PortTitle="Hurix" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/8_Hurix/12_k12.jpg" PortTitle="Hurix" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/8_Hurix/13.jpg" PortTitle="Hurix" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/8_Hurix/14.jpg" PortTitle="Hurix" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/8_Hurix/15.jpg" PortTitle="Hurix" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/8_Hurix/17.jpg" PortTitle="Hurix" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/8_Hurix/18.jpg" PortTitle="Hurix" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/8_Hurix/20.jpg" PortTitle="Hurix" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/8_Hurix/21.jpg" PortTitle="Hurix" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/8_Hurix/22.jpg" PortTitle="Hurix" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/8_Hurix/23.jpg" PortTitle="Hurix" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/8_Hurix/101.jpg" PortTitle="Hurix" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/8_Hurix/104.jpg" PortTitle="Hurix" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/8_Hurix/105.jpg" PortTitle="Hurix" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/8_Hurix/106.jpg" PortTitle="Hurix" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/8_Hurix/107.jpg" PortTitle="Hurix" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/8_Hurix/108.jpg" PortTitle="Hurix" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/8_Hurix/109.jpg" PortTitle="Hurix" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/8_Hurix/110.jpg" PortTitle="Hurix" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/8_Hurix/111.jpg" PortTitle="Hurix" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/8_Hurix/112.jpg" PortTitle="Hurix" PortDec="E-learning" />

                                    <Portfolio logo="/img/portfolio/Elearning/2_BOI/boi1.png" PortTitle="BOI" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/2_BOI/ui_01_splash_v1.jpg" PortTitle="BOI" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/2_BOI/ui_02_scenario.jpg" PortTitle="BOI" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/2_BOI/ui_02_seeit.jpg" PortTitle="BOI" PortDec="E-learning" />

                                    <Portfolio logo="/img/portfolio/Elearning/6_ILFS/01_k12.jpg" PortTitle="ILFC" PortDec=" E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/6_ILFS/06_k12.jpg" PortTitle="ILFC" PortDec=" E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/6_ILFS/08_k12.jpg" PortTitle="ILFC" PortDec=" E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/6_ILFS/09_k12.jpg" PortTitle="ILFC" PortDec=" E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/6_ILFS/10_k12.jpg" PortTitle="ILFC" PortDec=" E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/6_ILFS/24.jpg" PortTitle="ILFC" PortDec=" E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/6_ILFS/25.jpg" PortTitle="ILFC" PortDec=" E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/6_ILFS/28.jpg" PortTitle="ILFC" PortDec=" E-learning" />

                                    <Portfolio logo="/img/portfolio/Elearning/10_Vodafone/01.jpg" PortTitle="Vodafone" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/10_Vodafone/02.jpg" PortTitle="Vodafone" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/10_Vodafone/03.jpg" PortTitle="Vodafone" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/10_Vodafone/vodafone.png" PortTitle="Vodafone" PortDec="E-learning" />

                                    <Portfolio logo="/img/portfolio/Elearning/11_GCube/19.jpg" PortTitle="Gcube" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/11_GCube/20.jpg" PortTitle="Gcube" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/11_GCube/21.jpg" PortTitle="Gcube" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/11_GCube/22.jpg" PortTitle="Gcube" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/11_GCube/25.jpg" PortTitle="Gcube" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/11_GCube/27.jpg" PortTitle="Gcube" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/11_GCube/28.jpg" PortTitle="Gcube" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/11_GCube/30.jpg" PortTitle="Gcube" PortDec="E-learning" />

                                    <Portfolio logo="/img/portfolio/Elearning/12_JPMorgan/02_jp.jpg" PortTitle="JPMorgan" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/12_JPMorgan/12.jpg" PortTitle="JPMorgan" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/12_JPMorgan/32.jpg" PortTitle="JPMorgan" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/12_JPMorgan/33.jpg" PortTitle="JPMorgan" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/12_JPMorgan/34.jpg" PortTitle="JPMorgan" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/12_JPMorgan/jpmorgan.png" PortTitle="JPMorgan" PortDec="E-learning" />

                                    <Portfolio logo="/img/portfolio/Elearning/3_Satya Sai Vidya Vahini/33.jpg" PortTitle="satya" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/3_Satya Sai Vidya Vahini/34.jpg" PortTitle="satya" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/3_Satya Sai Vidya Vahini/35.jpg" PortTitle="satya" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/3_Satya Sai Vidya Vahini/36.jpg" PortTitle="satya" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/3_Satya Sai Vidya Vahini/37.jpg" PortTitle="satya" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/3_Satya Sai Vidya Vahini/38.jpg" PortTitle="satya" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/3_Satya Sai Vidya Vahini/39.jpg" PortTitle="satya" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/3_Satya Sai Vidya Vahini/work3.jpg" PortTitle="satya" PortDec="E-learning" />

                                    <Portfolio logo="/img/portfolio/Elearning/7_TIS_JPmorgan/31.jpg" PortTitle="TIS" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/7_TIS_JPmorgan/39.jpg" PortTitle="TIS" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/7_TIS_JPmorgan/40.jpg" PortTitle="TIS" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/7_TIS_JPmorgan/44.jpg" PortTitle="TIS" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/7_TIS_JPmorgan/103.jpg" PortTitle="TIS" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/7_TIS_JPmorgan/302.jpg" PortTitle="TIS" PortDec="E-learning" />

                                    <Portfolio logo="/img/portfolio/Elearning/13_Snider/01_splash.jpg" PortTitle="Snider" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/13_Snider/snider.png" PortTitle="Snider" PortDec="E-learning" />

                                    <Portfolio logo="/img/portfolio/Elearning/14_JPMorgan_Safty/908.jpg" PortTitle="JPMorgan" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/14_JPMorgan_Safty/909.jpg" PortTitle="JPMorgan" PortDec="E-learning" />

                                    <Portfolio logo="/img/portfolio/Elearning/Hi_ed/01.jpg" PortTitle="Hi_ed" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/Hi_ed/02.jpg" PortTitle="Hi_ed" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/Hi_ed/03.jpg" PortTitle="Hi_ed" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/Hi_ed/04.jpg" PortTitle="Hi_ed" PortDec="E-learning" />

                                    <Portfolio logo="/img/portfolio/Elearning/LR_Static/Page 01.jpg" PortTitle="Lr_Static" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/LR_Static/Page 03.jpg" PortTitle="Lr_Static" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/LR_Static/Page 05.jpg" PortTitle="Lr_Static" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/LR_Static/Page 06.jpg" PortTitle="Lr_Static" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/LR_Static/Page 07.jpg" PortTitle="Lr_Static" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/LR_Static/Page 09.jpg" PortTitle="Lr_Static" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/LR_Static/Page 11.jpg" PortTitle="Lr_Static" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/LR_Static/Page 13.jpg" PortTitle="Lr_Static" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/LR_Static/Page 15.jpg" PortTitle="Lr_Static" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/LR_Static/Page 17.jpg" PortTitle="Lr_Static" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/LR_Static/Page 18.jpg" PortTitle="Lr_Static" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/LR_Static/Page 20.jpg" PortTitle="Lr_Static" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/LR_Static/Page 22.jpg" PortTitle="Lr_Static" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/LR_Static/Page 24.jpg" PortTitle="Lr_Static" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/LR_Static/Page 26a.jpg" PortTitle="Lr_Static" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/LR_Static/Page 26b.jpg" PortTitle="Lr_Static" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/LR_Static/Page 28.jpg" PortTitle="Lr_Static" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/LR_Static/Page 29.jpg" PortTitle="Lr_Static" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/LR_Static/Page 30.jpg" PortTitle="Lr_Static" PortDec="E-learning" />
                                    <Portfolio logo="/img/portfolio/Elearning/LR_Static/Page 31.jpg" PortTitle="Lr_Static" PortDec="E-learning" />

                                </div>
                            </div>
                        </div>


                    </section>
                    {/* <!-- End Portfolio Section --> */}

                    {/* client logo start here */}
                    <Clients />
                    {/* client logo end here */}

                    {/* <!-- Our Company --> */}

            <Footer />
            
        </div>
    </>

        );
    }
}