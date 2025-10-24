import { render, screen } from '@testing-library/react';
import App from './components/App';

test('renders header link to Instagram', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /instagram/i });
  expect(linkElement).toBeInTheDocument();
});
