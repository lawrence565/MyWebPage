import React from "react";
import { Link } from "react-router-dom";

const profolio = () => {
  return (
    <main>
      <div>
        <div>
          <h1>作品集</h1>
          <Link className="btn btn-primary" to="/">
            返回首頁
          </Link>
        </div>
      </div>
      <div></div>
    </main>
  );
};

export default profolio;
