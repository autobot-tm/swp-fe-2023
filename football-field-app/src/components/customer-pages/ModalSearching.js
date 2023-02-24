import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function ModalSearching() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //xử lý sang trang search 
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/contact');
    }

    return (
        <>
            <Button variant="warning" onClick={handleShow}>
                Search
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>FIND YOUR STADIUM</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <fieldset>
                            <Form.Group aria-label="Default select example" className='mb-3'>
                                <Form.Select>
                                    <option>Chọn loại sân</option>
                                    <option value={1}>Sân 5</option>
                                    <option value={2}>Sân 7</option>
                                    <option value={3}>Sân 11</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group aria-label="Default select example" className="mb-3">
                                <Form.Select>
                                    <option>Chọn quận huyện</option>
                                    <option value={1}>Quận 1</option>
                                    <option value={2}>Quận 2</option>
                                    <option value={3}>Quận 3</option>
                                    <option value={4}>Quận 4</option>
                                    <option value={5}>Quận 5</option>
                                </Form.Select>
                            </Form.Group>
                            <Button type="submit" onSubmit={handleSubmit} onClick={handleClose}>Submit</Button>
                        </fieldset>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

