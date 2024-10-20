import { Link, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import classnames from "classnames";
import Button from "./button";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

const AppMainLayout = () => {
  const navLinks = ["home", "about", "portfoilo"];
  const [toggle, setToggle] = useState(false);
  const date = new Date();

  const socials = [
    {
      value: "https://www.linkedin.com/in/chinonso-emerenwa/",
      icon: FaLinkedin,
    },
    { value: "https://github.com/marcusxart", icon: FaGithub },
    // { value: "/", icon: FaXTwitter },
  ];
  const { pathname } = useLocation();

  useEffect(() => {
    setToggle(false);
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return (
    <Container>
      <div className="line line-1"></div>
      <div className="line line-2"></div>
      <div className="line line-3"></div>
      <div className="line line-4"></div>
      <Nav>
        <div className="nav_wrapper">
          <Link className="logo">Chinonso.</Link>
          <ul>
            {navLinks?.map((link) => (
              <li
                key={link}
                className={classnames({
                  active:
                    (link === "home" && pathname === "/") ||
                    pathname.includes(link),
                })}
              >
                <Link to={link === "home" ? "/" : `/${link}`}>{link}</Link>
              </li>
            ))}
            <li>
              <Button
                to="/contacts"
                className={classnames("btn", {
                  active: pathname.includes("contacts"),
                })}
                text="Contacts"
              />
            </li>
          </ul>
          <div className="menu">
            <Hamburger toggled={toggle} toggle={setToggle} />
          </div>
        </div>
        {toggle && (
          <MobileList>
            {navLinks?.map((link) => (
              <li
                key={link}
                className={classnames({
                  active:
                    (link === "home" && pathname === "/") ||
                    pathname.includes(link),
                })}
              >
                <Link to={link === "home" ? "/" : `/${link}`}>{link}</Link>
              </li>
            ))}
            <li>
              <Button
                to="/contacts"
                className={classnames("btn", {
                  active: pathname.includes("contacts"),
                })}
                text="Contacts"
              />
            </li>
          </MobileList>
        )}
      </Nav>
      <Footer>
        <p>&copy; {date.getFullYear()} Chinonso Emerenwa</p>
        <ul>
          {socials?.map((social, key) => (
            <li key={key}>
              <Link to={social.value} target="_blank">
                <social.icon size="20px" />
              </Link>
            </li>
          ))}
        </ul>
      </Footer>
      <Outlet />
    </Container>
  );
};

export default AppMainLayout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100dvh;
  .line {
    position: fixed;
    z-index: 11;
    background-color: #26262d;
  }
  .line-1 {
    left: 0;
  }
  .line-2 {
    right: 0;
  }
  .line-3 {
    top: 0;
  }
  .line-4 {
    bottom: 0;
  }
  .line-1,
  .line-2 {
    width: 30px;
    top: 0;
    height: 100dvh;
  }
  .line-3,
  .line-4 {
    width: 100%;
    left: 0;
    right: 0;
    height: 30px;
  }
`;

const Nav = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  background: var(--body-bg);
  width: 100%;
  padding: 60px 65px 15px;

  .logo {
    color: var(--link-text);
    font-weight: 500;
    font-size: 20px;
    font-family: "Lobster", sans-serif;
  }

  .nav_wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .menu {
      .hamburger-react:hover {
        div {
          div {
            background-color: var(--accent) !important;
          }
        }
      }
    }
    & > ul {
      display: none;
      gap: 50px;
      align-items: center;

      li {
        text-transform: capitalize;
        font-size: 13px;
        transition: var(--smooth);
        color: var(--link-text);
        &.active {
          color: var(--accent);
        }
        &:hover {
          color: var(--accent);
        }
      }
    }
  }

  @media screen and (min-width: 840px) {
    .nav_wrapper {
      .menu {
        display: none;
      }
      & > ul {
        display: flex;
      }
    }
  }
`;

const MobileList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  align-items: center;

  li {
    text-transform: capitalize;
    font-size: 13px;
    transition: var(--smooth);
    color: var(--link-text);
    &.active {
      color: var(--accent);
    }
    &:hover {
      color: var(--accent);
    }
  }

  @media screen and (min-width: 840px) {
    display: none;
  }
`;

const Footer = styled.footer`
  z-index: 10;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px 65px 60px;
  display: flex;
  background: var(--body-bg);
  align-items: center;
  justify-content: space-between;
  width: 100%;
  > p {
    font-size: 11px;
    color: #999;
    display: none;
    @media screen and (min-width: 840px) {
      display: block;
    }
  }
  > ul {
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: center;
    width: 100%;
    @media screen and (min-width: 840px) {
      justify-content: flex-start;
      width: fit-content;
    }
    svg {
      path {
        transition: var(--smooth);
      }
    }
    svg:hover {
      path {
        fill: var(--accent);
      }
    }
  }
`;
