import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsLetter">
      <h1>Get Exclusive offers On Your Email</h1>
      <p>Subcrie to our newletter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email Id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
