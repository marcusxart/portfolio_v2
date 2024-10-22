import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "../components/button";

const Home = () => {
  const info = [
    "Full stack JavaScript developer.",
    "Based in Nigeria.",
    "Enjoys exploring new technologies.",
  ];

  return (
    <Container>
      <Wrapper>
        <h1 className="glitch" data-text="I'm Chinonso Emerenwa">
          I&apos;m Chinonso Emerenwa
        </h1>
        <p>
          <Typewriter
            options={{
              strings: info,
              autoStart: true,
              loop: true,
            }}
          />
        </p>
        <Button
          text="Download CV"
          className="active"
          target="_blank"
          to="https://drive.google.com/file/d/1D3C8ywd5-v4ff0k1U9lKMs7ccnmZJhhk/view?usp=sharing"
        />
      </Wrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
  padding: 117px 40px 117px;
  height: 100dvh;
`;

const Wrapper = styled.div`
  text-align: center;
  p {
    font-size: 13px;
    margin-bottom: 24px;
  }
`;
