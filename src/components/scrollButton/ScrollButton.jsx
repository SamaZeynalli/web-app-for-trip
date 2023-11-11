import React, { useEffect } from 'react';
import UpTo from '../IMG/Arrow_Up_SM.png';
import './scrollButton.css';

const ScrollToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    };
    
    useEffect(() => {
      const handleScroll = () => {
        const scrollButton = document.querySelector('.upTo');

        if (scrollButton) {
            if (window.scrollY > 100) {
                scrollButton.style.display = 'block';
              } else {
                scrollButton.style.display = 'none';
              }
            }
        };


        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="upTo" onClick={scrollToTop}>
      <button>
        <img src={UpTo} alt="Scroll to Top" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;