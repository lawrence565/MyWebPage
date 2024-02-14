import React from "react";
import "../style/footer.css";

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer-div">
        <div className="left-footer">
          <div className="icons">
            <div className="contact-logo">
              <a
                href="https://www.facebook.com/lawrence.wu.3910/"
                target="_blank"
              >
                <img
                  id="facebook"
                  src="/images/logos/fb_logo.png"
                  alt="Facebook-Logo"
                />
              </a>
            </div>
            <div className="contact-logo">
              <a href="mailto:lawrence891106@gmail.com" target="_blank">
                <img
                  id="Gmail"
                  src="/images/logos/Gmail-logo.png"
                  alt="Gmail-Logo"
                />
              </a>
            </div>
            <div className="contact-logo">
              <a href="https://github.com/lawrence565" target="_blank">
                <img
                  id="GitHub"
                  src="/images/logos/GitHub_logo.png"
                  alt="GitHub-Logo"
                />
              </a>
            </div>
            <div className="contact-logo">
              <a
                href="https://www.linkedin.com/in/秉耀-吳-a73822225/"
                target="_blank"
              >
                <img
                  id="twitter"
                  src="/images/logos/linkedin-logo.svg"
                  alt="Twitter-Logo"
                />
              </a>
            </div>
          </div>
          <div className="contact-me">
            <h3>或 者 聯 絡 我 →</h3>
          </div>
        </div>
        <div className="middle-footer" style={{ width: "5vw" }}></div>

        <div className="right-footer sending">
          <h3>提出問題</h3>
          <div className="basic-info">
            <div className="name">
              <input type="text" name="name" placeholder="姓名："></input>
            </div>
            <div style={{ width: "20px" }}></div>
            <div className="phone">
              <input type="tel" name="phone" placeholder="電話："></input>
            </div>
          </div>
          <div className="email">
            <input type="email" name="email" placeholder="郵件："></input>
          </div>
          <div className="message">
            <input type="text" name="email" placeholder="請留下訊息："></input>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
