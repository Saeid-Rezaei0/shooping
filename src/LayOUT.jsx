import React from 'react'
import Navitem from './compones/Navitem'
import Footer from './home/Footer'

function LayOUT({children}) {
  return (
    <div>
        <Navitem />
        {children}
        <Footer />
    </div>
  )
}

export default LayOUT