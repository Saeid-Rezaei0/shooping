import React, { useEffect, useState } from 'react'
// import blogList from '../../utilis/blogdata'
import { Link, useParams } from 'react-router-dom'
import PageHeader from '../../compones/PageHeader'
import Tags from '../../Shop/Tags'
import PopularPost from '../../Shop/PopularPost'
import LayOUT from '../../LayOUT'

const socialList = [
    { iconName: 'icofont-facebook', siteLink: '#', className: 'facebook' },
    { iconName: 'icofont-twitter', siteLink: '#', className: 'twitter' },
    { iconName: 'icofont-linkedin', siteLink: '#', className: 'linkedin' },
    { iconName: 'icofont-instagram', siteLink: '#', className: 'instagram' },
    { iconName: 'icofont-pinterest', siteLink: '#', className: 'pinterest' },
]

export default function SingleBlog() {
    scroll(400 , 400)
    const [blogList, setblogList] = useState([])
    useEffect(()=> {
        fetch('http://localhost:3000/blog')
        .then(res => res.json())
        .then(data => setblogList(data))
        console.log("blogList", blogList);
      
      }, [])
    // const [blog, setBlog] = useState(blogList)
    const { id } = useParams()
    const [result,setresult] = useState([])
    useEffect(() => {
        setresult(blogList.filter((p) => p.id === id));
        console.log(result);
    }, [blogList, id]);
    

    return (
        <LayOUT>
            <PageHeader title={"صفحه بلاگ "} curPage={"بلاگ / جزئیات بلاگ"} />

            <div className="blog-section blog-single padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="section-wrapper">
                                    <div className="row row-cols-1 justify-content-center g-4">
                                        <div className="col">
                                            <div className="post-item style-2">
                                                <div className="post-inner">
                                                    {
                                                        result.map((item) => (
                                                            <div key={item.id}>
                                                                <div className="post-thumb" style={{height: "70vh", objectFit: "cover"}}> 
                                                                    <img src={item.imgUrl} alt={item.imgUrl} width={100} />
                                                                </div>
                                                                <div className='post-content rtl'>
                                                                    <h3 className='rtl'>{item.title}</h3>
                                                                    <div className="meta-post my-2" >
                                                                        <ul className="lab-ul my-3 rtl">
                                                                            {
                                                                                item.metaList.map((val, i) => (
                                                                                    <li key={i}><i className={val.iconName }></i>{val.text}</li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                        <p>{item.desc}</p>
                                                                        <blockquote  style={{ backgroundColor: "lightblue" }}>
                                                                            <p style={{ color: "#000" }}>{item.desc}</p>
                                                                            <cite className='pt-3'>
                                                                                <a href="#" style={{ color: "blue" }}> بیشتر ...</a>
                                                                            </cite>
                                                                        </blockquote>
                                                                        <p className='rtl hight-2' style={{fontSize: "0.9rem"}}> هر گوشی در بازار به   تازگی که مدام به ما دست‌ اندازی می‌کند پس می‌زند... در نهایت این مرگ است که باید پیروز شود، زیرا از هنگام تولد بخشی از سرنوشت ما شده و فقط مدت کوتاهی پیش از بلعیدن طعمه اش، با آن بازی می کند. با این همه، ما تا آنجا که ممکن است، با علاقه فراوان و دلواپسی زیاد بامه می دهیم، همان‌که ممکن است طولاننیم که خواهد ترکید.</p>
                                                                        <img src="/src/assets/images/blog/single/01.jpg" alt="/src/assets/images/blog/single/01.jpg" />
                                                                        <p className='rtl hight-2' style={{fontSize: "0.9rem"}}> که به طراحان و برنامه نویسان کمک میکند تا این عزیزان با بهره گیری از این نوشته تستی و آزمایشی بتوانند نمونه تکمیل شده از پروژه و طرح خودشان را به کارفرما نمایش دهند، استفاده از این متن تستی می تواند سرعت پیشرفت پروژه را افزایش دهد</p>
                                                                        <div className="video-thumb">
                                                                            <img src="/src/assets/images/blog/single/02.jpg" alt="/src/assets/images/blog/single/01.jp" />
                                                                            <a href="https://github.com/Saeid-Rezaei0" className='video-button popup' target='_blank'>
                                                                                <i className="icofont-play"></i>
                                                                            </a>
                                                                            <p className='rtl hight-2' style={{fontSize: "0.9rem"}}> که به طراحان و برنامه نویسان کمک میکند تا این عزیزان با بهره گیری از این نوشته تستی و آزمایشی بتوانند نمونه تکمیل شده از پروژه و طرح خودشان را به کارفرما نمایش دهند، استفاده از این متن تستی می تواند سرعت پیشرفت پروژه را افزایش دهد</p>
                                                                            <div className="tags-section">
                                                                                <ul className='tage lab-ul'>
                                                                                    <li>
                                                                                        <a href="#">آژانس</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="#">کسب و کار</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="#">شخصی</a>
                                                                                    </li>
                                                                                </ul>
                                                                                <ul className='lab-ul social-icons'>
                                                                                    {
                                                                                        socialList.map((val, i) => (
                                                                                            <li key={i}>
                                                                                                <a href="#" className={val.className}>
                                                                                                    <i className={val.iconName} style={{ color: "white", textAlign: "center" }}></i>
                                                                                                </a>
                                                                                            </li>
                                                                                        ))
                                                                                    }
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className='navigations-part'>
                                            <div className="left">
                                            <Link to="/blog/3">
                                                    <i className='icofont-double-right'>
                                                        مقاله قبلی
                                                    </i>
                                                </Link>
                                             
                                            </div>
                                            <div className="right">
                                                <Link to="/blog/5">
                                                    <i className='icofont-double-right'>
                                                        مقاله بعدی
                                                    </i>
                                                </Link>
                                              
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                            <aside>
                                <Tags />
                                <PopularPost />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </LayOUT>
    )
}
``
