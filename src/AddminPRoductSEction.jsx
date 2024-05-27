import React from 'react'
import ContentAdmin from './ContentAdmin'
import Sidebar from './compones/Sidebar';

function AddminPRoductSEction() {
  return (
    <div className="row">
    <div className="col-10"><ContentAdmin /></div>
     <div className="col-2"> <Sidebar/></div>
    </div>
     
    )
} 

export default AddminPRoductSEction;