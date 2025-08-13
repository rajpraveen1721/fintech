import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="hero">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Powering the Future of Finance</h1>
          <p>
            A modern fintech experience to help you innovate faster, scale securely,
            and connect seamlessly. Inspired by industry leaders like Plaid, Tink,
            Mambu & BWA.
          </p>
          <div className="buttons">
            <button onClick={() => navigate('/login')} className="login-btn">Log In</button>
            <button onClick={() => navigate('/signup')} className="signup-btn">Sign Up</button>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1605902711622-cfb43c4437d3"
            alt="Fintech"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Home;