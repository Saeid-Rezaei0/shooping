import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Search({products , Gridelist}) {
    const [searchtrem, setsearchtrem] = useState("")
    const filterProduct = products.filter((product) => product.name.toLowerCase().includes(searchtrem.toLowerCase()));
    return (
    <div className='widget widget-search'>
    <form className='search-wrapper mb-3 '>
        <input type="text" name="search" id="search" placeholder='جستجوی محصول'    defaultValue={searchtrem} onChange={(e)=> setsearchtrem(e.target.value)}/>
    <button type='submit'>
    <i class="icofont-search-2"></i>
    </button>
    </form>


    <div>
        {searchtrem && filterProduct.map(product => (
            <Link key={product.id} to={`/shop/${product.id}`}>
                <div className="d-flex gap-3 p-2" style={{overflow: "hidden"}}>
                    <div>
                        <div className="pro-thumb h-25">
                            <img src={product.img} alt={product.img} width={70} className='flex-{grow|shrink}-0'/>
                        </div>
                    </div>
                    <div className="product-content">
                    <p>
                    <Link ro={`/shop/${product.id}`} style={{fontSize: "0.9rem"}}>{product.name}</Link>
                    </p>
                    <h6>{product.price} <span style={{fontSize:"0.7rem"}}>هزار تومان</span></h6>
                    </div>
                </div>
            </Link>
        ))}
    </div>
    </div>
  )
}

export default Search