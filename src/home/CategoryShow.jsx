import React, { useState } from 'react'
import Ratting from '../compones/Ratting';
import { Link } from 'react-router-dom';

const title = "محصولات ما";

const ProductData = [
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
        imgUrl: 'src/assets/images/category/a8234e915f4f6ed119daac830e39eca031d62c2d_1705751969.webp',
        cate: 'تلفن‌ها',
        title: 'سامسونگ s24',
        author: 'assets/images/course/author/01.jpg',
        brand: 'سامسونگ',
        price: 'تومان 59000,000',
        id: "450839bc-57f3-449a-acde-46e8d66cb6d4",
    },
    {
        imgUrl: 'src/assets/images/category/iphone.webp',
        cate: 'تلفن‌ها',
        title: 'آیفون 14پرو',
        author: 'src/assets/images/categoryTab/brand/apple.png',
        brand: 'اپل',
        price: 'تومان 9800.000',
        id: "8f487ff1-da7c-489f-8a6a-331832344211",
    },
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
        id: 5,
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
        imgUrl: 'src/assets/images/category/2dd92ae522e36a60a6894ca438019bf55013eed1_1701172252.webp',
        cate: 'کیف',
        title: 'زیبایی',
        author: 'assets/images/course/author/02.jpg',
        brand: 'باتا',
        price: 'تومان 4500,000',
        id: 8,
    },
];

function CategoryShow() {
    const [item, setfilteritem] = useState(ProductData)


    const filterItem = (categoryItem) => {
        const updateItem  = ProductData.filter((curElem)=>{
            return curElem.cate === categoryItem;
        }) 
        setfilteritem(updateItem)
    }
    return (
        <div className='course-section style-3 padding-tb'>
            <div className='course-shape one'><img src="/src/assets/images/shape-img/icon/01.png" alt="" /></div>
            <div className='course-shape two'><img src="/src/assets/images/shape-img/icon/02.png" alt="" /></div>
            {/* main section */}
            <div className="container ">
                {/* section header */}
                <div className="section-header">
                    <h3 className='title pt-2' style={{fontSize: "1.2rem"}}>{title}</h3>
                    <div className='course-filter-group'>
                    <ul className='lab-ul'>
                            <li onClick={() => setfilteritem(ProductData)}>همه</li>
                            <li onClick={() => filterItem("کفش")}>کفش</li>
                            <li onClick={() => filterItem("کیف")}>کیف</li>
                            <li onClick={() => filterItem("تلفن‌ها")}>تلفن</li>
                            <li onClick={() => filterItem("زیبایی")}>زیبایی</li>
                        </ul>
                    </div>
                </div>

                {/* section body */}
                <div className="section-wrapper ">
                    <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1
                    course-filter">
                        {
                            item.map((product) => (
                                <div className="col rtl" key={product.id}>
                                    <div className="course-item style-4">
                                        <div className="course-inner">
                                            <div className="course-thumb ">
                                                <img src={`${product.imgUrl}`} alt={`${product.imgUrl}`} />
                                                <div className='course-category bg-light' >
                                                    <div className="course-cate">
                                                        <Link to={`/shop/${product.id}`}>{product.cate}</Link>
                                                    </div>
                                                    <div className="course-reiew" style={{color: "#000"}}>
                                                        <Ratting />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* content */}
                                            <div className="course-content">
                                                <Link to={`/shop/${product.id}`}><p className='' style={{fontSize: "1rem"}}>{product.title}</p></Link>
                                                <div className="course-footer">
                                                    <div className='course-author'>
                                                        <Link to="/" className='ca-name my-1' style={{fontSize: "1rem"}}>{product.brand}</Link>
                                                    </div>
                                                    <div className="course-price text-dark" style={{fontSize: "0.9rem"}}>
                                                        {product.price}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryShow