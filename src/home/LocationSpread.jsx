import React from 'react';
import { Link } from 'react-router-dom';

const title = "بیش از ۶۰٬۰۰۰ مشتری";

const desc = "محصولات را با اپلیکیشن ما روی هر دستگاهی بخرید و از زمانتان لذت ببرید. فقط دانلود و نصب کنید و شروع به خرید کنید.";
const clientsList = [
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'تصویر کاربر rajibraj91 rajibraj',
        text: 'با ما ملحق شوید',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'تصویر کاربر rajibraj91 rajibraj',
        text: 'با ما ملحق شوید',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'تصویر کاربر rajibraj91 rajibraj',
        text: 'با ما ملحق شوید',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'تصویر کاربر rajibraj91 rajibraj',
        text: 'با ما ملحق شوید',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'تصویر کاربر rajibraj91 rajibraj',
        text: 'با ما ملحق شوید',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'تصویر کاربر rajibraj91 rajibraj',
        text: 'از خرم‌آباد',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'تصویر کاربر rajibraj91 rajibraj',
        text: 'از ایران',
    },
];

const sponsorList = [
    {
        imgUrl: "/src/assets/images/sponsor/01.png",
    },
    {
        imgUrl: "/src/assets/images/sponsor/02.png",
    },
    {
        imgUrl: "/src/assets/images/sponsor/03.png",
    },
    {
        imgUrl: "/src/assets/images/sponsor/04.png",
    },
    {
        imgUrl: "/src/assets/images/sponsor/05.png",
    },
    {
        imgUrl: "/src/assets/images/sponsor/06.png",
    },
];

function LocationSpread() {
    return (
        <div className='clients-section style-2 padding-tb'>
            <div className="container">
                <div className="section-header text-danger text-center">
                    <h3 className='title mb-4'>{title}</h3>
                    <p className='hight-2'>{desc}</p>
                </div>

                {/* {main-content} */}

                <div className="section-wrapper">
                    <div className="clients">
                        {clientsList.map((val, i)=> (
                            <div key={i} className='client-list'>
                                <Link to="/sign-up" className='client-content'>
                                    <span>{val.text}</span>
                                </Link>
                                <div className="clients-thumb">
                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`}/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LocationSpread;
