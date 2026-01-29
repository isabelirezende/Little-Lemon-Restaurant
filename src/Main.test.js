jest.mock(
  "react-router-dom",
  () => ({
    useNavigate: () => jest.fn(),
    Routes: ({ children }) => <div>{children}</div>,
    Route: ({ element }) => element,
  }),
  { virtual: true }
);

import { initializeTimes, updateTimes } from "./Main";

/* MOCK DA API */
beforeAll(() => {
  window.fetchAPI = jest.fn(() => ["17:00", "18:00", "19:00", "20:00", "21:00"]);
});

test("initializeTimes returns available times from fetchAPI", () => {
  const times = initializeTimes();
  expect(times.length).toBeGreaterThan(0);
});

test("updateTimes returns the same available times for a given date", () => {
  const state = [];
  const date = new Date("2026-01-01");
  const result = updateTimes(state, date);

  expect(result.length).toBeGreaterThan(0);
});