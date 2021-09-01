import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Main application', () => {
  it('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/hello world/i);
    expect(linkElement).toBeInTheDocument();
  });
});
