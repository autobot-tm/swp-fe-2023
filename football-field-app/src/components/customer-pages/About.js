import React from 'react';
import { Container, Row, Col, Image, Breadcrumb } from 'react-bootstrap';
import field from '../../assets/images/field.jpeg'

function About() {
  return (
    <>
      <Container className='hei-con' fluid>
        <Row>
          <Col md={{ span: 4, offset: 2 }}>
            <Breadcrumb className='mt-5'>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>About</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col className='mt-5' md={{ span: 8, offset: 2 }}>
            <h3><b>Giới thiệu về chúng tôi</b></h3>
            <p>Chúng tôi là một đội ngũ chuyên cung cấp dịch vụ đặt sân bóng đá chất lượng cao. Với hệ thống sân bóng đá hiện đại và đội ngũ nhân viên chuyên nghiệp, chúng tôi cam kết mang lại cho quý khách hàng những trận bóng đá thú vị và đầy hứng khởi.</p>
            <p>Hãy đến với chúng tôi để trải nghiệm những trận bóng đá tuyệt vời nhất!</p>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 2 }}>
            <Image src={field} rounded fluid />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
