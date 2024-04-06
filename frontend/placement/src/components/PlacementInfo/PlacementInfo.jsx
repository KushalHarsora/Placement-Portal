import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PlacementInfo.css';

const PlacementInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    roll: '',
    personal_email_id: '',
    institute_email_id: '',
    mobile_number_1: '',
    mobile_number_2: '',
    gender: '',
    category: '',
    address: '',
    date_of_birth: '',
    rank: '',
    categoryRank: '',
    registered_for: '',
    program: '',
    pwd: false,
    department: '',
    course: '',
    spi_1: '',
    spi_2: '',
    spi_3: '',
    spi_4: '',
    spi_5: '',
    spi_6: '',
    spi_7: '',
    spi_8: '',
    cpi: '',
    X_marks: '',
    XII_marks: '',
    bachelor_marks: '',
    master_marks: '',
    admission_year: '',
  });

  const handleSubmit = () => {
    // Handle form submission
    // Redirect to home page after submission
    navigate('/');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='placementInfoMain'>
      <div className='placementInfoComponent'>
        <div className='placementInfoHeader'>
          <div className='placementInfoNameMain'>Placement Information</div>
          <div className='placementInfoName'>Enter your Placement Information below</div>
        </div>
        {Object.entries(formData).map(([key, value]) => {
          // Skip fields without labels
          if (key === 'pwd') return null;
          return (
            <div className='inputSection' key={key}>
              <label htmlFor={key}>{key.replace(/_/g, ' ').toUpperCase()}:</label>
              <input
                type='text'
                id={key}
                name={key}
                value={value}
                onChange={handleChange}
                required
              />
            </div>
          );
        })}
        <div className='placementInfoButton'>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default PlacementInfo;
