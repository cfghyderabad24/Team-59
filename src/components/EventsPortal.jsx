import React, { useState, useEffect } from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './EventsPortal.css'
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import { FaLinkedin } from "react-icons/fa6";

function EventsPortal() {
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });
  
  const [completedEvents, setCompletedEvents] = useState([]);
  const [showSocialMedia, setShowSocialMedia] = useState(false);
  const [selectedSocialMedia, setSelectedSocialMedia] = useState({
    facebook: false,
    twitter: false,
    instagram: false,
    linkedin: false,
  });

  const [selectedCompletedEvent, setSelectedCompletedEvent] = useState(null);

  useEffect(() => {
    const mockCompletedEvents = [
      { id: 1, title: "Summer Fundraiser", date: "2023-06-15", description: "Annual fundraiser for our summer programs.", location: "City Park", time: "14:00" },
      { id: 2, title: "Awareness Workshop", date: "2023-07-01", description: "Workshop to raise awareness about our cause.", location: "Community Center", time: "10:00" },
      { id: 3, title: "Volunteer Training", date: "2023-07-10", description: "Training session for new volunteers.", location: "NGO Headquarters", time: "09:00" },
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
    setShowSocialMedia(true);
  };

  const handleSocialMediaChange = (e) => {
    const { name, checked } = e.target;
    setSelectedSocialMedia((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handlePostEvent = () => {
    console.log("Event data submitted:", eventData);
    console.log("Selected social media platforms:", selectedSocialMedia);
    // Here you would typically send the data to your backend
    // and post to the selected social media platforms

    setEventData({
      title: "",
      date: "",
      time: "",
      location: "",
      description: "",
    });
    setShowSocialMedia(false);
    setSelectedSocialMedia({
      facebook: false,
      twitter: false,
      instagram: false,
      linkedin: false,
    });
  };

  const handleCompletedEventClick = (event) => {
    setSelectedCompletedEvent(event);
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
            <li key={event.id} onClick={() => handleCompletedEventClick(event)}>
              <span className="event-title">{event.title}</span>
              <span className="event-date">{event.date}</span>
            </li>
          ))}
        </ul>
      </div>

      {showSocialMedia && (
        <div className="social-media-popup">
          <div className="popup-content">
            <h3>Select Social Media Platforms</h3>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="facebook"
                  checked={selectedSocialMedia.facebook}
                  onChange={handleSocialMediaChange}
                />
                <FaFacebook/>Facebook  
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="twitter"
                  checked={selectedSocialMedia.twitter}
                  onChange={handleSocialMediaChange}
                />
                <FaTwitter/>Twitter
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="instagram"
                  checked={selectedSocialMedia.instagram}
                  onChange={handleSocialMediaChange}
                />
                <FaInstagram/>Instagram
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="linkedin"
                  checked={selectedSocialMedia.linkedin}
                  onChange={handleSocialMediaChange}
                />
                <FaLinkedin/>LinkedIn
              </label>
            </div>
            <button onClick={handlePostEvent}>Post Event</button>
            <button onClick={() => setShowSocialMedia(false)}>Cancel</button>
          </div>
        </div>
      )}

      {selectedCompletedEvent && (
        <div className="event-details-popup">
          <div className="popup-content">
            <h3>{selectedCompletedEvent.title}</h3>
            <p><strong>Date:</strong> {selectedCompletedEvent.date}</p>
            <p><strong>Time:</strong> {selectedCompletedEvent.time}</p>
            <p><strong>Location:</strong> {selectedCompletedEvent.location}</p>
            <p><strong>Description:</strong> {selectedCompletedEvent.description}</p>
            <button onClick={() => setSelectedCompletedEvent(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventsPortal;