
import React from "react";

function Step({ step, formData, handleChange }) {
  return (
    <div id={`step${step}`}>
      {/* Step 1: User Info */}
      {step === 1 && (
        <>
          <h2>Step 1: Customer Details</h2>
          <div>
            <label htmlFor="first_name">First Name: </label>
            <input
              id="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="last_name">Last Name: </label>
            <input
              id="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
        </>
      )}

      {/* Step 2: Car Details */}
      {step === 2 && (
        <>
          <h2>Step 2: Car Details</h2>
          <div>
            <label htmlFor="model">Car Model: </label>
            <input
              id="model"
              value={formData.model}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="car_price">Car Price: </label>
            <input
              id="car_price"
              value={formData.car_price}
              onChange={handleChange}
            />
          </div>
        </>
      )}

      {/* Step 3: Payment Info */}
      {step === 3 && (
        <>
          <h2>Step 3: Payment Information</h2>
          <div>
            <label htmlFor="card_info">Card Info: </label>
            <input
              id="card_info"
              value={formData.card_info}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="expiry_date">Expiry Date: </label>
            <input
              id="expiry_date"
              value={formData.expiry_date}
              onChange={handleChange}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Step;