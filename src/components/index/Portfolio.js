import React from 'react';
import './Portfolio.css';
import {Link} from 'react-router-dom';


function portfolio(props) {
  var classnames=require('classnames');
  
    return (
    <>
    

  <div className={classnames('col-lg-3 portfolio-item portfolio-details-slider my-lightbox-gallery',props.filter)}>
              <Link to= {props.logo} data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" >
              
            <div className="portfolio-img"><img src={props.logo} className="img-fluid" alt=""/></div>
            <div className="portfolio-info">
              <h4>{props.PortTitle}</h4>
              <p>{props.PortDec}</p>
            </div>
            </Link>
          </div>

              {/* <a href={props.logo}    title="App 1"><i className="bx bx-plus"></i></a> */}
  
              


    </>
  )
}

export default portfolio