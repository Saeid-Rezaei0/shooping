import React from 'react'
import ContentAdmin from './ContentAdmin'
import Sidebar from './compones/Sidebar'
import BlogSectionAdmin from './compones/BlogSectionAdmin'

function ADDminblog() {
  return (
    <div className="row">
    <div className="col-10"><BlogSectionAdmin /></div>
     <div className="col-2"> <Sidebar/></div>
    </div>
     
  )
}

export default ADDminblog