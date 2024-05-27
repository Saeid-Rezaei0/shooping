import React from 'react';

const subTitle = "رسیدگی کنید";
const title = (
    <h3 className='title text-white my-3 mb-4' style={{fontSize:"1.6rem"}}>به کارگاه رایگان یک روزه بپیوندید برای <b>آموزش پیشرفته <span>مدیریت</span></b>در فروش</h3>
);
const desc = "پیشنهاد محدود زمانی";

function Register() {
    return (
        <section className='register-section padding-tb pb-0 rtl'>
            <div className="container">
                <div className="row rol-cols-lg-2 rol-cols-3 align-items-center">
                  
                    <div className="col" style={{marginTop: "-3rem"}}>
                        <div className='section-wrapper'>
                            <h4>هم اکنون ثبت نام کنید</h4>
                            <form className='register-form'>
                                <input type="text" name='name' placeholder='نام کاربری' className='reg-input shadow shadow-custom' />
                                <input type="email" name='name' placeholder='ایمیل' className='reg-input shadow shadow-custom' />
                                <input type="number" name='name' placeholder='تلفن' className='reg-input shadow shadow-custom' />
                                <button type='submit' className='lab-btn'>
                                    ثبت نام کنید
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col d-none-customMoblie">
                        <div className="section-header" style={{lineHeight: "2rem"}}>
                            <span className='subtitle text-dark hight-2 fw-bold'>{subTitle}</span>
                            {title}
                            <p className='text-dark hight-2 fw-bold'>{desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;
