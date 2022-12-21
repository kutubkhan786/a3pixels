import React from 'react';
import './footer.css';
import { MDBIcon } from 'mdb-react-ui-kit';
import { MDBContainer } from 'mdb-react-ui-kit';
import { MDBRow } from 'mdb-react-ui-kit';
import { MDBCol } from 'mdb-react-ui-kit';
import { MDBFooter } from 'mdb-react-ui-kit';


export default function Footer() {
    return ( 
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>



            <section className='footer'>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md='3' lg='4' xl='3' className='mx-auto '>
                            <h6 className='text-uppercase fw-bold '>

                                <h3><img src="/img/logo.png" /></h3>
                            </h6>
                            <p claaa="kk">
                                The company provides web and e-Learning solutions , and company based in Mumbai, India, we constantly strive towards creating exciting and innovative e-Learning products. What differentiates us from competition is our ability to handle.
                            </p>
                        </MDBCol>

                        <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    E-Learning & Development
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    TRANSLATION & LOCALIZATION
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    WEBSITE & MULTIMEDIA DEVELOPEMENT
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    PRINT & IDENTITY
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Our services
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Portfolio
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Call to Action
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Our latest work
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon color='secondary' icon='home' className='me-2' />
                                location
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='envelope' className='me-2' />
                                sales@a3pixels.com
                            </p>
                            
                                                  
                        
                        </MDBCol>
                        <p>
                                <MDBIcon color='secondary' icon='envelope' className='me-2 d-flex align-items-center' />
                                © 2021 Copyright: A3pixels.com
                            </p>
                    </MDBRow>
                </MDBContainer>
            </section>

            
        </MDBFooter>
    )
}