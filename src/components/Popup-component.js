import React from "react";
import "../style/popup.css";

const PopupComponent = (props) => {
  const scrollTop = document.documentElement.scrollTop;

  return (
    <div className="popup-container" style={{ top: `${scrollTop}px` }}>
      <div className="popup-bg">
        <div className="banner-container">
          <span
            className="close"
            id="closePopupBtn"
            onClick={props.setOpenCondic}
          >
            &times;
          </span>
          <img
            className="banner"
            src="/images/spaceport.jpg"
            alt="Popup Content"
          />
        </div>
        <div className="event-detail">
          <article className="event-content">
            <h1 className="event-content">這是活動的名稱</h1>
            <p className="event-content">
              這邊是活動的內容巴拉巴拉這邊是活動的內容巴拉巴拉
              這邊是活動的內容巴拉巴拉這邊是活動的內容巴拉巴拉這邊是活動的內容巴拉巴拉這邊是活動的內容巴拉巴拉這邊是活動的內容巴拉巴拉這邊是活動的內容巴拉巴拉這邊是活動的內容巴拉巴拉這邊是活動的內容巴拉巴拉這邊是活動的內容巴拉巴拉這邊是活動的內容巴拉巴拉
            </p>
            <br />
            <h3 className="event-content">活動特點</h3>
            <p className="event-content">不知道要說啥但這活動超酷的</p>
            <br />
            <h3 className="event-content">這是活動的名稱</h3>
            <p className="event-content">
              這邊是活動的內容巴拉巴拉這邊是活動的內容巴拉巴拉
              這邊是活動的內容巴拉巴拉這邊是活動的內容巴拉巴拉這邊是這邊是活動的內容巴拉巴拉這邊是活動的內容巴拉巴拉
            </p>
            <br />
            <h3 className="event-content">這是活動的名稱</h3>
            <p className="event-content">
              這邊是活動的內容巴拉巴拉這邊是活動的內容巴拉巴拉內容巴拉巴拉這邊是活動的內容巴拉巴拉這邊是活動的內容巴拉巴拉這邊是活動的內容巴拉巴拉
            </p>
            <br />
          </article>
        </div>
      </div>
    </div>
  );
};

export default PopupComponent;
