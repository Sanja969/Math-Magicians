import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Quote from '../pages/Quote';

describe('test the Quote components', () => {
  it('renders correctly', () => {
    const { container } = render(<Quote />);
    const qoute1 = container.querySelector('.q1');
    expect(qoute1.innerHTML).toContain(
      'Mathematics is not about numbers',
    );
  });
  it('matches the snapshot', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
