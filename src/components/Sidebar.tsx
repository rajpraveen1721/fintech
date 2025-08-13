import { useNavigate } from "react-router-dom";
import { FiX } from "react-icons/fi";
import "./Sidebar.scss";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const menuItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Manage Accounts", path: "/manage-accounts" },
    { label: "Transaction Details", path: "/transaction-details" },
    { label: "Pending Approvals", path: "/pending-approvals"},
    { label: "Role Approver", path: "/role-approver" },
    { label: "Payments", path: "/payments"},
    { label: "Operations", path: "/operations" },
    { label: "Contact Us", path: "/contactus" },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div className={`sidebar-overlay ${isOpen ? "open" : ""}`}>
      <div className="sidebar">
        <div className="sidebar-header">
          <h3>Fintech</h3>
          <FiX className="close-icon" onClick={onClose} size={22} />
        </div>
        <ul>
          {menuItems.map((item, idx) => (
            <li key={idx} onClick={() => handleNavigation(item.path)}>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
