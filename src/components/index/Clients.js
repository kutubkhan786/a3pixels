import React, { Component } from 'react';
import './Clients.css'
import c_json from "./clients.json"


class Clients extends Component {

  DisplayData=c_json.map(
    (info)=>{
        return(
          <img className="img-scroll" src={info.path} alt="" />
        )
    }
)


  render() {
    return (
      <>
        <div className="slider">
          <div className="container">
            <div className="section-title mb-0" data-aos="zoom-out">
              <p>Our Clients</p>
              {/* <h2>Who are our clients</h2> */}
            </div>
          </div>
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className='row ' >
                  <div className="slide-track pb-4 d-flex align-items-center justify-content-center">
                    <div className="slide ">
                      <img className="img-scroll" src="/img/clients/Client__1.jpg" alt="" />
                    </div>
                    <div className="slide">
                      <img className="img-scroll" src="/img/clients/Client__2.jpg" alt="" />
                    </div>
                    <div className="slide">
                      <img className="img-scroll" src="/img/clients/Client__3.jpg" alt="" />
                    </div>
                    <div className="slide">
                      <img className="img-scroll" src="/img/clients/Client__4.jpg" alt="" />
                    </div></div>
                  <div className="slide-track d-flex align-items-center justify-content-center">
                    <div className="slide">
                      <img className="img-scroll" src="/img/clients/Client__12.jpg" alt="" />
                    </div>
                    <div className="slide">
                      <img className="img-scroll" src="/img/clients/Client__13.jpg" alt="" />
                    </div>
                    <div className="slide">
                      <img className="img-scroll" src="/img/clients/Client__14.jpg" alt="" />
                    </div>
                    <div className="slide">
                      <img className="img-scroll" src="/img/clients/Client__15.jpg" alt="" />
                    </div></div>
                </div></div>
              <div className="carousel-item">
                <div className='row' >
                  <div className="slide-track pb-4 d-flex align-items-center justify-content-center">
                    <div className="slide">
                      <img className="img-scroll" src="/img/clients/Client__1.jpg" alt="" />
                    </div>
                    <div className="slide">
                      <img className="img-scroll" src="/img/clients/Client__2.jpg" alt="" />
                    </div>
                    <div className="slide">
                      <img className="img-scroll" src="/img/clients/Client__3.jpg" alt="" />
                    </div>
                    <div className="slide">
                      <img className="img-scroll" src="/img/clients/Client__4.jpg" alt="" />
                    </div></div>
                  <div className="slide-track d-flex align-items-center justify-content-center">
                    <div className="slide">
                      <img className="img-scroll" src="/img/clients/Client__12.jpg" alt="" />
                    </div>
                    <div className="slide">
                      <img className="img-scroll" src="/img/clients/Client__13.jpg" alt="" />
                    </div>
                    <div className="slide">
                      <img className="img-scroll" src="/img/clients/Client__14.jpg" alt="" />
                    </div>
                    <div className="slide">
                      <img className="img-scroll" src="/img/clients/Client__15.jpg" alt="" />
                    </div></div>
                </div></div>
              <div className="carousel-item">
                <div className='row' >
                  <div className="slide-track pb-4 d-flex align-items-center justify-content-center">
                    <div className="slide">
                      <img className="img-scroll " src="/img/clients/Client__1.jpg" alt="" />
                    </div>
                    <div className="slide">
                      <img className="img-scroll" src="/img/clients/Client__2.jpg" alt="" />
                    </div>
                    <div className="slide">
                      <img className="img-scroll" src="/img/clients/Client__3.jpg" alt="" />
                    </div>
                    <div className="slide">
                      <img className="img-scroll" src="/img/clients/Client__4.jpg" alt="" />
                    </div></div>
                  <div className="slide-track d-flex align-items-center justify-content-center">
                    <div className="slide">
                      <img className="img-scroll" src="/img/clients/Client__12.jpg" alt="" />
                    </div>
                    <div className="slide">
                      <img className="img-scroll" src="/img/clients/Client__13.jpg" alt="" />
                    </div>
                    <div className="slide">
                      <img className="img-scroll" src="/img/clients/Client__14.jpg" alt="" />
                    </div>
                    <div className="slide">
                      <img className="img-scroll" src="/img/clients/Client__15.jpg" alt="" />
                    </div></div>
                </div>
              </div>
              <a className="carousel-control-prev " href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next " href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
  
  
          <div id="maindiv">
    <div id="div1">
    {this.DisplayData}
    </div>
    <div id="div2">
    {this.DisplayData}
      </div>
  </div>
  
  
          </div>
  
         
  
  
  
  
      </>
    );
  }
}

export default Clients;