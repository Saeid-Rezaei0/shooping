import React from 'react'
import PageHeader from '../compones/PageHeader'
import GoogleMap from './GoogleMap';
import LayOUT from '../LayOUT';

const subTitle = "با ما در تماس باشید";
const title = "ما همیشه مشتاق شنیدن از شما هستیم!";
const conSubTitle = "با ما در تماس باشید";
const conTitle =".فرم زیر را پر کنید تا بهتر شما و نیازهای شما را بشناسیم"
const btnText = "ارسال پیام";

const contactList = [
    {
        imgUrl: "/src/assets/images/icon/01.png",
        imgAlt: "آیکون تماس",
        title: "آدرس دفتر",
        desc: "خیابان پارک 1201، خیابان پنجم",
    },
    {
        imgUrl: "/src/assets/images/icon/02.png",
        imgAlt: "آیکون تماس",
        title: "شماره تلفن",
        desc: "+22698 745 632, 02 982 745",
    },
    {
        imgUrl: "/src/assets/images/icon/03.png",
        imgAlt: "آیکون تماس",
        title: "ارسال ایمیل",
        desc: "admin@shopcart.com",
    },
    {
        imgUrl: "/src/assets/images/icon/04.png",
        imgAlt: "آیکون تماس",
        title: "وب‌سایت ما",
        desc: "www.shopcart.com",
    },
];

function Contact() {
  return (
    <LayOUT>
        <PageHeader title={"با ما در تماس باشید"} curPage={"صفحه تماس"} />
        <div className="map-address-section padding-tb section-bg rtl">
            <div className="container">
                <div className="section-header text-center">
                    <span className='subtitle'>{subTitle}</span>
                    <h2 className='title my-2' style={{fontSize: "1.4rem"}}>{title}</h2>
                </div>

                <div className="section-wrapper">
                    <div className="row flex-row-reverse">
                        <div className="col-xl-4 col-lg-5 col-12">
                            <div className="content-wrapper ">
                               {
                                contactList.map((val, i)=> (
                                    <div key={i} className='contact-item BGHover'>
                                        <div className="contact-thumb">
                                            <img src={val.imgUrl} alt={val.imgAlt} style={{marginLeft: "1rem"}} />
                                        </div>
                                        <div className="contact-content ">
                                            <h6 className='hoverwhite'>{val.title}</h6>
                                            <p className='hoverwhite'>{val.desc}</p>
                                        </div>
                                    </div>
                                ))
                               } 
                            </div>
                        </div>

                        {/* نقشه گوگل */}
                        <div className="col-xl-8 col-lg-7 col-12">
                            <GoogleMap />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="contact-section padding-tb">
            <div className="section-header text-center">
                <span className='subtitle'>{conSubTitle}</span>
                <h3 className='title'>{conTitle}</h3>
            </div>

            <div className="section-wrapper rtl">
                <form className='contact-form'>
                    <div className="form-group shadow">
                        <input type="text" name='name' id='name' placeholder='نام شما *' />
                    </div>
                    <div className="form-group shadow">
                        <input type="email" name='email' id='email' placeholder='ایمیل شما *' />
                    </div>
                    <div className="form-group shadow">
                        <input type="number" name='phone' id='phone' placeholder='شماره تلفن *' />
                    </div>
                    <div className="form-group shadow">
                        <input type="text" name='subject' id='subject' placeholder='موضوع' />
                    </div>
                    <div className="form-group shadow w-100">
                        <textarea name="message" id="message" rows="8" placeholder='پیام شما...'></textarea>
                    </div>
                    <div className="form-group  w-100 text-center">
                      <button className='shadow lab-btn'>
                        <span>{btnText}</span>
                      </button>
                    </div>
                </form>
            </div>
        </div>
    </LayOUT>
  )
}

export default Contact
