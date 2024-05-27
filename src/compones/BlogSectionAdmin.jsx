import React, { useContext, useEffect, useState } from 'react';
import myContext from '../ContexApi';
import { FaCartPlus, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateBlogModal from '../UpdateBlogModal';
import swal from 'sweetalert';
import ADDBLOG from '../ADDBLOG';
import Sidebar from './Sidebar';

function BlogSectionAdmin() {
    const context = useContext(myContext);
    const { mode, blog, addBLOG,  deletblod, updateBlog } = context;
    const [showModal, setShowModal] = useState(false);
    const [showADDMOADL, setshowADDMOADL] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);

    // delete blog
    const deleteBlog = (ID) => {
        deletblod(ID);
        toast.success("وبلاگ با موفقیت حذف شد", {
            position: "top-right",
            style: {
                fontSize: '20px',
                textAlign: 'right'
            }
        });
    };

    // update blog
    const editItem = (item) => {
        setShowModal(true);
        setSelectedBlog(item);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setSelectedBlog(null);
    };

    // add blog
    const addBlogHandler = () => {
        setshowADDMOADL(true);
    };

    const closeAddBlogModal = () => {
        setshowADDMOADL(false);
    };

    return (
        <div className="container mx-auto" style={{marginTop: "-5rem"}}>
            <ToastContainer />
            <div className="container mx-auto">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center  text-3xl font-semibold underline" style={{ color: mode === 'dark' ? 'white' : '' }}>Blog Details</h1>
                        <div className="text-end ">
                            <button type="button" onClick={addBlogHandler} className="btn btn-primary">
                                <div className="d-flex align-items-center">
                                    افزودن وبلاگ <FaCartPlus size={20} className="ms-2" />
                                </div>
                            </button>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">ادی</th>
                                        <th scope="col">تصاویر</th>
                                        <th scope="col">سر تیتر</th>
                                        <th scope="col">مطالب</th>
                                        <th scope="col">دسته بندی</th>
                                        <th scope="col">نویسنده</th>
                                        <th scope="col">تاریخ</th>
                                        <th scope="col">عملیات</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {blog && blog.map((item, index) => {
                                        const { id, imgUrl, imgAlt, title, desc, commentCount, metaList } = item;
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}.</td>
                                                <td>
                                                    <Link to={`/blog/${id}`}>
                                                        <img src={imgUrl} alt={imgAlt} width={80} />
                                                    </Link>
                                                </td>
                                                <td>{title}</td>
                                                <td>{desc}</td>
                                                <td>{commentCount}</td>
                                                {metaList.map(item =>
                                                    <td key={item.id}>{item.text}</td>
                                                )}
                                                <td>
                                                    <div className="btn-group" role="group">
                                                        <button type="button" className="btn btn-danger" onClick={() => deleteBlog(item.id)}>
                                                            حذف
                                                        </button>
                                                        <button type="button" className="btn btn-primary" onClick={() => editItem(item)}>
                                                            ویرایش
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <UpdateBlogModal
                show={showModal}
                handleClose={handleModalClose}
                blog={selectedBlog}
                updateBlog={updateBlog}
            />
            <ADDBLOG
                show={showADDMOADL}
                handleClose={closeAddBlogModal}
                addBLOG={addBLOG}
            />
        </div>
    );
}
export default BlogSectionAdmin;
