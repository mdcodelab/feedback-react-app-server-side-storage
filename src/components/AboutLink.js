import React from 'react';
import { AiOutlineQuestion } from 'react-icons/ai';
import {Link} from "react-router-dom";

function AboutLink() {
  return (
    <div className="about-link">
      <Link to="/about" className="link">About</Link>
      <AiOutlineQuestion style={{color: "white"}}></AiOutlineQuestion>
    </div>
  );
}

export default AboutLink;
