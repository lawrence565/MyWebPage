import React from "react";
import { Link } from "react-router-dom";

const InfoComponents = () => {
  return (
    <div>
      <div>
        <div className="container">
          <div className="container-fluid">
            <section className="main-content">
              <article>
                <h1>這裡是關於 Lawrence 的網站</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias expedita reiciendis, officiis earum modi aperiam
                  cupiditate perspiciatis! Nam omnis officia alias architecto
                  illo, totam corrupti! Molestiae exercitationem deserunt
                  obcaecati optio!
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias expedita reiciendis, officiis earum modi aperiam
                  cupiditate perspiciatis! Nam omnis officia alias architecto
                  illo, totam corrupti! Molestiae exercitationem deserunt
                  obcaecati optio!
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias expedita reiciendis, officiis earum modi aperiam
                  cupiditate perspiciatis! Nam omnis officia alias architecto
                  illo, totam corrupti! Molestiae exercitationem deserunt
                  obcaecati optio!
                </p>
              </article>
              <br />
              <Link className="btn btn-primary" to="/">
                回到首頁
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoComponents;
