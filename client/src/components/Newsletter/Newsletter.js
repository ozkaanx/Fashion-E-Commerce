import React from "react";
import "./newsletter.scss";
import { AiOutlineMail } from "react-icons/ai";
const Newsletter = () => {
  return (
    <div className="container mt-5" style={{maxWidth:1400}}>
      <div className="newslettter border border-black">
        <div className="news-icon">
          <AiOutlineMail />
        </div>
        <div className="news-text">
          <h1>Sign Up For Email & Get 25% Off</h1>
          <span>Subcribe to get information about products and coupons</span>
        </div>
        <div className="news-mail">
            <input type="text" placeholder="Enter your Email Adress"></input>
            <div className="news-button">
                <button>SUBSCRIBE</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
