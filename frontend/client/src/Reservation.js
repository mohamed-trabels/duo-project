import React, { useState } from "react";
import axios from "axios";

function Reservation() {
  const [add, setAdd] = useState({
    name: '',
    numbrplaces: '',
    date: '',
    time: '',
    event: '',
  });

  const newChange = (event) => {
    const { name, value } = event.target;
    setAdd((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };

  const addclient = () => {
    axios
      .post("http://localhost:3001/server/addclient", add)
      .then(() => {
        setAdd({
          name: '',
          numbrplaces: '',
          date: '',
          time: '',
          event: '',
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addclient(); // Call the addclient function on form submission
  };

  return (
    <div className="content">
      <div className="reservation-form">
        <h2>Make a Reservation</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">FullName:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={add.name}
            onChange={newChange}
          />

          <label htmlFor="numbrplaces">Number of People Attending:</label>
          <input
            type="text"
            id="numbrplaces"
            name="numbrplaces"
            value={add.numbrplaces}
            onChange={newChange}
          />

          <label htmlFor="date">Date for Reservation:</label>
          <input
            type="text"
            id="date"
            name="date"
            value={add.date}
            onChange={newChange}
          />

          <label htmlFor="time">Time:</label>
          <input
            type="text"
            id="time"
            name="time"
            value={add.time}
            onChange={newChange}
          />

          <label htmlFor="event">Event:</label>
          <input
            type="text"
            id="event"
            name="event"
            value={add.event}
            onChange={newChange}
          />

          <button type="submit">Submit Reservation</button>
        </form>
      </div>
    </div>
  );
}

export default Reservation;

