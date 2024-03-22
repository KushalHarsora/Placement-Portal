import React, { useState } from 'react';
import './Home.css'; // Import CSS for styling

const Home = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="home-container">
            {/* Navbar using Bootstrap */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">KJSIT</a>
                    <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${sidebarOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Sidebar using Bootstrap */}
            <div className={`container mt-4 ${sidebarOpen ? 'sidebar-open' : ''}`}>
                <div className="row">
                    <div className="col-md-3">
                        <div className="list-group">
                            <a href="#" className="list-group-item list-group-item-action active">Menu</a>
                            <a href="#" className="list-group-item list-group-item-action">Item 1</a>
                            <a href="#" className="list-group-item list-group-item-action">Item 2</a>
                            <a href="#" className="list-group-item list-group-item-action">Item 3</a>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="col-md-9">
                        <div className="main-content">
                            <h1>Upcoming Companies</h1>
                            {/* Add your content for displaying upcoming companies */}
                            {/* Example: */}
                            <div className="upcoming-companies">
                                <div className="company-card">
                                    <h2>Company 1</h2>
                                    <p>Description of Company 1</p>
                                </div>
                                <div className="company-card">
                                    <h2>Company 2</h2>
                                    <p>Description of Company 2</p>
                                </div>
                                {/* Add more company cards as needed */}
                            </div>

                            {/* Add other necessary fields and content */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
