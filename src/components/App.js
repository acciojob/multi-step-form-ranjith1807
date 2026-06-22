import React, { useState } from "react";
import Step from "./Step";
import "../styles/App.css";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    brand: "",  // <-- Added brand here
    model: "",
    card_info: "",
    expiry_date: "",
  });

  const handleChange = (e) => {
    // 1. Extract the values immediately while the event still exists
    const { id, value } = e.target; 

    // 2. Use those extracted variables inside your asynchronous state updater
    setFormData((prevData) => ({
      ...prevData,
      [id]: value, 
    }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  
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