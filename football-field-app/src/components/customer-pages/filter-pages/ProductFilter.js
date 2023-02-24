import { useState } from 'react';
import { Form, FormGroup, Label } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import ProductDetail from '../detail-pages/\bProductDetail';

//Chưa xử lý xong navegate nút detail 

function ProductFilter(props) {
    //xử lý filter 

    // const [filters, setFilters] = useState({
    //     price: '',
    //     brand: '',
    //     popularity: '',
    // });

    // // function to handle filter change
    // const handleFilterChange = (event) => {
    //     const { name, value } = event.target;
    //     setFilters((prevState) => ({ ...prevState, [name]: value }));
    // };

    // // filter products based on current filters
    // const filteredProducts = props.products.filter((product) => {
    //     return (
    //         (filters.price === '' || product.price <= filters.price) &&
    //         (filters.brand === '' || product.brand === filters.brand) &&
    //         (filters.popularity === '' ||
    //             product.popularity >= parseInt(filters.popularity))
    //     );
    // });


    // xử lý detail
    const { product } = props;
    const [showDetail, setShowDetail] = useState(false);

    const handleShowDetail = () => {
        setShowDetail(true);
    };


    return (
        <>
            <Container>
                <Row>
                    <Col md={{ span: 4, offset: 2 }}>
                        <Breadcrumb className='mt-5'>
                            <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
                            <Breadcrumb.Item active>Sân bóng đá</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>

                <Row>
                    {/* Side Panels  */}
                    <Col xs={3}>
                        <Form>
                            <Form.Group controlId="price">
                                <Form.Label className='mt-4'><h3>ĐÁNH GIÁ</h3></Form.Label>
                                <Form.Check className='mb-2'
                                    type="checkbox"
                                    name="group1"
                                    label="1"
                                // value={filters.price}
                                // onChange={handleFilterChange}
                                />
                                <Form.Check className='mb-2'
                                    type="checkbox"
                                    name="group2"
                                    label="2"
                                // value={filters.price}
                                // onChange={handleFilterChange}
                                />
                                <Form.Check className='mb-2'
                                    type="checkbox"
                                    name="group3"
                                    label="3"
                                // value={filters.price}
                                // onChange={handleFilterChange}
                                />
                                <Form.Check className='mb-2'
                                    type="checkbox"
                                    name="group4"
                                    label="4"
                                // value={filters.price}
                                // onChange={handleFilterChange}
                                />
                                <Form.Check className='mb-2'
                                    type="checkbox"
                                    name="group5"
                                    label="5"
                                // value={filters.price}
                                // onChange={handleFilterChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="brand">
                                <Form.Label className='mt-5'><h3>LOẠI SÂN</h3></Form.Label>
                                <Form.Check className='mb-2'
                                    type="checkbox"
                                    name="field5"
                                    label="Sân 5 người"
                                // value={filters.price}
                                // onChange={handleFilterChange}
                                />
                                <Form.Check className='mb-2'
                                    type="checkbox"
                                    name="field7"
                                    label="Sân 7 người"
                                // value={filters.price}
                                // onChange={handleFilterChange}
                                />
                                <Form.Check className='mb-2'
                                    type="checkbox"
                                    name="field11"
                                    label="Sân 11 người"
                                // value={filters.price}
                                // onChange={handleFilterChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="brand">
                                <Form.Label className='mt-5'><h3>ĐỊA CHỈ</h3></Form.Label>
                                <Form.Check className='mb-2'
                                    type="checkbox"
                                    name="quan1"
                                    label="Quận 1"
                                // value={filters.price}
                                // onChange={handleFilterChange}
                                />
                                <Form.Check className='mb-2'
                                    type="checkbox"
                                    name="quan2"
                                    label="Quận 2"
                                // value={filters.price}
                                // onChange={handleFilterChange}
                                />
                                <Form.Check className='mb-2'
                                    type="checkbox"
                                    name="quan3"
                                    label="Quận 3"
                                // value={filters.price}
                                // onChange={handleFilterChange}
                                />
                                <Form.Check className='mb-2'
                                    type="checkbox"
                                    name="quan4"
                                    label="Quận 4"
                                // value={filters.price}
                                // onChange={handleFilterChange}
                                />
                                <Form.Check className='mb-2'
                                    type="checkbox"
                                    name="quan5"
                                    label="Quận 5"
                                // value={filters.price}
                                // onChange={handleFilterChange}
                                />
                            </Form.Group>

                        </Form>
                    </Col>

                    <Col xs={9}> <h3 className='mt-4'>SÂN BÓNG ĐÁ</h3>
                        {/* <ul>
                            {filteredProducts.map((product) => (
                                 <li key={product.id}> 
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="left" src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt2d829a63f9a62ee1/63de1999bfea9014cbfc480d/Cristiano_Ronaldo_Al-Nassr.jpg?width=1920&height=1080" />
                                        <Card.Body>
                                            <Card.Title>{product.name}</Card.Title>
                                            <Card.Text>
                                                {product.start}
                                            </Card.Text>
                                            <Card.Text>
                                                {product.address}
                                            </Card.Text>
                                            <Card.Text>
                                                {product.price}
                                            </Card.Text>
                                            <Button variant="primary">Chi tiết</Button> <Button variant="primary">Đặt sân</Button>
                                        </Card.Body>
                                    </Card>
                                </li>
                            ))}
                        </ul> */}
                        <Row>
                            <Col xs={4}>
                                <Card style={{ width: '20rem' }}>
                                    <Card.Img variant="left" src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt2d829a63f9a62ee1/63de1999bfea9014cbfc480d/Cristiano_Ronaldo_Al-Nassr.jpg?width=1920&height=1080" />
                                    <Card.Body>
                                        <Card.Title></Card.Title>
                                        <Card.Text>
                                            NAME
                                        </Card.Text>
                                        <Card.Text>
                                            ADDRESS
                                        </Card.Text>
                                        <Card.Text>
                                            PRICE
                                        </Card.Text>
                                        <Button variant="primary">Chi tiết</Button> <Button variant="primary">Đặt sân</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col xs={4}>
                                <Card style={{ width: '20rem' }}>
                                    <Card.Img variant="left" src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt2d829a63f9a62ee1/63de1999bfea9014cbfc480d/Cristiano_Ronaldo_Al-Nassr.jpg?width=1920&height=1080" />
                                    <Card.Body>
                                        <Card.Title></Card.Title>
                                        <Card.Text>
                                            NAME
                                        </Card.Text>
                                        <Card.Text>
                                            ADDRESS
                                        </Card.Text>
                                        <Card.Text>
                                            PRICE
                                        </Card.Text>
                                        <Button variant="primary">Chi tiết</Button> <Button variant="primary">Đặt sân</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col xs={4}>
                                <Card style={{ width: '20rem' }}>
                                    <Card.Img variant="left" src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt2d829a63f9a62ee1/63de1999bfea9014cbfc480d/Cristiano_Ronaldo_Al-Nassr.jpg?width=1920&height=1080" />
                                    <Card.Body>
                                        <Card.Title></Card.Title>
                                        <Card.Text>
                                            NAME
                                        </Card.Text>
                                        <Card.Text>
                                            ADDRESS
                                        </Card.Text>
                                        <Card.Text>
                                            PRICE
                                        </Card.Text> 
                                                        {/* LOADING NAVEGATE */}
                                        <Button onClick={handleShowDetail} variant="primary">Chi tiết</Button> {showDetail && <ProductDetail product={product} />}
                                         <Button variant="primary">Đặt sân</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>

                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default ProductFilter;
