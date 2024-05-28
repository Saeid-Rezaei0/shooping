import React from 'react'
import CommentAdminContent from './CommentAdminContent'
import Sidebar from './compones/Sidebar'

function ADminComment() {
  return (
    <div className='row'>
        <div className="col-10"><CommentAdminContent /></div>
        <div className="col-2"><Sidebar /></div>
    </div>
  )
}

export default ADminComment