import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

function ADDBLOG({ show, handleClose, addBLOG }) {
    const [blogData, setBlogData] = useState({
        id: uuidv4(),
        imgUrl: '',
        imgAlt: '',
        title: '',
        desc: '',
        commentCount: '',
        btnText: '',
        metaList: [
            { iconName: 'icofont-ui-user', text: '' },
            { iconName: 'icofont-calendar', text: '' }
        ]
    }); 

    const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'author') {
        setBlogData({
            ...blogData,
            [name]: value,
            metaList: [
                { iconName: 'icofont-ui-user', text: value },
                { iconName: 'icofont-calendar', text: blogData.metaList[1].text }
            ]
        });
    } else if (name === 'publishDate') {
        setBlogData({
            ...blogData,
            [name]: value,
            metaList: [
                { iconName: 'icofont-ui-user', text: blogData.metaList[0].text },
                { iconName: 'icofont-calendar', text: value }
            ]
        });
    } else {
        setBlogData({ ...blogData, [name]: value });
    }
};
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addBLOG(blogData);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} className='rtl'>
            <Modal.Header>
                <Modal.Title>افزودن بلاگ</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formImgUrl">
                        <Form.Label>آدرس تصویر</Form.Label>
                        <Form.Control type="text" placeholder="آدرس تصویر را وارد کنید" name="imgUrl" value={blogData.imgUrl} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="formImgAlt">
                        <Form.Label className='my-2'>توضیح تصویر</Form.Label>
                        <Form.Control type="text" placeholder="توضیح تصویر را وارد کنید" name="imgAlt" value={blogData.imgAlt} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="formTitle">
                        <Form.Label className='my-2'>عنوان بلاگ</Form.Label>
                        <Form.Control type="text" placeholder="عنوان بلاگ را وارد کنید" name="title" value={blogData.title} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="formDesc">
                        <Form.Label className='my-2'>متن بلاگ</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="متن بلاگ را وارد کنید" name="desc" value={blogData.desc} onChange={handleChange} required />
                    </Form.Group>
                    {/* Add other form fields for the remaining blog data */}
                    <Form.Group controlId="formAuthor">
                        <Form.Label className='my-2'>نویسنده</Form.Label>
                        <Form.Control type="text" placeholder="نام نویسنده را وارد کنید" name="author" value={blogData.author} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="formPublishDate">
                        <Form.Label className='my-2'>تاریخ انتشار</Form.Label>
                        <Form.Control type="date" name="publishDate" value={blogData.publishDate} onChange={handleChange} required />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='my-2'>
                        افزودن
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    بستن
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ADDBLOG;
