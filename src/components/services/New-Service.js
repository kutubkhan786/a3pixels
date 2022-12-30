import React, { Component } from 'react'
import './New-Service.css';
import Navbar from '../navbar/Nav.js';
import Footer from '../footer/Footer.js';
import Clients from '../index/Clients.js';


export default class NewService extends Component {
    constructor(props) {
        super(props)

        // Set initial state 
        this.state = {
            bannertext1:
                'SERVICES',
            bannertext2:
                'E-Learning development'
        }


        // Binding this keyword 
        this.updateState = this.updateState.bind(this)
    }

    updateState() {
        // Changing state 
        this.setState({
            bannertext:
                'good'
        })
    }
    render() {
        return (<>
            {/* ========navbar========== */}
            <Navbar />

            {/* =============E-learning section========= */}
            <section id='elearning' className="mt-3 fixed " >
                <div className='row grey1'>
                    <div className='row  p-3 col-12'>
                        <div className="col-md-6 col-sm-12 d-flex justify-content-center my-auto ">
                            <p><h1 className='font-weight-bold'>{this.state.bannertext1}</h1>
                                <p>{this.state.bannertext2}</p></p>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <img src="\img\services1.png" className='img-fluid' />

                        </div>
                    </div>
                </div>
                <div className='row portfolio'>
                    <ul id="portfolio-flters" className=" portfolio-filter col-12 d-flex justify-content-center serport" data-aos="fade-up">
                        <li data-filter="*" className="filter-active pl-4 pr-4">E-LEARNING DEVELOPEMENT</li>
                        <li data-filter=".Elearning" >TRANSLATION & LOCALIZATION</li>
                        <li data-filter=".Localization">WEB & MULTIMIDIA DEVELOPEMENT</li>
                        <li data-filter=".webdesigns">PRINT & IDENTITY</li>
                    </ul>
                </div>
            </section>
            <div className='elearning'>
                <p className='m-4 p-4'>
                    We have expertise in both: across -the -board -support to serious e-Learning solutions; and custom e-learning content creation in areas like Behavioral/Soft Skills, Software Simulation, Standard Operating Procedures, Domain Skills - Sales, Finance, HR, and Operations etc. Product Training, Interactive Game Based Approach, Vocational Courses.
                    <br />
                    <br />
                    Our wbt/cbt's are powerful, intuitive, self-paced, self-learning tools which impart in-depth know-how to employees in a simple and lucid style. We integrate audio-visuals to make the content more interesting and the learning experience more exciting.</p><br /><br />

                <section className='row bacimg'>
                    <div className='col-lg-6 yellowless'>
                        <b>CUSTOM E-LEARNING CONTENT CREATION</b>
                        <ul>
                            <li>Behavioral/Soft Skills</li>
                            <li>Software Simulation</li>
                            <li>Standard Operating Procedures</li>
                            <li>Domain Skills - Sales, Finance, HR, Operations etc.</li>
                            <li>Product Training</li>
                            <li>Interactive Game Based Approach</li>
                            <li>Vocational Courses</li>
                        </ul>
                    </div>
                    <div className='col-lg-6 greyless'>
                        <b>REPURPOSING OF CONTENT</b>
                        <ul>
                            <li>Technical/Version Upgrade</li>
                            <li>Interactivity Enhancement – Using of Graphics, Templates, Illustrations, 2D animations, Voiceover</li>
                            <li>SCORM compliance - Making content compliant with SCORM and accessibility guidelines</li>
                        </ul>
                        <b>Our technical experts are well-versed with appropriate languages and tools, and develop effective wbt/cbt's training programmes.</b><br /><br />
                        <div className='row'>
                            <div className="lanbox">
                                <div className="img-square-wrapper d-flex justify-content-center my-auto">
                                    <b>LANGUAGES</b>
                                </div>
                                <div className="card-body">
                                    <p className='m-0'>HTML5 / CSS3 / JQUERY / JAVASCRIPT / ACTIONSCRIPT 2.0 / XML / SILVERLIGHT 1.0 / JOOMLA / WORDPRESS / DRUPAL<br /></p>
                                </div>
                            </div>
                            <br />
                            <div className="lanbox">
                                <div className="img-square-wrapper d-flex justify-content-center my-auto">
                                    <b >TOOL</b>
                                </div>
                                <div className="card-body">
                                    <p className='m-0'>ARTICULATE STORYLINE / ARTICULATE STUDIO / FLASH / LECTORA / CAPTIVATE / AUTHORWARE / BREEZ / EXPRESSION BLEND<br /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <p><b>PRODUCT</b><br />

                    At A3Pixels, our people are equipped and trained to develop and deliver world-class e-learning products time after time. Product development includes the following stages:
                    <ul>
                        <li>Project planning</li>
                        <li>Conceptualizing : Storyboarding</li>
                        <li>Executing: Development of design and actual Learning Materials</li>
                        <li>Fine tuning: Material Revision</li>
                        <li>Final Cut: Course Delivery</li>
                    </ul>




                </p>
            </div>




            <section id='elearning' >

            </section>
            <section id='elearning' >
            </section>
            <section id='elearning' >
            </section>
            <section id='elearning' >
            </section>






            {/* ===========clients=========== */}
            <Clients />
            {/* =============footer========== */}
            <Footer />
        </>
        )
    }
}
