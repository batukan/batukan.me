import React, { useState } from "react";
import { Link } from "gatsby";
import github from "../images/social/github.svg";

export default function Navbar() {
  var [navBarActiveClass, setNavBarActiveClass] = useState<string>("");
  const toggleHamburger = () => {
    setNavBarActiveClass(prev => prev ? "is-active" : "");
  }

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
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
            <Link
              to="/"
              className="navbar-item"
              title="Logo"
              style={{ fontSize: "1.5rem", fontFamily: "monaco,inconsolata,consolas,Courier,monospace" }}>
              batukan.me
            </Link>

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
          <div className="navbar-end has-text-centered">
            <a
              className="navbar-item"
              href="https://github.com/Trojaner/esozbek.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={github} alt="Github" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

