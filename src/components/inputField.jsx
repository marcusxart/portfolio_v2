import styled from "styled-components";

const InputField = ({
  type = "text",
  placeholder,
  value,
  onChange,
  autoFocus,
}) => {
  return (
    <Container>
      {type === "textarea" ? (
        <textarea placeholder={placeholder} value={value} onChange={onChange} />
      ) : (
        <input
          autoFocus={autoFocus}
          type={type}
          required
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </Container>
  );
};

export default InputField;

const Container = styled.div`
  input,
  textarea {
    border: 0;
    border-bottom: 1px solid #666;
    color: var(--link-text);
    width: 100%;
    font-size: 13px;
    background-color: transparent;
    outline: none;
    transition: var(--smooth);

    &:focus {
      border-bottom: 1px solid var(--accent);
      &::placeholder {
        color: #d7d7d7;
      }
    }
    &::placeholder {
      color: var(--body-text);
    }
  }
  input {
    height: 60px;
  }
  textarea {
    resize: none;
    height: 120px;
  }
`;
