import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import './Incidentlogs.css';

export default function Incidentlogs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [locations, setLocations] = useState([
    { id: 1, name: 'HOMAGAMA', date: '2024.09.02', time: '18:02', severity: 'MODERATE', weather: 'RAINY', roadConditions: 'WET', saved: false },
    { id: 2, name: 'MAHARAGAMA', date: '2024.09.02', time: '18:02', severity: 'MINOR', weather: 'CLOUDY', roadConditions: 'DRY', saved: false },
    { id: 3, name: 'KOTTAWA', date: '2024.09.02', time: '19:23', severity: 'MODERATE', weather: 'CLEAR', roadConditions: 'DRY', saved: true }
  ]);

  const handleSave = (id) => {
    setLocations(locations.map(loc => loc.id === id ? { ...loc, saved: !loc.saved } : loc));
  };

  const handleDiscard = (id) => {
    setLocations(locations.filter(loc => loc.id !== id));
  };

  const filteredLocations = locations.filter(loc =>
    loc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="incidentlogs-container">
      <div className="incidentlogs-card">
        {/* Header */}
        <div className="incidentlogs-header">
          <h2>Incident Logs</h2>
          <p>Review and manage data for specific locations</p>
        </div>

        {/* Search & Filters */}
        <div className="incidentlogs-filters">
          <div className="search-box">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search by location"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button>Date Range <ChevronDown /></button>
          <button>Severity <ChevronDown /></button>
          <button>Weather <ChevronDown /></button>
        </div>

        {/* Table */}
        <div className="incidentlogs-table">
          <table>
            <thead>
              <tr>
                <th>Location</th>
                <th>Date</th>
                <th>Time</th>
                <th>Severity</th>
                <th>Weather</th>
                <th>Road</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredLocations.map(loc => (
                <tr key={loc.id} className={loc.saved ? 'saved-row' : ''}>
                  <td>{loc.name}</td>
                  <td>{loc.date}</td>
                  <td>{loc.time}</td>
                  <td>{loc.severity}</td>
                  <td>{loc.weather}</td>
                  <td>{loc.roadConditions}</td>
                  <td>
                    <div className="actions">
                      <button className={loc.saved ? 'saved' : 'edit'} onClick={() => handleSave(loc.id)}>
                        {loc.saved ? 'SAVED' : 'EDIT'}
                      </button>
                      <button className="discard" onClick={() => handleDiscard(loc.id)}>DISCARD</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
