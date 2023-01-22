import React from 'react';
import {Link} from "react-router-dom";

function About() {
  return (
    <div className="about">
      <h1>About US</h1>
      <p>This application help users to evaluate our products. Enjoy the app! Don't forget to live us your feedback!</p>
      <Link to="/" className="about-link">Back to Feedback</Link>
    </div>
  );
}

export default About;
