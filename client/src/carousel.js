import React, { useState, useEffect } from 'react';

const ScrollComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header style={{ backgroundColor: scrollPosition > 50 ? 'blue' : 'transparent' }}>
        Scroll to change header color
      </header>
      <main>
        <p>Content goes here...</p>
        {/* Add enough content to enable scrolling */}
      </main>
    </div>
 