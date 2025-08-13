import React, { useState } from "react";
import "./Signup.scss";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/AuthService";
import signupImg from "../assets/images/signup.png";
import { FaTrash } from "react-icons/fa";

const Signup = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);

    const handleSubmit = () => {
        authService.saveUser({ username: "John Doe", email: "john@example.com" });
        navigate("/dashboard");
    }

    const handleRequestDemo = () => {
        navigate("/contactus");
    }

    const [files, setFiles] = useState<File[]>([]);

    // Handle file selection
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files ? Array.from(e.target.files) : [];
        if (selectedFiles.length > 0) {
            setFiles((prev) => [...prev, ...selectedFiles]);
        }
    };

    // Remove file
    const handleRemoveFile = (index: number) => {
        setFiles((prev) => prev.filter((_, i) => i !== index));
    };


    return (
        <div className="signup-container">
            {step === 1 ? (
                <div className="signup-card signup-step1">
                    {/* Left Side */}
                    <div className="signup-left">
                        <div className="image-box">
                            <img
                                src={signupImg}
                                alt="Onboarding"
                                className="signup-image"
                            />
                        </div>
                        <h2>Simplify Your Business Onboarding</h2>
                        <p>
                            Fintech offers a streamlined, secure, and intuitive platform to
                            manage your business operations from day one.
                        </p>
                    </div>

                    {/* Right Side */}
                    <div className="signup-right">
                    <h2>Create Your Account</h2>
                        <p>Enter your organization and contact details to get started.</p>

                        <form>
                            <div className="form-group">
                                <label className="form-label">Organization Name</label>
                                <input type="text" className="form-control" placeholder="Enter Organization Name" />
                            </div>

                            <div className="form-group">
                                <label className="form-label">CR/Registration Number</label>
                                <input type="text" className="form-control" placeholder="Enter CR/Registration Number" />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Email Id</label>
                                <input type="email" className="form-control" placeholder="Enter Email Id" />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" placeholder="Enter Password" />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" placeholder="Enter Confirm Password" />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Bank</label>
                                <select className="form-control">
                                    <option value="">Select your bank</option>
                                    <option value="SNB">SNB</option>
                                    <option value="ANB">ANB</option>
                                    <option value="RB">RB</option>
                                    <option value="ARB">ARB</option>
                                </select>
                            </div>
                            <button className="signup-button" onClick={()=> setStep(2)}>Signup</button>
                            <button className="request-button" onClick={handleRequestDemo}>Request Demo</button>

                        </form>
                    </div>
                </div>
            ) : (
                <div className=" signup-card signup-step2">
                    <h2>Complete Your Registration</h2>
                    <p>Just a few more details to finalize your account setup.</p>

                    <form>
                        <div className="form-group">
                            <label className="form-label">Bank</label>
                            <select className="form-control">
                                <option value="">Select a bank</option>
                                <option value="SNB">SNB</option>
                                <option value="RB">RB</option>
                                <option value="SABB">SABB</option>
                                <option value="ARB">ARB</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Agreement</label>
                            <select className="form-control">
                                <option value="">Select an agreement</option>
                                <option value="SNB">SNB</option>
                                <option value="RB">RB</option>
                                <option value="SABB">SABB</option>
                                <option value="ARB">ARB</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Required Documents</label>
                            <div className="file-upload-box"
                                onClick={() => document.getElementById("fileInput")?.click()}>
                                <p>Drag & drop files here or click to upload</p>
                                <small>Supported formats: PDF, DOCX, JPEG, PNG (Max 5MB)</small>
                                <input
                                    id="fileInput"
                                    type="file"
                                    multiple
                                    style={{ display: "none" }}
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>

                        {files.length > 0 && (
                            <div className="uploaded-files">
                                {files.map((file, index) => (
                                    <div className="file-item" key={index}>
                                        <span className="file-name">{file.name}</span>
                                        <FaTrash
                                            className="remove-icon"
                                            onClick={() => handleRemoveFile(index)}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="form-group">
                            <label className="form-label">Select Desired Services</label>
                            <select className="form-control">
                                <option value="">Choose services</option>
                                <option value="payments">Payments</option>
                                <option value="loans">Loans</option>
                            </select>
                        </div>
                        <div className="actions">
                        <button className="previous-button"  onClick={()=> setStep(1)}>Previous</button>
                        <button className="submit-button" onClick={handleSubmit}>Submit Registration</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Signup;
