import { useState } from "react";
import "./PendingApprovals.scss";
import { TextField } from "@mui/material";

interface Approval {
    id: string;
    submittedOn: string;
    supplier: string;
    paymentAmount: string;
    currency: string;
    numInvoices: number;
}

const mockApprovals: Approval[] = [
    { id: "APV-001", submittedOn: "2024-07-20 10:30 AM", supplier: "Global Innovations Inc.", paymentAmount: "SAR 50,000", currency: "SAR", numInvoices: 5 },
    { id: "APV-002", submittedOn: "2024-07-19 04:15 PM", supplier: "Tech Solutions LLC", paymentAmount: "SAR 15,000", currency: "SAR", numInvoices: 2 },
    { id: "APV-003", submittedOn: "2024-07-19 11:00 AM", supplier: "Creative Designs Co.", paymentAmount: "SAR 7,500", currency: "SAR", numInvoices: 1 },
    { id: "APV-004", submittedOn: "2024-07-18 09:45 AM", supplier: "Logistics Pro Services", paymentAmount: "SAR 32,000", currency: "SAR", numInvoices: 8 },
    { id: "APV-005", submittedOn: "2024-07-18 02:00 PM", supplier: "Marketing Nexus Ltd.", paymentAmount: "SAR 12,000", currency: "SAR", numInvoices: 3 },
    { id: "APV-006", submittedOn: "2024-07-17 08:30 AM", supplier: "Construction Dynamics", paymentAmount: "SAR 85,000", currency: "SAR", numInvoices: 12 },
];

const PendingApprovals = () => {
    const [approvals, setApprovals] = useState(mockApprovals);

    const handleApprove = (id: string) => {
        setApprovals(prev => prev.filter(a => a.id !== id));
        alert(`Approved ${id}`);
    };

    const handleReject = (id: string) => {
        setApprovals(prev => prev.filter(a => a.id !== id));
        alert(`Rejected ${id}`);
    };

    const totalPending = approvals.length;
    const highestAmount = approvals.reduce((max, a) => {
        const amount = parseFloat(a.paymentAmount.replace(/[^0-9.-]+/g, ""));
        return amount > max ? amount : max;
    }, 0);

    return (
        <div className="pending-approvals-container">
            <div className="header-row">
                <h4 className="title">Pending Approvals</h4>
            </div>

            <div className="top-cards">
                <div className="card overview">
                    <h6>Approval Overview</h6>
                    <div className="overview-content">
                        <div>Total Pending :  <span>{totalPending}</span></div>
                        <div>Highest Amount :  <span>SAR {highestAmount.toLocaleString()}</span></div>
                    </div>
                </div>
                <div className="card deadlines">
                    <h6>Upcoming Deadlines</h6>
                    <ul>
                        {approvals.slice(0, 2).map(a => (
                            <li key={a.id}>{a.id}:  Due in 1 day</li>
                        ))}
                    </ul>
                </div>
                <div className="card actions">
                    <h6>Quick Actions</h6>
                    <button className="btn quick">Review All Overdue</button>
                </div>
            </div>

            <div className="approval-container">
                <div className='header-content'>
                    <h5 className='table-title'>Approvals</h5>
                    <div className="search-sort">
                    <input type="text" placeholder="Search approvals..." />
                    <select>
                        <option>Sort by</option>
                        <option>ASC</option>
                        <option>DESC</option>
                    </select>
                </div>
                </div>

                <div className="approval-cards">
                    {approvals.map(a => (
                        <div key={a.id} className="approval-card">
                            <h6>For your action</h6>
                            <p>Approval ID: {a.id} • Submitted on {a.submittedOn}</p>
                            <p>Supplier Name: <span>{a.supplier}</span></p>
                            <p>Payment Amount: <span>{a.paymentAmount}</span></p>
                            <p>Currency: <span>{a.currency}</span></p>
                            <p>Number of Invoices: <span>{a.numInvoices}</span></p>
                            <div className="actions">
                                <button className="btn approve" onClick={() => handleApprove(a.id)}>Approve</button>
                                <button className="btn reject" onClick={() => handleReject(a.id)}>Reject</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PendingApprovals;
