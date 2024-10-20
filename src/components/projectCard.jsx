import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";

const ProjectCard = ({ data }) => {
  return (
    <Container>
      <ImgBox>
        <img src={data.img} alt="" />
        {data?.link && (
          <Card className="card" to={data.link} target="_blank">
            <FaLink color="#f0f0f0" size={"24px"} />
          </Card>
        )}
      </ImgBox>{" "}
      <Desc>
        <h3>{data.skill}</h3>
        <span>{data.date}</span>
        <p>{data.title}</p>
      </Desc>
    </Container>
  );
};

export default ProjectCard;

export const Container = styled.div`
  width: 274px;
`;

const Card = styled(Link)`
  display: grid;
  place-items: center;
  width: 236px;
  height: 236px;
  background: #f26a38eb;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.5);
  transition: var(--smooth);
  opacity: 0;
`;

export const ImgBox = styled.div`
  position: relative;
  width: 100%;
  height: 274px;
  &:hover {
    .card {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Desc = styled.div`
  margin-top: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
  p {
    font-size: 13px;
    color: var(--link-text);
    font-weight: 700;
  }
  h3 {
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-size: 11px;
    width: fit-content;
    font-weight: 500;
    position: relative;
    box-shadow: inset 0 -4px 0 #666;
  }
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
`;
