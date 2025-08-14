import './RequestDemo.scss';
import { useNavigate } from "react-router-dom";

const RequestDemo = () => {
    const navigate = useNavigate();
    return (
        <div className="request-demo-container">
            <div className="request-demo-card">
                <h1>Thanks for reaching <span>Omnypay</span></h1>
                <p className="subtext">
                    Our sales team will reach you soon!
                </p>
                <p className="email-note">
                    For Immediate inquiries, please write your to <a href="mailto:support@bankingbridge.com">support@bankingbridge.com</a>
                </p>
                <button className="back-button" onClick={() => navigate("/")}>
                    ← Back to Home
                </button>
            </div>
        </div>
    );
}

export default RequestDemo;
