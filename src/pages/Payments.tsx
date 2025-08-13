import { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { DataGrid, GridToolbar, type GridColDef } from "@mui/x-data-grid";
import "./Payments.scss";
import { TextField } from "@mui/material";

interface Payment {
    id: number;
    bank: string;
    transaction: string;
    type: string;
    date: string;
    beneficiary: string,
    amount: number;
    currency: string;
    status: string
}

const Payments = () => {
    const [showModal, setShowModal] = useState(false);

    const payments: Payment[] = [
        { id: 1, bank: "SNB", transaction: "123456789", type: "Credit Transfer", date: "2024-07-15", beneficiary: "Al Hussein Trading Co.", amount: 13000, currency: "SAR", status: "Approved" },
        { id: 2, bank: "ARS", transaction: "987654321", type: "Payroll Payment", date: "2024-07-14", beneficiary: "Al Hilal Enterprises", amount: 25500, currency: "SAR", status: "Submitted" },
        { id: 3, bank: "RB", transaction: "456123789", type: "Vendor Payment", date: "2024-07-13", beneficiary: "Saudia Gov. Services", amount: 8200, currency: "SAR", status: "Pending" },
        { id: 4, bank: "SNB", transaction: "789012345", type: "Utility Bill", date: "2024-07-12", beneficiary: "Power & Light Co.", amount: 850.5, currency: "SAR", status: "Rejected" },
        { id: 5, bank: "ARS", transaction: "321098765", type: "Inter-Bank Transfer", date: "2024-07-11", beneficiary: "Global Investments LLC", amount: 50000, currency: "USD", status: "Approved" },
        { id: 6, bank: "RB", transaction: "654789012", type: "Loan Repayment", date: "2024-07-10", beneficiary: "Finance Solutions Inc.", amount: 1500, currency: "SAR", status: "Approved" },
    ];

    const columns: GridColDef[] = [
        { field: "bank", headerName: "Bank", flex: 1 },
        { field: "transaction", headerName: "Transaction Ref. No.", flex: 1.5 },
        { field: "type", headerName: "Type", flex: 1.5 },
        { field: "date", headerName: "Date", flex: 1 },
        { field: "beneficiary", headerName: "Beneficiary Name", flex: 2 },
        { field: "amount", headerName: "Amount", flex: 1 },
        { field: "currency", headerName: "Currency", flex: 1 },
        {
            field: "status",
            headerName: "Status",
            flex: 1,
            renderCell: (params) => {
                const status = params.value;
                let className = "";
                if (status === "Approved") className = "approved";
                else if (status === "Submitted") className = "submitted";
                else if (status === "Pending") className = "pending";
                else if (status === "Rejected") className = "rejected";
                return <span className={`status ${className}`}>{status}</span>;
            },
        },
    ];


    return (
        <div className="payment-container">
            <div className="header-row">
                <h4 className="title">Payments</h4>
            </div>

            <div className="table-card">
                <div className='header-content'>
                    <h5 className='table-title'>Payments Status</h5>
                    <div className='actions'>
                        <TextField
                            size="small"
                            placeholder="Search payments..."
                            className="search-input"
                            variant="outlined"
                        />
                        <button className="add-btn" onClick={() => setShowModal(true)}> + New Payment </button>
                    </div>
                </div>

                <div className="table-container accounts">
                    <DataGrid
                        rows={payments}
                        columns={columns}
                        autoHeight
                        rowHeight={40}
                        className="data-grid"
                        disableRowSelectionOnClick
                        slots={{ toolbar: GridToolbar }}
                        slotProps={{
                            toolbar: {
                                showQuickFilter: true,
                                quickFilterProps: { debounceMs: 500 },
                            },
                        }}
                    />
                </div>
            </div>

            <Modal show={showModal}
                onHide={() => setShowModal(false)}
                size="lg"
                centered
                dialogClassName="custom-dialog-container"
            >
                <Modal.Header closeButton>
                    <Modal.Title>New Payment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="bank">
                                    <Form.Label>Bank</Form.Label>
                                    <Form.Select name="bank">
                                        <option value="">Select Bank</option>
                                        <option value="SNB">SNB</option>
                                        <option value="ARS">ARS</option>
                                        <option value="RB">RB</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="beneficiaryAccount">
                                    <Form.Label>Beneficiary Account</Form.Label>
                                    <Form.Control type="text" name="beneficiaryAccount" placeholder="Enter beneficiary account number" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="paymentDate">
                                    <Form.Label>Payment Date</Form.Label>
                                    <Form.Control type="date" name="paymentDate" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="bankCode">
                                    <Form.Label>Bank Code</Form.Label>
                                    <Form.Control type="text" name="bankCode" placeholder="Enter bank code" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="entityName">
                                    <Form.Label>Entity Name</Form.Label>
                                    <Form.Control type="text" name="entityName" placeholder="Enter entity name" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="address">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control as="textarea" rows={1} name="address" placeholder="Enter address" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="disbursement">
                                    <Form.Label>Disbursement Bank Account</Form.Label>
                                    <Form.Select name="disbursement">
                                        <option value="">Select Account</option>
                                        <option value="Account1">Account1</option>
                                        <option value="Account2">Account2</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="description">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows={1} name="description" placeholder="Enter description" />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group controlId="amount">
                                    <Form.Label>Amount</Form.Label>
                                    <Form.Control type="number" name="amount" placeholder="Enter Amount" />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group controlId="currency">
                                    <Form.Label>Currency</Form.Label>
                                    <Form.Select name="currency">
                                        <option>Select Currency</option>
                                        <option value="SAR">SAR</option>
                                        <option value="USD">USD</option>
                                        <option value="EUR">EUR</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" className="btn-cancel" onClick={() => setShowModal(false)}>Cancel</Button>
                    <Button variant="success" className="btn-save" onClick={() => setShowModal(false)}>Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Payments;
