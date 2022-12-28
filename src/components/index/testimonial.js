import React, { Component } from 'react'
import './testimonial.css';

export default class testimonial extends Component {
  render() {
    return (<>
{/* <!-- TESTIMONIALS --> */}


           
            {/* <!--TESTIMONIAL 2 --> */}
            <div class="item">
              <div class="top11"></div>
              <div class="shadow-effect">
                <p>{this.props.testidesc}<br/><b>{this.props.testiposition}</b></p>
              </div>
              <div class="testimonial-name">
                <img class="img-circle upimg" src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" alt=""/>{this.props.testiname}</div>
            </div>
            {/* <!--END OF TESTIMONIAL 2 --> */}
 
    {/* <!-- END OF TESTIMONIALS --> */}
    </>
    )
  }
}
