import React, { useState } from "react";
import { Upload, CheckCircle } from "lucide-react"; // ✅ requires `npm install lucide-react`
import "./HistoricalData.css"; // ✅ external CSS

export default function HistoricalData() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [fileName, setFileName] = useState("file_name.csv");
  const [isDragging, setIsDragging] = useState(false);

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleFileUpload = (file) => {
    setFileName(file.name);
    setUploadComplete(false);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploadComplete(true);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="historical-data-container">

      <div className="upload-card">
        <h2 className="title">Upload Historical Data</h2>
        <p className="subtitle">
          Upload historical road accident data in CSV or Excel format for analysis
        </p>

        {/* Upload Area */}
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`upload-area ${isDragging ? "dragging" : ""}`}
        >
          <Upload className="upload-icon" size={48} />
          <p className="upload-text">Drag and drop files here</p>
          <p className="upload-subtext">or click to browse your files</p>
          <label>
            <input
              type="file"
              accept=".csv,.xlsx,.xls"
              onChange={handleFileSelect}
              className="file-input"
            />
            <span className="select-files-btn">Select files</span>
          </label>
        </div>

        {/* Upload Progress */}
        {uploadProgress > 0 && (
          <div className="progress-container">
            <div className="progress-info">
              <span>Uploading {fileName}</span>
              <span>{uploadProgress}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Success Message */}
        {uploadComplete && (
          <div className="success-message">
            <CheckCircle className="success-icon" size={24} />
            <span>Upload Successful!</span>
          </div>
        )}

        {/* Upload Button */}
        <button
          disabled={!uploadComplete}
          className={`upload-btn ${uploadComplete ? "active" : "disabled"}`}
        >
          Upload
        </button>
      </div>
    </div>
  );
}
