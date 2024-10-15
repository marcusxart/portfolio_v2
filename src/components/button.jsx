import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = ({ text = "text", to, className }) => {
  return (
    <Container className={className} to={to}>
      {text}
    </Container>
  );
};

export default Button;

const Container = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  padding: 0px 30px;
  line-height: 40px;
  border: 1px solid var(--btn-border);
  color: var(--link-text);
  &.active {
    background-color: var(--accent);
  }
  &:hover {
    background-color: var(--accent);
    color: var(--link-text);
    border-color: var(--accent);
  }
`;
