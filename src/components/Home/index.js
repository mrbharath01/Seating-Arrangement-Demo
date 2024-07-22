import React, { useState } from "react";
import "./index.css";
import Seat from "../Seat/index";

function Home() {
  const [date, setDate] = useState("");
  const [zone, setZone] = useState("A");

  const seats = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="home">
      <h2>Home</h2>
      <form>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          Zone:
          <select value={zone} onChange={(e) => setZone(e.target.value)}>
            <option value="A">Zone A</option>
            <option value="B">Zone B</option>
            <option value="C">Zone C</option>
          </select>
        </label>
      </form>
      <div className="seating">
        {seats.map((seat) => (
          <Seat key={seat} number={seat} />
        ))}
      </div>
    </div>
  );
}

export default Home;
