import React, { useEffect, useState } from 'react'
import PageHeader from '../compones/PageHeader';
import { Link } from 'react-router-dom';
import delTmgUrl from "../assets/images/shop/del.png"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckOutPage from './CheckOutPage';
import ProductSlider from '../home/SliderProduct';
import LayOUT from '../LayOUT';
import swal from 'sweetalert';
import { icon } from 'leaflet';
function CartPage() {
    const [cartitem, setcartitem] = useState([]);
    const [formData, setFormData] = useState([
        { country: 'ایران', city: 'تهران', postalCode: '', phoneNumber: '' }
    ]);

    useEffect(() => {
        const storageCartItem = JSON.parse(localStorage.getItem("cart")) || [];
        setcartitem(storageCartItem);
    }, []);

    const calculateitem = (item) => {
        return item.price * item.quantity;
    }

    const handlerIncrese = (item) => {
        const updatedCart = cartitem.map(cartItem => {
            if (cartItem.id === item.id) {
                return { ...cartItem, quantity: cartItem.quantity + 1 };
            }
            return cartItem;
        });
        setcartitem(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    const handlerdecres = (item) => {
        const updatedCart = cartitem.map(cartItem => {
            if (cartItem.id === item.id && cartItem.quantity > 1) {
                return { ...cartItem, quantity: cartItem.quantity - 1 };
            }
            return cartItem;
        });
        setcartitem(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    const handlerRemove = (item) => {
        swal({
            title: "محصول با موفقیت حذف شد",
            icon: "success"
        })
    
        const updateproductCart = cartitem.filter(cartItem => cartItem.id !== item.id);
        setcartitem(updateproductCart);
        localStorage.setItem("cart", JSON.stringify(updateproductCart));
    }

    const cartSubmite = cartitem.reduce((total, item) => {
        return total + calculateitem(item);
    }, 0);

    const handleSubmit = (event) => {
        event.preventDefault();
        swal({
            text: "ادرس تایید شد به بخش پرداخت بروید",
            icon: "success" // اضافه کردن آیکون
          });
                  
        console.log(formData); // نمایش دادن داده‌های فرم در کنسول
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <LayOUT>
            <ToastContainer />
            <PageHeader title={"فروشگاه سبد خرید"} curPage={"سبد خرید"} />

            <div className="shop-cart padding-tb">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="cart-top rtl">
                            <table>
                                <thead>
                                    <tr style={{ backgroundColor: "#B1C9EF", color: "#000" }}>
                                        <th className='cat-product text-dark'>محصول</th>
                                        <th className='cat-price text-dark'>قیمت</th>
                                        <th className='cat-quantity text-dark'>تعداد</th>
                                        <th className='cat-toprice text-dark'>جمع</th>
                                        <th className='cat-edit text-dark'>ویرایش</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartitem.length > 0 ? cartitem.map((item, index) => (
                                            <tr key={index}>
                                                <td className='product-item cat-product'>
                                                    <div className="p-thumb ">
                                                        <Link to={`/shop/${item.id}`}>
                                                            <img src={item.img} alt={item.name} />
                                                        </Link>
                                                    </div>
                                                    <div className="p-content pe-4">
                                                        <Link to={`/shop/${item.id}`}>{item.name}</Link>
                                                    </div>
                                                </td>
                                                <td className="cat-price">{Number(item.price).toLocaleString()}</td>
                                                <td className='cat-quantity'>
                                                    <div className="cart-plus-minus">
                                                        <div className="dec qtybutton" onClick={() => handlerdecres(item)}>-</div>
                                                        <input type="text" className='cart-plus-minus-box' name='Quantity' value={item.quantity} readOnly />
                                                        <div className="inc qtybutton" onClick={() => handlerIncrese(item)}>+</div>
                                                    </div>
                                                </td>
                                                <td className='cat-toprice'>{Number(calculateitem(item)).toLocaleString()}</td>
                                                <td className='cat-edit'>
                                                    <li style={{ listStyle: "none", cursor: "pointer" }} onClick={() => handlerRemove(item)}>
                                                        <img src={delTmgUrl} alt="Delete" />
                                                    </li>
                                                </td>
                                            </tr>
                                        )) : <h3 className='text-center position-relative pb-4 pt-5 ' style={{ position: "relative", left: "0%", }}>☹سبد خالی است</h3>
                                    }
                                </tbody>
                            </table>
                        </div>

                        {/* سرآغاز بخش سبد خرید */}

                        {/* پایان بخش کارت */}

                        <div className="container mt-5 rtl" >
                            <div className="row">
                                <div className="col-12">
                                    <div className="cart-checkout-box bg-light p-3 rounded shadow-sm">
                                        <form className='coupon mb-3 d-flex'>
                                            <input type="text" className='form-control me-2' id='coupon' placeholder='کد تخفیف ... ' />
                                            <button type="submit" className='btn btn-primary' style={{ fontSize: "0.8rem" }}>اعمال تخفیف</button>
                                        </form>
                                        <form className='cart-checkout d-flex justify-content-between align-items-center'>
                                            <button type="submit" className='btn btn-secondary'>به‌روزرسانی سبد خرید</button>

                                        </form>
                                    </div>
                                </div>

                                <div className="col-md-6 col-12 mt-4 ">
                                    <form onSubmit={handleSubmit}>
                                        <div className="calculate-shiping bg-light p-3 rounded shadow-sm shadow">
                                            <h5>محاسبه هزینه ارسال</h5>
                                            <div className="mb-3">
                                                <label htmlFor="country" className="form-label">کشور</label>
                                                <select className="form-select" name="country" id="country" onChange={handleChange}>
                                                    <option value="ir">ایران (ir)</option>
                                                    <option value="us">امریکا (us)</option>
                                                    <option value="km">کانادا (km)</option>
                                                    <option value="hd">هند (hd)</option>
                                                </select>
                                            </div>
                                            <div className="mb-3 ">
                                                <label htmlFor="city" className="form-label">شهر</label>
                                                <select className="form-select" name="city" id="city" onChange={handleChange}>
                                                    <option value="تهران">تهران</option>
                                                    <option value="لرستان">لرستان</option>
                                                    <option value="اراک">اراک</option>
                                                    <option value="اصفهان">اصفهان</option>
                                                    <option value="مشهد">مشهد</option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="postalcode" className="form-label">کد پستی</label>
                                                <input type="text" className='form-control' name="postalCode" id='postalcode' placeholder='کد پستی' onChange={handleChange} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="phoneNumber" className="form-label">شماره تلفن</label>
                                                <input type="text" className='form-control' name="phoneNumber" id='phoneNumber' placeholder='شماره تلفن' onChange={handleChange} />
                                            </div>
                                            <button type='submit' className='btn btn-primary'>تایید ادرس</button>
                                        </div>
                                    </form>
                                </div>

                                <div className="col-md-6 col-12 mt-4">
                                    <div className="cart-overview bg-light p-3 rounded shadow-sm">
                                        <h5>مجموع سبد خرید</h5>
                                        <ul className='list-group'>
                                            <li className='list-group-item d-flex justify-content-between align-items-center'>
                                                <span>مجموع</span>
                                                <span className='text-success fw-bold'>{Number(cartSubmite).toLocaleString()}  هزار تومان</span>
                                            </li>
                                            <li className='my-3 list-group-item d-flex justify-content-between align-items-center'>
                                                <span>هزینه ارسال</span>
                                                <span className='text-success fw-bold'>رایگان</span>
                                            </li>
                                            <li className='list-group-item d-flex justify-content-between align-items-center'>
                                                <span>مجموع سفارش</span>
                                                <span className='text-success fw-bold'>{Number(cartSubmite.toFixed(2)).toLocaleString()}  هزار تومان</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="my-4 me-2 " >
                                        <CheckOutPage formData={formData} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <ProductSlider />
        </LayOUT>
    )
}

export default CartPage;
