import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

const mockDispatch = jest.fn();
const mockSubmit = jest.fn();

const availableTimes = ["17:00", "18:00", "19:00"];

describe("BookingForm validation tests", () => {

  test("HTML5 validation attributes are applied", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        onSubmit={mockSubmit}
      />
    );

    expect(screen.getByLabelText(/choose date/i)).toBeRequired();
    expect(screen.getByLabelText(/choose time/i)).toBeRequired();
    expect(screen.getByLabelText(/number of guests/i)).toHaveAttribute("min", "1");
    expect(screen.getByLabelText(/occasion/i)).toBeRequired();
  });

  test("submit button is disabled when form is invalid", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        onSubmit={mockSubmit}
      />
    );

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  test("submit button is enabled when form is valid", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        onSubmit={mockSubmit}
      />
    );

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2026-01-10" },
    });

    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "17:00" },
    });

    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "2" },
    });

    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Birthday" },
    });

    const button = screen.getByRole("button");
    expect(button).toBeEnabled();
  });

  test("form submits when valid", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        onSubmit={mockSubmit}
      />
    );

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2026-01-10" },
    });

    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "18:00" },
    });

    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "3" },
    });

    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Anniversary" },
    });

    fireEvent.click(screen.getByRole("button"));

    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });
});