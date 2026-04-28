import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

interface EventChartProps {
  eventsByType: {
    type: string;
    count: number;
  }[];
  eventsOverTime: {
    hour: string;
    count: number;
  }[];
}

function EventChart({ eventsByType, eventsOverTime }: EventChartProps) {
  return (
    <div style={styles.grid}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Events by Type</h2>

        <div style={styles.chart}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={eventsByType}>
              <XAxis dataKey="type" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count" fill="#4f46e5" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div style={styles.card}>
        <h2 style={styles.heading}>Events Over Time</h2>

        <div style={styles.chart}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={eventsOverTime}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#111827"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "20px",
  },
  card: {
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
  chart: {
    width: "100%",
    height: "280px",
  },
};

export default EventChart;