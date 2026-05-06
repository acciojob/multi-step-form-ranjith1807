import React from "react";

function Step({
  step,
  formData,
  errors,
  handleChange,
  nextStep,
  prevStep,
  handleSubmit,
}) {
  return (
    <div className="app-container">
      <div className="card">

        {step === 1 && (
          <>
            <h2>Customer Details</h2>

            <label>First Name:</label>
            <input id="first_name" value={formData.first_name} onChange={handleChange} />
            {errors.first_name && <p className="error">{errors.first_name}</p>}

            <label>Last Name:</label>
            <input id="last_name" value={formData.last_name} onChange={handleChange} />
            {errors.last_name && <p className="error">{errors.last_name}</p>}

            <button className="btn" onClick={nextStep}>Next</button>
          </>
        )}

        {step === 2 && (
          <>
            <h2>Car Details</h2>

            <label>Car Model:</label>
            <input id="model" value={formData.model} onChange={handleChange} />
            {errors.model && <p className="error">{errors.model}</p>}

            <label>Car Price:</label>
            <input id="car_price" value={formData.car_price} onChange={handleChange} />
            {errors.car_price && <p className="error">{errors.car_price}</p>}

            <div className="btn-group">
              <button className="btn" onClick={prevStep}>Previous</button>
              <button className="btn" onClick={nextStep}>Next</button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2>Payment Details</h2>

            <label>Credit Card Number:</label>
            <input id="card_info" value={formData.card_info} onChange={handleChange} />
            {errors.card_info && <p className="error">{errors.card_info}</p>}

            <label>Expiration Date:</label>
            <input id="expiry_date" value={formData.expiry_date} onChange={handleChange} />
            {errors.expiry_date && <p className="error">{errors.expiry_date}</p>}

            <div className="btn-group">
              <button className="btn" onClick={prevStep}>Previous</button>
              <button className="btn" onClick={handleSubmit}>Submit</button>
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default Step;