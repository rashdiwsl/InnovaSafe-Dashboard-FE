import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import LoginForm from "./components/LoginForm";
import DataInput from "./components/DataInput";
import HistoricalData from "./components/HistoricalData"; 
import Incidentlogs from "./components/Incidentlogs"; 
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login page has no sidebar */}
        <Route path="/" element={<LoginForm />} />

        {/* Other pages with sidebar */}
        <Route
          path="/data-input"
          element={
            <div className="app">
              <Sidebar />
              <main className="main-content">
                <DataInput />
              </main>
            </div>
          }
        />
        <Route
          path="/historical-data"
          element={
            <div className="app">
              <Sidebar />
              <main className="main-content">
                <HistoricalData />
              </main>
            </div>
          }
        />
        <Route
          path="/incident-logs"
          element={
            <div className="app">
              <Sidebar />
              <main className="main-content">
                <Incidentlogs />
              </main>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
