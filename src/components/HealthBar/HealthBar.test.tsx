import { render } from '@testing-library/react';
import React from 'react';
import HealthBar from './HealthBar';

describe('<HealthBar />', () => {
  it('renders as expected', () => {
    const { container } = render(<HealthBar value={73} />);
    expect(container).toMatchSnapshot();
  });

  it('renders as expected, given a negative value', () => {
    const { getByTestId } = render(<HealthBar value={-10} />);
    expect(getByTestId('healthbar-label')).toHaveTextContent('0');
  });
});
