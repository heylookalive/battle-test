import React from 'react';
// Dice styling via https://dev.to/ekeijl/creating-dice-using-css-grid-j4
import './Dice.css';

type DiceProps = {
  value: number;
};

export default function Dice({ value }: DiceProps) {
  return (
    <div className="face">
      {Array(value)
        .fill(0)
        .map((item, key) => (
          <span className="pip" key={key} />
        ))}
    </div>
  );
}
