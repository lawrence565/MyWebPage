import React, { useState } from "react";
import "../style/style.css";
import { Link } from "react-router-dom";
import CardComponents from "./Event-Card-components";
import PopupComponent from "./Popup-component";

const HomeComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const setOpenCondic = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  return (
    <main>
      <div className="container">
        <div className="container-fluid">
          {/* state 測試環節
          <div className="test">
            <p>這邊是測試環節</p>
            {isOpen && <h1>開啟</h1>}
            {!isOpen && <h1>關閉</h1>}
            <button className="btn btn-primary" onClick={setOpenCondic}>
              state 測試
            </button>
          </div> */}
          <section className="main-content">
            <div className="content-box">
              {/* Main-content, Introduction */}
              <div className="main-content">
                <div className="title">
                  <h1>Lawrence Wu</h1>
                  <h1>吳秉耀</h1>
                </div>

                <p>
                  這是我的自我介紹網站測試 這是我的自我介紹網站測試
                  這是我的自我介紹網站測試 這是我的
                  <span style={{ color: "blue" }}>自我介紹</span>
                  網站測試 這是我的自我介紹網站測試 這是我的自我介紹網站測試
                  <br />
                </p>
                <div
                  style={{
                    width: "60%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Link className="btn btn-primary" to="/about">
                    前往關於頁面
                  </Link>
                </div>
              </div>

              {/* Thumbnail, Photo */}
              <div className="thumbnail-container">
                <div className="thumbnail-bg">
                  <img src="/images/icon.jpg" alt="Lawrence's thumbnail"></img>
                </div>
              </div>
            </div>
          </section>

          {/* project cards */}
          <section className="events-section">
            <div className="event-cards">
              <CardComponents
                className="card"
                name="Spaceport 2022"
                description="This is an event held during 2022/10/07 ~ 2022/10/10"
                setOpenCondic={setOpenCondic}
              ></CardComponents>
              <CardComponents
                className="card"
                name="Master Cup 2022"
                description="This is an event held during 2022/10/15 ~ 2022/12/25"
                setOpenCondic={setOpenCondic}
              ></CardComponents>
              <CardComponents
                className="card"
                name="GQ Style Festival"
                description="This is an event held during 2023/08/05 ~ 2023/08/06"
                setOpenCondic={setOpenCondic}
              ></CardComponents>
              <CardComponents
                className="card"
                name="Spaceport 2022"
                description="This is an event held during 2023/09/02 ~ 2022/11/18"
                setOpenCondic={setOpenCondic}
              ></CardComponents>
              <CardComponents
                className="card"
                name="Cooler Master X SF 6"
                description="This is an event held during 2023/09/15 ~ 2023/11/16"
                setOpenCondic={setOpenCondic}
              ></CardComponents>
              <CardComponents
                className="card"
                name="Macau GP"
                description="This is an event held during 2023/11/14 ~ 2022/11/20"
                setOpenCondic={setOpenCondic}
              ></CardComponents>
              <CardComponents
                className="card"
                name="Spaceport 2022"
                description="This is an event held during 2023/09/02 ~ 2022/11/18"
                setOpenCondic={setOpenCondic}
              ></CardComponents>
            </div>
          </section>
        </div>
      </div>
      {isOpen && <PopupComponent setOpenCondic={setOpenCondic} />}
    </main>
  );
};

export default HomeComponent;
