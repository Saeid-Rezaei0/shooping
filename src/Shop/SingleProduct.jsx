import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import PageHeader from '../compones/PageHeader';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
import ProductDisplay from "./ProductDisplay";
import Rewio from "./Rewio";
import PopularPost from "./PopularPost";
import Tags from "./Tags";
import Map from "./Map";
import LayOUT from "../LayOUT";

export default function SingleProduct() {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch("http://localhost:3000/productdata")
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            });
    }, []);

    const result = product.filter((p) => p.id === id);
    const singleProduct = result.length > 0 ? result[0] : null;

    return (
        <LayOUT>
            <PageHeader title={"صفحه محصول"} curPage={"فروشگاه / محصولات"} />
            <div className="shop-single padding-tb aside-bg">
                <div className='container'>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="product-details">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 col-12 rtl">
                                            <div className="product-thumb">
                                                <div className="swiper-container pro-single-top">
                                                    <Swiper className="mySwiper"
                                                        spaceBetween={30}
                                                        slidesPerView={1}
                                                        loop={true}
                                                        autoplay={{
                                                            delay: 2000,
                                                            disableOnInteraction: false
                                                        }}
                                                        modules={[Autoplay]}
                                                        navigation={{
                                                            prevEl: ".pro-single-prev",
                                                            nextEl: ".pro-single-next",
                                                        }}
                                                    >
                                                        {result.map((item, i) => (
                                                            <SwiperSlide key={i}>
                                                                <div className="single-thumb">
                                                                    <img src={item.img} alt={item.img} />
                                                                </div>
                                                            </SwiperSlide>
                                                        ))}
                                                    </Swiper>
                                                    <div className="pro-single-next">
                                                        <i className="icofont-rounded-left"></i>
                                                    </div>
                                                    <div className="pro-single-prev">
                                                        <i className="icofont-rounded-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="post-content">
                                                {singleProduct && <ProductDisplay key={singleProduct.id} item={singleProduct} />}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="review">
                                    <Rewio />
                                </div>
                            </article>
                        </div>

                        <div className="col-lg-4 col-12">
                            <aside className="ps-lg-4">
                                <PopularPost />
                                <Tags />
                                <Map />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </LayOUT>
    );
}
