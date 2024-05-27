import React from 'react';
import { Link } from 'react-router-dom'; // برای استفاده از Link
import Ratting from "../compones/Ratting";

function ProductCard({ Gridelist, products }) { // products را به عنوان ورودی دریافت می‌کنیم
  return (
    <div className={`shop-product-wrap row justify-content-center ${Gridelist ? "grid" : "list"}`}>
      {
        products.map((product, i) => (
          <div className={`col-lg-${Gridelist ? "3" : "12"} col-md-6 col-12`} key={i}>
            <div className={`product-item ${Gridelist ? "" : "d-flex align-items-center"}`}>
              <div className={`product-thumb ${Gridelist ? "" : "w-25"}`}>
                <div className="pro-thumb">
                  <Link to={`/shop/${product.id}`}>
                    <img src={product.img} alt={product.img} className={Gridelist ? "" : "w-100"} />
                  </Link>
                </div>
                <div className={`product-action-link ${Gridelist ? "" : "d-flex flex-column"}`}>
                  <Link to={`/shop/${product.id}`}><i className='icofont-eye'></i></Link>
                  <a href="#"><i className='icofont-heart'></i></a>
                  <Link to={`/shop/${product.id}`}><i className='icofont-cart'></i></Link>
                </div>
              </div>
              <div className={`product-content ${Gridelist ? "text-center" : "w-75 p-3"}`} style={{ textAlign: Gridelist ? "center" : "left" }}>
                <h6 className='my-2' style={{ fontSize: "0.8rem" }}>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </h6>
                <p className='text-warning'>
                  <Ratting />
                </p>
                <h6>{product.price} تومان </h6>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default ProductCard;
