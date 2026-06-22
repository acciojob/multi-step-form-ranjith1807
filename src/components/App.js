import React, { useState } from "react";
import Step from "./Step";
import "../styles/App.css";


function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    brand: "",
    model: "",
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

  return (
    <div className="App">
      <Step
        step={step}
        formData={formData}
        handleChange={handleChange}
        nextStep={() => setStep(step + 1)}
        prevStep={() => setStep(step - 1)}
        handleSubmit={(e) => {
          e.preventDefault();
          alert("Form Submitted");
        }}
      />
    </div>
  );
}

export default App;