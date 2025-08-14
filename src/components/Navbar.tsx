import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiLogOut, FiMenu } from "react-icons/fi";
import "./Navbar.scss";
import { authService } from "../services/AuthService";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const user = authService.getUser();

  const handleLogout = () => {
    authService.removeUser();
    navigate("/");
  };

   // Close dropdown on outside click
   useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    }
    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          {user && (
            <FiMenu
              size={22}
              className="hamburger-icon"
              onClick={() => setSidebarOpen(true)}
            />
          )}
          <div className="navbar-logo" onClick={() => navigate("/")}>
            OmnyPay
          </div>
        </div>

        <div className="navbar-actions">
          {user ? (
            <div className="profile-container" ref={dropdownRef}>
              <div
                className="profile-icon"
                onClick={() => setShowMenu((prev) => !prev)}
              >
                {user.username[0].toUpperCase()}
              </div>

              {showMenu && (
                <div className="profile-dropdown">
                  <p>{user.username}</p>
                  <p>{user.email}</p>
                  <button onClick={handleLogout}>
                    <FiLogOut size={16} className="logout-icon" /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="auth-buttons">
              <button onClick={() => navigate("/login")}>Login</button>
              <button onClick={() => navigate("/signup")}>Signup</button>
            </div>
          )}
        </div>
      </nav>

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Navbar;
