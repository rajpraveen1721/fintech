import { Bar, Line } from "react-chartjs-2";
import "./Dashboard.scss";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Tooltip, Legend);

const Dashboard = () => {
    const balanceChartData = {
        labels: ["SNB", "RB", "SABB", "ARB"],
        datasets: [
            {
                label: "Balance",
                data: [1.8, 1.5, 1.0, 2.7],
                backgroundColor: "#3B82F6",
                borderRadius: 5
            }
        ]
    };

    const lineChartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            { label: "SNB", data: [1.6, 2.0, 1.9, 2.3, 2.4, 2.8], borderColor: "#3B82F6", fill: false },
            { label: "RB", data: [0.2, 0.4, 0.8, 1.0, 1.1, 1.2], borderColor: "#1B5463", fill: false },
            { label: "ARB", data: [1.4, 1.5, 1.6, 1.8, 1.9, 2.0], borderColor: "#F59E0B", fill: false },
            { label: "SABB", data: [0.9, 1.2, 1.1, 1.4, 1.3, 1.6], borderColor: "#4B5563", fill: false }
        ]
    };

    // Exchange Rate Chart
    const exchangeRateData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            { label: "USD/SAR", data: [3.75, 3.76, 3.75, 3.77, 3.76, 3.75], borderColor: "#10B981", fill: false },
            { label: "EUR/SAR", data: [4.05, 4.08, 4.12, 4.15, 4.10, 4.18], borderColor: "#EF4444", fill: false },
            { label: "GBP/SAR", data: [4.60, 4.62, 4.65, 4.70, 4.68, 4.72], borderColor: "#6366F1", fill: false },
        ],
    };

    const transactionsData = [{
        title: "Transactions Amount",
        value: "SAR 2,000,000",
        subtitle: "Total 13 transactions",
        color: "blue",
    },
    {
        title: "Pending Transactions",
        value: "SAR 1,20,000",
        subtitle: "Total 78 transactions",
        color: "orange",
    },
    {
        title: "Successful Transactions",
        value: "SAR 1,000,000",
        subtitle: "Total 134 transactions",
        color: "green",
    },
    {
        title: "Failed Transactions",
        value: "SAR 11,000",
        subtitle: "Total 3 transactions",
        color: "red",
    },
    ];

    const onBankChange = (value: any) => {
        console.log(value);
    }

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h2>Welcome, Mutaz!</h2>
                <div className="header-actions">
                    <input
                        type="text"
                        placeholder="Search"
                        className="search-input"
                    />

                    <select
                        className="bank-select"
                        onChange={(e) => onBankChange(e.target.value)}
                    >
                        <option value="">All Banks</option>
                        <option value="SNB">SNB</option>
                        <option value="RB">RB</option>
                        <option value="SABB">SABB</option>
                        <option value="ARB">ARB</option>
                    </select>
                </div>
            </div>
            {/* Transaction Summary Cards */}
            <div className="transaction-details-container">
                {transactionsData.map((transaction: any, index: any) =>
                    <div className={`transaction-card ${transaction.color}`} key={index}>
                        <h4>{transaction.title}</h4>
                        <h2>{transaction.value}</h2>
                        <p>{transaction.subtitle}</p>
                    </div>
                )}
            </div>
            {/* Charts Section */}
            <div className="charts-section-container">
                <div className="chart-card">
                    <h4>Account Balances</h4>
                    <Bar data={balanceChartData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
                </div>
                <div className="chart-card">
                    <h4>Transaction Metrics</h4>
                    <Line data={lineChartData} options={{ 
                        responsive: true ,
                        plugins: {
                                legend: { position: "bottom" },
                            }
                        }} />
                </div>
                <div className="chart-card">
                    <h4>Exchange Rate Trends</h4>
                    <Line
                        data={exchangeRateData}
                        options={{
                            responsive: true,
                            plugins: {
                                legend: { position: "bottom" },
                            },
                            elements: { point: { radius: 4 } },
                        }}
                    />
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
