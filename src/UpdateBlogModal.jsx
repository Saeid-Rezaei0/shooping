import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function UpdateBlogModal({ show, handleClose, blog, updateBlog }) {
    const author = blog && blog.metaList ? blog.metaList.map(author => author.text).join(', ') : "";
    const [authorText, setAuthorText] = useState("");
    scroll(0,0)
    useEffect(() => {
        if (author) {
            setAuthorText(author);
        }
    }, [author]);

    const [updatedBlog, setUpdatedBlog] = useState({ ...blog });

    useEffect(() => {
        setUpdatedBlog({ ...blog });
    }, [blog]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedBlog({ ...updatedBlog, [name]: value });
    };

    const handleAuthorChange = (e) => {
        setAuthorText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedMetaList = updatedBlog.metaList && updatedBlog.metaList.map((meta, index) => ({
            meta,
            text: index === 0 ? authorText : meta.text // Assuming the author text is the first item in metaList
        }));
        updateBlog({ ...updatedBlog, metaList: updatedMetaList });
        handleClose();  
    };
    

    return (
        <Modal show={show} onHide={handleClose} className='rtl'>
            <Modal.Header>
                <Modal.Title>بروز رسانی وبلاگ ها</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <img src={updatedBlog.imgUrl} className='w-70 me-4' alt="" />
                    </div>
                    <div className="form-group">
                        <label className='mb-2 '>سر تیتر</label>
                        <input type="text" className="form-control" name="title" value={updatedBlog.title} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>توضیحات</label>
                        <textarea className="form-control" name="desc" value={updatedBlog.desc} onChange={handleChange}></textarea>
                    </div>
                    <div className="form-group my-4">
                        <label className='mb-2'>ادرس عکس</label>
                        <input type="text" className="form-control" name="imgUrl" value={updatedBlog.imgUrl} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>تایتل عکس</label>
                        <input type="text" className="form-control" name="imgAlt" value={updatedBlog.imgAlt} onChange={handleChange} />
                    </div>
                    <div className="form-group my-4">
                        <label className='mb-2'>نویسنده و تاریخ</label>
                        <input type="text" className="form-control" name="author" value={authorText} onChange={handleAuthorChange} />
                    </div>
                    <Button type="submit" variant="primary">
                        تایید
                    </Button>
                </form>
            </Modal.Body>
        </Modal>
    );
}

export default UpdateBlogModal;
