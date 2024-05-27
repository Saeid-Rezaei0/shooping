import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import Ratting from '../compones/Ratting';
import { Link } from 'react-router-dom';

const ProductData = [
    {
        imgUrl: 'src/assets/images/category/d67b023561301e7a0acfce90e2c8698ca69c4b04_1697906572.webp',
        cate: 'کفش',
        title: 'نایک پرمیر ایکس',
        author: 'assets/images/course/author/01.jpg',
        brand: 'نایک',
        price: 'تومان 18000,00',
        id: 1,
    },
    {
        imgUrl: 'src/assets/images/category/bag58.webp',
        cate: 'کیف',
        title: 'کیف‌های زیبایی',
        author: 'assets/images/course/author/02.jpg',
        brand: 'D&J Bags',
        price: 'تومان $199.00',
        id: 2,
    },
    {
        imgUrl: 'src/assets/images/category/iphone.webp',
        cate: 'تلفن‌ها',
        title: 'آیفون 14پرو',
        author: 'src/assets/images/categoryTab/brand/apple.png',
        brand: 'اپل',
        price: 'تومان 9800.000',
        id: "8d734e8b-2d0f-40b8-9c24-89d1419cc789",
    },
    {
        imgUrl: 'src/assets/images/category/bf69310960e3102df02c2efdb732a255dbd4e0ad_1683485566.webp',
        cate: 'کیف',
        title: 'کوله‌پشتی مسافرتی Nh100',
        author: 'assets/images/course/author/04.jpg',
        brand: 'گوچی',
        price: 'تومان 4520,000',
        id: 4,
    },
    {
        imgUrl: 'src/assets/images/category/cfe12ab39e0fd803024fe5d3eaa48c3e3c22900d_1697298048.webp',
        cate: 'کفش',
        title: 'کفش‌های ورزشی خارجی',
        author: 'assets/images/course/author/05.jpg',
        brand: 'نایک',
        price: 'تومان 9800,000',
        id: "4bf9798f-63bc-4a83-b0c6-6a3b816fe922",
    },
    {
        imgUrl: 'src/assets/images/category/f6da782795558aaa91ef3e1644adef697d08e6be_1630245420.webp',
        cate: 'زیبایی',
        title: 'موکیتین حلزونی COSRX',
        author: 'assets/images/course/author/06.jpg',
        brand: 'زارا',
        price: 'تومان 1500,000',
        id: 6,
    },
    {
        imgUrl: 'src/assets/images/category/a8234e915f4f6ed119daac830e39eca031d62c2d_1705751969.webp',
        cate: 'تلفن‌ها',
        title: 'سامسونگ s24',
        author: 'assets/images/course/author/01.jpg',
        brand: 'سامسونگ',
        price: 'توما 5900,000',
        id: "450839bc-57f3-449a-acde-46e8d66cb6d4",
    },
    {
        imgUrl: 'src/assets/images/category/2dd92ae522e36a60a6894ca438019bf55013eed1_1701172252.webp',
        cate: 'کیف',
        title: 'زیبایی',
        author: 'assets/images/course/author/02.jpg',
        brand: 'باتا',
        price: 'تومان 4500,000',
        id: 8,
    },
];

export default function ProductSlider() {
    const swiperRef = useRef(null);

    const handlePrevClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNextClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    return (
        <>
            <div style={{ backgroundColor: "#f6f6f6" }} className='py-5 row-cols-sm-container'>
                <div className="d-flex justify-content-between align-items-center">
                    <div className='custom-slider-btn'>
                        <i className="icofont-curved-left fw-bold" onClick={handlePrevClick}></i>
                        <i className="icofont-rounded-right" onClick={handleNextClick}></i>
                    </div>
                    <h4 className='rtl mb-3 pb-4 title-slider-custom pe-5 me-5'>پرفروش ترین محصولات</h4>
                </div>
                <Swiper
                    onSwiper={(swiper) => { swiperRef.current = swiper; }}
                    slidesPerView={2}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                        400: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Autoplay]}
                    className="mySwiper mySwiper-custom container "
                >
                    <div className="section-wrapper">
                        <div className="row g-5 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter">
                            {
                                ProductData.map((product) => (
                                    <SwiperSlide key={product.id}>
                                        <div className="course-item style-4  ">
                                            <div className="course-inner hoverSlider   my-2 mt-2 rtl" style={{ backgroundColor: "#f6f6f6" }}>
                                                <div className="course-thumb ">
                                                    <img src={`${product.imgUrl}`} alt={`${product.imgUrl}`} />
                                                    <div className='course-category bg-light d-flex justify-content-between p-2 pe-3'>
                                                        <div className="course-cate">
                                                            <a href="#">{product.cate}</a>
                                                        </div>
                                                        <div className="course-reiew" style={{ color: "#000" }}>
                                                            <Ratting />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="course-content pt-3">
                                                    <Link to={`/shop/${product.id}`}><p className='pe-3' style={{ fontSize: "1rem" }}>{product.title}</p></Link>
                                                    <div className="course-footer d-flex border-top-1 justify-content-between align-items-center pe-4">
                                                        <div className='course-author'>
                                                            <Link to={`/shop/${product.id}`} className='ca-name' style={{ fontSize: "1rem" }}>{product.brand}</Link>
                                                        </div>
                                                        <div className="course-price pt-2 px-4 text-dark" style={{ fontSize: "0.9rem", marginTop: "-0.5rem" }}>
                                                            {product.price}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </div>
                    </div>
                </Swiper>
            </div>
        </>
    );
}
