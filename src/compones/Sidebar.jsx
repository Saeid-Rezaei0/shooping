import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(true);

    return (
        <nav className={`sidebar rtl ${!showSidebar ? "collapsed" : ""} bg-purple`}>
            <div className="sidebar-content">
                <a className="sidebar-brand d-flex flex-column align-items-center pt-3 mb-4">
                    <p className="mb-0 text-white">عنوان نوار کناری</p>
                </a>

                <ul className="nav flex-column pe-3">
                    <li className="sidebar-header fw-bolder fs-lg text-white">
                        مدیریت محصولات
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "nav-link active text-white" : "nav-link text-white"
                            }
                            to="/admin"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-video align-middle me-2"
                            >
                                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                            </svg>
                            <span className="align-middle me-2">دسته‌بندی دوره‌ها</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "nav-link active text-white" : "nav-link text-white"
                            }
                            to="/admin/product"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-video align-middle me-2"
                            >
                                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                            </svg>
                            <span className="align-middle me-2">همه محصولات</span>
                        </NavLink>
                    </li>
                  
                    <li className="nav-item">
                        <a className="nav-link text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-percent align-middle me-2"
                            >
                                <line x1="19" y1="5" x2="5" y2="19"></line>
                                <circle cx="6.5" cy="6.5" r="2.5"></circle>
                                <circle cx="17.5" cy="17.5" r="2.5"></circle>
                            </svg>
                            <Link to="/admin/blog" className="align-middle text-white me-2">وبلاگ ها</Link>
                        </a>
                    </li>
                    <Link to="/" className="nav-item">
                        <a className="nav-link text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-users align-middle me-2"
                            >
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                            <span className="align-middle me-2"> بازگشت به صفحه اصلی </span>
                        </a>
                    </Link>
                    <li className="sidebar-header fw-bolder fs-lg text-white">
                        مدیریت کاربران
                    </li>
                    <Link to="/admin/order" className="nav-item">
                        <a className="nav-link text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-file-text align-middle me-2"
                            >
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                            <span className="align-middle me-2">سفارش ها</span>
                        </a>
                    </Link>
                   
                  
                    <li className="sidebar-header fw-bolder fs-lg text-white">
                        مدیریت بلاگ
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-tag align-middle me-2"
                            >
                                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                                <line x1="7" y1="7" x2="7.01" y2="7"></line>
                            </svg>
                            <span className="align-middle me-2">مدیریت برچسب‌ها</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-user align-middle me-2"
                            >
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            <span className="align-middle me-2">مدیریت اساتید</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;
