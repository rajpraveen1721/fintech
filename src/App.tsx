import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RequestDemo from './pages/RequestDemo';
import Dashboard from './pages/Dashboard';
import ContactUs from './pages/ContactUs';
import RoleApprover from './pages/RoleApprover';
import TransactionDetails from './pages/TransactionDetails';
import ManageAccounts from './pages/ManageAccounts';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/request-demo" element={<RequestDemo />} />
        <Route path="/role-approver" element={<RoleApprover />} />
        <Route path="/transaction-details" element={<TransactionDetails />} /> 
        <Route path="/manage-account" element={<ManageAccounts />} /> 

      </Routes>
    </BrowserRouter>
  );
}