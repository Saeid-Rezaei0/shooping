import React from 'react'
import Data from "../products.json"
export default function ShopCategory({
    filteritem,
    setitem,
    menuItem,
    setproducts,
    selectcategory
}) {
    return (
       <>
       <div className="widget-header rtl">
        <h5 className='ms-2'>دسته بندی ها</h5>
       </div>
       <div className='rtl'>
        <button
         onClick={()=> setproducts(Data)}
        className={` m-2 ${selectcategory == "All" ? "bg-warning" : "" }`}>همه</button>
        {
            menuItem.map((val, id)=> {
                return (
                <button
                onClick={()=> filteritem(val)}
                className={`m-2 ${selectcategory === val ? "bg-warning" : "" }`} key={val.id}>{val}</button>
               )
            })
        }
       </div>
       </>
    )
}
