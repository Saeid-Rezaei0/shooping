import React from 'react'
import { Link } from 'react-router-dom'
const btnText = "ثبت‌نام رایگان"
const title = "هر زمان و هر مکان از فروشگاه استفاده کنید"
const desc = "از فروشگاه خود را روی هر دستگاهی با اپ ما ببرید و در هر زمان چیزی که می‌خواهید بیاموزید. فقط دانلود و نصب کنید و شروع به یادگیری کنید"
function AppSection() {
    return (
        <div className='app-section padding-tb'>
            <div className='container'>
                <div className='section-header text-center'>
                    <Link to="/sign-up" className="lab-btn mb-4">{btnText}</Link>
                    <h3 className='title my-3'>{title}</h3>
                    <p className='hight-2' style={{fontSize: "1rem"}}>{desc}</p>
                </div>
                <div className='section-wrapper'>
                    <ul className='lab-ul'>
                        <li><a href="#"><img src="/src/assets/images/app/01.jpg" alt="" /></a></li> I
                        <li><a href="#"><img src="/src/assets/images/app/02.jpg" alt="" /></a></li> I
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AppSection



