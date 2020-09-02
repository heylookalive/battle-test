import { render } from '@testing-library/react';
import React from 'react';
import Dice from './Dice';

describe('<Dice />', () => {
  it('renders as expected', () => {
    const { container } = render(<Dice value={6} />);
    expect(container).toMatchSnapshot();
  });
});
