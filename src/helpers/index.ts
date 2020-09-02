export const rollDice = (): number => 1 + Math.floor(Math.random() * 6);

export type PlayersDice = {
  dice: number[];
  sum: number;
};

export const playerRollDice = (): PlayersDice => {
  const diceOne = rollDice();
  const diceTwo = rollDice();

  return {
    dice: [diceOne, diceTwo],
    sum: diceOne + diceTwo,
  };
};
