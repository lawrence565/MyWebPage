import React from "react";
import { Link } from "react-router-dom";
import CardComponents from "./Event-Card-components";

const HomeComponent = () => {
  return (
    <main>
      <div className="container">
        <div className="container-fluid">
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
              ></CardComponents>
              <CardComponents
                className="card"
                name="Master Cup 2022"
                description="This is an event held during 2022/10/15 ~ 2022/12/25"
              ></CardComponents>
              <CardComponents
                className="card"
                name="GQ Style Festival"
                description="This is an event held during 2023/08/05 ~ 2023/08/06"
              ></CardComponents>
              <CardComponents
                className="card"
                name="Spaceport 2022"
                description="This is an event held during 2023/09/02 ~ 2022/11/18"
              ></CardComponents>
              <CardComponents
                className="card"
                name="Cooler Master X SF 6"
                description="This is an event held during 2023/09/15 ~ 2023/11/16"
              ></CardComponents>
              <CardComponents
                className="card"
                name="Macau GP"
                description="This is an event held during 2023/11/14 ~ 2022/11/20"
              ></CardComponents>
              <CardComponents
                className="card"
                name="Spaceport 2022"
                description="This is an event held during 2023/09/02 ~ 2022/11/18"
              ></CardComponents>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default HomeComponent;
