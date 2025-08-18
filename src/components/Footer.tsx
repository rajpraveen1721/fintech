import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
    return(
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
    )
}

export default Footer;