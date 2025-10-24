import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import App from './components/App';

jest.mock('./router', () => ({
  __esModule: true,
  BrowserRouter: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  Routes: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  Route: ({ element }: { element: ReactNode }) => <>{element}</>,
}));

test('renders header link to Instagram', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /instagram/i });
  expect(linkElement).toBeInTheDocument();
});
