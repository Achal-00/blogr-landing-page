import React, { useEffect, useState } from "react";

const width = screen.width;

export default function Navbar() {
  const [product, setProduct] = useState(false);
  const [company, setCompany] = useState(false);
  const [connect, setConnect] = useState(false);

  useEffect(() => {
    if (product) {
      document.querySelector(".product .mobile-links").style.display = "grid";
      document.querySelector(".product img").style.transform = "rotate(180deg)";
    } else {
      document.querySelector(".product .mobile-links").style.display = "none";
      document.querySelector(".product img").style.transform = "rotate(0deg)";
    }
  }, [product]);

  useEffect(() => {
    if (company) {
      document.querySelector(".company .mobile-links").style.display = "grid";
      document.querySelector(".company img").style.transform = "rotate(180deg)";
    } else {
      document.querySelector(".company .mobile-links").style.display = "none";
      document.querySelector(".company img").style.transform = "rotate(0deg)";
    }
  }, [company]);

  useEffect(() => {
    if (connect) {
      document.querySelector(".connect .mobile-links").style.display = "grid";
      document.querySelector(".connect img").style.transform = "rotate(180deg)";
    } else {
      document.querySelector(".connect .mobile-links").style.display = "none";
      document.querySelector(".connect img").style.transform = "rotate(0deg)";
    }
  }, [connect]);

  if (width <= 1024) {
    const [menu, setMenu] = useState(false);

    useEffect(() => {
      if (menu) {
        document.querySelector(".menu").src = "icon-close.svg";
        document.querySelector(".overlay").style.display = "flex";
      } else {
        document.querySelector(".menu").src = "icon-hamburger.svg";
        document.querySelector(".overlay").style.display = "none";
      }
    }, [menu]);

    return (
      <nav className="mobile-nav">
        <div>
          <img src="logo.svg" alt="logo" />
        </div>
        <div>
          <img
            src="icon-hamburger.svg"
            alt="menu"
            onClick={() => setMenu((prev) => !prev)}
            className="menu"
          />
        </div>
        <div className="overlay">
          <div className="product">
            <div className="header" onClick={() => setProduct((prev) => !prev)}>
              <p>Product</p>
              <div>
                <img src="icon-arrow-dark.svg" alt="arrow" className="arrow" />
              </div>
            </div>
            <div className="mobile-links">
              <p>Overview</p>
              <p>Pricing</p>
              <p>Marketplace</p>
              <p>Features</p>
              <p>Integrations</p>
            </div>
          </div>
          <div className="company">
            <div className="header" onClick={() => setCompany((prev) => !prev)}>
              <p>Company</p>
              <div>
                <img src="icon-arrow-dark.svg" alt="arrow" className="arrow" />
              </div>
            </div>
            <div className="mobile-links">
              <p>About</p>
              <p>Team</p>
              <p>Blog</p>
              <p>Careers</p>
            </div>
          </div>
          <div className="connect">
            <div className="header" onClick={() => setConnect((prev) => !prev)}>
              <p>Connect</p>
              <div>
                <img src="icon-arrow-dark.svg" alt="arrow" className="arrow" />
              </div>
            </div>
            <div className="mobile-links">
              <p>Contact</p>
              <p>Newsletter</p>
              <p>LinkedIn</p>
            </div>
          </div>
          <div className="line"></div>
          <div className="mobile-nav-btn-holder">
            <button>Login</button>
            <button>Sign Up</button>
          </div>
        </div>
      </nav>
    );
  } else {
    useEffect(() => {
      if (product) {
        setCompany(false);
        setConnect(false);
      }
    }, [product]);

    useEffect(() => {
      if (company) {
        setProduct(false);
        setConnect(false);
      }
    }, [company]);

    useEffect(() => {
      if (connect) {
        setProduct(false);
        setCompany(false);
      }
    }, [connect]);

    return (
      <nav className="desktop-nav">
        <div className="desktop-nav-left">
          <div>
            <img src="logo.svg" alt="logo" className="logo" />
          </div>
          <div className="desktop-links">
            <div className="product">
              <div
                className="header"
                onClick={() => setProduct((prev) => !prev)}
              >
                <p>Product</p>
                <div>
                  <img
                    src="icon-arrow-light.svg"
                    alt="arrow"
                    className="arrow"
                  />
                </div>
              </div>
              <div className="mobile-links">
                <p>Overview</p>
                <p>Pricing</p>
                <p>Marketplace</p>
                <p>Features</p>
                <p>Integrations</p>
              </div>
            </div>
            <div className="company">
              <div
                className="header"
                onClick={() => setCompany((prev) => !prev)}
              >
                <p>Company</p>
                <div>
                  <img
                    src="icon-arrow-light.svg"
                    alt="arrow"
                    className="arrow"
                  />
                </div>
              </div>
              <div className="mobile-links">
                <p>About</p>
                <p>Team</p>
                <p>Blog</p>
                <p>Careers</p>
              </div>
            </div>
            <div className="connect">
              <div
                className="header"
                onClick={() => setConnect((prev) => !prev)}
              >
                <p>Connect</p>
                <div>
                  <img
                    src="icon-arrow-light.svg"
                    alt="arrow"
                    className="arrow"
                  />
                </div>
              </div>
              <div className="mobile-links">
                <p>Contact</p>
                <p>Newsletter</p>
                <p>LinkedIn</p>
              </div>
            </div>
          </div>
        </div>
        <div className="desktop-nav-right">
          <div className="desktop-nav-btn-holder">
            <button>Login</button>
            <button>Sign Up</button>
          </div>
        </div>
      </nav>
    );
  }
}
