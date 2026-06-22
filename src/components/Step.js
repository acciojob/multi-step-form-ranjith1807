import React from "react";

function Step({ step, formData, handleChange, nextStep, prevStep, handleSubmit }) {
  // Validation checks for Step 3
  const isCardInvalid = formData.card_info.length > 0 && !/^\d{12}$/.test(formData.card_info);
  const isExpiryInvalid = formData.expiry_date.length > 0 && !/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiry_date);

  // --- STEP 1 ---
  if (step === 1) {
    return (
      <div id="step1" className="card">
        <h2>Personal Details</h2>
        <label htmlFor="first_name">First Name:</label>
        <input
          type="text"
          id="first_name"
          value={formData.first_name}
          onChange={handleChange}
        />

        <label htmlFor="last_name">Last Name:</label>
        <input
          type="text"
          id="last_name"
          value={formData.last_name}
          onChange={handleChange}
        />

        <div className="btn-group">
          <button type="button" onClick={nextStep}>Next</button>
        </div>
      </div>
    );
  }

  // --- STEP 2 ---
  if (step === 2) {
    return (
      <div id="step2" className="card">
        <h2>Car Details</h2>
        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          value={formData.model}
          onChange={handleChange}
        />

        <label htmlFor="car_price">Car Price:</label>
        <input
          type="text"
          id="car_price"
          value={formData.car_price}
          onChange={handleChange}
        />

        <div className="btn-group">
          <button type="button" onClick={prevStep}>Previous</button>
          <button type="button" onClick={nextStep}>Next</button>
        </div>
      </div>
    );
  }

  // --- STEP 3 ---
  if (step === 3) {
    return (
      <div id="step3" className="card">
        <h2>Payment Details</h2>
        
        <label htmlFor="card_info">Credit Card Number:</label>
        <input
          type="text"
          id="card_info"
          value={formData.card_info}
          onChange={handleChange}
          style={{ borderColor: isCardInvalid ? 'red' : '' }}
        />
        {isCardInvalid && (
          <p style={{ color: "red", fontSize: "0.85rem", marginTop: "-10px", marginBottom: "10px" }}>
            Credit card number must be exactly 12 digits long.
          </p>
        )}

        <label htmlFor="expiry_date">Expiration Date:</label>
        <input
          type="text"
          id="expiry_date"
          value={formData.expiry_date}
          onChange={handleChange}
          style={{ borderColor: isExpiryInvalid ? 'red' : '' }}
        />
        {isExpiryInvalid && (
          <p style={{ color: "red", fontSize: "0.85rem", marginTop: "-10px", marginBottom: "10px" }}>
            Expiration date must be in the format MM/YY.
          </p>
        )}

        <div className="btn-group">
          <button type="button" onClick={prevStep}>Previous</button>
          <button 
            type="submit" 
            onClick={handleSubmit} 
            disabled={isCardInvalid || isExpiryInvalid || formData.card_info === "" || formData.expiry_date === ""}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }

  return null;
}

export default Step;

// git add .
// git commit -m 'dfsfs'
// git push origin master