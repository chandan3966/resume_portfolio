import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with me on social networks:</span>
        </div>

        <div>
          <a href="https://www.facebook.com/marri.saichandan.10" target="_blank" className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="https://twitter.com/Mar31713Sai" target="_blank" className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="https://www.instagram.com/chand3966ms/" target="_blank" className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="https://www.linkedin.com/in/m-s-chandan-92a102185/" target="_blank" className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="https://github.com/chandan3966" target="_blank" className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                MSChandan Portfolio
              </h6>
              <p>
                Portfolio of myself which shows my education, experience and projects.
              </p>
            </MDBCol> 
 

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-3" />
                18 Crystal Strt, Worcester, MA, 01603, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                saichandan.marri.ofus@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 1 (774) 243-4965
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mschandan.com/'>
          MSChandan.com
        </a>
      </div>
    </MDBFooter>
  );
}