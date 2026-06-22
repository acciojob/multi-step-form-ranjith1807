import React from "react";

function Step({ step, formData, handleChange, nextStep, prevStep, handleSubmit }) {
  
  if (step === 1) {
    return (
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
    );
  }

  if (step === 2) {
    return (
      <div id="step2" className="card">
        <h2>Car Details</h2>
        
        <label htmlFor="brand">Brand:</label>
        <input type="text" id="brand" value={formData.brand} onChange={handleChange} />
        
        <label htmlFor="model">Model:</label>
        <input type="text" id="model" value={formData.model} onChange={handleChange} />

        <label htmlFor="car_price">Car Price:</label>
        <input type="text" id="car_price" value={formData.car_price} onChange={handleChange} />

        <div className="btn-group">
          <button id="prev" type="button" onClick={prevStep}>Previous</button>
          <button id="next" type="button" onClick={nextStep}>Next</button>
        </div>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div id="step3" className="card">
        <h2>Payment Details</h2>
        
        <label htmlFor="card_info">Credit Card Number:</label>
        <input type="text" id="card_info" value={formData.card_info} onChange={handleChange} />

        <label htmlFor="expiry_date">Expiration Date:</label>
        <input type="text" id="expiry_date" value={formData.expiry_date} onChange={handleChange} />

        <div className="btn-group">
          <button id="prev" type="button" onClick={prevStep}>Previous</button>
          <button id="submit" type="button" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }

  return null;
}

export default Step;