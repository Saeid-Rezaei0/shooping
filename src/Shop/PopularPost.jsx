import React from 'react'
const title = "محبوب‌ ترین خواندنی ها"
import { Link } from 'react-router-dom'
const postList = [
  { id: 1, imgUrl: '/src/assets/images/blog/10.jpg', imgAlt: 'rajibraj91', title: 'راهنمای خرید بهترین آیپد', date: '2024-06-05' }, 
  { id: 2, imgUrl: '/src/assets/images/blog/11.jpg', imgAlt: 'rajibraj91', title: 'بررسی کپسول هیرویت هلث اید', date: '2024-06-05' }, 
  { id: 3, imgUrl: '/src/assets/images/blog/12.jpg', imgAlt: 'rajibraj91', title: 'راهنمای خرید بهترین گوشی تا ۳۰ میلیون', date: '2024-06-05' }, 
  { id: 4, imgUrl: '/src/assets/images/blog/09.jpg', imgAlt: 'rajibraj91', title: 'بهترین آیپد موجود در بازار چیست', date: '2024-06-05' },
]
export default function PopularPost() {
  return (
    <div className='widget widget-post'>
      <div className="widget-header">
        <h6 className='title'>{title}</h6>
      </div>
      <ul className='widget-wrapper'>
        {
          postList.map((blog, i)=> {
           return (
        <li key={i} className='d-flex flex-wrap justify-content-between '>
              <div className="post-thumb">
                <Link to={`/blog/${blog.id}`}><img src={blog.imgUrl} alt={blog.imgAlt}/></Link>
              </div>
              <div className="post-content">
              <Link to={`/blog/${blog.id}`}><h6 style={{fontSize: "0.8rem"}}>{blog.title}</h6></Link>
              <p className='w-50'>{blog.date}</p>
              </div>
            </li>
           )
          })
        }
      </ul>
    </div>
  )
}
