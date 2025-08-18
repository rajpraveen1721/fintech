import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiLogOut, FiUser, FiSettings } from "react-icons/fi";
import "./Navbar.scss";
import { authService } from "../services/AuthService";
import Sidebar from "./Sidebar";
import logo from "../assets/images/logo.png";

import { Dropdown } from "react-bootstrap";

const Navbar = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const user = authService.getUser();

  const handleLogout = () => {
    authService.removeUser();
    navigate("/");
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          {user && (
            <span
              className="hamburger-icon"
              onClick={() => setSidebarOpen(true)}
            >
              ☰
            </span>
          )}
          <img
            src={logo}
            alt="Logo"
            className="navbar-logo"
            onClick={() => navigate("/")}
          />
        </div>

        <div className="navbar-actions">
          {user ? (
            <div className="profile-container">
              <Dropdown align="end">
                <Dropdown.Toggle className="profile-toggle">
                  <FiUser size={28} />
                </Dropdown.Toggle>

                <Dropdown.Menu className="profile-dropdown">
                  {/* Profile Info */}
                  <div className="profile-info">
                    <p className="username">{user.username}</p>
                    <p className="role">Product Manager</p>
                    <p className="email">{user.email}</p>
                  </div>
                  <Dropdown.Divider />

                  {/* My Account */}
                  <Dropdown.Item onClick={() => navigate("/account")}>
                    <FiUser className="dropdown-icon" color="#009999" /> My
                    Account
                  </Dropdown.Item>

                  {/* Settings */}
                  <Dropdown.Item onClick={() => navigate("/settings")}>
                    <FiSettings className="dropdown-icon" color="#009999" />{" "}
                     Settings
                  </Dropdown.Item>

                  {/* Logout */}
                  <Dropdown.Item onClick={handleLogout} className="logout">
                    <FiLogOut className="dropdown-icon" color="red" /> Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ) : (
            <div className="auth-buttons">
              <button onClick={() => navigate("/login")} className="login-btn">Login</button>
              <button onClick={() => navigate("/signup")} className="signup-btn">Signup</button>
            </div>
          )}
        </div>
      </nav>

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Navbar;
