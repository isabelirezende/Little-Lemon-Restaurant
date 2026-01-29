import { useState } from "react";

function BookingForm({ availableTimes = [], dispatch, onSubmit }) {
  const [date, setDate] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({ payload: new Date(e.target.value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ date });
  };

 return (
  <form onSubmit={handleSubmit}>
    <label htmlFor="res-date">Choose date</label>
    <input
      type="date"
      id="res-date"
      value={date}
      onChange={handleDateChange}
    />

    <label htmlFor="res-time">Choose time</label>
    <select id="res-time">
      {availableTimes.map((time) => (
        <option key={time}>{time}</option>
      ))}
    </select>

    <button type="submit">Make Your reservation</button>
  </form>
);
}

export default BookingForm;