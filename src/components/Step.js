import React from 'react';

const Step = ({ currentStep, formData, handleChange, nextStep, prevStep }) => {
  return (
    // The id dynamically changes to "step1", "step2", or "step3"
    <div className="step-card" id={`step${currentStep}`}>
      
      {/* Step 1: Customer Details */}
      {currentStep === 1 && (
        <div className="step-content">
          <h2>Customer Details</h2>
          <div className="input-group">
            <label htmlFor="first_name">First Name:</label>
            <input 
              type="text" 
              id="first_name" 
              value={formData.first_name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="input-group">
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
      {currentStep === 2 && (
        <div className="step-content">
          <h2>Car Details</h2>
          <div className="input-group">
            <label htmlFor="model">Car Model:</label>
            <input 
              type="text" 
              id="model" 
              value={formData.model} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="input-group">
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

      {/* Step 3: Payment Information */}
      {currentStep === 3 && (
        <div className="step-content">
          <h2>Payment Info</h2>
          <div className="input-group">
            <label htmlFor="card_info">Card Information:</label>
            <input 
              type="text" 
              id="card_info" 
              value={formData.card_info} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="input-group">
            <label htmlFor="expiry_date">Expiry Date:</label>
            <input 
              type="text" 
              id="expiry_date" 
              value={formData.expiry_date} 
              onChange={handleChange} 
              placeholder="MM/YY"
              required 
            />
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="button-group">
        {currentStep > 1 && (
          // ADDED: id="prev"
          <button type="button" id="prev" className="btn-prev" onClick={prevStep}>
            Previous
          </button>
        )}
        
        {currentStep < 3 && (
          // ADDED: id="next"
          <button type="button" id="next" className="btn-next" onClick={nextStep}>
            Next
          </button>
        )}

        {currentStep === 3 && (
          // ADDED: id="submit"
          <button type="submit" id="submit" className="btn-submit">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Step;
