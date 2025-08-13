import { useNavigate } from "react-router-dom";
import "./ContactUs.scss";

const ContactUs = () => {
  const navigate = useNavigate();

  const navigateTo = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/request-demo");
  };

  return (
    <div className="contact-container">
      <div className="form-wrapper">
        <h1>Contact Us / Request a Demo</h1>
        <p className="subtitle">
          Tell us about your needs and we'll show you how our solution can
          transform your business.
        </p>

        <form onSubmit={navigateTo}>
          <div className="row">
            <div className="form-group">
              <label className="form-label">
                Company Name <span className="required">*</span>
              </label>
              <input
                className="form-control"
                type="text"
                name="companyName"
                placeholder="Enter Company Name"
              />
            </div>
            <div className="form-group">
              <label className="form-label">
                Requestor Name <span className="required">*</span>
              </label>
              <input
                className="form-control"
                type="text"
                name="requestorName"
                placeholder="Enter Requestor Name"
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group">
              <label className="form-label">
                Business Email <span className="required">*</span>
              </label>
              <input
                className="form-control"
                type="email"
                name="businessEmail"
                placeholder="Enter Business Email"
              />
            </div>
            <div className="form-group">
              <label className="form-label">
                Contact Number <span className="required">*</span>
              </label>
              <input
                className="form-control"
                type="tel"
                name="contactNumber"
                placeholder="Enter Contact Number"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              What is your enquiry about? <span className="required">*</span>
            </label>
            <select className="form-control" name="enquiry">
              <option value="">Select</option>
              <option value="demo">Request a Demo</option>
              <option value="support">Product Support</option>
              <option value="pricing">Pricing Inquiry</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="submit-btn">
            <button type="submit">Request Demo</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
