import React, { useState, useEffect } from "react";
import validate from "../utils/validate";

const Testing = () => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [userAddress, setUserAddress] = useState();

  const [GPSLatitude, setGPSLatitude] = useState();
  const [GPSLongitude, setGPSLongitude] = useState();

  const geo = navigator.geolocation;

  geo.getCurrentPosition(userCoords);
  function userCoords(position) {
    let userLatitude = position.coords.latitude;
    let userLongitude = position.coords.longitude;

    setLatitude(userLatitude);
    setLongitude(userLongitude);
  }

  const getUserAddress = async () => {
    let url = `https://api.opencagedata.com/geocode/v1/json?key=f2eaccb131fc4b29851519491c4d25c6&q=${latitude}%2C+${longitude}&pretty=1&no_annotations=1`;
    const loc = await fetch(url);
    const data = await loc.json();
    console.log("User address: ", data);
    setUserAddress(data.results[0].formatted);
  };

  const handleGetUserAddress = () => {
    getUserAddress();
  };

  const watchID = geo.watchPosition(userGPSCoords);
  function userGPSCoords(position) {
    let userGPSLatitude = position.coords.latitude;
    let userGPSLongitude = position.coords.longitude;
    console.log("latitude: ", userGPSLatitude);
    console.log("longitude: ", userGPSLongitude);
    setLatitude(userGPSLatitude);
    setLongitude(userGPSLongitude);
  }

  const stopGPS = () => {
    geo.clearWatch(watchID);
  };

  const riderInitialState = {
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    lastName: "",
    userName: "",
    password: "",
    other: "",
  };

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState(riderInitialState);
  const [errors, setErrors] = useState({});

  const FormTitles = ["Sign Up", "Personal Info", "Other"];

  const handleSubmit = () => {
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    // Check if there are no validation errors for the current section
    const currentSectionErrors = Object.keys(validationErrors).filter((key) => {
      const inputSection = getInputSection(key);
      console.log(inputSection);
      return inputSection === page; // Filter errors for the current section
    });

    if (currentSectionErrors.length === 0) {
      alert("FORM SUBMITTED");
    }
    console.log(formData);
  };

  const handleNext = () => {
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    // Check if there are no validation errors for the current section
    const currentSectionErrors = Object.keys(validationErrors).filter((key) => {
      const inputSection = getInputSection(key);
      console.log(inputSection);
      return inputSection === page; // Filter errors for the current section
    });

    if (currentSectionErrors.length === 0) {
      setPage((prevPage) => {
        const nextPage = prevPage + 1;
        if (nextPage < FormTitles.length) {
          clearAllErrors();
        }
        return nextPage;
      });
    }
  };

  // Function to clear all errors
  const clearAllErrors = () => {
    setErrors({});
  };

  // Function to get the section number of the input based on its name
  const getInputSection = (inputName) => {
    // Logic to determine the section number based on the input name
    switch (inputName) {
      case "email":
        return 0;
      case "fullName":
      case "userName":
        return 1;
      case "password":
      case "other":
        return 2;
      default:
        return -1; // Default section number for unknown inputs
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h4>latitude: {latitude}</h4>
      <h4>longitude: {longitude}</h4>
      <h4>user Address: {userAddress}</h4>
      <button onClick={handleGetUserAddress}>get user address</button>

      <div className="form">
        {page !== FormTitles.length - 0 && (
          <div className="progressbar">
            <div style={{ width: `${(page + 1) * 33.3}%` }}></div>
          </div>
        )}
        <div className="form-container">
          <div className="header">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div className="body">
            <div>
              {page === 0 && (
                <div>
                  <h2>Sign Up Info</h2>
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
              )}
              {page === 1 && (
                <div>
                  <h2>Personal Info</h2>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && (
                    <p className="error">{errors.fullName}</p>
                  )}
                  <input
                    type="text"
                    placeholder="userName"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                  />
                  {errors.userName && (
                    <p className="error">{errors.userName}</p>
                  )}
                </div>
              )}
              {page === 2 && (
                <div>
                  <h2>Other Info</h2>
                  <input
                    type="text"
                    placeholder="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <p className="error">{errors.password}</p>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="footer">
            <button disabled={page === 0} onClick={() => setPage(page - 1)}>
              Prev
            </button>

            {page !== FormTitles.length - 0 && (
              <div>
                {page === FormTitles.length - 1 && (
                  <button onClick={handleSubmit}>Submit</button>
                )}{" "}
                {page !== FormTitles.length - 1 && (
                  <button onClick={handleNext}>Next</button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testing;
