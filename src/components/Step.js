import React from 'react';

function Step({
  step,
  formData,
  handleChange,
  handleNext,
  handlePrevious,
  handleSubmit
}) {
  // Regex validation for Step 3
  const isCardInvalid = formData.card_info !== '' && !/^\d{12}$/.test(formData.card_info);
  const isExpiryInvalid = formData.expiry_date !== '' && !/^\d{2}\/\d{2}$/.test(formData.expiry_date);

  return (
    /* The dynamic ID below is what Cypress is looking for: #step1, #step2, #step3 */
    <div id={`step${step}`} className="step-card">
      
      {step === 1 && (
        <div className="step-content">
          <h2>Customer Details</h2>
          <div className="form-group">
            <label htmlFor="first_name">First Name:</label>
            <input
              type="text"
              id="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="last_name">Last Name:</label>
            <input
              type="text"
              id="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="step-content">
          <h2>Car Details</h2>
          <div className="form-group">
            <label htmlFor="model">Brand:</label>
            <input
              type="text"
              id="model"
              value={formData.model}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="car_price">Model:</label>
            <input
              type="text"
              id="car_price"
              value={formData.car_price}
              onChange={handleChange}
            />
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="step-content">
          <h2>Payment Details</h2>
          <div className="form-group">
            <label htmlFor="card_info">Credit Card Number:</label>
            <input
              type="text"
              id="card_info"
              value={formData.card_info}
              onChange={handleChange}
            />
            {isCardInvalid && (
              <p className="error-text">
                Credit card number must be exactly 12 digits long.
              </p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="expiry_date">Expiration Date:</label>
            <input
              type="text"
              id="expiry_date"
              value={formData.expiry_date}
              onChange={handleChange}
              placeholder="MM/YY"
            />
            {isExpiryInvalid && (
              <p className="error-text">
                Expiration date must be in the format MM/YY.
              </p>
            )}
          </div>
        </div>
      )}

      <div className="button-group">
        {step > 1 && (
          <button type="button" onClick={handlePrevious} className="nav-btn">
            Previous
          </button>
        )}
        {step < 3 && (
          <button type="button" onClick={handleNext} className="nav-btn">
            Next
          </button>
        )}
        {step === 3 && (
          <button type="button" onClick={handleSubmit} className="nav-btn submit-btn">
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default Step;