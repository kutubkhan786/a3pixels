import React from 'react';
import './footer.css';


export default function Footer() {
  return (
    <div className="row footer " id="cta">
      <div className="col-12 col-md-5 pt-5 pl-5">
        <div className="maplogo pb-5">
          <img src="/img/logos/footer_logo.png" className="img-fluid" alt="" />
        </div>
        <p className='text-white'>
          <i className="fas fa-envelope"></i>&nbsp;&nbsp;
            sales@a3pixels.com <br /> <br />
            <div className='d-flex align-items-start'>
            <i className="fas fa-map-marker-alt pt-2"></i>&nbsp;&nbsp;<p>Hind Service Industries, SVS Rd, Chandrakant Dhuru Wadi, Dadar, Mumbai, Maharashtra 400028</p></div>
        </p>
      </div>
      <div className="col-12 col-md-7 mapsize p-0">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7543.7569700805925!2d72.82680943608283!3d19.025075496608988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf565ca045e1%3A0x7fb713676527a2f8!2sHind%20Service%20Industries!5e0!3m2!1sen!2sin!4v1668770176670!5m2!1sen!2sin"
          allowFullScreen referrerpolicy="no-referrer-when-downgrade" title="map"></iframe>
      </div>
      
      <div className="yellow d-flex justify-content-center p-0">
        <p className="m-0 p-2 font-weight-bold">
          © Copyright: A3pixels.com
        </p>
      </div>
    </div>


  )
}