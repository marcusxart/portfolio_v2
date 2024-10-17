import styled from "styled-components";
import blogImg from "../assets/images/nftng.jpg";
import { Link } from "react-router-dom";

const BlogCard = ({ to }) => {
  return (
    <Container>
      <ImageBox>
        <img src={blogImg} alt="" />
      </ImageBox>
      <Desc>
        <span>14 June 2016</span>
        <Link to={to}>Designing the perfect notification UX</Link>
      </Desc>
    </Container>
  );
};

export default BlogCard;

const Container = styled.div`
  height: 370px;
  width: 280px;
  display: flex;
  flex-direction: column;
`;

const ImageBox = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Desc = styled.div`
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 15px 24px 5px;
  gap: 10px;
  span {
    display: grid;
    font-size: 11px;
    font-weight: 500;
    border: 1px solid var(--accent);
    color: var(--accent);
    padding: 0 5px;
    height: 20px;
    line-height: 18px;
    place-items: center;
  }
  a {
    font-size: 13px;
    color: var(--link-text);
    font-weight: 700;
  }
`;
