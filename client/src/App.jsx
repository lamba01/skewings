import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
// import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/book" element={<BookingPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
