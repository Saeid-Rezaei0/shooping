import React from 'react'
import PageHeader from '../compones/PageHeader';
import LayOUT from '../LayOUT';

const subTitle = "درباره برند ما";
const title = "خدمات با کیفیت و تجربیات بهتر";
const desc = "به صورت متمایز دسترسی به کاربران را فراهم کنید در حالی که فرآیندهای شفاف انگیزه کارکردهای کارآمد را ارائه می‌دهند و به جای معماری گسترده، خدمات متقابل و پلتفرمی را ارائه می‌دهند.";

const year = "30+";
const expareance = "سال تجربه";

const aboutList = [
    {
        imgUrl: '/src/assets/images/about/icon/01.jpg',
        imgAlt: 'آیکون درباره rajibraj91 rajibraj',
        title: 'مدرسان ماهر',
        desc: 'به صورت متمایز دسترسی به کاربران را فراهم کنید در حالی که خدمات متقابل را ارائه می‌دهند',
    },
    {
        imgUrl: '/src/assets/images/about/icon/02.jpg',
        imgAlt: 'آیکون درباره rajibraj91 rajibraj',
        title: 'دریافت گواهینامه',
        desc: 'به صورت متمایز دسترسی به کاربران را فراهم کنید در حالی که خدمات متقابل را ارائه می‌دهند',
    },
    {
        imgUrl: '/src/assets/images/about/icon/03.jpg',
        imgAlt: 'آیکون درباره rajibraj91 rajibraj',
        title: 'کلاس‌های آنلاین',
        desc: 'به صورت متمایز دسترسی به کاربران را فراهم کنید در حالی که خدمات متقابل را ارائه می‌دهند',
    },
];
function About() {
    scroll(0,0)
    return (
        <LayOUT>
            {/* <PageHeader title={"درباره برند ما"} curPage={"درباره"} /> */}
            <div className="about-section style-3 padding-tb section-bg ">
                <div className="container">
                    <div className="row mt-5  justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
                        <div className="col">
                            <div className="about-left">
                                <div className="about-thumb">
                                    <img src="/src/assets/images/about/01.jpg" alt="/src/assets/images/about/01.jpg" />
                                </div>
                                <div className="abs-thumb">
                                    <img src="/src/assets/images/about/02.jpg" alt="/src/assets/images/about/02.jpg" />
                                </div>
                                <div className="about-left-content">
                                    <h3>{year}</h3>
                                    <p>{expareance}</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="about-right">
                                <div className='section-header rtl'>
                                    <span className='subtitle'>{subTitle}</span>
                                    <h3 className='title my-2' style={{fontSize: "1.3rem"}}>{title}</h3>
                                    <p className='hight-2' style={{fontSize: "1rem"}}>{desc}</p>
                                </div>
                                <div className="section-wrapper rtl">
                                    <ul className='lab-ul'>
                                        {
                                            aboutList.map((val, i) => (
                                                <li key={i}>
                                                    <div className="sr-left">
                                                        <img src={val.imgUrl} alt={val.imgAlt} />
                                                    </div>
                                                    <div className="sr-right">
                                                        <h6>{val.title}</h6>
                                                        <p className='hight-2' style={{fontSize: "1rem"}}>{val.desc}</p>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayOUT>
    )
}

export default About
