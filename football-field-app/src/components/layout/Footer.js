import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon
} from 'mdb-react-ui-kit';


export default function Footer() {
  return (
    <div className='wrapper'>
      <div className='footer'>
        <MDBFooter bgColor='light' className='text-lg-left'>
          <MDBContainer className='p-4'>
            <MDBRow>
              <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase fw-bold mb-4'>Football Field</h5>

                <p className='text-black-50'>
                  Football Fied is a place to relieve pressure after stressful working hours and a place to have
                  fun with friends. We are honored to welcome you.
                </p>
              </MDBCol>

              <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                <h5 className='text-uppercase fw-bold mb-4'>Contact</h5>
                <p>
                  <MDBIcon color='secondary' icon='home' className='me-2' />
                  Binh Thanh Distric, Viet Nam
                </p>
                <p>
                  <MDBIcon color='secondary' icon='envelope' className='me-3' />
                  info@example.com
                </p>
                <p>
                  <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
                </p>
                <p>
                  <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
                </p>
              </MDBCol>
              <MDBCol>
                <img
                  src="../assets/images/logo.jpg"
                  class="img-fluid shadow-2-strong"
                  width="200"
                  height="200"
                  alt="logo"
                />
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            &copy; {new Date().getFullYear()} Copyright:{' '}
            <a className='text-dark' href='#home'>
              Football Field
            </a>
          </div>
        </MDBFooter>
      </div>
    </div>
  );
}