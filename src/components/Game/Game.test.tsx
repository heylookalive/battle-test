import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Game from './Game';

describe('<Game />', () => {
  it('renders, attack triggers a hit', () => {
    const { getByText, getByTestId } = render(<Game />);

    fireEvent.click(getByText('Attack!'));
    expect(getByText('Player')).toBeInTheDocument();
    expect(getByText('Monster')).toBeInTheDocument();
    expect(getByTestId('game-message')).not.toBeEmptyDOMElement();
  });
});
