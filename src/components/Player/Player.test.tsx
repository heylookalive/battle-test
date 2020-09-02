import { render } from '@testing-library/react';
import React from 'react';
import { PlayerTypes } from '../../types';
import Player, { PlayerProps } from './Player';

describe('<Player />', () => {
  it('renders hero as expected', () => {
    const hero: PlayerProps = {
      type: PlayerTypes.HERO,
      health: 100,
      dice: [1, 2],
    };

    const { container } = render(<Player {...hero} />);
    expect(container).toMatchSnapshot();
  });

  it('renders monster as expected', () => {
    const monster: PlayerProps = {
      type: PlayerTypes.MONSTER,
      health: 72,
      dice: [5, 6],
    };

    const { container } = render(<Player {...monster} />);
    expect(container).toMatchSnapshot();
  });
});
