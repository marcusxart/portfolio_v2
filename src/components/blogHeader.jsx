import { BsFillMouse2Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BlogHeader = ({ title }) => {
  return (
    <Container>
      <Wrapper>
        <span>14 June 2016</span>
        <h1>{title}</h1>
        <p>
          <Link to="/">Home</Link> / <span>Blog</span>
        </p>
      </Wrapper>{" "}
      <span>
        <BsFillMouse2Fill size="24px" />
      </span>
    </Container>
  );
};

export default BlogHeader;

const Container = styled.header`
  padding: 60px 40px 117px;
  height: 100dvh;
  width: 100%;
  display: grid;
  place-items: center;
  position: relative;

  > span {
    position: absolute;
    bottom: 100px;
    animation: bounce 3s infinite;
    svg {
      path {
        fill: var(--accent);
      }
    }
  }
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  > span {
    display: grid;
    width: fit-content;
    font-size: 11px;
    font-weight: 500;
    border: 1px solid var(--accent);
    color: var(--accent);
    padding: 0 5px;
    height: 20px;
    line-height: 18px;
    place-items: center;
  }
  h1 {
    letter-spacing: 0.04em;
    font-size: 60px;
    color: var(--link-text);
    font-weight: 700;
    text-transform: uppercase;
    max-width: 1020px;
  }

  p {
    font-size: 13px;
  }
`;
