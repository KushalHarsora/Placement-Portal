import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import Somaiya1Image from '../../assets/Somaiya1.png';
import img1 from '../../assets/img1.png';
import collegeimg from '../../assets/collegeimg.jpg';
import d from '../../assets/d.png'
const HomePage = () => {
  const [activeTab, setActiveTab] = useState('Home'); // Manage active tab for navigation

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
 
  return (
    <div className="home-page">
      <nav className="navbar"> 
        <img src={Somaiya1Image} alt="Somaiya Logo" />
        <ul>
          <li>
            <a href="#" onClick={() => handleTabClick('Home')}>
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleTabClick('About')}>
              About Us
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleTabClick('Contact')}>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <header className="header">
        <h1>Placement Portal</h1>
      </header>
      <div className='container1'>
      <img src={img1} alt="image1" />
      </div>
      <div className='container2'>
       <div className='aboutus'>
        <div className='inner-section'>
          <h1>About KJSIT</h1>
          <p className='text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quaerat perspiciatis laborum reiciendis ut voluptate harum dicta molestiae at eum? 
            Illum saepe odio iste ea perspiciatis nulla velit, autem voluptate pariatur.
          </p>
          <div className='skills'>
            <button>Read More</button>
          </div>
        </div>
      </div>
      </div>
      <div className='container3'>
        <section>
          <div className='row'>
            <h1> Our Team </h1>
          </div>
          <div className='row'>
            <div className='column'>
              <div className='card'>
                <div className='img-container'>
                <img className="d" src={d} alt="Devanshi's pic"/>
                </div>
                <h2>Devanshi Joshi</h2>
                <p>Studying at K.J. Somaiya Institute of Technology</p>
                <div className='icons'>
                  <a href='#'>
                    devanshi.kj@somaiya.edu
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='column'>
              <div className='card'>
                <div className='img-container'>
                <img className="d" src={d} alt="Devanshi's pic"/>
                </div>
                <h2>Devanshi Joshi</h2>
                <p>Studying at K.J. Somaiya Institute of Technology</p>
                <div className='icons'>
                  <a href='#'>
                    devanshi.kj@somaiya.edu
                  </a>
                </div>
              </div>
            </div>
          </div> 
          <div className='row'>
            <div className='column'>
              <div className='card'>
                <div className='img-container'>
                <img className="d" src={d} alt="Devanshi's pic"/>
                </div>
                <h2>Devanshi Joshi</h2>
                <p>Studying at K.J. Somaiya Institute of Technology</p>
                <div className='icons'>
                  <a href='#'>
                    devanshi.kj@somaiya.edu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <footer className="footer">
      <div className="footer-content">
        <h6>
          <b>Department Of Computer Engineering</b>
        </h6>
        <h6>
          <i className="bi bi-c-circle"></i><b>2024-25</b>
        </h6>
        <h6>
          <b>Guided by : Dr.Nilesh Yadav</b>
        </h6>
        <h6>
          <b>Developed by : Umair Ansari, Kushal Harsora, Devanshi Joshi</b>
        </h6>
      </div>
      </footer> */}
    </div>
  );
};

export default HomePage;
