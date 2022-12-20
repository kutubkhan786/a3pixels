import React from 'react'
import './Portfolio.css'
function portfolio(props) {
  return (
    <>
      <div class="image-item ">
        <img src={props.logo} alt="" />
        <div class="portfolio-info ">
          <h4>{props.PortTitle}</h4>
          <p>{props.PortDec}</p>
          <a href={props.logo} data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
          <a href="portfolio-details.html" class="details-link" title="More Details"><i
            class="bx bx-link"></i></a>
        </div>
        <div class="overlay"></div>
      </div>
    </>
  )
}

export default portfolio