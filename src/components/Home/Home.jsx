import React, { useEffect } from 'react';
import './Home.css';

function Home() {
  useEffect(() => {
    const h1Elements = document.querySelectorAll('.Home-h1 h1');
    h1Elements.forEach((h1, index) => {
      h1.style.animationDelay = `${index * 350}ms`; // Reduce delay to 250ms
    });
  }, []);

  return (
    <div className="Home">
      <div className="Home-container">
        <div className="Home-h1">
          <h1>THE GENERAL PRACTICE</h1>
          <h1>Seamless private GP services</h1>
          <h1>for the whole family</h1>
          <h1>______</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;