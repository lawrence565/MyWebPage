import React from "react";
import { Link } from "react-router-dom";

const InfoComponents = () => {
  return (
    <div>
      <div>
        <h1>這裡是關於 Lawrence 的網站</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          expedita reiciendis, officiis earum modi aperiam cupiditate
          perspiciatis! Nam omnis officia alias architecto illo, totam corrupti!
          Molestiae exercitationem deserunt obcaecati optio!
        </p>
        <Link className="btn btn-primary" to="/">
          回到首頁
        </Link>
      </div>
    </div>
  );
};

export default InfoComponents;
