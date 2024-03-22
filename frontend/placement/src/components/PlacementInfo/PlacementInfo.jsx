import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './PlacementInfo.css';

const PlacementInfo = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Assuming placement info submission
    // Redirect to home page after submission
    navigate('/');
  };

  return (
    <>
      <div className='placementInfoMain'>
        <div className='placementInfoComponentMain'>
          <div className='placementInfoComponent'>
            <div className='placementInfoNameMain'>
              Placement Information
            </div>
            <div className='placementInfoName'>
              Enter your Placement Information below
            </div>
            <div className='inputSection'>
              <span>
                Company
              </span>
              <input type="text" required/>
            </div>
            <div className='inputSection'>
              <span>
                Position
              </span>
              <input type="text" required/>
            </div>
            <div className='inputSection'>
              <span>
                Salary
              </span>
              <input type="text" required/>
            </div>
            <div className='placementInfoButton'>
              <button onClick={() => navigate('/home')}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PlacementInfo;
