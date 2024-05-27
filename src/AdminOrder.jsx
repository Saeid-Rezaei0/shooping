import React from 'react'
import Sidebar from './compones/Sidebar'
import OrderDAtaAdmin from './OrderDAtaAdmin'

function AdminOrder() {
    return (
        <div className='row'>
            <div className="col-10"> <OrderDAtaAdmin /></div>
            <div className="col-2"><Sidebar /></div>
        </div>
    )
}

export default AdminOrder