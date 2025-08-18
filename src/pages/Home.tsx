import React, { useRef, useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./Home.scss";
import aramcoLogo from "../assets/images/aramco.png";
import neomLogo from "../assets/images/neom.png";
import redseaLogo from "../assets/images/redsea.png";
import fifaLogo from "../assets/images/fifa.png"
import peopleImg from "../assets/images/people.png";
import partnersImg from "../assets/images/partners.jpg";
import teamImg from "../assets/images/team.jpg";
import corporateBankingImg from "../assets/images/corporate_banking.jpg"
import { useNavigate } from "react-router-dom";
import { FaChevronDown, FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";

/** Hook for scroll-triggered animations */
// const useInViewAnimation = (threshold: number = 0.2) => {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold }
//     );

//     if (ref.current) observer.observe(ref.current);
//     return () => {
//       if (ref.current) observer.unobserve(ref.current);
//     };
//   }, [threshold]);

//   return { ref, isVisible };
// };

// inside useInViewAnimation
const useInViewAnimation = (threshold: number = 0.15) => { // lowered threshold for mobile
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
      {
        threshold,
        rootMargin: "0px 0px -50px 0px" // ensures early trigger for short screens
      }
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

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="home">
      {/* Hero Section 1 with Navbar */}
      <section
        ref={hero1.ref}
        className={`hero section-one ${hero1.isVisible ? "animate" : ""}`}
      >
        {/* Navbar */}
        <div className="home-navbar fade-down">
          <div className="nav-content" ref={dropdownRef}>
            {/* Products Dropdown */}

            <Dropdown
              show={activeDropdown === "products"}
              onMouseEnter={() => setActiveDropdown("products")}
              onMouseLeave={() => { }}
            >
              <Dropdown.Toggle
                variant="link"
                id="dropdown-products"
                className={`nav-dropdown-toggle ${activeDropdown === "products" ? "show" : ""}`}
                onClick={() => setActiveDropdown(activeDropdown === "products" ? null : "products")}
              >
                Products <FaChevronDown className="dropdown-arrow" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="custom-dropdown-menu dropdown-animate">
                <ul className="product-list">
                  <li>OLP</li>
                  <li>Bulk OLP</li>
                  <li>SADAD</li>
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
            <Dropdown
              show={activeDropdown === "developers"}
              onMouseEnter={() => setActiveDropdown("developers")}
              onMouseLeave={() => { }}
            >
              <Dropdown.Toggle
                variant="link"
                id="dropdown-developers"
                className={`nav-dropdown-toggle ${activeDropdown === "developers" ? "show" : ""}`}
                onClick={() => setActiveDropdown(activeDropdown === "developers" ? null : "developers")}
              >
                Developers <FaChevronDown className="dropdown-arrow" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="custom-dropdown-menu dropdown-animate">
                <ul className="developer-list">
                  <li>Documentation</li>
                  <li>Development</li>
                  <li>API Reference</li>
                  <li>Product Demos</li>
                </ul>
              </Dropdown.Menu>
            </Dropdown>

            {/* About Us */}
            <span className="nav-item">About Us</span>

            {/* Contact Button */}
            <div className="nav-actions">
              <button className="contact-btn" onClick={() => navigate('/contactus')}>Contact Us</button>
            </div>
          </div>
        </div>

        {/* Section 1 Content */}
        <div className="hero-content center">
          <h1>One Bridge for All Your Corporate Banking Needs</h1>
          <p>
            Welcome to your single destination for seamless corporate banking solutions. At Banking Bridge, we understand that managing your business’s financial needs requires efficiency, reliability, and personalized service. That’s why we offer a comprehensive suite of banking products tailored specifically for corporations of all sizes.
          </p>
        </div>
      </section>

      {/* Hero Section 2 */}
      <section
        ref={hero2.ref}
        className={`hero section-two ${hero2.isVisible ? "animate" : ""}`}
      >
        <div className="hero-layout">
          <div className="image-placeholder">
            <img src={corporateBankingImg} alt="Corporate Banking" />
          </div>
          <div className="text-content left">
            <h2>Our Expertise in Corporate Banking</h2>
            <p>
              Whether you need cash management, business loans, trade finance, or treasury services, our expert team is here to bridge the gap between your ambitions and financial goals. With cutting-edge technology and dedicated support, we simplify
              complex transactions so you can focus on what matters most—growing your business.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section 3 */}
      <section
        ref={hero3.ref}
        className={`hero section-three ${hero3.isVisible ? "animate" : ""}`}
      >
        <div className="hero-layout reverse">
          <div className="image-placeholder">
            <img src={partnersImg} alt="Partners" />
          </div>
          <div className="text-content right">
            <h2>Your Trusted Financial Partner</h2>
            <p>
              Experience the convenience and confidence of having one trusted partner for all your corporate banking
              needs. Connect with us today and discover how we can help accelerate your company’s success.
            </p>
            <button className="cta-btn hover-glow" onClick={() => navigate('/request-demo')}>Request Demo</button>
          </div>
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

      {/* Founders Section */}
      <section ref={founders.ref}
        className={`founders ${founders.isVisible ? "animate" : ""}`}>
        <div className="container">
          <h2 className="section-title">Meet Our Visionary Founders</h2>
          <p className="section-subtitle">
            Guided by extensive expertise and a shared vision, our founders lead
            BridgeBank towards a future of innovation in corporate banking.
          </p>

          <div className="grid grid-2">
            <div className="profile-card">
              <div className="profile-img">
                <img src={peopleImg} alt="Founder 1" />
              </div>
              <h5 className="profile-name">Mutaz al ghimlas</h5>
              <p className="profile-role">Co-Founder & CEO</p>
              <p className="profile-desc">
                Over two decades of experience in the banking sector and played a key role in KSA fintech vision 2030.
              </p>
            </div>

            <div className="profile-card">
              <div className="profile-img">
                <img src={peopleImg} alt="Founder 2" />
              </div>
              <h5 className="profile-name">Sultan al onizi</h5>
              <p className="profile-role">Co-Founder & CTO</p>
              <p className="profile-desc">
                Over two decades of experience in the banking sector and played a key role in KSA fintech vision 2030.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={team.ref}
        className={`team ${team.isVisible ? "animate" : ""}`}>
        <div className="container">
          <h2 className="section-title">Meet Our Expert Team</h2>
          <p className="section-subtitle">
            Our diverse team of dedicated professionals is committed to
            providing exceptional service and driving innovation in corporate
            banking.
          </p>

          <div className="grid grid-3">
            <div className="profile-card">
              <div className="profile-img">
                <img src={teamImg} alt="Team Member 1" />
              </div>
              <h5 className="profile-name">Renga M</h5>
              <p className="profile-role">Head of Product</p>
              <p className="profile-desc">
                “Our commitment to client-centric solutions drives every product
                innovation, ensuring seamless and reliable banking experiences.”
              </p>
            </div>

            <div className="profile-card">
              <div className="profile-img">
                <img src={teamImg} alt="Team Member 2" />
              </div>
              <h5 className="profile-name">Salman</h5>
              <p className="profile-role">Lead Architect</p>
              <p className="profile-desc">
                “Building robust and secure financial infrastructures is not
                just our job; it is our passion, pushing the product forward.”
              </p>
            </div>

            <div className="profile-card">
              <div className="profile-img">
                <img src={teamImg} alt="Team Member 3" />
              </div>
              <h5 className="profile-name">Sarah K</h5>
              <p className="profile-role">Client Relations Manager</p>
              <p className="profile-desc">
                “We prioritize understanding our clients’ evolving challenges to
                deliver personalized banking solutions that foster long-term
                success.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-links">
            <a href="#resources">Resources</a>
            <a href="#company">Company</a>
            <a href="#legal">Legal</a>
          </div>
          <div className="footer-icons">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaFacebookF /></a>
          </div>
          <p className="footer-copy">© 2025 Omnypay. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default Home;
