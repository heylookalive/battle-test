import React from 'react';
import styled from 'styled-components';

type HealthBarProps = {
  value: number;
};

const HealthBarWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 30px;
  gap: 10px 10px;
  grid-template-areas:
    '.'
    '.';
`;

const BarWrapper = styled.div`
  position: relative;
  background-color: #f0f0f0;
  border-radius: 2px;
`;

const Bar = styled.div<{ value: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${(props) => props.value}%;
  border-radius: 2px;
  background-color: limegreen;
`;

const Label = styled.div`
  text-align: center;
`;

export default function HealthBar({ value }: HealthBarProps) {
  const noNegativeInts = value < 0 ? 0 : value;
  return (
    <HealthBarWrapper>
      <BarWrapper>
        <Bar value={value} />
      </BarWrapper>
      <Label data-testid="healthbar-label">{noNegativeInts}</Label>
    </HealthBarWrapper>
  );
}
