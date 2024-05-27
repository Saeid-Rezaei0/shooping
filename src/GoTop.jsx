// GoTop.js
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const scrollToTop = () => {
  const scrollDuration = 2000;
  const scrollStep = -window.scrollY / (scrollDuration / 15);
  let start = null;

  const step = timestamp => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollBy(0, scrollStep);
    if (progress < scrollDuration) {
      window.requestAnimationFrame(step);
    } else {
      window.scrollTo(0, 0);
    }
  };

  window.requestAnimationFrame(step);
};

export default function GoTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {showButton && (
        <div className='gotop' onClick={scrollToTop}>
          <i className='icofont-swoosh-up'></i>
        </div>
      )}
    </div>
  );
}
