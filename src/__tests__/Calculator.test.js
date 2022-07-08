import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

const { container } = render(<Calculator />);
const display = container.querySelector('.Display');
const buttons = container.querySelectorAll('button');

describe('Test Calculator component', () => {
  it('makes operations correctly ', () => {
    buttons.forEach((button) => {
      if (button.textContent === '4') {
        fireEvent.click(button);
      }
    });
    buttons.forEach((button) => {
      if (button.textContent === '+') {
        fireEvent.click(button);
      }
    });
    buttons.forEach((button) => {
      if (button.textContent === '2') {
        fireEvent.click(button);
      }
    });
    buttons.forEach((button) => {
      if (button.textContent === '=') {
        fireEvent.click(button);
      }
    });
    expect(display.textContent).toBe('6');
  });
  it('renders correctly', () => {
    buttons.forEach((button) => {
      if (button.textContent === 'AC') {
        fireEvent.click(button);
        expect(button).not.toBeNull();
      }
    });
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
