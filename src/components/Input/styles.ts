import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  max-width: 400px;
  transition: border-color 0.3s;

  &:focus-within {
    border-color: #007bff;
  }
`;

export const StyledInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 16px;
  color: #333;
  background-color: transparent;

  &::placeholder {
    color: #aaa;
  }
`;

export const InputLabel = styled.label`
  margin-right: 10px;
  font-size: 20px;
  color: #007bff;
`;
