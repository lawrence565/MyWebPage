import React from "react";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  return (
    <main>
      <div className="container">
        <div className="container-fluid">
          <p>這是我的自我介紹網站測試</p>
          <Link className="nav-button" to="/about">
            前往關於頁面
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HomeComponent;
