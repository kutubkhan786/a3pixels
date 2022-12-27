import React from 'react';
import './New-Service.css';
import Navbar from '../navbar/Nav.js';
import Footer from '../footer/Footer.js';
import Clients from '../index/Clients.js';
function contact() {
    return (<>
        {/* ========navbar========== */}
        <Navbar />

        {/* =============E-learning section========= */}
        <section id='elearning' >
            <div className='row'>
                <p>
                <b className='p-0'>E-LEARNING DEVELOPEMENT</b><br/>
                We have expertise in both: across -the -board -support to serious e-Learning solutions; and custom e-learning content creation in areas like Behavioral/Soft Skills, Software Simulation, Standard Operating Procedures, Domain Skills - Sales, Finance, HR, and Operations etc. Product Training, Interactive Game Based Approach, Vocational Courses.
                <br />
                Our wbt/cbt's are powerful, intuitive, self-paced, self-learning tools which impart in-depth know-how to employees in a simple and lucid style. We integrate audio-visuals to make the content more interesting and the learning experience more exciting.</p><br /><br />
                <div className='col-lg-6'>
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
                <div className='col-lg-6'>
                    <b>REPURPOSING OF CONTENT</b>
                    <ul>
                        <li>Technical/Version Upgrade</li>
                        <li>Interactivity Enhancement – Using of Graphics, Templates, Illustrations, 2D animations, Voiceover</li>
                        <li>SCORM compliance - Making content compliant with SCORM and accessibility guidelines</li>
                    </ul>
                    <b>Our technical experts are well-versed with appropriate languages and tools, and develop effective wbt/cbt's training programmes.</b><br />

                    <b>LANGUAGES --</b>  HTML5 / CSS3 / JQUERY / JAVASCRIPT / ACTIONSCRIPT 2.0 / XML / SILVERLIGHT 1.0 / JOOMLA / WORDPRESS / DRUPAL
                    <b>TOOL --</b> ARTICULATE STORYLINE / ARTICULATE STUDIO / FLASH / LECTORA / CAPTIVATE / AUTHORWARE / BREEZ / EXPRESSION BLEND<br/><br/>
                </div>
                <p>
                Our team is conversant with the procedures of creating e-learning materials or products, and making them accessible to its target audience. The People-Process-Product wall can be used to map a comprehensive picture of our e-learning development style.</p><br/>
<b>PEOPLE</b>
<p>No matter what the size of the project, our people perform multiple roles. While each project is a new learning experience, A3Pixels team members in academia and business, single-handedly develop online courses, with only intermittent help from others.</p>

<b>Team Involved: Our e-learning course is completely designed, developed, taught and managed by :</b>
<p><ul>
    <li> a subject matter expert</li>
    <li> instructional designer</li>
    <li> programmer</li>
    <li> graphic artist</li>
    <li> project manager, etc.</li>
</ul></p><br/>
<p>
<b>PROCESS</b><br/>

At the start of the project, a team of experts is identified that will conceptualise, execute and finalise the project from start to delivery. This team of experts is constantly connected and works to seamlessly meet the client's requirements at all times.<br/><br/>
<div className='row'>
<div className="col-lg-6">
<b>At A3Pixels, the e-learning project-development process consists of two major phases:</b><br/>

Phase 1: Content Preparation<br/>
Phase 2: Content Implementation<br/>
</div><div className='col-lg-6'>
<b>Each phase involves several stages:</b><br/>
Analysis, planning, design, development, delivery and evaluation.<br/>
The development process is iterative, allowing for corrective feedback and incorporating the same in various stages.
</div>
</div><br/>
The ongoing evaluation for improvement (i.e., revision) is embedded within each stage of development.
</p>
<b></b><br/>
<p><b>PRODUCT</b><br/>

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
        </section>

        {/* ===========clients=========== */}
        <Clients />
        {/* =============footer========== */}
        <Footer />
    </>
    )
}

export default contact