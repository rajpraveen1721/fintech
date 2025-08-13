import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiLogOut, FiMenu } from "react-icons/fi";
import "./Navbar.scss";
import { authService } from "../services/AuthService";
import Sidebar from "./sideBar";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const user = authService.getUser();

  const handleLogout = () => {
    authService.removeUser();
    navigate("/");
  };

  return (
    <>
      <nav className="navbar">
        <div className="d-flex align-items-center">
          {user && <FiMenu
            size={22}
            className="hamburger-icon me-2"
            onClick={() => setSidebarOpen(true)}
          />}
          <div className="navbar-logo" onClick={() => navigate("/")}>
            Fintech
          </div>
        </div>

        <div className="navbar-actions">
          {user ? (
            <div className="profile-container">
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
            <>
              <button onClick={() => navigate("/login")}>Login</button>
              <button onClick={() => navigate("/signup")}>Signup</button>
            </>
          )}
        </div>
      </nav>

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}

export default Navbar;
