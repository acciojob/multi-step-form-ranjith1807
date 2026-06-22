import React from "react";

function Step({ step, formData, handleChange, nextStep, prevStep, handleSubmit }) {
  // Validation checks for Step 3
  const isCardInvalid = formData.card_info.length > 0 && !/^\d{12}$/.test(formData.card_info);
  const isExpiryInvalid = formData.expiry_date.length > 0 && !/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiry_date);

  return (
    <div id={`step${step}`} className="card">
      
      {/* --- STEP 1 --- */}
      {step === 1 && (
        <>
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
        </>
      )}

      {/* --- STEP 2 --- */}
      {step === 2 && (
        <>
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
        </>
      )}

      {/* --- STEP 3 --- */}
      {step === 3 && (
        <>
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
        </>
      )}

      {/* --- NAVIGATION BUTTONS --- */}
      <div className="btn-group">
        {step > 1 && (
          <button onClick={prevStep}>Previous</button>
        )}
        
        {step < 3 && (
          <button onClick={nextStep}>Next</button>
        )}
        
        {step === 3 && (
          <button 
            onClick={handleSubmit} 
            disabled={isCardInvalid || isExpiryInvalid || formData.card_info === "" || formData.expiry_date === ""}
          >
            Submit
          </button>
        )}
      </div>
      
    </div>
  );
}

export default Step;