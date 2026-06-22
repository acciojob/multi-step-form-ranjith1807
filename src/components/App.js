import React, { useState } from "react";
import Step from "./Step";
import "../styles/App.css";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    model: "",
    brand: "",
    car_price: "",
    card_info: "",
    expiry_date: "",
  });

  const handleChange = (e) => {
    // CRITICAL FIX: Extract values immediately to prevent the React crash
    const targetId = e.target.id;
    const targetValue = e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [targetId]: targetValue,
    }));
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  };

  return (
    <div className="container">
      <Step
        step={step}
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