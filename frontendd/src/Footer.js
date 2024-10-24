import React from 'react';
import { MDBFooter, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter  className='text-center text-lg-start text-muted' style={{backgroundColor:"#edd5cf",border:"1px solid lightgrey", margin:"20px"}}>
    <center>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
        <br ></br>
          
        </div>
      </section>

      <section className=''>
        <div className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
               
                Company name
              </h6>
              <p>
              A website for your coffee shop increases your visibility, provides a
              platform to establish yourself as a coffee expert, and lets you launch
              experience-enhancing tools like a takeout system, push notifications,
              and loyalty programs. But your main goal is to transform every site
              visitor into a customer.

              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  About_Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Coffee_Collection
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Contact_Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Upload_Coffees
                </a>
              </p>
              
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Prem Plaza,Bhawarkua,Indore
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </div>
      </section>

      <div className='text-center p-4' >
      
        <a className='text-reset fw-bold' href='http://localhost:5000/'>
        </a>
      </div>
      </center>
    </MDBFooter>
  );
}