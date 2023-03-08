import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';



function ErrorPage() {
  return (
    <div className='hei-con'>
      <Container>
        <Row>
          <Col className='mt-5 hei-con' md={{ span: 8, offset: 2 }}>
            <h1><b>404 - Không tìm thấy trang</b></h1>
            <p>Xin lỗi, trang bạn đang tìm kiếm không tồn tại. Vui lòng kiểm tra lại đường dẫn hoặc quay lại trang chủ.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ErrorPage;
