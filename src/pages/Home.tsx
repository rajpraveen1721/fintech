import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Home.scss";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true, amount: 0.2 }
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Hero Section */}
      <motion.section className="hero" {...fadeUp}>
        <div className="hero-text">
          <h1>Powering the Future of Finance</h1>
          <p>
            A modern fintech experience to help you innovate faster, scale securely,
            and connect seamlessly. Inspired by industry leaders like Plaid, Tink,
            Mambu & BWA.
          </p>
          <div className="buttons">
            <button className="login-btn" onClick={() => navigate("/login")}>Log In</button>
            <button className="signup-btn" onClick={() => navigate("/signup")}>Sign Up</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1605902711622-cfb43c4437d3" alt="Fintech" />
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section className="about" {...fadeUp}>
        <h2>About Our Platform</h2>
        <p>
          We bring cutting-edge financial technology solutions that empower
          businesses, individuals, and developers to build the next generation of
          financial services.
        </p>
      </motion.section>

      {/* Features Section */}
      <motion.section className="features" {...fadeUp}>
        <h2>Key Features</h2>
        <div className="feature-grid">
          {[
            { title: "Secure Payments", desc: "End-to-end encrypted transactions." },
            { title: "Open Banking", desc: "Seamless integration with major banks." },
            { title: "Data Insights", desc: "Real-time analytics and dashboards." },
            { title: "API-First", desc: "Developer-friendly APIs for customization." },
          ].map((f, idx) => (
            <motion.div key={idx} className="feature-card" whileHover={{ scale: 1.05 }}>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Partners Section */}
      <motion.section className="partners" {...fadeUp}>
        <h2>Our Trusted Partners</h2>
        <p>We work with leading financial institutions and technology providers worldwide.</p>
        <div className="partner-logos">
          {[
            "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
            "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
          ].map((logo, idx) => (
            <motion.div key={idx} className="partner-logo" whileHover={{ scale: 1.05 }}>
              <img src={logo} alt={`Partner ${idx + 1}`} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section className="testimonials" {...fadeUp}>
        <h2>What Our Clients Say</h2>
        <div className="testimonial-grid">
          {[
            { name: "John D.", text: "This platform transformed our payment processing!" },
            { name: "Sarah K.", text: "The API integration was seamless and fast." },
            { name: "Mike T.", text: "Highly recommend for any fintech startup." },
          ].map((t, idx) => (
            <motion.div key={idx} className="testimonial-card" whileHover={{ scale: 1.03 }}>
              <p>"{t.text}"</p>
              <span>- {t.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section className="cta" {...fadeUp}>
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of innovators building the future of finance.</p>
        <motion.button whileHover={{ scale: 1.05 }} onClick={() => navigate("/signup")}>
          Sign Up Now
        </motion.button>
      </motion.section>
    </div>
  );
};

export default Home;
