import React from 'react';
import './testimonial.css';
function Testimonial() {
  return (<>
    {/* <!-- Start DEMO HTML (Use the following code into your project)--> */}
    <section className="client pt-3 pb-5">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">

            <div className="section-title text-left mb-3 pl-0" data-aos="zoom-out">
              <p>Testimonials</p>
              <h2>What our clients are saying</h2>
            </div>

          </div>
        </div>
        <div className="row align-items-md-center text-white">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
              {/* <!-- Wrapper for slides --> */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row p-4">
                    <div className="t-card">
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                      <p className="lh-lg"> The A3 Pixels team understands the work well and then performs with full enthusiasm. Output provided in our project was good. Help is extended whenever asked. We look forward working with you in future too. </p>
                      <i className="fa fa-quote-right" aria-hidden="true"></i><br />
                    </div>
                    <div className="row">
                      <div className="col-sm-2 pt-3">
                        <img src="https://source.unsplash.com/300x300/?girl"
                          className="rounded-circle img-responsive img-fluid" alt=""/>
                      </div>
                      <div className="col-sm-10">
                        <div className="arrow-down d-none d-lg-block"></div>
                        <h4><strong>Heeshma Shah</strong></h4>
                        <p className="testimonial_subtitle"><span> Manager-Technical Services</span><br />
                          <span>Signet Chemical Corporation Pvt. Ltd.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="carousel-item">
                  <div className="row p-4">
                    <div className="t-card">
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                      <p className="lh-lg"> A terrific team to work with: splendid support and excellent work! With your extraordinary efforts, we delivered an eLearning program that met nearly all expectations and an aggressive deadline. I would like to thank everyone who worked on the project. Highly recommend this team and would seek out every opportunity to work with you in future. </p>
                      <i className="fa fa-quote-right" aria-hidden="true"></i><br />
                    </div>
                    <div className="row">
                      <div className="col-sm-2 pt-4">
                        <img src="https://source.unsplash.com/300x300/?girlbeauty"
                          className="rounded-circle img-responsive img-fluid" alt=""/>
                      </div>
                      <div className="col-sm-10">
                        <div className="arrow-down d-none d-lg-block"></div>
                        <h4><strong>ShabbeerZafar</strong></h4>
                        <p className="testimonial_subtitle"><span>
                          Project Manager</span><br />
                          <span>Aptara Inc.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="carousel-item">
                  <div className="row p-4">
                    <div className="t-card">
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                      <p className="lh-lg"> Excellent team, led by a well-informed manager.  </p>
                      <i className="fa fa-quote-right" aria-hidden="true"></i><br />
                    </div>
                    <div className="row text-lg-start">
                      <div className="col-sm-2 pt-4 align-items-center">
                        <img src="https://source.unsplash.com/300x300/?female"
                          className="rounded-circle img-responsive img-fluid" alt=""/>
                      </div>
                      <div className="col-sm-10">
                        <div className="arrow-down d-none d-md-block"></div>
                        <h4><strong>Neel Parnaik</strong></h4>
                        <p className="testimonial_subtitle"><span>Associate Project Manager</span><br />
                          <span>Aptara Inc.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="row p-4">
                    <div className="t-card">
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                      <p className="lh-lg"> A3 Pixels is a highly responsive team. During our interaction, changes or additions were immediately implemented either on the same day or the next. On completion of the task, we were informed of the same via email by their Admin. Much appreciated! </p>
                      <i className="fa fa-quote-right" aria-hidden="true"></i><br />
                    </div>
                    <div className="row text-lg-start">
                      <div className="col-sm-2 pt-4 align-items-center">
                        <img src="https://source.unsplash.com/300x300/?female"
                          className="rounded-circle img-responsive img-fluid" alt=""/>
                      </div>
                      <div className="col-sm-10">
                        <div className="arrow-down d-none d-md-block"></div>
                        <h4><strong>Roshni Udyavar Yehuda</strong></h4>
                        <p className="testimonial_subtitle"><span>Head</span><br />
                          <span>Rachana Sansad Institute of Environmental Architecture</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="controls push-right">
              <a className="left fa fa-chevron-left text-white" href="#carouselExampleCaptions"
                data-bs-slide="prev">.</a>
              <a className="right fa fa-chevron-right text-white" href="#carouselExampleCaptions"
                data-bs-slide="next">.</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- END EDMO HTML (Happy Coding!)--> */}
  </>
  )
}
export default Testimonial