import React from 'react';
import './testimonial.css';
export default function () {
  return (<>
    {/* <!-- Start DEMO HTML (Use the following code into your project)--> */}
    <section class="client pt-3 pb-5">
      <div class="container ">
        <div class="row text-center">
          <div class="col-12">

          <div class="section-title text-left mb-3 pl-0" data-aos="zoom-out">
                    <p>Testimonials</p>
                    <h2>What our clients are saying</h2>
                </div>
            
          </div>
        </div>
        <div class="row align-items-md-center text-white">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
              {/* <!-- Wrapper for slides --> */}
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row p-4">
                    <div class="t-card">
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                      <p class="lh-lg"> The A3 Pixels team understands the work well and then performs with full enthusiasm. Output provided in our project was good. Help is extended whenever asked. We look forward working with you in future too. </p>
                      <i class="fa fa-quote-right" aria-hidden="true"></i><br/>
                    </div>
                    <div class="row">
                      <div class="col-sm-2 pt-3">
                        <img src="https://source.unsplash.com/300x300/?girl"
                          class="rounded-circle img-responsive img-fluid"/>
                      </div>
                      <div class="col-sm-10">
                        <div class="arrow-down d-none d-lg-block"></div>
                        <h4><strong>Heeshma Shah</strong></h4>
                        <p class="testimonial_subtitle"><span> Manager-Technical Services</span><br/>
                          <span>Signet Chemical Corporation Pvt. Ltd.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                
                <div class="carousel-item">
                  <div class="row p-4">
                    <div class="t-card">
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                      <p class="lh-lg"> A terrific team to work with: splendid support and excellent work! With your extraordinary efforts, we delivered an eLearning program that met nearly all expectations and an aggressive deadline. I would like to thank everyone who worked on the project. Highly recommend this team and would seek out every opportunity to work with you in future. </p>
                      <i class="fa fa-quote-right" aria-hidden="true"></i><br/>
                    </div>
                    <div class="row">
                      <div class="col-sm-2 pt-4">
                        <img src="https://source.unsplash.com/300x300/?girlbeauty"
                          class="rounded-circle img-responsive img-fluid"/>
                      </div>
                      <div class="col-sm-10">
                        <div class="arrow-down d-none d-lg-block"></div>
                        <h4><strong>ShabbeerZafar</strong></h4>
                        <p class="testimonial_subtitle"><span>
                        Project Manager</span><br/>
                          <span>Aptara Inc.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>


                <div class="carousel-item">
                  <div class="row p-4">
                    <div class="t-card">
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                      <p class="lh-lg"> Excellent team, led by a well-informed manager.  </p>
                      <i class="fa fa-quote-right" aria-hidden="true"></i><br/>
                    </div>
                    <div class="row text-lg-start">
                      <div class="col-sm-2 pt-4 align-items-center">
                        <img src="https://source.unsplash.com/300x300/?female"
                          class="rounded-circle img-responsive img-fluid"/>
                      </div>
                      <div class="col-sm-10">
                        <div class="arrow-down d-none d-md-block"></div>
                        <h4><strong>Neel Parnaik</strong></h4>
                        <p class="testimonial_subtitle"><span>Associate Project Manager</span><br/>
                          <span>Aptara Inc.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="row p-4">
                    <div class="t-card">
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                      <p class="lh-lg"> A3 Pixels is a highly responsive team. During our interaction, changes or additions were immediately implemented either on the same day or the next. On completion of the task, we were informed of the same via email by their Admin. Much appreciated! </p>
                      <i class="fa fa-quote-right" aria-hidden="true"></i><br/>
                    </div>
                    <div class="row text-lg-start">
                      <div class="col-sm-2 pt-4 align-items-center">
                        <img src="https://source.unsplash.com/300x300/?female"
                          class="rounded-circle img-responsive img-fluid"/>
                      </div>
                      <div class="col-sm-10">
                        <div class="arrow-down d-none d-md-block"></div>
                        <h4><strong>Roshni Udyavar Yehuda</strong></h4>
                        <p class="testimonial_subtitle"><span>Head</span><br/>
                          <span>Rachana Sansad Institute of Environmental Architecture</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
            <div class="controls push-right">
              <a class="fa fa-chevron-left text-white " href="#carouselExampleCaptions"
                data-bs-slide="prev"></a> &nbsp;&nbsp;&nbsp;&nbsp;
              <a class="fa fa-chevron-right text-white " href="#carouselExampleCaptions"
                data-bs-slide="next"></a>
            </div>
          </div>
        </div>

      </div>

    </section>
    {/* <!-- END EDMO HTML (Happy Coding!)--> */}
    </>
  )
}
