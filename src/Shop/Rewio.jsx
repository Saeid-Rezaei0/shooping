import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Ratting from '../compones/Ratting'; // بررسی کنید که آدرس و نام کامپوننت صحیح باشد
import swal from 'sweetalert';

const reviewTitle = "افزودن کامنت";

function Review() { // تغییر نام کامپوننت به Review برای رعایت استاندارد
    const { id } = useParams();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [reviewShow, setReviewShow] = useState(true);
    const [reviewList, setReviewList] = useState([]);
    const [imgUrl, setImgUrl] = useState()
    const [data, setdata] = useState()
    const userEmail = localStorage.getItem('userEmail') || '';
    console.log("imgUrl", imgUrl);
    useEffect(() => {
        fetch(`http://localhost:3000/productdata/${id}`)
            .then(response => response.json())
            .then(data => {
                setdata(data)
                const approvedComments = (data.comments || []).filter(comment => comment.approved);
                setReviewList(approvedComments);
            })
            .catch(error => {
                console.error("There was an error fetching the product data!", error);
            });
    }, [id]);
    console.log("datadata", data);
    const onSubmit = (data) => {
        if (!userEmail) {
            swal({
                title: "برای ارسال نظر لطفا وارد حساب کاربری خود شوید",
                icon: "error"
            });
            return;
        }

        fetch(`http://localhost:3000/productdata/${id}`)
            .then(response => response.json())
            .then(product => {
                const newComment = { ...data, email: userEmail, approved: false };
                const updatedComments = [...(product.comments || []), newComment];

                fetch(`http://localhost:3000/productdata/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ ...product, comments: updatedComments })
                })
                    .then(response => response.json())
                    .then(updatedProduct => {
                        setImgUrl(updatedProduct.img)

                        swal({
                            title: "نظر شما ارسال شد و منتظر تایید مدیر است",
                            icon: "success"
                        });
                        reset();
                    })
                    .catch(error => {
                        console.error("There was an error submitting the review!", error);
                    });
            })
            .catch(error => {
                console.error("There was an error fetching the product data!", error);
            });
    }

    return (
        <>
            <div>
                <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
                    <li className='desc' onClick={() => setReviewShow(!reviewShow)}>توضیحات</li>
                    <li className='rev' onClick={() => setReviewShow(!reviewShow)}>بررسی‌ها {reviewList.length}</li>
                </ul>

                {/* محتوای توضیحات و بررسی */}
                <div className={`review-content rtl ${reviewShow ? "review-content-show" : "description-show"}`}>
                    <div className="review-showing">
                        <ul className="content lab-ul">
                            {reviewList.map((review, i) => (
                                <li key={i}>
                                    <div className="post-thumb">
                                        <img src="/src/assets/images/bg-img/images.png" alt={review.imgAlt} />
                                    </div>
                                    <div className="post-content rtl">
                                        <div className='entry-meta'>
                                            <div className="posted-on">
                                                <a href="#">{review.username}</a>
                                                <p className='px-3'>{new Date().toLocaleString()}</p>
                                            </div>
                                        </div>
                                        <div className='entry-content pe-4 mt-3'>
                                            <p style={{ fontSize: "1rem" }}>{review.message}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* فرم اضافه کردن بررسی */}
                        <div className="client-review">
                            <div className="review-form">
                                <div className="review-title">
                                    <h5>{reviewTitle}</h5>
                                </div>

                                <form className='row' onSubmit={handleSubmit(onSubmit)}>
                                    <div className="col-md-4 col-12 mb-3">
                                        <input
                                            type="text"
                                            {...register('username', { required: true, minLength: 3 })}
                                            placeholder='نام کامل خود را وارد کنید'
                                        />
                                        {errors.username && <p className='text-danger' style={{ fontSize: "12px" }}>نام کاربری باید حداقل 3 کاراکتر باشد</p>}
                                    </div>
                                    <div className="col-md-4 col-12">
                                        <input
                                            type="email"
                                            value={userEmail}
                                            disabled
                                            placeholder='ایمیل خود را وارد کنید'
                                        />
                                    </div>
                                    <div className="col-md-4 col-12">
                                        <div className="rating">
                                            <span className='me-2'>امتیاز شما</span>
                                            <Ratting />
                                        </div>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <textarea
                                            {...register('message', { required: true })}
                                            name="message"
                                            rows="8"
                                            placeholder='پیام خود را وارد کنید'
                                        ></textarea>
                                        {errors.message && <p className='text-danger' style={{ fontSize: "12px" }}>پیام نمی‌تواند خالی باشد</p>}
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
                        <h3>{data && data.name}</h3>
                        <h4 className='my-2 mt-4'>{data&&data.price} هزار تومان </h4>
                        <li> <span>از برند</span>  {data && data.seller}
                          </li>
                        <div className="post-item">
                            <div className="post-thumb pe-5">
                                <img src={data && data.img} alt="" />
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

export default Review;
