import React, { useState } from 'react';
import Step from './Step';

function App() {
  // Manage the current step of the form
  const [currentStep, setCurrentStep] = useState(1);
  
  // Manage all form data in one centralized state
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    model: '',
    car_price: '',
    card_info: '',
    expiry_date: ''
  });

  // Navigate to the next step
  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  // Navigate to the previous step
  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1);
  };

  // Handle input changes by updating the formData state dynamically based on the input's id
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  // Handle final form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted successfully:', formData);
    alert('Form submitted! Check the console for data.');
  };

  return (
    <div className="App">
      <h1>Multi-Step Form</h1>
      <form onSubmit={currentStep === 3 ? handleSubmit : (e) => e.preventDefault()}>
        <Step
          step={currentStep}
          formData={formData}
          handleChange={handleChange}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </form>
    </div>
  );
}

export default App;