import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Give now button', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/Give Now/i);
  expect(buttonElement).toBeInTheDocument();
});
