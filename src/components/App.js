import React, { useState } from "react";
import Step from "./Step";

function App() {
  const [step, setStep] = useState(1);

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
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // ✅ SIMPLE navigation (no validation blocking)
  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    alert("Submitted");
  };

  return (
    <Step
      step={step}
      formData={formData}
      handleChange={handleChange}
      nextStep={nextStep}
      prevStep={prevStep}
      handleSubmit={handleSubmit}
    />
  );
}

export default App;