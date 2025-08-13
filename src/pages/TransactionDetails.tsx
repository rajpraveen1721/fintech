import { TextField } from '@mui/material';
import { DataGrid, GridToolbar, type GridColDef, type GridRenderCellParams } from '@mui/x-data-grid';
import './TransactionDetails.scss';

const pendingColumns: GridColDef[] = [
    { field: 'transactionId', headerName: 'Transaction ID', flex: 1 },
    { field: 'bu', headerName: 'BU', flex: 1 },
    { field: 'bank', headerName: 'Bank', flex: 1 },
    { field: 'account', headerName: 'Account', flex: 1 },
    { field: 'amount', headerName: 'Amount', flex: 1 },
    { field: 'date', headerName: 'Date', flex: 1 },
    { field: 'type', headerName: 'Type', flex: 1 },
    {
        field: 'status', headerName: 'Status', flex: 1, renderCell: (params: GridRenderCellParams) => (
            <span className="status pending">{params.value}</span>
        )
    },
];

const pendingRows = [
    { id: 1, transactionId: 'TXN001', bu: 'BU-A', bank: 'Global Bank', account: 'ACC12345', amount: 'SAR 1,250.00', date: '2024-07-25', type: 'Payroll', status: 'Pending' },
    { id: 2, transactionId: 'TXN002', bu: 'BU-B', bank: 'Regional Corp', account: 'ACC67890', amount: 'SAR 75.50', date: '2024-07-24', type: 'Expense Claim', status: 'Pending' },
    { id: 3, transactionId: 'TXN003', bu: 'BU-C', bank: 'City Trust', account: 'ACC11223', amount: 'SAR 3,200.00', date: '2024-07-23', type: 'Vendor Payment', status: 'Pending' },
    { id: 4, transactionId: 'TXN004', bu: 'BU-A', bank: 'Global Bank', account: 'ACC44556', amount: 'SAR 180.00', date: '2024-07-22', type: 'Refund', status: 'Pending' },
];

const historyColumns: GridColDef[] = [
    { field: 'transactionId', headerName: 'Transaction ID', flex: 1 },
    { field: 'bu', headerName: 'BU', flex: 1 },
    { field: 'bank', headerName: 'Bank', flex: 1 },
    { field: 'description', headerName: 'Description', flex: 1 },
    { field: 'account', headerName: 'Account', flex: 1 },
    { field: 'amount', headerName: 'Amount', flex: 1 },
    { field: 'date', headerName: 'Date', flex: 1 },
    { field: 'type', headerName: 'Type', flex: 1 },
    {
        field: 'status', headerName: 'Status', flex: 1, renderCell: (params: GridRenderCellParams) => {
            let className = '';
            if (params.value === 'Completed') className = 'status completed';
            else if (params.value === 'Failed') className = 'status failed';
            else if (params.value === 'Error') className = 'status error';
            return <span className={className}>{params.value}</span>;
        }
    },
];

const historyRows = [
    { id: 1, transactionId: 'TXN998', bu: 'BU-A', bank: 'Global Bank', description: 'Inv-2024-001', account: 'ACC12345', amount: 'SAR 500.00', date: '2024-07-20', type: 'Invoice', status: 'Completed' },
    { id: 2, transactionId: 'TXN997', bu: 'BU-B', bank: 'Regional Corp', description: 'Loan-Repay-005', account: 'ACC67890', amount: 'SAR 250.00', date: '2024-07-19', type: 'Loan Repayment', status: 'Completed' },
    { id: 3, transactionId: 'TXN996', bu: 'BU-C', bank: 'City Trust', description: 'Sal-July-2024', account: 'ACC11223', amount: 'SAR 4,500.00', date: '2024-07-18', type: 'Salary', status: 'Completed' },
    { id: 4, transactionId: 'TXN995', bu: 'BU-A', bank: 'Global Bank', description: 'Tax-Q2-2024', account: 'ACC44556', amount: 'SAR 1,200.00', date: '2024-07-17', type: 'Tax Payment', status: 'Failed' },
    { id: 5, transactionId: 'TXN994', bu: 'BU-B', bank: 'Regional Corp', description: 'Utility-Bill', account: 'ACC77889', amount: 'SAR 120.00', date: '2024-07-16', type: 'Bill Payment', status: 'Completed' },
    { id: 6, transactionId: 'TXN993', bu: 'BU-C', bank: 'City Trust', description: 'Subscription-001', account: 'ACC22334', amount: 'SAR 15.00', date: '2024-07-15', type: 'Subscription', status: 'Error' },
];

const TransactionDetails = () => {
    return (
        <div className="transaction-details">
            <div className="header-row">
                <h4 className='title'>Transaction Overview</h4>
            </div>

            <div className="table-card">
                <div className='header-content'>
                    <h5 className='table-title'>Pending Transactions</h5>
                    <div className='actions'>
                        <TextField
                            size="small"
                            placeholder="Search transactions..."
                            className="search-input"
                            variant="outlined"
                        />
                        <button className='export-btn'>Export</button>
                    </div>
                </div>
                <div className='table-container pending-transactions'>
                    <DataGrid
                        columns={pendingColumns}
                        rows={pendingRows}
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

            <div className="table-card">
                <div className='header-content'>
                    <h5 className='table-title'>Transaction History</h5>
                    <div className='actions'>
                        <TextField
                            size="small"
                            placeholder="Search transactions..."
                            className="search-input"
                            variant="outlined"
                        />
                        <button className='export-btn'>Export</button>
                    </div>
                </div>
                <div className='table-container transactions-history'>
                    <DataGrid
                        columns={historyColumns}
                        rows={historyRows}
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
        </div>
    );
};

export default TransactionDetails;
