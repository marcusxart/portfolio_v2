import { Link, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import classnames from "classnames";
import Button from "./button";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const AppMainLayout = () => {
  const navLinks = ["home", "resume", "portfoilo", "project", "blog"];
  const date = new Date();
  const socials = [
    { value: "/", icon: <FaLinkedin /> },
    { value: "/", icon: <FaGithub /> },
    { value: "/", icon: <FaXTwitter /> },
  ];
  const { pathname } = useLocation();

  return (
    <Container>
      <FixedContainer>
        <Nav>
          <Link className="logo">Chinonso.Dev.</Link>
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
                <Link to={`/${link}`}>{link}</Link>
              </li>
            ))}
            <li>
              <Button
                className={classnames("btn", {
                  active: pathname.includes("contact"),
                })}
                text="Contact"
              />
            </li>
          </ul>
        </Nav>
        <Footer>
          <p>&copy; {date.getFullYear()} Chinonso Emerenwa.</p>
          <ul>
            {socials?.map((social, key) => (
              <li key={key}>
                <Link to={social.value} target="_blank">
                  {social.icon}
                </Link>
              </li>
            ))}
          </ul>
        </Footer>
      </FixedContainer>
      <Outlet />
    </Container>
  );
};

export default AppMainLayout;

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100dvh;
`;

const FixedContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  border: 30px solid #26262d;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  padding: 0 35px;
`;

const Nav = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0 15px;
  .logo {
    color: var(--link-text);
    font-weight: 700;
  }
  & > ul {
    display: flex;
    gap: 50px;
    align-items: center;

    li {
      text-transform: capitalize;
      font-size: 13px;
      color: var(--link-text);
      &.active {
        color: var(--accent);
      }
      &:hover {
        color: var(--accent);
      }
    }
  }
`;

const Footer = styled.footer`
  padding: 15px 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  > p {
    font-size: 11px;
    color: #999;
  }
  > ul {
    display: flex;
    gap: 12px;
    align-items: center;
    svg:hover {
      path {
        fill: var(--accent);
      }
    }
  }
`;
