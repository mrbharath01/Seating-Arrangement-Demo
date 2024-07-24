import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import SeatSelection from "./components/SeatBooking/SeatSelection";
import './styles/SeatBooking.css';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/seats" element={<SeatSelection />} />
      </Routes>
    </BrowserRouter>
  );
}
