import React from 'react';
import { InputContainer, StyledInput, InputLabel } from './styles';

interface InputProps {
  label?: React.ReactNode;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ label, placeholder, value, onChange }) => {
  return (
    <InputContainer>
      {label && <InputLabel>{label}</InputLabel>}
      <StyledInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </InputContainer>
  );
};
