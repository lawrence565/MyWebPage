import React from "react";
import { Link } from "react-router-dom";

const NavComponent = () => {
  return (
    <div>
      <nav>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid" style={{ height: "5vh" }}>
            {/* Normal NavBar */}
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    首頁
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    關於
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profolio">
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
                      <Link className="dropdown-item" to="/">
                        首頁
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/about">
                        關於
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/profolio">
                        作品集
                      </Link>
                    </li>
                    {/* <li>
                      <hr class="dropdown-divider" />
                    </li> */}
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
