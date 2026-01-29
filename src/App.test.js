jest.mock(
  "react-router-dom",
  () => ({
    Link: ({ children }) => <div>{children}</div>,
    useNavigate: () => jest.fn(),
    Routes: ({ children }) => <div>{children}</div>,
    Route: ({ element }) => element,
  }),
  { virtual: true }
);

import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  window.fetchAPI = jest.fn(() => [
    "17:00",
    "18:00",
    "19:00",
  ]);
});

test('renders learn react link', () => {
  render(<App />);
  const headingElement = screen.getByText(/Little Lemon/i);
  expect(headingElement).toBeInTheDocument();   
});
