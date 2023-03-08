import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, FormGroup, Label } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge';

export const products = [
    { id: 1, start: '1 sao', address: 'Quận 1', price: "100.000" },
    { id: 2, start: '2 sao', address: 'Quận 2', price: "200.000" },
    { id: 3, start: '3 sao', address: 'Quận 3', price: "300.000" },
    { id: 4, start: '4 sao', address: 'Quận 4', price: "400.000" },
    { id: 5, start: '5 sao', address: 'Quận 5', price: "500.000" },
    { id: 6, start: '6 sao', address: 'Quận 6', price: "600.000" },
];

function ProductFilter(props) {
    const navigate = useNavigate();

    //xử lý filter 
    const [filters, setFilters] = useState({
        price: '',
        start: '',
        address: '',
    });

    // function to handle filter change
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

    // const navigate = useNavigate();
    // const handleShowDetail = () => {
    //     console.log("ok")
    //     setShowDetail(false);
    //     navigate(`/detail/${product.id}`)
    // };

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilters((prevState) => ({ ...prevState, [name]: value }));
        console.log(name)
    };

    // filter products based on current filters
    const filteredProducts = products.filter((product) => {
        return (
            (filters.price === '' || product.price <= filters.price) &&
            (filters.start === '' || product.start === filters.start) &&
            (filters.address === '' ||
                product.address >= parseInt(filters.address))
        );
    });

    return (
        <>
            <Container className='hei-con'>
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
                                    value={filters.price}
                                    onChange={handleFilterChange}
                                />
                                <Form.Check className='mb-2'
                                    type="checkbox"
                                    name="group2"
                                    label="2"
                                    value={filters.price}
                                    onChange={handleFilterChange}
                                />
                                <Form.Check className='mb-2'
                                    type="checkbox"
                                    name="group3"
                                    label="3"
                                    value={filters.price}
                                    onChange={handleFilterChange}
                                />
                                <Form.Check className='mb-2'
                                    type="checkbox"
                                    name="group4"
                                    label="4"
                                    value={filters.price}
                                    onChange={handleFilterChange}
                                />
                                <Form.Check className='mb-2'
                                    type="checkbox"
                                    name="group5"
                                    label="5"
                                    value={filters.price}
                                    onChange={handleFilterChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="brand">
                                <Form.Label className='mt-5'><h3>LOẠI SÂN</h3></Form.Label>
                                <Form.Check className='mb-2'
                                    type="checkbox"
                                    name="field5"
                                    label="Sân 5 người"
                                    value={filters.price}
                                    onChange={handleFilterChange}
                                />
                                <Form.Check className='mb-2'
                                    type="checkbox"
                                    name="field7"
                                    label="Sân 7 người"
                                    value={filters.price}
                                    onChange={handleFilterChange}
                                />
                                <Form.Check className='mb-2'
                                    type="checkbox"
                                    name="field11"
                                    label="Sân 11 người"
                                    value={filters.price}
                                    onChange={handleFilterChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="brand">
                                <Form.Label className='mt-5'><h3>ĐỊA CHỈ</h3></Form.Label>
                                <Form.Check className='mb-2'
                                    type="checkbox"
                                    name="quan1"
                                    label="Quận 1"
                                    value={filters.price}
                                    onChange={handleFilterChange}
                                />
                                <Form.Check className='mb-2'
                                    type="checkbox"
                                    name="quan2"
                                    label="Quận 2"
                                    value={filters.price}
                                    onChange={handleFilterChange}
                                />
                                <Form.Check className='mb-2'
                                    type="checkbox"
                                    name="quan3"
                                    label="Quận 3"
                                    value={filters.price}
                                    onChange={handleFilterChange}
                                />
                                <Form.Check className='mb-2'
                                    type="checkbox"
                                    name="quan4"
                                    label="Quận 4"
                                    value={filters.price}
                                    onChange={handleFilterChange}
                                />
                                <Form.Check className='mb-2'
                                    type="checkbox"
                                    name="quan5"
                                    label="Quận 5"
                                    value={filters.price}
                                    onChange={handleFilterChange}
                                />
                            </Form.Group>

                        </Form>
                    </Col>

                    <Col xs={9}> <h3 className='mt-4'>SÂN BÓNG ĐÁ</h3>
                        <ul>
                            {products.map((product) => (
                                <li key={product.id}>
                                    <Card className='mb-5' style={{ width: '30rem' }}>
                                        <Card.Img variant="top" src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt2d829a63f9a62ee1/63de1999bfea9014cbfc480d/Cristiano_Ronaldo_Al-Nassr.jpg?width=1920&height=1080" />
                                        <Card.Body>
                                            <Card.Title>Sân bóng {product.name}</Card.Title>
                                            <Card.Text>
                                                {product.start}
                                            </Card.Text>
                                            <Card.Text>
                                                <b>Địa chỉ:&ensp;</b>{product.address}
                                            </Card.Text>
                                            <Card.Text>
                                                <b>Giá tham khảo:&ensp;</b>      
                                                <Badge pill bg="danger">
                                                {product.price}
                                                </Badge>{' '}
                                                
                                            </Card.Text>
                                            <Button onClick={() => navigate(`/detail/${product.id}`)} variant="primary">Chi tiết</Button>
                                        </Card.Body>
                                    </Card>
                                </li>
                            ))}
                        </ul>
                        {/* <Row>
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
                                      
                                        <Button onClick={handleShowDetail} variant="primary">Chi tiết</Button> {showDetail && <ProductDetail product={product} />}
                                        <Button variant="primary">Đặt sân</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row> */}

                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default ProductFilter;
