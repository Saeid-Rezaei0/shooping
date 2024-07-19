import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Sidebar from './compones/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductCommentAdmin() {
    const [comments, setComments] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [modalAction, setModalAction] = useState(() => () => { });

    useEffect(() => {
        fetch(`http://localhost:3000/productdata`)
            .then(response => response.json())
            .then(data => {
                const commentsWithProductInfo = data.flatMap(product =>
                    product.comments ? product.comments.map(comment => ({
                        ...comment,
                        productId: product.id,
                        productName: product.name,
                        category: product.category,
                        seller: product.seller,
                        price: product.price,
                        stock: product.stock,
                        ratings: product.ratings,
                        img: product.img
                    })) : []
                );
                setComments(commentsWithProductInfo);
            })
            .catch(error => {
                console.error("خطا در دریافت نظرات!", error);
            });
    }, []);

    const handleShowModal = (message, action) => {
        setModalContent(message);
        setModalAction(() => action);
        setShowModal(true);
    };
// پذیرش کامنت
    const approveComment = (productId, commentEmail) => {
        fetch(`http://localhost:3000/productdata/${productId}`)
            .then(response => response.json())
            .then(product => {
                const updatedComments = product.comments.map(comment =>
                    comment.email === commentEmail ? { ...comment, approved: true } : comment
                );

                fetch(`http://localhost:3000/productdata/${productId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ ...product, comments: updatedComments })
                })
                    .then(response => response.json())
                    .then(updatedProduct => {
                        setComments(comments.map(comment =>
                            comment.email === commentEmail ? { ...comment, approved: true } : comment
                        ));
                    })
                    .catch(error => {
                        console.error("خطا در تأیید نظر!", error);
                    });
            })
            .catch(error => {
                console.error("خطا در دریافت اطلاعات محصول!", error);
            });
    };
// رد کامنت
    const rejectComment = (productId, commentEmail) => {
        fetch(`http://localhost:3000/productdata/${productId}`)
            .then(response => response.json())
            .then(product => {
                const updatedComments = product.comments.filter(comment => comment.email !== commentEmail);

                fetch(`http://localhost:3000/productdata/${productId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ ...product, comments: updatedComments })
                })
                    .then(response => response.json())
                    .then(updatedProduct => {
                        setComments(comments.filter(comment => comment.email !== commentEmail));
                    })
                    .catch(error => {
                        console.error("خطا در رد نظر!", error);
                    });
            })
            .catch(error => {
                console.error("خطا در دریافت اطلاعات محصول!", error);
            });
    };

    const showMessageModal = (message) => {
        setModalContent(message);
        setShowModal(true);
    };
    const deleteComment = (productId, commentEmail) => {
        fetch(`http://localhost:3000/productdata/${productId}`)
            .then(response => response.json())
            .then(product => {
                const updatedComments = product.comments.filter(comment => comment.email !== commentEmail);

                fetch(`http://localhost:3000/productdata/${productId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ ...product, comments: updatedComments })
                })
                    .then(response => response.json())
                    .then(updatedProduct => {
                        setComments(comments.filter(comment => comment.email !== commentEmail));
                    })
                    .catch(error => {
                        console.error("خطا در حذف نظر!", error);
                    });
            })
            .catch(error => {
                console.error("خطا در دریافت اطلاعات محصول!", error);
            });
    };

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-10'>
                        <div>
                            <h5 className='rtl my-4'>تأیید نظرات توسط مدیر</h5>
                            <table className="table table-striped table-hover">
                                <thead className='rtl'>
                                    <tr>
                                        <th>نام محصول</th>
                                        <th>دسته‌بندی</th>
                                        <th>قیمت</th>
                                        {/* <th>موجودی</th> */}
                                        <th>امتیاز</th>
                                        <th>نام کاربری</th>
                                        <th>ایمیل</th>
                                        <th>پیام</th>
                                        <th>تأیید</th>
                                        <th>عملیات</th>
                                    </tr>
                                </thead>
                                <tbody className='rtl'>
                                    {comments.map((comment, index) => (
                                        <tr key={index}>
                                            <td>{comment.productName}</td>
                                            <td>{comment.category}</td>
                                            <td>{comment.price}</td>
                                            {/* <td>{comment.stock}</td> */}
                                            <td>{comment.ratings}</td>
                                            <td>{comment.username}</td>
                                            <td>{comment.email}</td>
                                            <td>
                                                <button className="btn btn-info btn-sm" onClick={() => showMessageModal(comment.message)}>نمایش پیام</button>
                                            </td>
                                            <td>{comment.approved ? 'بله' : 'خیر'}</td>
                                            <td>
                                                {!comment.approved && (
                                                    <div className='d-flex g-3 justify-content-between'>
                                                        <button className="btn btn-success btn-sm me-1" onClick={() => handleShowModal('آیا مطمئن هستید که می‌خواهید این نظر را تأیید کنید؟', () => approveComment(comment.productId, comment.email))}>تأیید</button>
                                                        <button className="btn btn-danger btn-sm" onClick={() => handleShowModal('آیا مطمئن هستید که می‌خواهید این نظر را رد کنید؟', () => rejectComment(comment.productId, comment.email))}>رد</button>
                                                        <button className="btn btn-danger btn-sm" onClick={() => handleShowModal('آیا مطمئن هستید که می‌خواهید این نظر را حذف کنید؟', () => deleteComment(comment.productId, comment.email))}>حذف</button>

                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                    <Modal show={showModal} onHide={() => setShowModal(false)} className='rtl'>
                                        <Modal.Header >
                                            <Modal.Title>نمایش پیام</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>{modalContent}</Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={() => setShowModal(false)}>
                                                بستن
                                            </Button>
                                            {modalAction !== null && (
                                                <Button variant="primary" onClick={() => {
                                                    modalAction();
                                                    setShowModal(false);
                                                }}>
                                                    تأیید
                                                </Button>
                                            )}
                                        </Modal.Footer>
                                    </Modal>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='col-2'>
                        <Sidebar />
                    </div>
                </div>
            </div>


        </>
    );
}

export default ProductCommentAdmin;
