import React, { useState, useEffect } from 'react';

const GoUp = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Attach scroll event listener to show/hide the button
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`go-up ${showButton ? 'show' : ''}`}>
      <button onClick={scrollToTop}>
        <img
          src="https://static.igem.wiki/teams/4951/wiki/graphics/goup.svg"
          alt="Go Up"
        />
      </button>
    </div>
  );
};

export default GoUp;
