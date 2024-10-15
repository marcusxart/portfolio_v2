import styled from "styled-components";

const NotFound = () => {
  return (
    <Container>
      <div>
        <h1
          className="glitch"
          data-text="
        404"
        >
          404
        </h1>
        <p>Page not found.</p>
      </div>
    </Container>
  );
};

export default NotFound;
const Container = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
  padding: 117px 40px 117px;
  height: 100dvh;

  div {
    text-align: center;
    h1 {
      &.glitch,
      &.glitch::before,
      &.glitch::after {
        font-size: 72px;
      }
    }
    p {
      font-size: 16px;
    }
  }
`;
