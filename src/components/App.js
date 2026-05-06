import React, { useState } from "react";
import Step from "./Step";
import '../styles/App.css'

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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    // remove error when user types
    setErrors((prev) => ({
      ...prev,
      [id]: "",
    }));
  };

  // ✅ Step-wise validation
  const validateStep = () => {
    let newErrors = {};

    if (step === 1) {
      if (!formData.first_name) newErrors.first_name = "First name is required";
      if (!formData.last_name) newErrors.last_name = "Last name is required";
    }

    if (step === 2) {
      if (!formData.model) newErrors.model = "Model is required";
      if (!formData.car_price) newErrors.car_price = "Price is required";
    }

    if (step === 3) {
      if (!formData.card_info) newErrors.card_info = "Card info is required";
      if (!formData.expiry_date)
        newErrors.expiry_date = "Expiry date is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
  setStep((prev) => prev + 1);
};
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    if (validateStep()) {
      alert("Form Submitted Successfully!");
      console.log(formData);
    }
  };

  return (
    <Step
      step={step}
      formData={formData}
      errors={errors}
      handleChange={handleChange}
      nextStep={nextStep}
      prevStep={prevStep}
      handleSubmit={handleSubmit}
    />
  );
}

export default App;