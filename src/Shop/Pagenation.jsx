import React from 'react'

function Pagenation({ productPage, totalproduct, Pagenation, activepage }) { // اصلاحات این خط
    const pageNumbers = []
    for(let i = 1; i<= Math.ceil(totalproduct / productPage); i++){
        pageNumbers.push(i)
    }
    return (
        <ul className='default-pagination align-items-center lab-ul'>
            <li>
                <li onClick={()=> {
                     if(activepage  < pageNumbers.length){
                        Pagenation(activepage - 1)
                    }
                }
                }>
                    <i className='icofont-rounded-left'></i>
                </li>
               
            </li>
            
        {
            pageNumbers.map((number, i) => (
                <li key={i}  className={`page-item  ${number ===activepage ? "bg-warning" : ""}`} >
                    <button onClick={()=> Pagenation(number)} className='bg-transparent'>{number}</button>
                </li>
            ))
        }
        <li>
                <li  onClick={()=> {
                     if(activepage  < pageNumbers.length){
                        Pagenation(activepage - 1)
                    }
                }
                }>
                    <i className='icofont-rounded-right'></i>
                </li>
               
            </li>
    </ul>
    
    
    )
}

export default Pagenation
