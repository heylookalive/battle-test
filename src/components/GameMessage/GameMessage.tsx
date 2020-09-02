import React from 'react';
import styled from 'styled-components';

type GameMessageProps = {
  playerWin: boolean;
  monsterWin: boolean;
  children: React.ReactNode;
};

const Message = styled.h2.attrs((props: GameMessageProps) => ({
  playerWin: props.playerWin,
  monsterWin: props.monsterWin,
}))`
  ${(props) => (props.playerWin ? `color: limegreen;` : null)}
  ${(props) => (props.monsterWin ? `color: red;` : null)}
`;

export default function GameMessage({
  playerWin,
  monsterWin,
  children,
}: GameMessageProps) {
  return (
    <Message
      playerWin={playerWin}
      monsterWin={monsterWin}
      data-testid="game-message"
    >
      {children}
    </Message>
  );
}
