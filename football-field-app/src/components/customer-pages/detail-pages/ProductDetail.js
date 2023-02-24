import React from 'react';
import { Container, Row, Figure } from 'react-bootstrap'

const ProductDetail = (props) => {
  const { product } = props;

  return (
    <Container fuild>
      <Row>
        <Figure>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src={product.img}
          />
          <Figure.Caption>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
          </Figure.Caption>
        </Figure>
      </Row>
    </Container>
  );
};

export default ProductDetail;
