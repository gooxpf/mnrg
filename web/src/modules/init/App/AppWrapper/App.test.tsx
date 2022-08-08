import React from 'react';
import { render, screen } from '@testing-library/react';
import { AppWrapper } from './AppWrapper';

test('renders learn react link', () => {
  render(<AppWrapper />);
  const linkElement = screen.getByText(/Application/i);
  expect(linkElement).toBeInTheDocument();
});
