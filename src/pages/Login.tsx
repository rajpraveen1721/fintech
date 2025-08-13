import { authService } from '../services/AuthService';
import './Login.scss';
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
     e.preventDefault(); 
    authService.saveUser({ username: "JohnDoe", email: "john@example.com" });
    navigate("/dashboard");
  }

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleForgotPassword = () => {
    // navigate("/forgot-password");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login to FinTech</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username" className='form-label'>Username</label>
            <input type="text" className='form-control' id="username" placeholder="Enter your username" />
          </div>

          <div className="form-group">
            <label htmlFor="password" className='form-label'>Password</label>
            <input type="password" className='form-control' id="password" placeholder="Enter your password" />
          </div>

          <div className="form-group">
            <label htmlFor="passcode" className='form-label'>Passcode</label>
            <input type="password" className='form-control' id="passcode" placeholder="Enter passcode" />
          </div>

          {/* <div className="mfa-info">
            <p>MFA - Please choose the below number in MFA</p>
            <div className="mfa-number">42</div>
          </div> */}

          <button className="login-button" onClick={handleLogin}>Login</button>

          <div className="login-links">
            <p className="forgot-password" onClick={handleForgotPassword}>
              Forgot Password?
            </p>
            <p className="signup-text">
              Don’t have an account?{" "}
              <span onClick={handleSignup} className="signup-link">
                Sign Up
              </span>
            </p>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Login;