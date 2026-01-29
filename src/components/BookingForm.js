import { useState, useEffect } from "react";

function BookingForm({ availableTimes = [], dispatch, onSubmit }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (date && time && guests >= 1 && occasion) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [date, time, guests, occasion]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({ payload: new Date(e.target.value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ date, time, guests, occasion });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">Select a time</option>
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="">Select an occasion</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit" disabled={!isValid} aria-label="Ao clicar">
        Make Your reservation
      </button>
    </form>
  );
}

export default BookingForm;