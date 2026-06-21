import React from 'react';

function Step({ step, formData, handleChange, handleNext, handlePrev }) {
  return (
    <div className="step-container">
      
      {/* Step 1: Personal Info */}
      {step === 1 && (
        <div id="step1" className="step-content">
          <h2>Step 1: Personal Information</h2>
          <div>
            <label htmlFor="first_name">First Name:</label>
            <input
              type="text"
              id="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="last_name">Last Name:</label>
            <input
              type="text"
              id="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      )}

      {/* Step 2: Car Details */}
      {step === 2 && (
        <div id="step2" className="step-content">
          <h2>Step 2: Car Details</h2>
          <div>
            <label htmlFor="model">Car Model:</label>
            <input
              type="text"
              id="model"
              value={formData.model}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="car_price">Car Price:</label>
            <input
              type="number"
              id="car_price"
              value={formData.car_price}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      )}

      {/* Step 3: Payment Info */}
      {step === 3 && (
        <div id="step3" className="step-content">
          <h2>Step 3: Payment Information</h2>
          <div>
            <label htmlFor="card_info">Card Information:</label>
            <input
              type="text"
              id="card_info"
              value={formData.card_info}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="expiry_date">Expiry Date:</label>
            <input
              type="text"
              id="expiry_date"
              value={formData.expiry_date}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      )}

      {/* Dynamic Navigation Buttons */}
      <div className="navigation-buttons" style={{ marginTop: '20px' }}>
        {step > 1 && (
          <button type="button" onClick={handlePrev} style={{ marginRight: '10px' }}>
            Previous
          </button>
        )}
        
        {step < 3 && (
          <button type="button" onClick={handleNext}>
            Next
          </button>
        )}
        
        {step === 3 && (
          <button type="submit">
            Submit
          </button>
        )}
      </div>
      
    </div>
  );
}

export default Step;