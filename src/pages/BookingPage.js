import BookingForm from "../components/BookingForm";


function BookingPage({avaiableTimes, dispatch}){
    return(
        <main>
            <h1>Book a Table</h1>
            <BookingForm
            avaiableTimes={avaiableTimes}
            dispatch={dispatch}
            />
        </main>
    );
}
export default BookingPage;