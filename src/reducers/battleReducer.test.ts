import { act, renderHook } from '@testing-library/react-hooks';
import { useReducer } from 'react';
import * as helpers from '../helpers';
import { BattleState, GameState } from '../types';
import { battleReducer, initialBattleState } from './battleReducer';

describe('battleReducer', () => {
  let diceSpy: jest.SpyInstance; //SpyInstance<PlayersDice, []>;

  beforeEach(() => {
    diceSpy = jest
      .spyOn(helpers, 'playerRollDice')
      .mockReturnValueOnce({
        dice: [6, 6],
        sum: 12,
      })
      .mockReturnValueOnce({
        dice: [1, 1],
        sum: 2,
      });
  });

  afterEach(() => {
    diceSpy.mockRestore();
  });

  it('rolls the dice when an attack is dispatched', () => {
    const { result } = renderHook(() =>
      useReducer(battleReducer, initialBattleState)
    );

    expect(result.current[0].players.playerOne.dice).toEqual(undefined);
    expect(result.current[0].players.playerTwo.dice).toEqual(undefined);

    // Test that attack rolls the dice.
    act(() => {
      result.current[1]({ type: 'attack' });
    });

    expect(result.current[0].players.playerOne.dice).toHaveLength(2);
    expect(result.current[0].players.playerTwo.dice).toHaveLength(2);
    expect(result.current[0].gameState).toEqual(GameState.ACTIVE);
  });

  it('mocked dice roll results in hit to monster', () => {
    const { result } = renderHook(() =>
      useReducer(battleReducer, initialBattleState)
    );

    act(() => {
      result.current[1]({ type: 'attack' });
    });

    expect(result.current[0].players.playerTwo.health).toEqual(90);
    expect(result.current[0].message).toEqual('You hit 10');
    expect(diceSpy).toHaveBeenCalled();
  });

  it('mocked dice roll and low monster hp results in game win', () => {
    const lowMonsterHPState: BattleState = {
      ...initialBattleState,
      players: {
        ...initialBattleState.players,
        playerTwo: {
          ...initialBattleState.players.playerTwo,
          health: 7,
        },
      },
    };

    const { result } = renderHook(() =>
      useReducer(battleReducer, lowMonsterHPState)
    );

    act(() => {
      result.current[1]({ type: 'attack' });
    });

    expect(result.current[0].players.playerTwo.health).toEqual(-3);
    expect(result.current[0].message).toEqual('You win!');
    expect(result.current[0].gameState).toEqual(GameState.OVER);
    expect(diceSpy).toHaveBeenCalled();
  });
});
