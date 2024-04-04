import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Navbar.css';

export default function Navbar() {

  const navigate = useNavigate();

  const showProfile = () => {
    const profile = document.getElementById("ProfileSection");
    if (profile.className == "disableProfileSection") {
      profile.className = "ShowProfileSection";
    } else {
      profile.className = "disableProfileSection";
    }
    console.log("inside");
  }

  const Logout = () => {
    const profile = document.getElementById("ProfileSection");
    profile.style.display = "none";
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Logout Successful",
      showConfirmButton: false,
      timer: 1200
    });
    navigate("/login");
  }

  const navigateToSettings = () => {
    const profile = document.getElementById("ProfileSection");
    profile.style.display = "none";
    navigate("/setting");
  }
  return (
    <>
      <div className='navbarMain'>
        <div className='navbarFirst'>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fseeklogo.com%2Fimages%2FS%2Fsomaiya-vidyavihar-university-logo-13C717072D-seeklogo.com.png&f=1&nofb=1&ipt=fbf88fcc402a38d88ac182a29e54990c0dca87a96311466b22bb36ff69abe3ea&ipo=images"
            alt="Somaiya Logo"
            className='somaiyaImage'
            onClick={() => { navigate("/home") }}
          />
          <p onClick={() => { navigate("/home") }}>
            Placement Portal
          </p>
        </div>
        <div className='navbarSecond'>
          <ul>
            <li onClick={() => navigate("/explore")}>Explore</li>
            <li onClick={() => navigate("/about")}>About</li>
            <li onClick={() => navigate("/contact")}>Contact</li>
          </ul>
          <div>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngitem.com%2Fpimgs%2Fm%2F78-786293_1240-x-1240-0-avatar-profile-icon-png.png&f=1&nofb=1&ipt=612b93f29c6508bc1ca7dd3015827e8f7c87d7e4d0f1da91c5e0eb8469562aba&ipo=images"
              alt="profileImage"
              id='Profile'
              className='profileImage'
              onClick={showProfile}
            />
          </div>
          <div id='ProfileSection' className='disableProfileSection'>
            <span onClick={navigateToSettings}>Setting</span>
            <span onClick={Logout}>Logout</span>
          </div>
        </div>
      </div>
    </>
  )
}
