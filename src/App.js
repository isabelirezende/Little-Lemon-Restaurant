import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Nav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}
export default App;