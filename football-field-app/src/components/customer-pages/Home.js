import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

export default function Home() {
    return (
        <>
            <div
                className='p-5 text-center bg-image'
                style={{ backgroundImage: "url('https://i.pinimg.com/564x/2d/db/1b/2ddb1bae4638537aad1071ce45e926e3.jpg')", height: '500px' }}
            >
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h1 className='mb-3'> Just do it! </h1>
                            <h4 className='mb-3'>Football is made of sweat, tears and sometimes blood.</h4>
                        </div>
                    </div>
                </div>
            </div>
            <Container className='context-home' fluid>
                <Row>
                    <Col className="mt-4">
                        <h2><b>Tại sao lại cần Football Field </b></h2>
                        <p className='subtitle'>NỀN TẢNG ĐẶT SÂN - TÌM ĐỐI ĐẦU TIÊN TẠI VIỆT NAM</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center' md={{ span: 4 }}>
                        <i class="fa-sharp fa-solid fa-location-dot fa-3x"></i>
                        <h4>Tìm kiếm và đặt sân bóng online</h4>
                        <p className='text-muted'> Thông tin sân gần vị trí của bạn nhất, đặt sân online, tiện lợi, dễ dàng </p>
                    </Col>

                    <Col className='text-center' md={{ span: 4 }}>
                        <i class="fa-solid fa-calendar-days fa-3x"></i>
                        <h4>Công cụ quản lý sân bóng online</h4>
                        <p className='text-muted'>Quản lý lịch đặt đơn giản, tiếp nhận đặt sân online dễ dàng, lấp đầy sân trống</p>
                    </Col>

                    <Col className='text-center' md={{ span: 4 }}>
                        <i class="fa-solid fa-bolt fa-3x"></i>
                        <h4>Tạo đội nhanh chóng và uy tín</h4>
                        <p className='text-muted'>Mọi yêu cầu được xử lý nhanh, gọn trong vòng 1 nốt nhạc </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}