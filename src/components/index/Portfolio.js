import React from 'react'
import './Portfolio.css';

function portfolio(props) {
  var classnames=require('classnames');
  return (
    <>
  <div className={classnames('col-lg-3 portfolio-item portfolio-details-slider',props.filter)}>
            <div className="portfolio-img"><img src={props.logo} className="img-fluid" alt=""/></div>
            <div className="portfolio-info">
              <h4>{props.PortTitle}</h4>
              <p>{props.PortDec}</p>
              <a href={props.logo} data-gallery="portfolioGallery"  className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
    </>
  )
}

export default portfolio