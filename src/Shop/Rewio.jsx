import React, { useState } from 'react';
import Ratting from '../compones/Ratting';

let ReviewList = [
    { imgUrl: "/src/assets/images/instructor/01.jpg", imgAlt: "عکس مشتری", name: "گانلون بویلو", date: "ارسال شده در ۱۰ ژوئن 2024 در ساعت ۶:۵۷ صبح", desc: "ابتکارات نوآورانه قبل از موضوع شگفت‌انگیز تاثیر طولانی‌مدت، سئو، پرتال، کسب و کار، رهبری پس از منابع بدون مونتایز.", },
    { imgUrl: "/src/assets/images/instructor/02.jpg", imgAlt: "عکس مشتری", name: "مورگانا کیلوت", date: "ارسال شده در ۱۰ ژوئن 2024 در ساعت ۶:۵۷ صبح", desc: "ابتکارات نوآورانه قبل از موضوع شگفت‌انگیز تاثیر طولانی‌مدت، سئو، پرتال، کسب و کار، رهبری پس از منابع بدون مونتایز.", },
    { imgUrl: "/src/assets/images/instructor/03.jpg", imgAlt: "عکس مشتری", name: "تلفورد بویس", date: "ارسال شده در ۱۰ ژوئن 2024 در ساعت ۶:۵۷ صبح", desc: "ابتکارات نوآورانه قبل از موضوع شگفت‌انگیز تاثیر طولانی‌مدت، سئو، پرتال، کسب و کار، رهبری پس از منابع بدون مونتایز.", },
    { imgUrl: "/src/assets/images/instructor/04.jpg", imgAlt: "عکس مشتری", name: "شر داویو", date: "ارسال شده در ۱۰ ژوئن 2024 در ساعت ۶:۵۷ صبح", desc: "ابتکارات نوآورانه قبل از موضوع شگفت‌انگیز تاثیر طولانی‌مدت، سئو، پرتال، کسب و کار، رهبری پس از منابع بدون مونتایز.", },
];

const reviwTite = "اضافه کردن بررسی";

function Rewio() {
    const [revviwoShow, setrevviwoShow] = useState(true);

    return (
        <>
            <div>
                <ul className={`review-nav lab-ul ${revviwoShow ? "RevActive" : "DescActive"}`}>
                    <li className='desc' onClick={() => setrevviwoShow(!revviwoShow)}>توضیحات</li>
                    <li className='rev' onClick={() => setrevviwoShow(!revviwoShow)}>بررسی‌ها ۴</li>
                </ul>
                
                {/* محتوای توضیحات و بررسی */}
                <div className={`review-content rtl ${revviwoShow ? "review-content-show" : "description-show"}`}>
                    <div className="review-showing">
                        <ul className="content lab-ul">
                            {
                                ReviewList.map((reivew, i) => (
                                    <li key={i}>
                                        <div className="post-thumb ">
                                            <img src={reivew.imgUrl} alt={reivew.imgAlt} />
                                        </div>
                                        <div className="post-content">
                                            <div className='entry-meta'>
                                                <div className="posted-on ">
                                                    <a href="">{reivew.name}</a>
                                                    <p className='px-3'>{reivew.date}</p>
                                                </div>
                                            </div>
                                            <div className='entry-content pe-4 mt-3'>
                                                <p style={{fontSize: "1rem"}}>{reivew.desc}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>

                        {/* فرم اضافه کردن بررسی */}
                        <div className="client-review">
                            <div className="review-form ">
                                <div className="review-title ">
                                    <h5>{reviwTite}</h5>
                                </div>

                                <form className='row'>
                                    <div className="col-md-4 col-12 mb-3">
                                        <input type="text" placeholder='نام کامل خود را وارد کنید' name="" id="" />
                                    </div>
                                    <div className="col-md-4 col-12">
                                        <input type="email" placeholder='ایمیل خود را وارد کنید' />
                                    </div>
                                    <div className="col-md-4 col-12">
                                        <div className="rating">
                                            <span className='me-2'>امتیاز شما</span>
                                            <Ratting />
                                        </div>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <textarea name="message" rows="8" placeholder='پیام خود را وارد کنید'></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button type='submit'>
                                            <span>ارسال</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* توضیحات */}
                    <div className='description'>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                            
                        <div className="post-item">
                            <div className="post-thumb">
                                <img src="/src/assets/images/shop/01.jpg" alt="" />
                            </div>
                            <div className="post-content">
                                <ul className='lab-ul'>
                                    <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</li>
                                    <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</li>
                                    <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</li>
                                    <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</li>
                                    <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</li>
                                    <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</li>
                                </ul>
                            </div>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Rewio;
