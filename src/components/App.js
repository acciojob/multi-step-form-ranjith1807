import React, { useState } from "react";
import Step from "./Step";
import "../styles/App.css"; // Adjust path if necessary

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

  // Handle input changes dynamically based on the input's ID
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Navigation handlers
  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);
  
  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
    // You can add API submission logic here later
  };

  return (
    <div className="container">
      <Step
        step={currentStep}
        formData={formData}
        handleChange={handleChange}
        nextStep={nextStep}
        prevStep={prevStep}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;