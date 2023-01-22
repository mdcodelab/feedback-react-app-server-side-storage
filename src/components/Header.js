import React from 'react';
import { useGlobalContext } from '../context';



function Header() {
  const{feedback}=useGlobalContext();

const sum = feedback.reduce((acc, curr) => {
  return acc+curr.rating
}, 0)
const average=sum/feedback.length;

  return (
    <header className="header">
      <h1>Feedback UI</h1>
      <div className="results">
        <span>{feedback.length} reviews</span>
        <span>Average rating: {isNaN(average) ? 0 : average.toFixed(2)}</span>
      </div>
    </header>
  );
}

export default Header;
