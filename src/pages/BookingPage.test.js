import { initializeTimes } from "./BookingPage";

test("initializeTimes returns the correct initial times", () => {
  const times = initializeTimes();
  expect(times).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});

import { updateTimes } from "./BookingPage";

test("updateTimes returns the same state", () => {
  const state = ["17:00", "18:00", "19:00"];
  const action = { type: "UPDATE_TIMES", payload: "2024-01-01" };

  const result = updateTimes(state, action);

  expect(result).toEqual(state);
});