import React, { useState } from "react";
import "../styles/App.css";

function App() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="container">
      {step === 1 && (
        <div id="step1" className="card">
          <h2>Personal Details</h2>

          <label>First Name:</label>
          <input
            id="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />

          <label>Last Name:</label>
          <input
            id="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />

          <div className="btn-group">
            <button onClick={() => setStep(2)}>Next</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div id="step2" className="card">
          <h2>Car Details</h2>

          <label>Model:</label>
          <input
            id="model"
            value={formData.model}
            onChange={handleChange}
          />

          <label>Car Price:</label>
          <input
            id="car_price"
            value={formData.car_price}
            onChange={handleChange}
          />

          <div className="btn-group">
            <button onClick={() => setStep(1)}>Previous</button>
            <button onClick={() => setStep(3)}>Next</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div id="step3" className="card">
          <h2>Payment Details</h2>

          <label>Card Information:</label>
          <input
            id="card_info"
            value={formData.card_info}
            onChange={handleChange}
          />

          <label>Expiry Date:</label>
          <input
            id="expiry_date"
            value={formData.expiry_date}
            onChange={handleChange}
          />

          <div className="btn-group">
            <button onClick={() => setStep(2)}>Previous</button>
            <button
              onClick={() => {
                alert("Form Submitted");
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;