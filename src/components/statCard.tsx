interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
}

function StatCard({ title, value, subtitle }: StatCardProps) {
  return (
    <div style={styles.card}>
      <p style={styles.title}>{title}</p>
      <h2 style={styles.value}>{value}</h2>
      {subtitle && <p style={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    background: "white",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
    border: "1px solid #e5e7eb",
  },
  title: {
    margin: 0,
    fontSize: "14px",
    color: "#6b7280",
  },
  value: {
    margin: "8px 0",
    fontSize: "32px",
    color: "#111827",
  },
  subtitle: {
    margin: 0,
    fontSize: "13px",
    color: "#9ca3af",
  },
};

export default StatCard;