import type { AnalyticsEvent } from "../types/Event";

interface EventTableProps {
  events: AnalyticsEvent[];
}

function EventTable({ events }: EventTableProps) {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Recent Events</h2>

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Type</th>
              <th style={styles.th}>User</th>
              <th style={styles.th}>Time</th>
              <th style={styles.th}>Metadata</th>
            </tr>
          </thead>

          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td style={styles.td}>
                  <span style={styles.badge}>{event.type}</span>
                </td>
                <td style={styles.td}>{event.userId}</td>
                <td style={styles.td}>
                  {new Date(event.timestamp).toLocaleString()}
                </td>
                <td style={styles.td}>
                  <code>{JSON.stringify(event.metadata || {})}</code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    background: "white",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
    border: "1px solid #e5e7eb",
  },
  heading: {
    marginTop: 0,
    color: "#111827",
  },
  tableWrapper: {
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    textAlign: "left",
    padding: "12px",
    borderBottom: "1px solid #e5e7eb",
    color: "#6b7280",
    fontSize: "14px",
  },
  td: {
    padding: "12px",
    borderBottom: "1px solid #f3f4f6",
    color: "#374151",
    fontSize: "14px",
  },
  badge: {
    background: "#eef2ff",
    color: "#3730a3",
    padding: "4px 8px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: 600,
  },
};

export default EventTable;