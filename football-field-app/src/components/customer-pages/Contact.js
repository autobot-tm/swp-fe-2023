import React from 'react';
import { Container, Row, Col, Form, Button, Image, Breadcrumb } from 'react-bootstrap';
import address from '../../assets/images/address.png'

function Contact() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={{ span: 4, offset: 2 }}>
            <Breadcrumb className='mt-5'>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Contact</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col className='mt-5' md={{ span: 4, offset: 2 }}>
            <h3><b>Liên hệ với chúng tôi</b></h3>
            <p>Nếu bạn muốn đặt sân hoặc có bất kỳ câu hỏi nào, vui lòng điền vào biểu mẫu bên dưới để liên hệ với chúng tôi:</p>
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label>Họ và tên</Form.Label>
                <Form.Control type="text" placeholder="Nhập họ và tên" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Địa chỉ email</Form.Label>
                <Form.Control type="email" placeholder="Nhập địa chỉ email" />
              </Form.Group>
              <Form.Group controlId="formBasicMessage">
                <Form.Label>Nội dung tin nhắn</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Nhập nội dung tin nhắn" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Gửi
              </Button>
            </Form>
          </Col>
          <Col className='mt-5' md={{ span: 4, offset: 1 }}>
            <h3><b>Địa chỉ</b></h3>
            <Image src={address} rounded fluid />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
