import React from 'react';
import './footer.css';
import { MDBIcon } from 'mdb-react-ui-kit';


export default function Footer() {
    return (
   

        <div class="row footer  d-flex align-items-center justify-content-center'">
            
            
            <div class="col-lg-5">
                <div class='maplogo p-4 pb-0'>
                    <img src="img/logos/footer_logo.png" />
                </div>
                <p class="font-weight-bold">
                    <MDBIcon color='secondary pt-5 pl-5 ' icon='envelope' />&nbsp;
                    sales@a3pixels.com
                </p>

            </div>
            <div class="col-lg-6 mapsize">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7543.7569700805925!2d72.82680943608283!3d19.025075496608988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf565ca045e1%3A0x7fb713676527a2f8!2sHind%20Service%20Industries!5e0!3m2!1sen!2sin!4v1668770176670!5m2!1sen!2sin" allowfullscreen referrerpolicy="no-referrer-when-downgrade" ></iframe>
            </div>
            <div class="yellow d-flex justify-content-center ">
            <p class='m-0 pb-0 font-weight-bold'>
                ©  Copyright: A3pixels.com
            </p>
            </div>
        </div>
  
    )
}