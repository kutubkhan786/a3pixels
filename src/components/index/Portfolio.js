import React from 'react'
import './Portfolio.css';
import Slider from './slider.js';

function portfolio(props) {
  var classnames=require('classnames');
  return (
    <>
  <div className={classnames('col-lg-3 portfolio-item portfolio-details-slider',props.filter)}>
            <div class="portfolio-img"><img src={props.logo} class="img-fluid" alt=""/></div>
            <div class="portfolio-info">
              <h4>{props.PortTitle}</h4>
              <p>{props.PortDec}</p>
              <a href={props.logo} data-gallery="portfolioGallery"  class="portfolio-lightbox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>
    </>
  )
}

export default portfolio