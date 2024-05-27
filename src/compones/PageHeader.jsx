import React from 'react';
import { Link } from 'react-router-dom';
import LayOUT from '../LayOUT';

function PageHeader({ title, curPage }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScrollDown = () => {
    window.scrollBy({ top: 420, behavior: 'smooth' });
  };

  return (
      <div className='pageheader-section'>
      <div className="container">
        <div className="row">
          <div className='col-12'>
            <div className="pageHeader-content text-center">
              <h2 className='mb-4' style={{ fontSize: "2rem" }}>{title}</h2>
              <nav aria-label='breadcrumb'>
                <ol className='breadcrumb justify-content-center'>
                  <li><Link className="breadcrumb-item" to="/" className="me-2"> خانه </Link></li>
                  <li className="breadcrumb-item active" aria-current="page"> / {curPage}</li>
                </ol>
              </nav>
              <div onClick={handleScrollDown} className="scroll-down-icon">
             <div className="d-flex flex-column align-content-center">
             <i class="icofont-curved-down"></i>
             <i class="icofont-curved-down" style={{marginTop: "-2.1rem"}}></i>
             </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default PageHeader;
