import { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { DataGrid, GridToolbar, type GridColDef } from "@mui/x-data-grid";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./ManageAccounts.scss";
import { TextField } from "@mui/material";

interface Account {
    id: number;
    bank: string;
    accountType: string;
    accountNumber: string;
    currency: string;
    ibans: number;
    accountUsage: string;
}

const ManageAccounts = () => {
    const [showModal, setShowModal] = useState(false);
    const [accounts, setAccounts] = useState<Account[]>([
        { id: 1, bank: "Saudi National Bank (SNB)", accountType: "Savings Account", accountNumber: "7845792345", currency: "SAR", ibans: 10, accountUsage: "Payroll, Payables" },
        { id: 2, bank: "Al Rajhi Bank", accountType: "Current Account", accountNumber: "1234567890", currency: "USD", ibans: 20, accountUsage: "Payables" },
        { id: 3, bank: "Saudi Arabian Bank (SAB)", accountType: "Business Account", accountNumber: "1246791234", currency: "SAR", ibans: 30, accountUsage: "Receivables, Payroll" },
        { id: 4, bank: "Riyad Bank", accountType: "Savings Account", accountNumber: "9876543210", currency: "SAR", ibans: 15, accountUsage: "Payables" },
        { id: 5, bank: "Saudi Investment Bank", accountType: "Current Account", accountNumber: "5432109876", currency: "USD", ibans: 25, accountUsage: "Payroll" },
    ]);

    const handleDelete = (id: number) => {
        setAccounts(accounts.filter((acc) => acc.id !== id));
    };

    const columns: GridColDef[] = [
        { field: "bank", headerName: "Bank", flex: 1 },
        { field: "accountType", headerName: "Account Type", flex: 1 },
        { field: "accountNumber", headerName: "Account Number", flex: 1 },
        { field: "currency", headerName: "Currency", flex: 0.5 },
        { field: "ibans", headerName: "IBANS Associated", flex: 0.7 },
        { field: "accountUsage", headerName: "Account Usage", flex: 1 },
        {
            field: "actions",
            headerName: "Actions",
            flex: 0.5,
            sortable: false,
            renderCell: (params) => (
                <div className="actions-cell">
                    <FaEdit className="edit-icon" onClick={() => setShowModal(true)} />
                    <FaTrash className="delete-icon" onClick={() => handleDelete(params.row.id)} />
                </div>
            ),
        },
    ];

    return (
        <div className="manage-account-container">
            <div className="header-row">
                <h4 className="title">Manage Accounts</h4>
            </div>

            <div className="table-card">
                <div className='header-content'>
                    <h5 className='table-title'>Accounts</h5>
                    <div className='actions'>
                        <TextField
                            size="small"
                            placeholder="Search transactions..."
                            className="search-input"
                            variant="outlined"
                        />
                        <button className="add-btn" onClick={()=> setShowModal(true)}> + Add Account </button>
                        <button className='export-btn'>Export</button>
                    </div>
                </div>

                <div className="table-container accounts">
                    <DataGrid
                        rows={accounts}
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

            {/* Modal for Creating/Editing Account */}
            <Modal show={showModal} onHide={() => setShowModal(false)} 
            size="lg" 
            centered  
            dialogClassName="custom-dialog-container"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Bank</Form.Label>
                                    <Form.Select>
                                        <option>Select a bank</option>
                                        <option>Saudi National Bank (SNB)</option>
                                        <option>Al Rajhi Bank</option>
                                        <option>Saudi Arabian Bank (SAB)</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Account Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter account name" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Account Number</Form.Label>
                                    <Form.Control type="text" placeholder="Enter account number" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Currency</Form.Label>
                                    <Form.Select>
                                        <option>Select currency</option>
                                        <option>SAR</option>
                                        <option>USD</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Account Type</Form.Label>
                                    <Form.Select>
                                        <option>Select account type</option>
                                        <option>Savings Account</option>
                                        <option>Current Account</option>
                                        <option>Business Account</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>IBAN</Form.Label>
                                    <Form.Control type="text" placeholder="Enter IBAN" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Label>Account Usage</Form.Label>
                            <div className="checkbox-group">
                                <Form.Check inline type="checkbox" label="Payables" />
                                <Form.Check inline type="checkbox" label="Payroll" />
                                <Form.Check inline type="checkbox" label="Receivables" />
                                <Form.Check inline type="checkbox" label="Investments" />
                                <Form.Check inline type="checkbox" label="Operations" />
                            </div>
                        </Form.Group>
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

export default ManageAccounts;
