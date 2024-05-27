import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApiContext from '../ContexApi';
import swal from 'sweetalert';

const CheckOutPage = ({ formData }) => {
    const context = useContext(ApiContext);
    const { country, city, postalCode, phoneNumber } = formData ?? {};
    if (!postalCode || !phoneNumber) {
        return (
            <div className="container-fluid rtl mt-5" style={{ width: "100%" }}>
                <h5 className="mb-4 text-danger">برای پرداخت اطلاعات ادرس را پر کنید</h5>
            </div>
        )
    }

    const { order, setOrder } = context;
    const [show, setShow] = useState(false);
    const [active, setActive] = useState("visa");
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [pendingOrder, setPendingOrder] = useState([]);

    const handleTapChange = (tabID) => {
        setActive(tabID);
    };

    const handleShow = () => setShow(true);
    const onSubmit = (data) => {
        const cartitem = localStorage.getItem("cart");
        const parsedCartItem = cartitem ? JSON.parse(cartitem) : [];
        const requestData = {
            formData: {
                country: country,
                city: city,
                postalCode: postalCode,
                phoneNumber: phoneNumber
            },
            paymentData: data,
            items: parsedCartItem
        };

        fetch("http://localhost:3000/order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        })
            .then(res => res.json())
            .then(responseData => {
                localStorage.removeItem("cart");
                swal("سفارش با موفقیت انجام شد");
                setOrder(prevOrder => [...prevOrder, requestData]);
            })
            .catch(error => {
                console.error('Error:', error);
            });

        handleClose();
    };

    const handleClose = () => {
        setShow(false);
    };
    return (
        <div className='modalCard'>
            <Button variant='primary' className='py-2 shadow' style={{ backgroundColor: "#B1C9EF", color: "#000" }} onClick={handleShow}>پرداخت نهایی</Button>
            <Modal
                show={show}
                onHide={handleClose}
                animation={false}
                centered
                className='rtl'
            >
                <Modal.Header closeButton>
                    <Modal.Title>به یکی از روش های زیر انتخاب کنید</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='modal-content'>
                        <div className="modal-body">
                            {/* Tab selection */}
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <Button variant='link' className={`nav-link ${active === "visa" ? "active" : ""}`}
                                        onClick={() => handleTapChange("visa")}>
                                        <img width="80" src="https://repository-images.githubusercontent.com/410418462/1f0e17c2-0624-4d78-afd8-7c44a2195af9" alt="Visa" />
                                    </Button>
                                </li>
                                <li className="nav-item">
                                    <Button variant='link' className={`nav-link ${active === "mastercard" ? "active" : ""}`} onClick={() => handleTapChange("mastercard")}>
                                        <img width="150" src="https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/pp_fc_hl.svg" alt="PayPal" />
                                    </Button>
                                </li>
                            </ul>

                            {/* Tab content */}
                            <div className="tab-content">
                                {active === "visa" && (
                                    <div className="tab-pane active">
                                        {/* Visa payment form content */}
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="card mt-3">
                                                <div className="card-body" style={{ textAlign: "right" }}>
                                                    <h5 className="card-title mb-4">اطلاعات کارت اعتباری</h5>
                                                    <div className="form">
                                                        <div className="mb-3 border-bottom">
                                                            <label htmlFor="name" className="form-label">نام دارنده کارت</label>
                                                            <input
                                                                type="text"
                                                                className='form-control'
                                                                id='name'
                                                                style={{ textAlign: "right" }}
                                                                placeholder='نام خود را وارد کنید'
                                                                {...register("name", { required: true })}
                                                            />
                                                            {errors.name && <span className="text-danger">این فیلد اجباری است</span>}
                                                        </div>
                                                        <div className="mb-3 border-bottom">
                                                            <label htmlFor="number" className="form-label">شماره کارت</label>
                                                            <div className="input-group">
                                                                <input
                                                                    type="text"
                                                                    className='form-control border-right'
                                                                    id='number'
                                                                    style={{ textAlign: "right" }}
                                                                    placeholder='شماره کارت را وارد کنید'
                                                                    {...register("number", { required: true, minLength: 16, maxLength: 16 })}
                                                                />
                                                                <span className="input-group-text border-left"><i className="icofont-eye"></i></span>
                                                            </div>
                                                            {errors.number && <span className="text-danger">شماره کارت معتبر نیست</span>}
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6 mb-3 border-bottom">
                                                                <label htmlFor="expiry" className="form-label">تاریخ انقضا</label>
                                                                <input
                                                                    type="text"
                                                                    className='form-control'
                                                                    id='expiry'
                                                                    placeholder='MM/YY'
                                                                    {...register("expiry", { required: true })}
                                                                />
                                                                {errors.expiry && <span className="text-danger">این فیلد اجباری است</span>}
                                                            </div>
                                                            <div className="col-md-6 mb-3 border-bottom">
                                                                <label htmlFor="cvv" className="form-label">CVV</label>
                                                                <input
                                                                    type="text"
                                                                    className='form-control'
                                                                    id='cvv'
                                                                    placeholder='CVV'
                                                                    {...register("cvv", { required: true, minLength: 3, maxLength: 4 })}
                                                                />
                                                                {errors.cvv && <span className="text-danger">این فیلد اجباری است</span>}
                                                            </div>
                                                        </div>
                                                        <button type="submit" className="btn btn-primary w-100">ارسال</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                )}
                                {active === "mastercard" && (
                                    <div className="tab-pane active" style={{ textAlign: "right" }}>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="card my-3">
                                                <div className="card-body">
                                                    <h5 className="card-title mb-4">اطلاعات حساب PayPal</h5>
                                                    <div className="form">
                                                        <div className="mb-3">
                                                            <label htmlFor="email" className="form-label">آدرس ایمیل PayPal</label>
                                                            <input
                                                                type="email"
                                                                style={{ textAlign: "right" }}
                                                                className='form-control'
                                                                id='email'
                                                                placeholder='آدرس ایمیل PayPal را وارد کنید'
                                                                {...register("email", { required: true })}
                                                            />
                                                            {errors.email && <span className="text-danger">این فیلد اجباری است</span>}
                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor="password" className="form-label">رمز عبور</label>
                                                            <input
                                                                type="password"
                                                                style={{ textAlign: "right" }}
                                                                className='form-control'
                                                                id='password'
                                                                placeholder='رمز عبور خود را وارد کنید'
                                                                {...register("password", { required: true })}
                                                            />
                                                            {errors.password && <span className="text-danger">این فیلد اجباری است</span>}
                                                        </div>
                                                        <button type="submit" className="btn btn-primary w-100">ورود به حساب PayPal</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        بسته
                    </Button>
                    <Button variant="primary" onClick={handleSubmit(onSubmit, formData)}>
                        پرداخت
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CheckOutPage;
