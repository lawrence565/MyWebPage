import React from "react";
import "../style/navbar.css";
import { Link } from "react-router-dom";

const NavComponent = () => {
  const rootPath = "/MyWebPage";

  return (
    <div>
      <nav>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid" style={{ height: "5vh" }}>
            {/* Normal NavBar */}
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
<<<<<<< HEAD:components/Nav-components.js
<<<<<<< HEAD:components/Nav-components.js
                  <Link className="nav-link active" to={rootPath}>
=======
                  <Link className="nav-link active" to="./">
>>>>>>> 95cb4c79 (This is the test version at 02/12):src/components/nav-components.js
=======
                  <Link className="nav-link active" to={rootPath}>
>>>>>>> test:src/components/nav-components.js
                    首頁
                  </Link>
                </li>
                <li className="nav-item">
<<<<<<< HEAD:components/Nav-components.js
<<<<<<< HEAD:components/Nav-components.js
                  <Link className="nav-link" to={`${rootPath}/about`}>
=======
                  <Link className="nav-link" to="./about">
>>>>>>> 95cb4c79 (This is the test version at 02/12):src/components/nav-components.js
=======
                  <Link className="nav-link" to={`${rootPath}/about`}>
>>>>>>> test:src/components/nav-components.js
                    關於
                  </Link>
                </li>
                <li className="nav-item">
<<<<<<< HEAD:components/Nav-components.js
<<<<<<< HEAD:components/Nav-components.js
                  <Link className="nav-link" to={`${rootPath}/profolio`}>
=======
                  <Link className="nav-link" to="./profolio">
>>>>>>> 95cb4c79 (This is the test version at 02/12):src/components/nav-components.js
=======
                  <Link className="nav-link" to={`${rootPath}/profolio`}>
>>>>>>> test:src/components/nav-components.js
                    作品集
                  </Link>
                </li>
              </ul>
            </div>

            {/* Hamberger Icon */}
            <div className="hambergurIcon navbar-nav me-auto mb-2 mb-lg-0">
              <ul>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      id="hamburgerIcon"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
                    />
                  </a>
                  <ul
                    className="dropdown-menu"
                    style={{ backgroundColor: "lightgray" }}
                  >
                    <li>
                      <Link className="dropdown-item" to="./">
                        首頁
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="./about">
                        關於
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="./profolio">
                        作品集
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </nav>
    </div>
  );
};

export default NavComponent;