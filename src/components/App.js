import React, { useState } from "react";
import Step from "./Step";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    alert("Form Submitted:\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="App">
      <h1>Multi-Step Form</h1>
      <form onSubmit={handleSubmit}>
        <Step
          step={currentStep}
          formData={formData}
          handleChange={handleChange}
        />

        <div style={{ marginTop: "20px" }}>
          {currentStep > 1 && (
            <button type="button" id="previous" onClick={prevStep}>
              Previous
            </button>
          )}
          {currentStep < 3 && (
            <button type="button" id="next" onClick={nextStep}>
              Next
            </button>
          )}
          {currentStep === 3 && (
            <button type="submit" id="submit">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default App;