import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('test the Quote components', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Router>
          <Navbar />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const { queryByTestId } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(queryByTestId('2')).toBeTruthy();
  });
});
