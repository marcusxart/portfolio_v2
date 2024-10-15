import { BsFillMouse2Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PageHeader = ({ title }) => {
  return (
    <Container>
      <Wrapper>
        <h1 className="glitch" data-text="About">
          {title}
        </h1>
        <p>
          <Link to="/">Home</Link> / <span>{title}</span>
        </p>
      </Wrapper>{" "}
      <span>
        <BsFillMouse2Fill size="24px" />
      </span>
    </Container>
  );
};

export default PageHeader;

const Container = styled.header`
  padding: 117px 40px 117px;
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

  p {
    font-size: 13px;
  }
`;
