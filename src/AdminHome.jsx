import React, { useContext, useEffect, useState } from 'react';
import { FaBox, FaShoppingCart, FaUsers, FaBlog } from 'react-icons/fa';
import CountUp from 'react-countup';
import ApiContext from './ContexApi';
import ContentAdmin from './ContentAdmin';
import ChartAdmin from './ChartAdmin';
import Sidebar from './compones/Sidebar';

function AdminHome() {
  const context = useContext(ApiContext);
  const { product, blog, users, order, steke } = context;
  const [comment, setcomment] = useState([])
  const mode = 'light';
  console.log(users);
  useEffect(()=>{
    fetch("http://localhost:3000/teket")
    .then(res => res.json())
    .then(data=> setcomment(data))
  }, [])

  

  return (
<div div className='row'>
<div className="col-10">
<div className='container'>
<div className="row mb-4 pt-2 text-center justify-content-center align-items-center container flex-wrap" style={{ marginTop: '-2rem' }}>
  <div className="col-6 col-md-4    border-yellow col-sm-6 col-12 mb-4 shadow">
    <div className={`border  rounded-xl ${mode === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'} shadow-sm`}>
      <div className="text-purple-500 color_Blue mb-3">
        <FaBox size={50} />
      </div>
      <h2 className="title-font font-medium color_Blue h3 mb-2">
        <CountUp end={product.length} duration={2} />
      </h2>
      <p className="text-purple-500 font-bold">همه محصولات</p>
    </div>
  </div>

  <div className="col-6 col-md-4    border-yellow col-sm-6 col-12 mb-4 shadow">
    <div className={`border  rounded-xl ${mode === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'} shadow-sm`}>
      <div className="text-purple-500 color_Blue mb-3">
        <FaBox size={50} />
      </div>
      <h2 className="title-font font-medium color_Blue h3 mb-2">
        <CountUp end={comment.length} duration={2} />
      </h2>
      <p className="text-purple-500 font-bold">نظرات کاربران</p>
    </div>
  </div>
  <div className="col-6 col-md-4    border-yellow col-sm-6 col-12 mb-4 shadow">
    <div className={`border  rounded-xl ${mode === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'} shadow-sm`}>
      <div className="text-purple-500 color_Blue mb-3">
        <FaShoppingCart size={50} />
      </div>
      <h2 className="title-font font-medium h3 mb-2">
        <CountUp end={order.length} duration={2} />
      </h2>
      <p className="text-purple-500 font-bold">سفارش ها</p>
    </div>
  </div>
 
</div>
      <ChartAdmin />
    </div>
</div>
<div className="col-2"><Sidebar /></div>
    </div>
  );
}

export default AdminHome;
