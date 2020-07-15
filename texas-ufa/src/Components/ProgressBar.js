import React, { useState, useEffect } from'react';
import './ProgressBar.css';

const ProgressBar = ({ target }) => {
    const [progressBar, setProgressBar] = useState(0);
    const scrollListener = () => {
      if (!target.current) {
        return;
      }
  
      const element = target.current;
      const totalHeight = element.clientHeight - element.offsetTop - (window.innerHeight);
      const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  
      if (windowScrollTop === 0) {
        return setProgressBar(0);
      }
  
      if (windowScrollTop > totalHeight) {
        return setProgressBar(100);
      }
     
      setProgressBar((windowScrollTop / totalHeight) * 100);
    };
    
    useEffect(() => {
      window.addEventListener("scroll", scrollListener);
      return () => window.removeEventListener("scroll", scrollListener);
    });
  
    return (
      <div 
        className={`progress-bar`} 
        style={{ 
          width: `${progressBar}vw`,
        }} 
      />
    );

};

export default ProgressBar;