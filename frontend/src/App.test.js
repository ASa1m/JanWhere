import { render, screen } from '@testing-library/react';
import App from './App';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/React MERN Stack App/i);
  expect(linkElement).toBeInTheDocument();
});
