import React from 'react'
import { Link } from 'react-router-dom';

const title = "درباره ShopCart";
const desc = "قالب Eduaid، یکی از برترین دانشگاه‌های جهان. دانشجویان همیشه در این دانشگاه تحصیل می‌کنند و برای همیشه در این دانشگاه تحصیل می‌کنند.";
const ItemTitle = "دسته‌بندی‌ها";
const quickTitle = "لینک‌های سریع";
const tweetTitle = "توییت‌های اخیر";

const addressList = [
    {
        iconName: 'icofont-google-map',
        text: 'ایران تهران',
    },
    {
        iconName: 'icofont-phone',
        text: '+989388449181',
    },
    {
        iconName: 'icofont-envelope',
        text: 'ُSaeid@gimail.com',
    },
]

const socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
        className: 'facebook',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
        className: 'linkedin',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
        className: 'instagram',
    },
    {
        iconName: 'icofont-pinterest',
        siteLink: '#',
        className: 'pinterest',
    },
]

const ItemList = [
    {
        text: 'همه محصولات',
        link: '/shop',
    },
    {
        text: 'فروشگاه',
        link: '/shop',
    },
    {
        text: 'بلاگ',
        link: '/blog',
    },
    {
        text: 'درباره ما',
        link: '/about',
    },
    {
        text: 'سیاست',
        link: '#',
    },
    {
        text: 'سوالات متداول',
        link: '/about',
    }
]

const quickList = [
    {
        text: 'جلسات تابستانی',
        link: '#',
    },
    {
        text: 'رویدادها',
        link: '#',
    },
    {
        text: 'گالری',
        link: '#',
    },
    {
        text: 'انجمن‌ها',
        link: '#',
    },
    {
        text: 'سیاست حفظ حریم خصوصی',
        link: '#',
    },
    {
        text: 'شرایط استفاده',
        link: '#',
    },
]

const tweetList = [
    {
        iconName: 'icofont-twitter',
        desc: <p>امینور اسلام <a href="#">@ShopCart سلام! #قالب_HTML</a> محصول خود را بردارید، ۵۰٪ تخفیف عظیم !!</p>,
    },
    {
        iconName: 'icofont-twitter',
        desc: <p>سمرات اسلام <a href="#">@ShopCart سلام! #قالب_HTML</a> محصول خود را بردارید، ۵۰٪ تخفیف عظیم !!</p>,
    },
]

const footerbottomList = [
    {
        text: 'استادان',
        link: '#',
    },
    {
        text: 'کارمندان',
        link: '#',
    },
    {
        text: 'دانشجویان',
        link: '#',
    },
    {
        text: ' ',
        link: '#',
    },
]

const postList = [
    {
        id: 1,
        imgUrl: '/src/assets/images/blog/10.jpg',
        imgAlt: 'rajibraj91',
        title: 'کمپین مردمی فقیر منابع ما',
        date: '۰۵ ژوئن ۲۰۲۲',
    },
    {
        id: 2,
        imgUrl: '/src/assets/images/blog/11.jpg',
        imgAlt: 'rajibraj91',
        title: 'کمپین مردمی فقیر منابع ما',
        date: '۰۵ ژوئن ۲۰۲۲',
    },
    {
        id: 3,
        imgUrl: '/src/assets/images/blog/12.jpg',
        imgAlt: 'rajibraj91',
        title: 'کمپین مردمی فقیر منابع ما',
        date: '۰۵ ژوئن ۲۰۲۲',
    },
    {
        id: 4,
        imgUrl: '/src/assets/images/blog/09.jpg',
        imgAlt: 'rajibraj91',
        title: 'کمپین مردمی فقیر منابع ما',
        date: '۰۵ ژوئن ۲۰۲۲',
    },
]
function Footer() {
    return <footer className="style-2 mt-5 rtl">
        <div className="footer-top dark-view padding-tb">
            <div className="container">
                <div className="row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 justify-content-center ">
                    <div className="col">
                        <div className="footer-item our-address">
                            <div className="footer-inner">
                                <div className="footer-content">
                                    <div className="title">
                                        <h4>{title}</h4>
                                    </div>
                                    <div className="content">
                                        <p className='hight-2'>{desc}</p>
                                        <ul  className='lab-ul office-address'>
                                            {addressList.map((val, i)=> (
                                                <li key={i}>
                                                    <i className={val.iconName}>{val.text}</i>
                                                </li>
                                            ))}

                                        </ul>
                                        <ul  className='lab-ul social-icons'>
                                            {socialList.map((val, i)=> (
                                                <li key={i}>
                                              <a href="#" className={val.className}><i className={val.iconName}>{val.text}</i></a>
                                                </li>
                                            ))}

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="footer-item our-address">
                            <div className="footer-inner">
                                <div className="footer-content">
                                    <div className="title">
                                        <h4>{quickTitle}</h4>
                                    </div>
                                    <div className="content">
                                        <ul  className='lab-ul office-address'>
                                            {quickList.map((val, i)=> (
                                                <li key={i}>
                                                    <a href='#' className='hight-2'>{val.text}</a>
                                                </li>
                                            ))}

                                        </ul>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                 
                    <div className="col">
                        <div className="footer-item our-address">
                            <div className="footer-inner">
                                <div className="footer-content">
                                    <div className="title">
                                        <h4>{ItemTitle}</h4>
                                    </div>
                                    <div className="content">
                                        <ul  className='lab-ul office-address'>
                                            {ItemList.map((val, i)=> (
                                                <li key={i}>
                                                    <a href='#' className='hight-2'>{val.text}</a>
                                                </li>
                                            ))}

                                        </ul>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="footer-item our-address">
                            <div className="footer-inner">
                                <div className="footer-content">
                                    <div className="title">
                                        <h4>{tweetTitle}</h4>
                                    </div>
                                    <div className="content">
                                        <ul  className='lab-ul office-address'>
                                            {tweetList.map((val, i)=> (
                                                <li key={i}>
                                                    <i className={val.iconName} className='hight-2'></i>
                                                    {val.desc}
                                                </li>
                                            ))}

                                        </ul>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* footer bottom */}

        <div className="footer-bottom">
            <div className="container">
                <div className="section-wrapper">
                    <p style={{fontSize:"1rem"}}>&copy; <Link to="https://github.com/Saeid-Rezaei0">ساخته شدع</Link> با 💗  <a href="#" style={{fontSize:"0.8rem"}}>SSW-Fron-End</a> </p>
                    <div className="footer-bottom-list">
                        {
                            footerbottomList.map((val, i)=> (
                                <a href="https://github.com/Saeid-Rezaei0" key={i}>{val.text}</a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </footer>;
}

export default Footer