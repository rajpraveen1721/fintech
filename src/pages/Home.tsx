import React, { useRef, useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./Home.scss";
import aramcoLogo from "../assets/images/ARAMCO.png";
import neomLogo from "../assets/images/NEOM.png";
import redseaLogo from "../assets/images/redsea.png";
import fifaLogo from "../assets/images/fifa.png";
import peopleImg from "../assets/images/people.png";
import { useNavigate } from "react-router-dom";

/** Hook for scroll-triggered animations */
const useInViewAnimation = (threshold: number = 0.2) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return { ref, isVisible };
};

const Home: React.FC = () => {
  const hero1 = useInViewAnimation();
  const hero2 = useInViewAnimation();
  const hero3 = useInViewAnimation();
  const partners = useInViewAnimation();
  const team = useInViewAnimation();
  const founders = useInViewAnimation();
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Hero Section 1 with Navbar */}
      <section
        ref={hero1.ref}
        className={`hero section-one ${hero1.isVisible ? "animate" : ""}`}
      >
        <div className="overlay"></div>
        {/* Navbar */}
        <div className="home-navbar fade-down">
          <div className="nav-content">
            {/* Products Dropdown */}
            <Dropdown>
              <Dropdown.Toggle
                variant="link"
                id="dropdown-products"
                className="nav-dropdown-toggle"
              >
                Products
              </Dropdown.Toggle>
              <Dropdown.Menu className="custom-dropdown-menu">
                <ul className="product-list">
                  <li>OLP</li>
                  <li>Bulk OLP</li>
                  <li>
                    SADAD
                    {/* <ul>
                      <li>Utility</li>
                      <li>Gov</li>
                    </ul> */}
                  </li>
                  <li>Treasury Exchange Rate</li>
                  <li>Account Balance</li>
                  <li>Account Credit Notification</li>
                  <li>Account Statement</li>
                  <li>Swift Copy</li>
                  <li>Direct Credit</li>
                  <li>Direct Debit</li>
                  <li>POS Merchant Statement</li>
                  <li>Payroll</li>
                  <li>Account Verification</li>
                  <li>CRN Verification</li>
                </ul>
              </Dropdown.Menu>
            </Dropdown>

            {/* Developers Dropdown */}
            <Dropdown>
              <Dropdown.Toggle
                variant="link"
                id="dropdown-developers"
                className="nav-dropdown-toggle"
              >
                Developers
              </Dropdown.Toggle>
              <Dropdown.Menu className="custom-dropdown-menu">
                <ul className="developer-list">
                  <li>Resources</li>
                  <li>API Reference</li>
                  <li>Documentation</li>
                  <li>Product Demos</li>
                </ul>
              </Dropdown.Menu>
            </Dropdown>

            {/* About Us */}
            <span className="nav-item">About Us</span>

            {/* Contact Button */}
            <div className="nav-actions">
              <button className="contact-btn" onClick={()=> navigate('/contactus')}>Contact Us</button>
            </div>
          </div>
        </div>

        {/* Section 1 Content */}
        <div className="hero-content">
          <h1>One Bridge for All Your Corporate Banking Needs</h1>
          <p>
            Welcome to your single destination for seamless corporate banking
            solutions. At Banking Bridge, we understand that managing your
            business’s financial needs requires efficiency, reliability, and
            personalized service. That’s why we offer a comprehensive suite of
            banking products tailored specifically for corporations of all sizes.
          </p>
        </div>
      </section>

      {/* Hero Section 2 */}
      <section
        ref={hero2.ref}
        className={`hero section-two ${hero2.isVisible ? "animate" : ""}`}
      >
        <div className="hero-content">
          <h2>Our Expertise in Corporate Banking</h2>
          <p>
            Whether you need cash management, business loans, trade finance, or
            treasury services, our expert team is here to bridge the gap between
            your ambitions and financial goals. With cutting-edge technology and
            dedicated support, we simplify complex transactions so you can focus
            on what matters most—growing your business.
          </p>
        </div>
      </section>

      {/* Hero Section 3 */}
      <section
        ref={hero3.ref}
        className={`hero section-three ${hero3.isVisible ? "animate" : ""}`}
      >
        <div className="hero-content">
          <h2>Your Trusted Financial Partner</h2>
          <p>
            Experience the convenience and confidence of having one trusted
            partner for all your corporate banking needs. Connect with us today
            and discover how we can help accelerate your company’s success.
          </p>
          <button className="cta-btn hover-glow">Connect With Us</button>
        </div>
      </section>

      {/* Partners */}
      <section
        ref={partners.ref}
        className={`partners ${partners.isVisible ? "animate" : ""}`}
      >
        <h2>Our Trusted Partners</h2>
        <p>We work with all corporates and customers worldwide</p>
        <div className="partner-logos">
          {[aramcoLogo, neomLogo, redseaLogo, fifaLogo].map((logo, i) => (
            <img key={i} src={logo} alt={`Partner ${i + 1}`} className="hover-zoom" />
          ))}
        </div>
      </section>

      {/* Team */}
      <section ref={team.ref} className={`team ${team.isVisible ? "animate" : ""}`}>
        <h2>Meet Our Team</h2>
        <div className="team-members">
          {[
            { name: "Renga M", quote: "This platform transformed our payment processing!" },
            { name: "Faisal", quote: "The API integration was seamless and fast." },
            { name: "Sarah K", quote: "Highly recommend for any fintech startup." },
          ].map((member, i) => (
            <div key={i} className="member hover-tilt">
              <img src={peopleImg} alt={member.name} />
              <h3>{member.name}</h3>
              <p className="quote">"{member.quote}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founders */}
      <section
        ref={founders.ref}
        className={`founders ${founders.isVisible ? "animate" : ""}`}
      >
        <h2>Our Founders</h2>
        <div className="founder-list">
          <div className="founder">
            <h3>Mutaz al ghimlas</h3>
            <p>Over 18+ years of experience in the banking sector and played a key role in KSA fintech vision 2030.</p>
          </div>
          <div className="founder">
            <h3>Sultan al onizi</h3>
            <p>Over 18+ years of experience in the banking sector and played a key role in KSA fintech vision 2030.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
