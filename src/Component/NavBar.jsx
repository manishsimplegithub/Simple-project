import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="container-fluid nav_bg">
              <div className="row">
                <div className="col-12 mx-auto">
                  <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                      <a className="navbar-brand">Animation</a>
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                      >
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                          <li className="menu_active">
                            <a
                              className="nav-link active"
                              aria-current="page"
                              href="/"
                            >
                              Home
                            </a>
                          </li>
                          <li className="menu_active">
                            <a className="nav-link" href="Service">
                              Services
                            </a>
                          </li>
                          <li className="menu_active">
                            <a className="nav-link" href="About">
                              About
                            </a>
                          </li>
                          <li className="menu_active">
                            <a className="nav-link" href="Contact">
                              Contact
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
