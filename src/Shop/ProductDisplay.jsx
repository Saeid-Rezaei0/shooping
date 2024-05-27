import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ProductDisplay({ item }) {
    const { name, id, price, seller, ratingsCount, quantity, img } = item;
    const [prequantity, setQuantity] = useState(quantity);
    const [coupon, setCoupon] = useState("");
    const [size, setSize] = useState("انتخاب سایز");
    const [color, setColor] = useState("انتخاب رنگ");
    const des = "توضیحات محصول";

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    const handleDecrease = () => {
        if (prequantity > 1) {
            setQuantity(prequantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(prequantity + 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {
            id,
            img,
            name,
            price,
            quantity: prequantity,
            size,
            color,
            coupon
        };
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProductIndex = existingCart.findIndex((item) => item.id === id);

        if (existingProductIndex !== -1) {
            existingCart[existingProductIndex].quantity += prequantity;
        } else {
            existingCart.push(product);
        }

        localStorage.setItem("cart", JSON.stringify(existingCart));
        swal({
            title: "محصول به سبد خرید اضافه شد",
            icon: "success"
        });
       

        setQuantity(1);
        setColor("انتخاب رنگ");
        setSize("انتخاب سایز");
        setCoupon("");
    };

    return (
        <>
            <ToastContainer />
            <div className='rtl'>
                <h4>{name}</h4>
                <p className='rating'>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <span className='my-3'>{ratingsCount} نقد</span>
                </p>
                <h4 className='my-3'>{Number(price).toLocaleString()} هزارتومان </h4>
                <h6>{seller}</h6>
                <p style={{ textAlign: "justify" }}>{des}</p>
            </div>
            <div>
                <form action="" onSubmit={handleSubmit}>
                    <div className="select-product size">
                        <select value={size} onChange={handleSizeChange}>
                            <option>انتخاب سایز</option>
                            <option value="SM">SM</option>
                            <option value="MD">MD</option>
                            <option value="LG">LG</option>
                            <option value="XL">XL</option>
                        </select>
                        <i className='icofont-rounded-down'></i>
                    </div>
                    
                    <div className="select-product size">
                        <select value={color} onChange={handleColorChange}>
                            <option>انتخاب رنگ</option>
                            <option value="صورتی">صورتی</option>
                            <option value="خاکستری">خاکستری</option>
                            <option value="قرمز">قرمز</option>
                            <option value="آبی">آبی</option>
                            <option value="سفید">سفید</option>
                        </select>
                        <i className='icofont-rounded-down'></i>
                    </div>
                    
                    <div className="cart-plus-minus">
                        <div className='dec qtybutton' onClick={handleDecrease}>-</div>
                        <input className='cart-plus-minus-box' type="text" value={prequantity} onChange={(e) => setQuantity(parseInt(e.target.value))} id='prequantity' name='prequantity' />
                        <div className='inc qtybutton' onClick={handleIncrease}>+</div>
                    </div>

                    <div className="discount-code mb-2 rtl">
                        <input type="text" placeholder='کد تخفیف را وارد کنید.' onChange={(e) => setCoupon(e.target.value)} />
                    </div>

                    <button className='lab-btn ' type="submit">
                        <span style={{fontSize: "0.8rem"}}>افزودن به سبد خرید</span>
                    </button>
                    <Link to="/card-page" className='lab-btn bg-primary'>
                        <span style={{fontSize: "0.8rem"}}>مشاهده سبد خرید</span>
                    </Link>
                </form>
            </div>
        </>
    );
}

export default ProductDisplay;
