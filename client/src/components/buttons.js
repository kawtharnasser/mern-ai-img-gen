import React from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@mui/material';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 14px;
  min-width: 120px;
  height: 42px;
  font-size: 14px;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  transition: background-color 0.2s ease;
  background-color: ${({ $type }) => $type === 'secondary' ? '#805AD5' : '#4a90e2'};
  color: white;

  &:hover:not(:disabled) {
    background-color: ${({ $type }) => $type === 'secondary' ? '#6B46C1' : '#357ab8'};
  }

  &:active:not(:disabled) {
    background-color: ${({ $type }) => $type === 'secondary' ? '#553C9A' : 'rgb(123, 53, 184)'};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Button = ({ text, onClick, leftIcon, type = 'primary', isLoading = false, isDisabled = false }) => {
  const children = [];

  if (isLoading) {
    // Show spinner first
    children.push(
      React.createElement(CircularProgress, { key: 'spinner', style: { color: 'inherit', width: 24, height: 24 } })
    );
    // Show leftIcon next if present
    if (leftIcon) {
      children.push(
        React.createElement('span', { key: 'icon' }, leftIcon)
      );
    }
    // Show loading text
    children.push(' Generate Image ...');
  } else {
    if (leftIcon) {
      children.push(
        React.createElement('span', { key: 'icon' }, leftIcon)
      );
    }
    children.push(text);
  }

  return React.createElement(
    StyledButton,
    {
      onClick,
      $type: type,
      disabled: isDisabled || isLoading,
      type: 'button',
    },
    ...children
  );
};

export default Button;
