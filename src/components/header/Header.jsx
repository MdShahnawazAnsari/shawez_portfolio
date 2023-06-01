import React, { useState, useEffect } from "react";
import "./Header.scss";
const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  // const location = useLocation();

  const controlNavbar = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 200 && !mobileMenu) {
      if (window.scrollY > lastScrollY) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  // to get scroll in y axis value
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const openMobileMenu = () => {
    setMobileMenu(true);
  };

  const menuItems = [
    { title: "Intro", index: 0, link: "#intro" },
    { title: "Skills", index: 1, link: "#skills" },
    { title: "Projects", index: 2, link: "#projects" },
    { title: "Contact", index: 3, link: "#contact" },
  ];
  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <div className="contentWrapper">
        <div className="logo">
          <a href="/" className="logo">
            <img src="/logo.svg" alt="logo" />
          </a>
        </div>
        <ul className="menuItems">
          {menuItems.map((item) => (
            <li key={item.index} onClick={() => setMobileMenu(false)}>
              <a
                style={{
                  "--i": item.index,
                  animationDelay: `calc(0.2s * var(--i))`,
                }}
                className="menuItem"
                href={item.link}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobileMenuItems">
          {mobileMenu ? (
            <i
              className="fa-solid fa-xmark"
              onClick={() => {
                setMobileMenu(false);
              }}
            />
          ) : (
            <i className="fa-solid fa-bars" onClick={openMobileMenu} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
