import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";

/* FUNÇÃO REDUCER */
function updateTimes(state, action) {
  // futuramente a data será usada aqui
  return state;
}

/* FUNÇÃO DE ESTADO INICIAL */
function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
}

function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

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
            />
          }
        />
      </Routes>
    </main>
  );
}

export default Main;