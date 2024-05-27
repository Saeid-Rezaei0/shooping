import React, { useEffect, useState, useContext } from 'react';
import { FaBox, FaUsers, FaShoppingCart, FaBlog } from 'react-icons/fa';
import DashboardTab from './DashboardTab';
import ApiContext from './ContexApi';
import Sidebar from './compones/Sidebar';
import Footer from './home/Footer';
function ContentAdmin() {
    const context = useContext(ApiContext)
    const {product, blog} = context 
    const [mode, setMode] = useState('light'); 
  return (
    <section className="text-gray-600 body-font mb-5">
    <div className="container px-5 mx-auto mb-5">

    </div>
    <DashboardTab />
</section>
)
}

export default ContentAdmin