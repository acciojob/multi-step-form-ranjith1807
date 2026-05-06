import React from "react";

function Step({
  step,
  formData,
  handleChange,
  nextStep,
  prevStep,
  handleSubmit,
}) {
  return (
    <div>

      {step === 1 && (
        <div id="step1">
          <input id="first_name" value={formData.first_name} onChange={handleChange} />
          <input id="last_name" value={formData.last_name} onChange={handleChange} />
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div id="step2">
          <input id="model" value={formData.model} onChange={handleChange} />
          <input id="car_price" value={formData.car_price} onChange={handleChange} />
          <button onClick={prevStep}>Previous</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 3 && (
        <div id="step3">
          <input id="card_info" value={formData.card_info} onChange={handleChange} />
          <input id="expiry_date" value={formData.expiry_date} onChange={handleChange} />
          <button onClick={prevStep}>Previous</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}

    </div>
  );
}

export default Step;