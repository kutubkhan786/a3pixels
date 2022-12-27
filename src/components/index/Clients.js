import React from 'react'
import './Clients.css'

function Clients() {
  return (
    <>
      <div class="slider">
        <div class="container">
          <div class="section-title mb-3" data-aos="zoom-out">
            <p>Our Clients</p>
            {/* <h2>Who are our clients</h2> */}
          </div>
        </div>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class='row ' >
                <div class="slide-track pb-4 d-flex align-items-center justify-content-center">
                  <div class="slide ">
                    <img class="img-scroll" src="/img/clients/Client__1.jpg" />
                  </div>
                  <div class="slide">
                    <img class="img-scroll" src="/img/clients/Client__2.jpg" />
                  </div>
                  <div class="slide">
                    <img class="img-scroll" src="/img/clients/Client__3.jpg" />
                  </div>
                  <div class="slide">
                    <img class="img-scroll" src="/img/clients/Client__4.jpg" />
                  </div></div>
                <div class="slide-track d-flex align-items-center justify-content-center">
                  <div class="slide">
                    <img class="img-scroll" src="/img/clients/Client__12.jpg" />
                  </div>
                  <div class="slide">
                    <img class="img-scroll" src="/img/clients/Client__13.jpg" />
                  </div>
                  <div class="slide">
                    <img class="img-scroll" src="/img/clients/Client__14.jpg" />
                  </div>
                  <div class="slide">
                    <img class="img-scroll" src="/img/clients/Client__15.jpg" />
                  </div></div>
              </div></div>
            <div class="carousel-item">
              <div class='row' >
                <div class="slide-track pb-4 d-flex align-items-center justify-content-center">
                  <div class="slide">
                    <img class="img-scroll" src="/img/clients/Client__1.jpg" />
                  </div>
                  <div class="slide">
                    <img class="img-scroll" src="/img/clients/Client__2.jpg" />
                  </div>
                  <div class="slide">
                    <img class="img-scroll" src="/img/clients/Client__3.jpg" />
                  </div>
                  <div class="slide">
                    <img class="img-scroll" src="/img/clients/Client__4.jpg" />
                  </div></div>
                <div class="slide-track d-flex align-items-center justify-content-center">
                  <div class="slide">
                    <img class="img-scroll" src="/img/clients/Client__12.jpg" />
                  </div>
                  <div class="slide">
                    <img class="img-scroll" src="/img/clients/Client__13.jpg" />
                  </div>
                  <div class="slide">
                    <img class="img-scroll" src="/img/clients/Client__14.jpg" />
                  </div>
                  <div class="slide">
                    <img class="img-scroll" src="/img/clients/Client__15.jpg" />
                  </div></div>
              </div></div>
            <div class="carousel-item">
              <div class='row' >
                <div class="slide-track pb-4 d-flex align-items-center justify-content-center">
                  <div class="slide">
                    <img class="img-scroll" src="/img/clients/Client__1.jpg" />
                  </div>
                  <div class="slide">
                    <img class="img-scroll" src="/img/clients/Client__2.jpg" />
                  </div>
                  <div class="slide">
                    <img class="img-scroll" src="/img/clients/Client__3.jpg" />
                  </div>
                  <div class="slide">
                    <img class="img-scroll" src="/img/clients/Client__4.jpg" />
                  </div></div>
                <div class="slide-track d-flex align-items-center justify-content-center">
                  <div class="slide">
                    <img class="img-scroll" src="/img/clients/Client__12.jpg" />
                  </div>
                  <div class="slide">
                    <img class="img-scroll" src="/img/clients/Client__13.jpg" />
                  </div>
                  <div class="slide">
                    <img class="img-scroll" src="/img/clients/Client__14.jpg" />
                  </div>
                  <div class="slide">
                    <img class="img-scroll" src="/img/clients/Client__15.jpg" />
                  </div></div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div></div>

    </>
  )
}

export default Clients