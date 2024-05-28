import React from 'react'
import Sidebar from './compones/Sidebar'
import ADminComment from './ADminComment'
import AdviseContent from './compones/AdviseContent'

function Adminadvise() {
  return (
    <div className='row'>
    <div className="col-10"><AdviseContent /></div>
    <div className="col-2"><Sidebar/></div>
</div>
  )
}

export default Adminadvise