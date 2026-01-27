import BookingForm from "../components/BookingForm";


function BookingPage({avaiableTimes, dispatch, submitForm}){
    return(
        <main>
            <h1>Book a Table</h1>
            <BookingForm
            avaiableTimes={avaiableTimes}
            dispatch={dispatch}
            onSubmit={submitForm}
            />
        </main>
    );
}
export default BookingPage;