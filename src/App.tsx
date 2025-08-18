import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RequestDemo from './pages/RequestDemo';
import Dashboard from './pages/Dashboard';
import ContactUs from './pages/ContactUs';
import RoleApprover from './pages/RoleApprover';
import TransactionDetails from './pages/TransactionDetails';
import ManageAccounts from './pages/ManageAccounts';
import PendingApprovals from './pages/PendingApprovals';
import Operations from './pages/Operations';
import Payments from './pages/Payments';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/request-demo" element={<RequestDemo />} />
        <Route path="/role-approver" element={<RoleApprover />} />
        <Route path="/operations" element={<Operations />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/transaction-details" element={<TransactionDetails />} /> 
        <Route path="/manage-accounts" element={<ManageAccounts />} /> 
        <Route path="/pending-approvals" element={<PendingApprovals />} /> 

      </Routes>
    </BrowserRouter>
  );
}