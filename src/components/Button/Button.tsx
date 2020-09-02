import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  type: 'button' | 'submit';
  label: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

const ButtonWrapper = styled.button`
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -75px;
  border: 0;
  border-radius: 3px;
  background-color: #d13732;
  width: 150px;
  padding: 1rem 0;
  cursor: pointer;
  font-size: 1.125rem;
  color: white;

  :disabled {
    background-color: darkgray;
    cursor: not-allowed;
  }
`;

export default function Button({
  type,
  label,
  handleClick,
  disabled,
}: ButtonProps) {
  return (
    <ButtonWrapper
      type={type}
      onClick={handleClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {label}
    </ButtonWrapper>
  );
}
