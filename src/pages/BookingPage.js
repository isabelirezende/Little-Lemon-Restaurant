import BookingForm from "../components/BookingForm";

/* 🔥 TESTES ESPERAM ISSO AQUI */
export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
};

export const updateTimes = (state, action) => {
  return state;
};

function BookingPage({ availableTimes = [], dispatch, submitForm }) {
  return (
    <main>
      <h1>Book a Table</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        onSubmit={submitForm}
      />
    </main>
  );
}

export default BookingPage;