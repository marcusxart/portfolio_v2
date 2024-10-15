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
  padding: 117px 40px 96px;

  .stack {
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr;
  }

  .stack span {
    font-weight: bold;
    grid-row-start: 1;
    grid-column-start: 1;
    --stack-height: calc(100% / var(--stacks) - 1px);
    --inverse-index: calc(calc(var(--stacks) - 1) - var(--index));
    --clip-top: calc(var(--stack-height) * var(--index));
    --clip-bottom: calc(var(--stack-height) * var(--inverse-index));
    clip-path: inset(var(--clip-top) 0 var(--clip-bottom) 0);
    animation: stack 340ms cubic-bezier(0.46, 0.29, 0, 1.24) 1 backwards
        calc(var(--index) * 120ms),
      glitch 2s ease infinite 2s alternate-reverse;
  }

  .stack span:nth-child(odd) {
    --glitch-translate: 8px;
  }
  .stack span:nth-child(even) {
    --glitch-translate: -8px;
  }

  @keyframes stack {
    0% {
      opacity: 0;
      transform: translateX(-50%);
      text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
    }
    60% {
      opacity: 0.5;
      transform: translateX(50%);
    }
    80% {
      transform: none;
      opacity: 1;
      text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
    }
    100% {
      text-shadow: none;
    }
  }

  @keyframes glitch {
    0% {
      text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
      transform: translate(var(--glitch-translate));
    }
    2% {
      text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
    }
    4%,
    100% {
      text-shadow: none;
      transform: none;
    }
  }
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
