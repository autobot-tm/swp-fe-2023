import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';

function FormRegister() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Submitted:', name, password, confirmPassword);
  };

  return (
    <div className='bg-login hei-con'>
      <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
        <div className='mask gradient-custom-3'></div>
        <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
          <MDBCardBody className='px-5'>
            <h2 className="text-uppercase text-center mb-5">Create an account</h2>
            <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' />
            <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' />
            <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' />
            <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password' />
            <div className='d-flex flex-row justify-content-center mb-4'>
              <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
            </div>
            <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>

      {/* <Container fluid id="bg-login">
      <Row className="justify-content-md-center login-form">
        <Col xs={12} sm={8} md={6}>
        <h1 id="header-title">Register</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label><b>Name</b></Form.Label>
              <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label><b>Password</b></Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword">
              <Form.Label><b>Confirm Password</b></Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </Form.Group>

            <Button className="btn-login" variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container> */}
    </div>
  );
}

export default FormRegister;
