import React from "react";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer-div">
        <div className="icons">
          <ul className="social-media">
            <li className="logo">
              <div className="contact-info">
                <img id="facebook" src="./images/fb_logo.png" href="" />
                <p>Lawrence_Wu</p>
              </div>
            </li>
            <li className="logo">
              <div className="contact-info">
                <img id="Gmail" src="./images/Gmail-logo.png" href="" />
                <p>Lawrence891106@gmail.com</p>
              </div>
            </li>
            <li className="logo">
              <div className="contact-info">
                <img id="instagram" src="./images/ig_logo.png" href="" />
                <p>PY_Wuuuuuuuu</p>
              </div>
            </li>
            <li className="logo">
              <div className="contact-info">
                <img id="twitter" src="./images/x_logo.jpg" href="" />
                <p>HaHa565</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="sending">
          <h1>提出問題</h1>
          <div className="basic-info">
            <div className="name">
              <label htmlFor="name">姓名：</label>
              <input name="name"></input>
            </div>
            <div className="phone">
              <label htmlFor="phone">電話：</label>
              <input name="phone"></input>
            </div>
          </div>
          <div className="email">
            <label htmlFor="email">郵件：</label>
            <input name="email"></input>
          </div>
          <div className="message">
            <label htmlFor="message">訊息：</label>
            <input name="message"></input>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
