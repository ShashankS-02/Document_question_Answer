import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./FileUpload.css";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
      console.log(file.name);
      const formData = new FormData();
      formData.append("file", file);
      axios
        .post("http://127.0.0.1:5000/", formData, {
          headers: {
            "Content-Type": "muliport/form-data",
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("No file selected.");
    }
  };

  let navigate = useNavigate();
  const handleRedirect = () => {
    let path = "/autofill";
    navigate(path);
  };

  return (
    <>
      <div className="file-upload-container flex flex-col">
        <div class="cube-loader">
          <div class="cube-top"></div>
          <div class="cube-wrapper">
            <span className="cube-span" style={{ "--i": 0 }} />
            <span className="cube-span" style={{ "--i": 1 }} />
            <span className="cube-span" style={{ "--i": 2 }} />
            <span className="cube-span" style={{ "--i": 3 }} />
          </div>
        </div>
        <div className="title">
          <h1 className="jersey-10-regular">Information Extractor </h1>
          <h3 className="jersey-8-regular">
            Upload your resume to autofill information in the application form
            that is derived from your resume using LLM's
          </h3>
        </div>
        <div className="input-box">
          <input
            type="file"
            name="file"
            onChange={handleFileUpload}
            className="file-input"
          />
          <button
            type="button"
            onClick={handleRedirect}
            className="upload-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"
                stroke="#fffffff"
                stroke-width="2"
              ></path>
              <path
                d="M17 15V18M17 21V18M17 18H14M17 18H20"
                stroke="#fffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            Upload File
          </button>
        </div>
      </div>
    </>
  );
};

export default FileUpload;
