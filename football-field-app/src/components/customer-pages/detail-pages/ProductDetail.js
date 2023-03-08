import React, { useState, useEffect } from 'react';
import { Container, Row, Button } from 'react-bootstrap'
import { useParams } from "react-router-dom";
import { products } from '../filter-pages/ProductFilter';


export default function ProductDetail() {
  const productID = useParams();
  const product = products.find(obj => obj.id === parseInt(productID.id));
  return (
    <div id="detail" className='hei-con'>
      <Container>
        <Row className='header-detail-title'>
          <h1>
            <span><i class="fa-regular fa-futbol"></i></span>
            &ensp;a little detail..
          </h1>
        </Row>
        <div id="main-wrapper">
          <div className='section-wrapper'>
            <div className="card">
              <div className="wrap-image">
                <img
                  src="https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg"
                  alt=""
                  width={450}
                />
              </div>
              <div className="description">
                <h3>{product.start}</h3>
                <div></div>
                <p>{product.address}</p>
                <h4>A little more about {product.name}</h4>
                <ul>
                  <li><strong>Address: </strong>{product.address}</li>
                  <li><strong>Slot: </strong>{product.price}</li>
                  <li><strong>Phone: </strong>{product.price}</li>
                  <li><strong>Price: </strong>{product.price}</li>
                  <br></br>
                  <li><Button variant="danger">Đặt ngay</Button></li>
                </ul>
                {/* <small>Information Extracted from <a href={ product.sourceURL } target="_blank">{ product.sourceName }</a></small> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
