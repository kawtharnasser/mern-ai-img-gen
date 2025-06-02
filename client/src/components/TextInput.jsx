import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.text_Primary || '#333'};
`;

const StyledInput = styled.input`
  padding: 10px 12px;
  border: 1px solid white;
  border-radius: 6px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.bg || '#f0f0f0'};
  color: ${({ theme }) => theme.text_Primary || '#fff'};
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: white;
    box-shadow: 0 0 5px white;
  }
`;

const StyledTextArea = styled.textarea`
  padding: 10px 12px;
  border: 1px solid white;
  border-radius: 6px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.bg || '#f0f0f0'};
  color: ${({ theme }) => theme.text_Primary || '#fff'};
  font-family: inherit;
  min-height: 120px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: white;
    box-shadow: 0 0 5px white;
  }
`;

const TextInput = ({ label, placeholder, name, textArea, rows = 4, value, handleChange }) => {
  return (
    <Container>
      {label && <Label htmlFor={name}>{label}</Label>}
      {textArea ? (
        <StyledTextArea
          id={name}
          name={name}
          placeholder={placeholder}
          rows={rows}
          value={value}
          onChange={handleChange}
        />
      ) : (
        <StyledInput
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          type="text"
        />
      )}
    </Container>
  );
};

export default TextInput;
