import React, { useEffect, useState } from 'react'
import PageHeader from '../../compones/PageHeader'
import { Link } from 'react-router-dom'
import LayOUT from '../../LayOUT'

function Blog() {
  scroll(430,430)
  const [blogList, setblogList] = useState([])
  useEffect(()=> {
    fetch('http://localhost:3000/blog')
    .then(res => res.json())
    .then(data => setblogList(data))
    console.log("blogList", blogList);

  }, [])
 
  return (
    <LayOUT>
      <PageHeader title="صفحه بلاگ" curPage="بلاگ" />
      <div className="blog-section padding-tb section-bg rtl">
        <div className="container">
          <div className="section-wrapper">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4">
              {
                blogList.map((blog, i) => (
                  <div key={i} className='col'>
                    <div className='post-item'>
                      <div className="post-inner">
                        <div className="post-thumb">
                          <Link to={`/blog/${blog.id}`}><img src={blog.imgUrl} alt={blog.imgAlt} /></Link>
                        </div>
                        <div className="post-content">
                          <Link to={`/blog/${blog.id}`}><h5 className='mb-3' style={{fontSize: "1rem"}}>{blog.title}</h5></Link>
                          <div className="meta-post">
                            <ul className='lab-ul'>
                              {
                                blog.metaList.map((val, i) => (
                                  <li key={i}><i className={val.iconName}></i>{val.text}</li>
                                ))
                              }
                            </ul>
                          </div>
                          <p style={{fontSize: "0.9rem"}}>{blog.desc}</p>
                        </div>
                        <div className="post-footer">
                          <div className='pf-left' >
                            <Link to={`/blog/${blog.id}`} className='lab-btn-text' style={{fontSize: "0.9rem"}}>{blog.btnText}
                              <i className="icofont-external-link"></i>
                            </Link>
                          </div>
                          <div className="pf-right">
                            <i className="icofont-comment">
                              <span className='comment-count'>{blog.commentCount}</span>
                            </i>
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
      </div>
    </LayOUT>
  )
}

export default Blog
