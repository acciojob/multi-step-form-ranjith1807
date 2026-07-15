
import './../styles/App.css';

import React, { useState } from 'react';
import Step from './Step';


function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    model: '',
    car_price: '',
    card_info: '',
    expiry_date: ''
  });

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    
    // Final check before submission
    const isCardValid = /^\d{12}$/.test(formData.card_info);
    const isExpiryValid = /^\d{2}\/\d{2}$/.test(formData.expiry_date);

    if (isCardValid && isExpiryValid) {
      console.log('Form Submitted Successfully:', formData);
    }
  };

  return (
    <div className="App">
      <Step
        step={currentStep}
        formData={formData}
        handleChange={handleChange}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;