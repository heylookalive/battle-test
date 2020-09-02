import React, { useReducer } from 'react';
import styled from 'styled-components';
import {
  battleReducer,
  initialBattleState,
} from '../../reducers/battleReducer';
import { GameState } from '../../types';
import Button from '../Button/Button';
import GameMessage from '../GameMessage/GameMessage';
import Player from '../Player/Player';

const GameWrapper = styled.div`
  margin: 2rem;

  h1,
  h2,
  h3 {
    text-align: center;
  }
`;

const GameLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 20% 1fr;
  grid-gap: 20px;

  > div {
    position: relative;
  }
`;

export default function Game() {
  const [state, dispatch] = useReducer(battleReducer, initialBattleState);

  const playerWin =
    state.gameState === GameState.OVER && state.players.playerTwo.health < 1;
  const monsterWin =
    state.gameState === GameState.OVER && state.players.playerOne.health < 1;

  return (
    <GameWrapper>
      <h1>Battle Simulator</h1>

      <GameLayout>
        <Player {...state.players.playerOne} />

        <div>
          <GameMessage playerWin={playerWin} monsterWin={monsterWin}>
            {state.message}
          </GameMessage>

          <Button
            type="button"
            label="Attack!"
            handleClick={() => {
              dispatch({ type: 'attack' });
            }}
            disabled={state.gameState === GameState.OVER}
          />
        </div>

        <Player {...state.players.playerTwo} />
      </GameLayout>
    </GameWrapper>
  );
}
