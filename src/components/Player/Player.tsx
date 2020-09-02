import React from 'react';
import styled from 'styled-components';
import { PlayerState, PlayerTypes } from '../../types';
import Dice from '../Dice/Dice';
import HealthBar from '../HealthBar/HealthBar';
import heroImage from './images/hero.jpg';
import monsterImage from './images/monster.jpg';

// Define own prop Type which can be altered in the future if we want.
export type PlayerProps = PlayerState;

const PlayerDetail = styled.div`
  display: grid;
  grid-template-columns: 1fr 30px 160px;
  min-height: 296px;
`;

const PlayerImage = styled.img`
  display: block;
  max-width: 100%;
`;

export default function Player({ type, health, dice }: PlayerProps) {
  const playerLabel = type === PlayerTypes.HERO ? 'Player' : 'Monster';

  return (
    <div>
      <PlayerDetail>
        <div>
          <PlayerImage
            src={type === PlayerTypes.HERO ? heroImage : monsterImage}
            alt={`${playerLabel} image`}
          />
        </div>
        <HealthBar value={health} />
        <div>
          {dice && (
            <>
              <Dice value={dice[0]} />
              <Dice value={dice[1]} />
            </>
          )}
        </div>
      </PlayerDetail>
      <h3>{playerLabel}</h3>
    </div>
  );
}
