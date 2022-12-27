import React from 'react';
import './footer.css';
import { MDBIcon } from 'mdb-react-ui-kit';
import { MDBContainer } from 'mdb-react-ui-kit';
import { MDBCol } from 'mdb-react-ui-kit';
import { MDBFooter } from 'mdb-react-ui-kit';


export default function Footer() {
    return (
        <div class="row footer">
  <div class="col-12 col-md-5">
    <div class="maplogo p-5 pb-0">
      <img src="/img/logos/footer_logo.png" class="img-fluid" />
    </div>
    <p class="font-weight-bold">
      <i class="fas fa-envelope pt-5 pl-5 text-secondary"></i>
      sales@a3pixels.com
    </p>
  </div>
  <div class="col-12 col-md-7 mapsize">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7543.7569700805925!2d72.82680943608283!3d19.025075496608988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf565ca045e1%3A0x7fb713676527a2f8!2sHind%20Service%20Industries!5e0!3m2!1sen!2sin!4v1668770176670!5m2!1sen!2sin"
      class="w-100" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <div class="yellow d-flex justify-content-center">
    <p class="m-0 p-2 font-weight-bold">
      © Copyright: A3pixels.com
    </p>
  </div>
</div>

        // <MDBFooter className='text-center text-lg-start text-muted m-0'  >



        //     <section className='footer'>
        //         <MDBContainer className='text-center text-md-start mt-5 m-0'>

        //             <MDBCol md='3' lg='4' xl='3' className='mx-auto float-left '>
        //                 <h6 className='text-uppercase fw-bold '>

        //                     <h3><img src="img/logos/footer_logo.png" /></h3><br></br>
        //                 </h6>

        //                 <h6 className='text-uppercase fw-bold mb-2'>Contact</h6>

        //                 <p>
        //                     <MDBIcon color='secondary' icon='envelope' />
        //                     sales@a3pixels.com
        //                 </p>

        //             </MDBCol>
        //             <MDBContainer class='map'>

        //             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7543.7569700805925!2d72.82680943608283!3d19.025075496608988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf565ca045e1%3A0x7fb713676527a2f8!2sHind%20Service%20Industries!5e0!3m2!1sen!2sin!4v1668770176670!5m2!1sen!2sin" allowfullscreen referrerpolicy="no-referrer-when-downgrade" ></iframe>
        //             </MDBContainer>
        //         </MDBContainer >



        //     </section>
        //     <MDBContainer className='text-center copy-right '>
        //         <p className=' '>
        //             © 2021 Copyright: A3pixels.com
        //         </p>
        //     </MDBContainer>

        // </MDBFooter>

    )
}