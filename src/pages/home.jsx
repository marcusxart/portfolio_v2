import styled from "styled-components";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <h1 className="stack" style={{ "--stacks": "3" }}>
          <span style={{ "--index": "0" }}>I&apos;m Chinonso Emerenwa</span>
          <span style={{ "--index": "1" }}>I&apos;m Chinonso Emerenwa</span>
          <span style={{ "--index": "2" }}>I&apos;m Chinonso Emerenwa</span>
        </h1>
        <p>
          <Typewriter
            options={{
              strings: [
                "Full stack javascript developer.",
                "Based in Nigeria.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
      </Wrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
  padding-bottom: 20px;
`;

const Wrapper = styled.div`
  text-align: center;
  h1 {
    font-weight: 700;
    text-transform: uppercase;
    color: var(--link-text);
    &.stack span {
      letter-spacing: 0.04em;
      font-size: 52px;
    }
  }
  p {
    margin-top: 8px;
    font-size: 13px;
  }
`;
