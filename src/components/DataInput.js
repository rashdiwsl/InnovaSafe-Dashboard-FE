import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigation hook
import "./DataInput.css";

export default function DataInput() {
  const [formData, setFormData] = useState({
    weather: "",
    traffic: "",
    incidentsPercent: "",
    totalIncidents: "",
  });

  const navigate = useNavigate(); // ✅ initialize navigation

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);

    alert("✅ Data submitted successfully!");

    // ✅ Redirect to Historical Data page
    navigate("/historical-data");
  };

  return (
    <div className="data-input-page">
      {/* Map Section */}
      <div className="map-section">
        <h2>Select Location</h2>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63322.7890666245!2d79.8211858!3d6.9270786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2591adf0d2c8f%3A0x30f28a46b95e2b6!2sColombo!5e0!3m2!1sen!2slk!4v1696068029395!5m2!1sen!2slk"
          width="500"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Data Input Form Section */}
      <div className="form-section">
        <h2>Data Input</h2>
        <form onSubmit={handleSubmit} className="data-form">
          <label>Weather Conditions</label>
          <input
            type="text"
            name="weather"
            placeholder="Enter weather conditions"
            value={formData.weather}
            onChange={handleChange}
          />

          <label>Traffic Density</label>
          <input
            type="text"
            name="traffic"
            placeholder="Enter traffic density"
            value={formData.traffic}
            onChange={handleChange}
          />

          <label>Historical Incidents Percentage</label>
          <input
            type="number"
            name="incidentsPercent"
            placeholder="Enter %"
            value={formData.incidentsPercent}
            onChange={handleChange}
          />

          <label>Total Incidents</label>
          <input
            type="number"
            name="totalIncidents"
            placeholder="Enter number"
            value={formData.totalIncidents}
            onChange={handleChange}
          />

          <button type="submit">Submit Data</button>
        </form>
      </div>
    </div>
  );
}
