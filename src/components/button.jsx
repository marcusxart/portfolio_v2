import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = ({ text = "text", to, className, target }) => {
  return (
    <Container className={className} to={to} target={target}>
      {text}
    </Container>
  );
};

export default Button;

const Container = styled(Link)`
  display: inline-flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  height: 42px;
  padding: 0px 30px;
  font-size: 13px;
  line-height: 40px;
  border: 1px solid var(--btn-border);
  color: var(--link-text);
  transition: var(--smooth);
  &.active {
    background-color: var(--accent);
    border-color: var(--accent);
  }
  &:hover {
    background-color: var(--accent);
    color: var(--link-text);
    border-color: var(--accent);
  }
`;
