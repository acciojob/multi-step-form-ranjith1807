import React, { useState } from 'react';
import Step from './Step';
import './../styles/App.css';

const App = () => {
  // Track the current step in the form (1, 2, or 3)
  const [currentStep, setCurrentStep] = useState(1);
  
  // Centralized state to maintain form data across all steps
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    model: '',
    car_price: '',
    card_info: '',
    expiry_date: ''
  });

  // Handle changes for all inputs based on their ID
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  // Navigation handlers
  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted Successfully!\nData: ${JSON.stringify(formData, null, 2)}`);
    // Optionally reset form or redirect here
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Step 
          currentStep={currentStep} 
          formData={formData} 
          handleChange={handleChange} 
          nextStep={nextStep} 
          prevStep={prevStep} 
        />
      </form>
    </div>
  );
};

export default App;