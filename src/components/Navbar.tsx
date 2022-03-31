import React, { useState } from "react";
import { Link } from "gatsby";

export default function Navbar() {
  var [navBarActiveClass, setNavBarActiveClass] = useState<string>("");
  const toggleHamburger = () => {
    setNavBarActiveClass(prev => prev == "" ? "is-active" : "");
  }

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="is-flex is-justify-content-space-between" style={{width: "100%"}}>
          <div className="is-flex is-align-items-center is-justify-content-space-between">
            <Link
              to="/"
              className="navbar-item"
              title="Logo"
              style={{ fontSize: "1.5rem", fontFamily: "monaco,inconsolata,consolas,Courier,monospace" }}>
                batukan.me
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => toggleHamburger()}
              onClick={() => toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/portfolio">
                Portfolio
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

