import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function UpdateProductModal({ show, handleClose, product, updateProduct }) {
    const [updatedProduct, setUpdatedProduct] = useState({ ...product });

    useEffect(() => {
        setUpdatedProduct({ ...product });
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedProduct({ ...updatedProduct, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProduct(updatedProduct);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} className='rtl'>
            <Modal.Header >
                <Modal.Title>بروز رسانی محصول</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <img src={updatedProduct.img} className='w-50 me-4' alt="" />
                    </div>
                    <div className="form-group mb-3">
                        <label className='mb-2'>نام محصول</label>
                        <input type="text" className="form-control" name="name" value={updatedProduct.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group mb-3">
                        <label className='mb-2'>آدرس عکس</label>
                        <input type="text" className="form-control" name="img" value={updatedProduct.img} onChange={handleChange} required />
                    </div>
                    <div className="form-group mb-3">
                        <label>قیمت</label>
                        <input type="number" className="form-control" name="price" value={updatedProduct.price} onChange={handleChange} required />
                    </div>
                    <div className="form-group mb-3">
                        <label className='mb-2'>دسته بندی</label>
                        <input type="text" className="form-control" name="category" value={updatedProduct.category} onChange={handleChange} required />
                    </div>
                    <div className="form-group mb-3">
                        <label>تعداد موجودی</label>
                        <input type="number" className="form-control" name="stock" value={updatedProduct.stock} onChange={handleChange} required />
                    </div>
                    <Button type="submit" variant="primary">
                        تایید
                    </Button>
                </form>
            </Modal.Body>
        </Modal>
    );
}

export default UpdateProductModal;
