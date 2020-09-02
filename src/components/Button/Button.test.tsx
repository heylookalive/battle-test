import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Button from './Button';

describe('<Button />', () => {
  it('calls "onClick" prop on button click', () => {
    // Render new instance in every test to prevent leaking state
    const onClick = jest.fn();
    const { getByText } = render(
      <Button label="Cliiick" type="button" handleClick={onClick} />
    );

    fireEvent.click(getByText('Cliiick'));
    expect(onClick).toHaveBeenCalled();
  });
});
