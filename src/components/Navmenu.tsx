import { useEffect, useRef, useState } from "react";
import "./Navmenu.scss";
import { Dropdown } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navmenu = () => {

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
        <div className="nav-container fade-down">
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
                            <li>Libraries</li>
                            <li>API Reference</li>
                            <li>Product Demos</li>
                        </ul>
                    </Dropdown.Menu>
                </Dropdown>

                {/* Resources Dropdown */}
                <Dropdown
                    show={activeDropdown === "resources"}
                    onMouseEnter={() => setActiveDropdown("resources")}
                    onMouseLeave={() => { }}
                >
                    <Dropdown.Toggle
                        variant="link"
                        id="dropdown-resources"
                        className={`nav-dropdown-toggle ${activeDropdown === "resources" ? "show" : ""}`}
                        onClick={() => setActiveDropdown(activeDropdown === "resources" ? null : "resources")}
                    >
                        Resources <FaChevronDown className="dropdown-arrow" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="custom-dropdown-menu dropdown-animate">
                        <ul className="resources-list">
                            <li>Blog</li>
                            <li>Library</li>
                            <li>Industry Resources</li>
                            <li>Customer Stories</li>
                            <li>Annual Conference</li>
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
    )
}

export default Navmenu;