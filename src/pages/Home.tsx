import React, { useRef, useEffect, useState } from "react";
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
import Footer from "../components/Footer";
import Navmenu from "../components/Navmenu";

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

  return (
    <div className="home">
      {/* Hero Section 1 with Navbar */}
      <section
        ref={hero1.ref}
        className={`hero section-one ${hero1.isVisible ? "animate" : ""}`}
      >
        {/* Navbar */}
        <Navmenu />

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
              <p className="profile-role">Co-Founder & CEO</p>
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
              <p className="profile-role">Product Manager</p>
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
              <p className="profile-role">Product Owner</p>
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
              <p className="profile-role">Business analyst</p>
              <p className="profile-desc">
                “We prioritize understanding our clients’ evolving challenges to
                deliver personalized banking solutions that foster long-term
                success.”
              </p>
            </div>
          </div>
        </div>
      </section>
          <Footer />
    </div>
  );
};

export default Home;
