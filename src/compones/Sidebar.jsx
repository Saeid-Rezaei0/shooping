import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoMdBook, IoMdApps, IoIosPerson } from "react-icons/io";
import { FiTag } from "react-icons/fi";
import { RiArticleLine } from "react-icons/ri";
import Badge from 'react-bootstrap/Badge';
import ApiContext from "../ContexApi";

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(true);
    const context = useContext(ApiContext)
    const [comment, setComment] = useState([])
    const { blog, steke, users, order } = context;
    useEffect(() => {
        fetch("http://localhost:3000/teket")
            .then(res => res.json())
            .then(data => setComment(data))
    }, [])
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <nav className={`sidebar rtl ${!showSidebar ? "collapsed" : ""} bg-purple`}>
            <div className="sidebar-content">
                <div className="d-flex justify-content-between align-items-center">
                    <a className="sidebar-brand d-flex  align-items-center pt-3 mb-4">
                        <img src="/src/assets/images/bg-img/profil.png" width={50} className="mb-0 me-3  text-white" style={{ borderRadius: "50%" }} />
                        <h6 className={`text-white me-3 mt-1 ${showSidebar ? '' : 'collapsed'}`} style={{ fontSize: "15px" }}>پنل ادمین</h6>
                    </a>
                    <button className="btn btn-link text-white" onClick={toggleSidebar} style={{ marginTop: "-0.8rem" }}>
                        {showSidebar ? <FaTimes size={24} /> : <FaBars className="text-dark" size={24} />}
                    </button>
                </div>

                <ul className="nav flex-column pe-3" style={{ overflow: "hidden" }}>
                    <li className="sidebar-header fw-bolder fs-lg text-white">
                        <span className={`${!showSidebar ? "d-none" : ""}`}>مدیریت محصولات</span>
                    </li>
                    <li className="nav-item">
                        <NavLink
                              className="nav-link text-white bg-transparent"
                              activeClassName="active"
                            to="/admin"
                        >
                            <IoMdApps className="align-middle icon me-2" />
                            <span className={`align-middle text me-2 ${showSidebar ? '' : 'collapsed'}`}>مدیریت فروش</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link text-white"
                            activeClassName="active"
                            to="/admin/product"
                        >
                            <IoMdBook className="align-middle icon me-2" />
                            <span className={`align-middle text me-2 ${showSidebar ? '' : 'collapsed'}`}>همه محصولات</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link text-white"
                            activeClassName="active"
                            to="/admin/blog"
                        >
                            <RiArticleLine className="align-middle icon me-2" />
                            <span className={`align-middle text me-2 ${showSidebar ? '' : 'collapsed'}`}>
                                بلاگ ها <Badge className="p-2 rounded rounded-end circle">{blog.length}</Badge>
                            </span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link text-white"
                            activeClassName="active"
                            to="/"
                        >
                            <IoIosPerson className="align-middle icon me-2" />
                            <span className={`align-middle text me-2 ${showSidebar ? '' : 'collapsed'}`}> بازگشت به صفحه اصلی </span>
                        </NavLink>
                    </li>
                    <li className="sidebar-header fw-bolder fs-lg text-white">
                        <span className={`${!showSidebar ? "d-none" : ""}`}>مدیریت کاربران</span>
                    </li>
                       <li className="nav-item">
                        <NavLink
                            className="nav-link text-white"
                            activeClassName="active"
                            to="/admin/advise"
                        >
                            <IoIosPerson className="align-middle icon me-2" />
                            <span className={`align-middle text me-2 ${showSidebar ? '' : 'collapsed'}`}>
                                 کامنت  کاربران <Badge className="p-2 rounded rounded-end circle"></Badge>
                            </span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link text-white"
                            activeClassName="active"
                            to="/admin/users"
                        >
                            <IoIosPerson className="align-middle icon me-2" />
                            <span className={`align-middle text me-2 ${showSidebar ? '' : 'collapsed'}`}>
                                کاربران <Badge className="p-2 rounded rounded-end circle">{}</Badge>
                            </span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link text-white"
                            activeClassName="active"
                            to="/admin/order"
                        >
                            <IoIosPerson className="align-middle icon me-2" />
                            <span className={`align-middle text me-2 ${showSidebar ? '' : 'collapsed'}`}>
                                سفارش ها <Badge className="p-2 rounded rounded-end circle">{order.length}</Badge>
                            </span>
                        </NavLink>
                    </li>
                    <li className="sidebar-header fw-bolder fs-lg text-white">
                        <span className={`${!showSidebar ? "d-none" : ""}`}>مدیریت بلاگ</span>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link text-white"
                            activeClassName="active"
                            to="/admin/comment"
                        >
                            <FiTag className="align-middle icon me-2" />
                            <span className={`align-middle text me-2 ${showSidebar ? '' : 'collapsed'}`}>
                                نظرات <Badge className="p-2 rounded rounded-end circle">{comment.length}</Badge>
                            </span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link text-white"
                            activeClassName="active"
                            to="/admin/styke"
                        >
                            <IoIosPerson className="align-middle icon me-2" />
                            <span className={`align-middle text me-2 ${showSidebar ? '' : 'collapsed'}`}>
                                برچسب ها <Badge className="p-2 rounded rounded-end circle">{}</Badge>
                            </span>
                        </NavLink>
                    </li>
                 
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;
