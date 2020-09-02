import { playerRollDice } from '../helpers';
import { BattleActions, BattleState, GameState, PlayerTypes } from '../types';

export const initialBattleState: BattleState = {
  players: {
    playerOne: {
      type: PlayerTypes.HERO,
      health: 100,
    },
    playerTwo: {
      type: PlayerTypes.MONSTER,
      health: 100,
    },
  },
  message: '',
  gameState: GameState.ACTIVE,
};

export function battleReducer(
  state: BattleState,
  action: BattleActions
): BattleState {
  switch (action.type) {
    case 'attack':
      const playerOneDice = playerRollDice();
      const playerTwoDice = playerRollDice();
      let playerOneHP = state.players.playerOne.health;
      let playerTwoHP = state.players.playerTwo.health;
      let gameState = state.gameState;
      let message;

      if (playerOneDice.sum > playerTwoDice.sum) {
        const damage = playerOneDice.sum - playerTwoDice.sum;
        playerTwoHP = playerTwoHP - damage;
        message = `You hit ${damage}`;
      } else if (playerOneDice.sum < playerTwoDice.sum) {
        const damage = playerTwoDice.sum - playerOneDice.sum;
        playerOneHP = playerOneHP - damage;
        message = `Monster hit ${damage}`;
      } else {
        message = 'You rolled the same, draw!';
      }

      // Account for the game ending.
      if (playerOneHP < 1 || playerTwoHP < 1) {
        gameState = GameState.OVER;
        message = playerOneHP > 0 ? 'You win!' : 'Game over';
      }

      return {
        ...state,
        players: {
          ...state.players,
          playerOne: {
            ...state.players.playerOne,
            dice: playerOneDice.dice,
            health: playerOneHP,
          },
          playerTwo: {
            ...state.players.playerTwo,
            dice: playerTwoDice.dice,
            health: playerTwoHP,
          },
        },
        message,
        gameState,
      };
    default:
      return state;
  }
}
