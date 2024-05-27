import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from "../assets/images/logo/ss.png"
export default function Navitem() {
    const [menuToggle, setmenuToggle] = useState(false)
    const [sociaToggle, setsociaToggle] = useState(false)
    const [headerFixed, setheaderFixed] = useState(false)
    const [users , setusers] = useState("")
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            setheaderFixed(true);
        } else {
            setheaderFixed(false);
        }
    });
    const user = localStorage.getItem("userEmail");
    useEffect(()=> {
     setusers(user);
    }, [])
    
    const clearlocalstorage = () => {
        localStorage.clear(user)
        setusers("")
    }
    
    // fedeInUp
    return (
        <header className={`header-section  style-4 ${headerFixed ? "header-fixed " : ""}`}>
        <div className={`header-top d-md-none ${sociaToggle ? "open" : ""}`}>
            <div className="container">
                <div className="header-top-area">
                    <Link to="/register" className="lab-btn me-3"><span>ایجاد حساب</span></Link>
                   {users?<h6 onClick={clearlocalstorage} className='fw-bold'>خروج</h6> :<Link to="/login"><span>ورود</span></Link>}        
                </div>
            </div>
        </div>
        <div className=""></div>
        {/* {header-bouutn} */}
        <header className='header-bottom'>
            <div className="container">
                <div className="header-wrapper">
                    {/* //logo */}
                    <div className='logo-search-acte'>
                        <div className="logo">
                            <Link to="/">
                                <img src={Logo} alt="لوگو" />
                            </Link>
                        </div>
                    </div>
    
                    {/* menu-area */}
                    <div className="menu-area">
                        <div className="menu">
                            <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                <li> <Link to="/" className='NAVhOVER'>خانه</Link> </li>
                                <li> <Link to="/shop" className='NAVhOVER'>فروشگاه</Link> </li>
                                <li> <Link to="/blog" className='NAVhOVER'>بلاگ</Link> </li>
                                <li> <Link to="/about" className='NAVhOVER'>درباره</Link> </li>
                                <li> <Link to="/contect" className='NAVhOVER'>تماس</Link> </li>
                               {users === "saeidrr@gimail.com" ?  <li> <Link to="/admin" className='NAVhOVER'>ادمین</Link> </li> : ""}
                            </ul>
                        </div>
                        {/*  singin  and login*/}
                        {users? "" : <Link to="/register" className='lab-btn me-3 d-none d-md-block'>ایجاد حساب</Link>}

                        {users?<h6 onClick={clearlocalstorage} className='pt-2 fw-bold' style={{cursor: "pointer"}}>خروج</h6> :<Link to="/login" className='d-none d-md-block' style={{fontSize: "17px"}}>ورود</Link>}        
                       
                        {/* menutoggle */}
                        <div onClick={() => setmenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
    
                        {/* socal */}
                        <div className='ellepsis-bar d-md-none'
                            onClick={() => setsociaToggle(!sociaToggle)}>
                            <i class="icofont-info"></i>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </header>
    
    )
}
