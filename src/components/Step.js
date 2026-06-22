import React from "react";

function Step({ step, formData, handleChange, nextStep, prevStep, handleSubmit }) {
  const isCardInvalid = formData.card_info.length > 0 && !/^\d{12}$/.test(formData.card_info);
  const isExpiryInvalid = formData.expiry_date.length > 0 && !/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiry_date);

  return (
    <>
      {step === 1 && (
        <div id="step1" className="card">
          <h2>Customer Details</h2>
          
          <label htmlFor="first_name">First Name:</label>
          <input type="text" id="first_name" value={formData.first_name} onChange={handleChange} />

          <label htmlFor="last_name">Last Name:</label>
          <input type="text" id="last_name" value={formData.last_name} onChange={handleChange} />

          <div className="btn-group">
            <button id="next" type="button" onClick={nextStep}>Next</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div id="step2" className="card">
          <h2>Car Details</h2>
          
          {/* Brand Input */}
          <label htmlFor="brand">Brand:</label>
          <input type="text" id="brand" value={formData.brand} onChange={handleChange} />
          
          {/* Model Input */}
          <label htmlFor="model">Model:</label>
          <input type="text" id="model" value={formData.model} onChange={handleChange} />

          <div className="btn-group">
            <button id="prev" type="button" onClick={prevStep}>Previous</button>
            <button id="next" type="button" onClick={nextStep}>Next</button>
          </div>
        </div>
      )}

      {step === 3 && (
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
            <button id="prev" type="button" onClick={prevStep}>Previous</button>
            <button 
              id="submit"
              type="button" 
              onClick={handleSubmit} 
              disabled={isCardInvalid || isExpiryInvalid || formData.card_info === "" || formData.expiry_date === ""}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Step;