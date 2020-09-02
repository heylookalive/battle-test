import { render } from '@testing-library/react';
import React from 'react';
import GameMessage from './GameMessage';

describe('<GameMessage />', () => {
  it('renders as expected', () => {
    const { container } = render(
      <GameMessage playerWin={false} monsterWin={false}>
        Text
      </GameMessage>
    );
    expect(container).toMatchSnapshot();
  });
});
