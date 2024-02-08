import React from "react";
import { Link } from "react-router-dom";

const profolio = () => {
  return (
    <main>
      <div>
        <div>
          <div className="container">
            <div className="container-fluid">
              <section className="main-content">
                <h1>作品集</h1>
                <Link className="btn btn-primary" to="/">
                  返回首頁
                </Link>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </main>
  );
};

export default profolio;
