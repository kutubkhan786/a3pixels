import React from 'react';
import './footer.css';
import { MDBIcon } from 'mdb-react-ui-kit';
import { MDBContainer } from 'mdb-react-ui-kit';
import { MDBRow } from 'mdb-react-ui-kit';
import { MDBCol } from 'mdb-react-ui-kit';
import { MDBFooter } from 'mdb-react-ui-kit';


export default function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted m-0'  >



            <section className='footer'>
                <MDBContainer className='text-center text-md-start mt-5 m-0'>

                    <MDBCol md='3' lg='4' xl='3' className='mx-auto float-left '>
                        <h6 className='text-uppercase fw-bold '>

                            <h3><img src="img/logos/footer_logo.png" /></h3><br></br>
                        </h6>







                        <h6 className='text-uppercase fw-bold mb-2'>Contact</h6>

                        <p>
                            <MDBIcon color='secondary' icon='envelope' />
                            sales@a3pixels.com
                        </p>




                    </MDBCol>
                    <MDBContainer className='text-center map'>

                        <p >
                            map can be placed here
                        </p>
                    </MDBContainer>
                </MDBContainer >



            </section>
            <MDBContainer className='text-center copy-right '>

                <p className=' '>
                    © 2021 Copyright: A3pixels.com
                </p>
            </MDBContainer>

        </MDBFooter>

    )
}