import { Routes, Route, useNavigate } from "react-router-dom";
import { useReducer } from "react";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";

export const initializeTimes = () => {
  return window.fetchAPI(new Date());
};

export const updateTimes = (state, action) => {
  return window.fetchAPI(action);
};

function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (window.submitAPI(formData)) {
      navigate("/confirmed");
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;