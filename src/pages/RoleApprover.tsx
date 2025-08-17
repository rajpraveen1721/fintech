import React, { useState } from "react";
import "./RoleApprover.scss";
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Button, Modal } from "react-bootstrap";
import { TextField } from "@mui/material";
import { DataGrid, GridToolbar, type GridColDef } from "@mui/x-data-grid";

interface User {
    id: number,
    user: string;
    department: string;
    accounts: string[];
    services: string[];
}

const RenderExpandableList = ({
    values,
    rowId,
    expandedRow,
    setExpandedRow,
}: {
    values: string[];
    rowId: string | number;
    expandedRow: string | number | null;
    setExpandedRow: React.Dispatch<React.SetStateAction<string | number | null>>;
}) => {
    const id = Number(rowId);
    const isExpanded = expandedRow === id;
    const display = isExpanded ? values : values.slice(0, 2);

    const toggleExpand = () => {
        setExpandedRow(isExpanded ? null : rowId);
    };

    return (
        <div className={`expandable-list ${isExpanded ? 'py-2' : ''}`}>
            {display.map((val, i) => (
                <span key={i} className="expandable-item">
                    {val}
                    {i < display.length - 1 && <span className="comma">,</span>}
                </span>
            ))}
            {values.length > 2 && (
                <button className="toggle-btn" onClick={toggleExpand}>
                    {isExpanded ? "Show Less" : `+${values.length - 2} more`}
                </button>
            )}
        </div>
    );
};


const RoleApprover = () => {

    const [showModal, setShowModal] = useState(false);

    const [users, setUsers] = useState<User[]>([
        {
            id: 1,
            user: "mutaz@omnypay.com",
            department: "Finance",
            accounts: ["97901391", "40076967", "57905895", "97640298", "55945308", "39087224", "55896230"],
            services: [
                "Payments",
                "Loans",
                "Investments",
                "Insurance",
                "Forex",
                "Cards",
                "Wealth Management"
            ]
        },
        {
            id: 2,
            user: "sultan@omnypay.com",
            department: "Operations",
            accounts: ["04998304", "04063950"],
            services: ["Payments", "Loans", "Forex", "Cards", "Wealth Management"]
        }
    ]);

    const columns: GridColDef[] = [
        { headerName: "User", field: "user", flex: 1 },
        { headerName: "Department", field: "department", flex: 1 },
        {
            field: "accounts", headerName: "Accounts", flex: 1,
            renderCell: (params) => (
                <RenderExpandableList
                    values={params.value}
                    rowId={params.id}
                    expandedRow={expandedRow}
                    setExpandedRow={setExpandedRow}
                />
            )
        },
        {
            field: "services", headerName: "Services", flex: 1,
            renderCell: (params) => (
                <RenderExpandableList
                    values={params.value}
                    rowId={params.id}
                    expandedRow={expandedRow}
                    setExpandedRow={setExpandedRow}
                />
            )
        },
        {
            field: "actions",
            headerName: 'Actions',
            flex: 0.5,
            sortable: false,
            renderCell: (params: any) => (
                <div className="actions-cell">
                    <FaEdit className="edit-icon" onClick={() => setShowModal(true)} />
                    <FaTrash className="delete-icon" onClick={() => handleDelete(params.row.id)} />
                </div>
            )
        }
    ];

    // Only one expanded row at a time
    const [expandedRow, setExpandedRow] = useState<string | number | null>(null);

    const getRowHeight = (params: any) => {
        return expandedRow === params.id ? "auto" : 40;
    };

    const handleDelete = (id: number) => {
        setUsers(users.filter((user: any) => user.id !== id));
    };

    const [approvers, setApprovers] = useState([1, 2, 3]);

    const handleAddApprover = () => {
        setApprovers((prev: any) => [...prev, prev.length + 1]);
    };

    const handleRemoveApprover = (num: number) => {
        setApprovers((prev: any) => prev.filter((id: any) => id !== num));
    };

    const handleSave = () => {
        console.log("Saved approvers:", approvers);
    };


    return (
        <>
            <div className="role-approver-container">
                <div className="header-row">
                    <h4 className='title'>Role/Approver</h4>
                </div>

                <div className="approver-card">
                    {/* Header */}
                    <div className="approver-header">
                        <h5 className="title">Approver</h5>
                        <div className="actions">
                            <button className="add-btn" onClick={handleAddApprover}>
                                + Add Approver
                            </button>
                            <button className="save-btn" onClick={handleSave}>
                                Save Approvers
                            </button>
                        </div>
                    </div>
                    <div className="approver-form">
                        {/* Approver Fields */}
                        {approvers.map((num) => (
                            <div className="form-group approver-row" key={num}>
                                <div className="field-wrapper">
                                    <label className="form-label">Approver {num}</label>
                                    <select className="form-control">
                                        <option value="">Select Approver</option>
                                        <option value="user1">User 1</option>
                                        <option value="user2">User 2</option>
                                        <option value="user3">User 3</option>
                                    </select>
                                </div>

                                {/* Remove Icon */}
                                {approvers.length > 1 && (
                                    <button
                                        className="remove-btn"
                                        onClick={() => handleRemoveApprover(num)}
                                    >
                                        <FaTrash />
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>

                </div>

                <div className="table-card mb-4">
                    <div className='header-content'>
                        <h5 className='table-title'>Users</h5>
                        <div className='actions'>
                            <TextField
                                size="small"
                                placeholder="Search users..."
                                className="search-input"
                                variant="outlined"
                            />
                            <button className="add-btn" onClick={() => setShowModal(true)}>+ Add User</button>
                            <button className='export-btn'>Export</button>
                        </div>
                    </div>
                    <div className='table-container users'>
                        <DataGrid
                            columns={columns}
                            rows={users}
                            autoHeight
                            rowHeight={40}
                            getRowHeight={getRowHeight}
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
            </div>
            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                centered
                dialogClassName="custom-dialog-container"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add User</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label htmlFor="username" className="form-label">
                                User Name / Email
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                placeholder="Enter user name or email"
                                className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="department" className="form-label">
                                Department
                            </label>
                            <input
                                id="department"
                                name="department"
                                type="text"
                                placeholder="Enter department"
                                className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="accounts" className="form-label">
                                Accounts
                            </label>
                            <select
                                id="accounts"
                                name="accounts"
                                className="form-control"
                            >
                                <option value="">Select Accounts</option>
                                <option value="123">123</option>
                                <option value="456">456</option>
                                <option value="789">789</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="services" className="form-label">
                                Services
                            </label>
                            <select
                                id="services"
                                name="services"
                                className="form-control"
                            >
                                <option value="">Select Service</option>
                                <option value="Payments">Payments</option>
                                <option value="Statements">Statements</option>
                                <option value="All">All</option>
                            </select>
                        </div>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        variant="light"
                        className="btn-cancel"
                        onClick={() => setShowModal(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="success"
                        className="btn-save"
                        onClick={() => setShowModal(false)}
                    >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default RoleApprover;