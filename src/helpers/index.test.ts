import { playerRollDice, PlayersDice, rollDice } from './index';

describe('Helpers', () => {
  it('rollDice produces a number between 1 and 6', () => {
    const diceValue = rollDice();

    expect(diceValue).toBeGreaterThan(0);
    expect(diceValue).toBeLessThan(7);
  });

  it('playerRollDice produces two numbers, and a sum', () => {
    const playersDice: PlayersDice = playerRollDice();

    expect(playersDice.sum).toEqual(playersDice.dice[0] + playersDice.dice[1]);
  });
});
