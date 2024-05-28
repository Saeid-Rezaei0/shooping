import React from 'react'
import Sidebar from './compones/Sidebar'
import StykeContent from './StykeContent'

function Styke() {
  return (
    <div className='row'>
        <div className="col-10"><StykeContent /></div>
        <div className="col-2"><Sidebar /></div>
    </div>
  )
}

export default Styke