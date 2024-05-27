import React, { useContext } from 'react';
import { FaBox, FaShoppingCart, FaUsers, FaBlog } from 'react-icons/fa';
import CountUp from 'react-countup';
import ApiContext from './ContexApi';
import ContentAdmin from './ContentAdmin';
import ChartAdmin from './ChartAdmin';

function AdminHome() {
  const context = useContext(ApiContext);
  const { product, blog, users } = context;
  const mode = 'light';
  console.log(users);

  return (
    <div className='container'>
      <div className="row mb-4 text-center container " style={{ marginTop: '-2rem' }}>
        <div className="col-md-3 border-yellow col-sm-6 col-12 mb-4 shadow g-3 ">
          <div className={` border p-4 rounded-xl ${mode === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'} shadow-sm`}>
            <div className="text-purple-500 color_Blue mb-3">
              <FaBox size={50} />
            </div>
            <h2 className="title-font font-medium color_Blue h3 mb-2">
              <CountUp end={product.length} duration={2} />
            </h2>
            <p className="text-purple-500 font-bold">همه محصولات</p>
          </div>
        </div>
        <div className="col-md-3 border-yellow col-sm-6 col-12 mb-4 shadow g-3 ">
          <div className={`border p-4 rounded-xl ${mode === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'} shadow-sm`}>
            <div className="text-purple-500 color_Blue mb-3">
              <FaShoppingCart size={50} />
            </div>
            <h2 className="title-font font-medium h3 mb-2">
              <CountUp end={0} duration={2} />
            </h2>
            <p className="text-purple-500 font-bold">سفارش ها</p>
          </div>
        </div>
        <div className="col-md-3 border-yellow col-sm-6 col-12 mb-4 shadow g-3 ">
          <div className={`border p-4 rounded-xl ${mode === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'} shadow-sm`}>
            <div className="text-purple-500 color_Blue mb-3">
              <FaUsers size={50} />
            </div>
            <h2 className="title-font font-medium h3 mb-2">
              <CountUp end={users.length} duration={2} />
            </h2>
            <p className="text-purple-500 font-bold">کاربران</p>
          </div>
        </div>
        <div className="col-md-3 border-yellow col-sm-6 col-12 mb-4 shadow g-3 ">
          <div className={`border p-4 rounded-xl ${mode === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'} shadow-sm`}>
            <div className="text-purple-500 color_Blue mb-3">
              <FaBlog size={50} />
            </div>
            <h2 className="title-font font-medium h3 mb-2">
              <CountUp end={blog.length} duration={2} />
            </h2>
            <p className="text-purple-500 font-bold">همه وبلاگ ها</p>
          </div>
        </div>
      </div>
      <ChartAdmin />
    </div>
  );
}

export default AdminHome;
