import React, { useState, useEffect } from "react";
import './EventsPortal.css'

function EventsPortal() {
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });

  const [completedEvents, setCompletedEvents] = useState([]);

  useEffect(() => {
    // Fetch completed events from an API or local storage
    // This is a mock implementation
    const mockCompletedEvents = [
      { id: 1, title: "Summer Fundraiser", date: "2023-06-15" },
      { id: 2, title: "Awareness Workshop", date: "2023-07-01" },
      { id: 3, title: "Volunteer Training", date: "2023-07-10" },
    ];
    setCompletedEvents(mockCompletedEvents);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event data submitted:", eventData);
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
      <div className="new-event-form">
        <h2>Add New Event</h2>
        <form onSubmit={handleSubmit}>
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

      <div className="completed-events">
        <h2>Completed Events</h2>
        <ul>
          {completedEvents.map((event) => (
            <li key={event.id}>
              <span className="event-title">{event.title}</span>
              <span className="event-date">{event.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EventsPortal;