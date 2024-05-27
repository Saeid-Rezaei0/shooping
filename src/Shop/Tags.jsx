import React, { useContext } from 'react'
import ApiContext from '../ContexApi';
const title = "محبوب‌ترین برچسب‌ها";
function Tags() {
    const context = useContext(ApiContext);
    const { steke } = context;
    console.log(steke);
    return (
        <div className='widget widget-tags rtl'>
            <div className="widget-header">
                <h5 className='title'>{title}</h5>
            </div>
            <ul className="widget-wrapper">
                {
                    steke && steke.map((val, i) => (
                        <li key={i}><a href={val.link}>{val.text}</a></li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Tags;
