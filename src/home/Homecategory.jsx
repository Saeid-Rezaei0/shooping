import React from 'react'
import { Link } from 'react-router-dom';

const subTitle = "";
const title = "همه چیز را با ما تجربه کنید";
const btnText = "همین حالا شروع کنید";


const categoryList = [
    {
        imgUrl: 'src/assets/images/category/4b96abaabf7cc208764cde11fb8a147f5e16994f_1703056695.webp',
        imgAlt: 'دسته بندی rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'گوشی سامسونگ',
    },
    {
        imgUrl: 'src/assets/images/category/fb8bfe0440182ed2bd4de5ae59fbad53a725fed0_1632391444.webp',
        imgAlt: 'دسته بندی rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'ساعت',
    },
    {
        imgUrl: 'src/assets/images/category/00653f795b7a5776a4eba5b9602339113bb2d6ed_1712660364.webp',
        imgAlt: 'دسته بندی rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'تیشرت',
    },
    {
        imgUrl: 'src/assets/images/category/d19b54c3d99fcaa9f035f29007146398fd470241_1697297342.webp',
        imgAlt: 'دسته بندی rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'لباس رسمی',
    },
    {
        imgUrl: 'src/assets/images/category/1ed975c6d938df2745c1843198e57fe5dfd6c009_1701866526.webp',
        imgAlt: 'دسته بندی rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'لپ تاپ',
    },
    {
        imgUrl: 'src/assets/images/category/f6da782795558aaa91ef3e1644adef697d08e6be_1630245420.webp',
        imgAlt: 'دسته بندی rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'لوازم ارایشی',
    },
    {
        imgUrl: 'src/assets/images/category/a8234e915f4f6ed119daac830e39eca031d62c2d_1705751969.webp',
        imgAlt: 'دسته بندی rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'گوشی S24',
    },
    {
        imgUrl: 'src/assets/images/category/2356050.webp',
        imgAlt: 'دسته بندی rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'تبلت',
    },
 
];

function Homecategory() {
    return (
        <div className='category-section style-4 padding-tb'>
            <div className="container">
                {/* section-header */}
                <div className="section-header text-center">
                    <span className='subtitle text-primary'>{subTitle}</span>
                    <h2 className='title' style={{fontSize:"1.7rem"}}>{title}</h2>
                </div>

                {/* section-card */}

                <div className="section-wrapper">
                    <div className='row  justify-content-center g-2 row-cols-md-4 row-cols-sm-2 row-cols-2'>
                        {
                            categoryList.map((val, i) => (
                                <div className="col" key={i}>
                                    <Link to="/shop" className='category-item'>
                                        <div className='category-inner'>
                                            <div className="category-thumb">
                                                {/* {img-thumb} */}
                                                <img src={val.imgUrl} alt={val.imgUrl}  />
                                            </div>

                                            {/* content */}
                                            <div className="category-content">
                                                <div className="cate-icon">
                                                    <i className={`${val.iconName}`}></i>
                                                </div>
                                                <Link to="/shop"><h6>{val.title}</h6></Link>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="text-center mt-3">
                        <Link to="/shop" className='lab-btn '><span>{btnText}</span></Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Homecategory