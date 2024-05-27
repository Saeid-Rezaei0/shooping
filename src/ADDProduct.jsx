import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid'; // استفاده از uuidv4 برای ایجاد ایدی منحصر به فرد

function ADDProduct({ show, handleClose, addProduct }) {
    const [productData, setProductData] = useState({
        id: uuidv4(), // ایجاد ایدی منحصر به فرد
        category: '',
        name: '',
        seller: '',
        price: '',
        stock: '',
        ratings: 4,
        ratingsCount: '',
        img: '',
        shipping: 27,
        quantity: 1
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(productData);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} className='rtl'>
            <Modal.Header >
                <Modal.Title>افزودن محصول</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formCategory">
                        <Form.Label>دسته بندی</Form.Label>
                        <Form.Control type="text" placeholder="دسته بندی را وارد کنید" name="category" value={productData.category} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="formName">
                        <Form.Label>نام محصول</Form.Label>
                        <Form.Control type="text" placeholder="نام محصول را وارد کنید" name="name" value={productData.name} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="formImage">
                        <Form.Label>آدرس عکس</Form.Label>
                        <Form.Control type="text" placeholder="آدرس عکس را وارد کنید" name="img" value={productData.img} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="formSeller">
                        <Form.Label>فروشنده</Form.Label>
                        <Form.Control type="text" placeholder="فروشنده را وارد کنید" name="seller" value={productData.seller} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="formPrice">
                        <Form.Label>قیمت</Form.Label>
                        <Form.Control type="number" placeholder="قیمت را وارد کنید" name="price" value={productData.price} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="formStock">
                        <Form.Label>موجودی</Form.Label>
                        <Form.Control type="number" placeholder="موجودی را وارد کنید" name="stock" value={productData.stock} onChange={handleChange} required />
                    </Form.Group>
                    {/* Add other form fields for the remaining product data */}
                    <Button variant="primary" type="submit" className='my-2'>
                        افزودن
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    بستن
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ADDProduct;
