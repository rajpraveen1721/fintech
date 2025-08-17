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
    ibansAccounts: string[],
    accountUsage: string;
}

const ManageAccounts = () => {
    const [showModal, setShowModal] = useState(false);
    const [accounts, setAccounts] = useState<Account[]>([
        {
            id: 1, bank: "Saudi National Bank", accountType: "Savings Account", accountNumber: "7845792345", currency: "SAR", ibans: 5,
            ibansAccounts: ["94661240", "51154934", "58770333", "62995658", "25081357"],
            accountUsage: "Payroll, Payables"
        },
        {
            id: 2, bank: "Al Rajhi Bank", accountType: "Current Account", accountNumber: "1234567890", currency: "USD", ibans: 10,
            ibansAccounts: ["05668731", "61994718", "31186149", "94052980", "51029798", "94661240", "51154934", "58770333", "62995658", "25081357"],
            accountUsage: "Payables"
        },
        {
            id: 3, bank: "Saudi Arabian Bank", accountType: "Business Account", accountNumber: "1246791234", currency: "SAR", ibans: 8,
            ibansAccounts: ["43970712", "37310647", "51029798", "94661240", "51154934", "58770333", "62995658", "25081357"],
            accountUsage: "Receivables, Payroll"
        },
        {
            id: 4, bank: "Riyad Bank", accountType: "Savings Account", accountNumber: "9876543210", currency: "SAR", ibans: 7,
            ibansAccounts: ["25081357", "37310647", "51029798", "94661240", "51154934", "58770333", "62995658"],
            accountUsage: "Payables"
        },
        {
            id: 5, bank: "Saudi Investment Bank", accountType: "Current Account", accountNumber: "5432109876", currency: "USD", ibans: 6,
            ibansAccounts: ["24886601", "70773471", "51154934", "58770333", "62995658", "25081357",],
            accountUsage: "Payroll"
        },
    ]);

    const handleDelete = (id: number) => {
        setAccounts(accounts.filter((acc) => acc.id !== id));
    };

    const columns: GridColDef[] = [
        { field: "bank", headerName: "Bank", flex: 1 },
        { field: "accountType", headerName: "Account Type", flex: 1 },
        { field: "accountNumber", headerName: "Account Number", flex: 1 },
        { field: "currency", headerName: "Currency", flex: 0.5 },
        {
            field: "ibans", headerName: "IBANS Associated", flex: 0.7,
            renderCell: (params) => (
                <span
                    className="ibans-count"
                    onClick={() => handleShowIbans(params.row.ibansAccounts)}
                >
                    {params.value}
                </span>
            ),
        },
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

    const [ibanModalOpen, setIbanModalOpen] = useState(false);
    const [selectedIbans, setSelectedIbans] = useState<string[]>([]);

    const handleShowIbans = (ibansAccounts: string[]) => {
        setSelectedIbans(ibansAccounts);
        setIbanModalOpen(true);
    };


    const [ibanFiles, setIbanFiles] = useState<File[]>([]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            setIbanFiles((prev) => [...prev, ...Array.from(files)]);
        }
    };

    const handleRemoveFile = (index: number) => {
        setIbanFiles((prev) => prev.filter((_, i) => i !== index));
    };

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
                        <button className="add-btn" onClick={() => setShowModal(true)}> + Add Account </button>
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

            {/* IBAN List Modal */}
            <Modal
                show={ibanModalOpen}
                onHide={() => setIbanModalOpen(false)}
                centered
                size="sm"
                dialogClassName="custom-dialog-container"
            >
                <Modal.Header closeButton>
                    <Modal.Title>IBAN Accounts</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="iban-account-list">
                        <p className="accounts">{selectedIbans.join(", ")}</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" className="btn-save" onClick={() => setIbanModalOpen(false)}>Close</Button>
                </Modal.Footer>
            </Modal>

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
                                    <Form.Label>
                                        Bank  <span style={{ color: "red" }}>*</span>
                                    </Form.Label>
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
                                    <Form.Label>
                                        Account Name  <span style={{ color: "red" }}>*</span>
                                    </Form.Label>
                                    <Form.Control type="text" placeholder="Enter account name" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>
                                        Account Number  <span style={{ color: "red" }}>*</span>
                                    </Form.Label>
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
                                    <Form.Control
                                        type="file"
                                        accept=".csv,.xls,.xlsx,.pdf,.jpg,.jpeg,.png"
                                        multiple
                                        onChange={handleFileChange}
                                    />
                                </Form.Group>

                                {ibanFiles.length > 0 && (
                                    <div className="uploaded-files">
                                        {ibanFiles.map((file, index) => (
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
