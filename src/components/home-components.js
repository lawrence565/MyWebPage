import React from "react";
import { Link } from "react-router-dom";
import CardComponents from "./project-components";

const HomeComponent = () => {
  return (
    <main>
      <div className="container">
        <div className="container-fluid">
          <section className="main-content">
            <div className="content-box">
              {/* Main-content, Introduction */}
              <div className="content">
                <h1>Lawrence Wu 吳秉耀</h1>
                <p>這是我的自我介紹網站測試</p>
                <br />
                <Link className="nav-button" to="/about">
                  前往關於頁面
                </Link>
              </div>

              {/* Thumbnail, Photo */}
              <div
                className="thumbnail"
                style={{ backgroundColor: "black", flexGrow: "1" }}
              >
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Lawrence's thumbnail"
                ></img>
              </div>
            </div>
          </section>

          {/* project cards */}
          <section className="projects-section">
            <div className="project-cards">
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
