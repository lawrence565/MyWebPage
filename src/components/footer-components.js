import React from "react";
import "../style/footer.css";

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer-div">
        <div className="icons">
          <ul className="social-media">
            <li className="logo">
              <div className="contact-info">
                <img
                  id="facebook"
                  src="/images/logos/fb_logo.png"
                  alt="Facebook-Logo"
                />
                <p>Lawrence_Wu</p>
              </div>
            </li>
            <li className="logo">
              <div className="contact-info">
                <img
                  id="Gmail"
                  src="/images/logos/Gmail-logo.png"
                  alt="Gmail-Logo"
                />
                <p>Lawrence891106@gmail.com</p>
              </div>
            </li>
            <li className="logo">
              <div className="contact-info">
                <img
                  id="instagram"
                  src="/images/logos/ig_logo.png"
                  alt="Instagram-Logo"
                />
                <p>PY_Wuuuuuuuu</p>
              </div>
            </li>
            <li className="logo">
              <div className="contact-info">
                <img
                  id="twitter"
                  src="/images/logos/x_logo.png"
                  alt="Twitter-Logo"
                />
                <p>HaHa565</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="sending">
          <h3>提出問題</h3>
          <div className="basic-info">
            <div className="name">
              <input name="name" placeholder="姓名："></input>
            </div>
            <div style={{ width: "20px" }}></div>
            <div className="phone">
              <input name="phone" placeholder="電話："></input>
            </div>
          </div>
          <div className="email">
            <input name="email" placeholder="郵件："></input>
          </div>
          <div className="message">
            <input name="message" placeholder="訊息："></input>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
