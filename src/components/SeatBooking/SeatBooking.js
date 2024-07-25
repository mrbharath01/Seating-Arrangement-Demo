import React, { useState, useEffect } from "react";
import SeatIcon from "../SeatIcon";
import "./SeatBooking.css";
import Navbar from "../Navbar";
//import { useNavigate } from "react-router-dom";

const generateSeats = (start, end) => {
  return Array.from({ length: end - start + 1 }, (_, i) => ({
    id: start + i,
    seat_number: start + i,
    status: Math.random() < 0.5 ? "booked" : "available", // Randomly assign booked or not booked
  }));
};

const SeatBooking = () => {
  const [date, setDate] = useState("");
  const [floor, setFloor] = useState("Select Floor");
  const [zone, setZone] = useState("Zone A"); // Default value set to "Zone A"
  const [submittedZone, setSubmittedZone] = useState("Zone A");
  //const [shift, setShift] = useState("Choose Shift");
  //const nav = useNavigate();
  const [seats, setSeats] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    switch (zone) {
      case "Zone A":
        setSeats(generateSeats(1, 30));
        break;
      case "Zone B":
        setSeats(generateSeats(31, 60));
        break;
      case "Zone C":
        setSeats(generateSeats(61, 90));
        break;
      default:
        setSeats([]);
    }
  }, [zone]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };
  const handleClose = () => {
    setShowPopup(false);
  };
  return (
    <div>
      <Navbar />
      <div className="hello">
        {
          "Cookies,One Pop Up on CLicking Button,Logout Button function,Cookies checking for Login"
        }
        {"Select seat will call api , Delete seat , edit seat option"}
      </div>
      <div className="seat-booking-container">
        <form className="seat-booking-options">
          <div>
            <label>Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <label>Floor:</label>
            <select value={floor} onChange={(e) => setFloor(e.target.value)}>
              <option value="select-floor">Select Floor</option>
              <option value="5">5th Floor</option>
              <option value="6">6th Floor</option>
              <option value="10">10th Floor</option>
            </select>
          </div>
          <div>
            <label>Zone:</label>
            <select value={zone} onChange={(e) => setZone(e.target.value)}>
              <option value="select-zone">Select Zone</option>
              <option value="Zone A">Zone A</option>
              <option value="Zone B">Zone B</option>
              <option value="Zone C">Zone C</option>
            </select>
          </div>
          <div style={{ marginTop: "130px", marginRight:"10px", }}>
            <button
              type="submit"
              onClick={handleSubmit}
              style={{
                backgroundColor: "#4CAF50" /* Green background */,
                border: "none" /* Remove borders */,
                color: "white" /* White text */,
                padding: "15px 32px" /* Some padding */,
                textAlign:
                  "center" /* Center the text (if it has multiple lines) */,
                textDecoration: "none" /* Remove underline */,
                display: "inline-block" /* Make the container block-level */,
                fontSize: "16px" /* Increase font size */,
                margin: "4px 2px" /* Add some margin */,
                cursor: "pointer" /* Pointer/hand icon */,
                borderRadius: "8px" /* Rounded corners */,
                transition:
                  "background-color 0.3s ease" /* Smooth transition for hover effect */,
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "#45a049")
              } /* Darker background on hover */
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "#4CAF50")
              } /* Original background on leave */
            >
              Submit
            </button>
          </div>
        </form>
        {showPopup && (
          <div className="popUpWindow">
            <h1>Seat has been booked</h1>
            <button onClick={handleClose}>Close</button>
          </div>
        )}
        <div className="seat-booking-grid">
          {seats.map((seat) => (
            <SeatIcon
              key={seat.id}
              seatNumber={seat.seat_number}
              isBooked={seat.status === "booked"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeatBooking;
