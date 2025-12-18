"use client";
import styles from "./admin.module.css";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, Legend
} from 'recharts';

export default function AdminDashboard() {
    // Mock Data for Charts
    const revenueData = [
        { name: 'Mon', sales: 4000 },
        { name: 'Tue', sales: 3000 },
        { name: 'Wed', sales: 5000 },
        { name: 'Thu', sales: 2780 },
        { name: 'Fri', sales: 1890 },
        { name: 'Sat', sales: 8390 },
        { name: 'Sun', sales: 9490 },
    ];

    const categoryData = [
        { name: 'Coffee', value: 400 },
        { name: 'Snacks', value: 300 },
        { name: 'Bowls', value: 300 },
        { name: 'Desserts', value: 200 },
    ];

    const COLORS = ['#8b4513', '#d4a373', '#2c3e50', '#e74c3c'];

    const recentOrders = [
        { id: "#ORD-001", customer: "Arjun K", total: "₹450", status: "Completed", date: "Today, 10:30 AM" },
        { id: "#ORD-002", customer: "Sneha R", total: "₹1,200", status: "Processing", date: "Today, 10:15 AM" },
        { id: "#ORD-003", customer: "Rahul M", total: "₹850", status: "Pending", date: "Today, 09:45 AM" },
        { id: "#ORD-004", customer: "Priya S", total: "₹320", status: "Completed", date: "Yesterday" },
    ];

    return (
        <div>
            <h1 className={styles.heading}>Dashboard Overview</h1>

            {/* Stats Cards */}
            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <div className={styles.statLabel}>Total Revenue</div>
                    <div className={styles.statValue}>₹45,230</div>
                    <div className={`${styles.trend} ${styles.positive}`}>↑ 12% from last week</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statLabel}>Active Orders</div>
                    <div className={styles.statValue}>12</div>
                    <div className={styles.trend}>Live updates</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statLabel}>Customers</div>
                    <div className={styles.statValue}>85</div>
                    <div className={`${styles.trend} ${styles.positive}`}>↑ 5% new today</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statLabel}>Pending</div>
                    <div className={styles.statValue}>4</div>
                    <div className={`${styles.trend} ${styles.negative}`}>Requires attention</div>
                </div>
            </div>

            {/* Charts Section */}
            <div className={styles.chartsGrid}>
                {/* Revenue Chart */}
                <div className={styles.chartCard}>
                    <h3 className={styles.chartTitle}>Revenue Trends (7 Days)</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={revenueData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#a0aec0' }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#a0aec0' }} prefix="₹" />
                            <Tooltip contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} />
                            <Line type="monotone" dataKey="sales" stroke="#8b4513" strokeWidth={3} dot={{ r: 4, fill: '#8b4513' }} activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Category Pie Chart */}
                <div className={styles.chartCard} style={{ minHeight: '300px' }}>
                    <h3 className={styles.chartTitle}>Popular Categories</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie
                                data={categoryData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {categoryData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend verticalAlign="bottom" height={36} iconType="circle" />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Recent Orders Table */}
            <div className={styles.tableCard}>
                <div className={styles.tableHeader}>
                    <h3 className={styles.chartTitle} style={{ marginBottom: 0 }}>Recent Orders</h3>
                    <button style={{ color: 'var(--primary)', fontWeight: 600 }}>View All</button>
                </div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentOrders.map(order => (
                            <tr key={order.id}>
                                <td style={{ fontWeight: 600 }}>{order.id}</td>
                                <td>{order.customer}</td>
                                <td style={{ color: '#999' }}>{order.date}</td>
                                <td style={{ fontWeight: 600 }}>{order.total}</td>
                                <td><span className={`${styles.status} ${styles[order.status]}`}>{order.status}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
