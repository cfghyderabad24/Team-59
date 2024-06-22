import React, { useState } from "react";
import './EventsPortal.css'

function EventsPortal() {
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend or state management system
    console.log("Event data submitted:", eventData);
    // Reset form after submission
    setEventData({
      title: "",
      date: "",
      time: "",
      location: "",
      description: "",
    });
  };

  return (
    <div className="events-portal">
      <form onSubmit={handleSubmit}>
        <h2>Add New Event</h2>

        <div className="form-group">
          <label htmlFor="title">Event Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={eventData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={eventData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={eventData.time}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={eventData.description}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </div>

        <button type="submit" className="submit-button">
          Add Event
        </button>
      </form>
    </div>
  );
}

export default EventsPortal;
