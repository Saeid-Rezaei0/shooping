import React from 'react';
import AdminHome from './AdminHome';
import Sidebar from './compones/Sidebar';
function Dashboard() {
return (
        <>
            <div className="d-flex justify-content-end p-3">
            </div>
          <AdminHome />
          {/* <div className="row">
          <div className="col-10"></div>
           <div className="col-2"> <Sidebar/></div>
          </div> */}
           
        </>
    );
}

export default Dashboard;
