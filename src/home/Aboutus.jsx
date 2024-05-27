import React from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const subTitle = "چرا ما را انتخاب کنید";
const title = "تبدیل به فروشنده";
const desc = "دوره‌ها را روی هر دستگاهی با اپلیکیشن ما بخوانید و همه چیز درباره کسب و کار را بیاموزید. فقط دانلود و نصب کنید و شروع به یادگیری کنید";
const btnText = "اکنون درخواست دهید";

const countList = [
    {
        iconName: 'icofont-users-alt-4',
        count: '12600',
        text: 'فروشندگان ثبت‌نام‌شده',
    },
    {
        iconName: 'icofont-graduate-alt',
        count: '30',
        text: 'دوره‌های معتبر',
    },
    {
        iconName: 'icofont-notification',
        count: '100',
        text: 'پاداش‌ها و کارت‌های هدیه',
    },
];

function Aboutus() {
    return (
        <div className="instructor-section style-2 padding-tb section-bg-ash ">
            <div className="container">
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center align-content-center row-cols-1 row-cols-md-2 row-cols-xl-3">
                        <div className="col">
                            {countList.map((val, i)=> (
                                <div className="count-item" key={i}>
                                    <div className="count-inner">
                                        <div className="count-icon">
                                            <i className={val.iconName}></i>
                                        </div>
                                        <div className="count-content">
                                        <h2><span className='count'>{<CountUp end={val.count}/>}</span></h2>
                                            <p>{val.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='col'>
                            <div className='instructor-content rtl'>
                                <span className='subtitle text-white'>{subTitle}</span>
                                <h3 className='title my-4 text-white'>{title}</h3>
                                <p className='hight-2 text-white'>{desc}</p>
                                <Link to="/sign-up" className='lab-btn'>{btnText}</Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="instructor-thumb">
                                <img src="/src/assets/images/instructor/01.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;
