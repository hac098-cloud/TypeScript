import { useState } from "react";
import type { AnalyticsEvent, EventType } from "../types/Event";

interface EventFormProps {
  onAddEvent: (event: AnalyticsEvent) => void;
}

function EventForm({ onAddEvent }: EventFormProps) {
  const [type, setType] = useState<EventType>("page_view");
  const [userId, setUserId] = useState("");
  const [page, setPage] = useState("");
  const [button, setButton] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!userId.trim()) {
      alert("Please enter a user ID.");
      return;
    }

    const newEvent: AnalyticsEvent = {
      id: crypto.randomUUID(),
      type,
      userId,
      timestamp: new Date().toISOString(),
      metadata: {
        page: page || undefined,
        button: button || undefined,
        amount: amount ? Number(amount) : undefined,
      },
    };

    onAddEvent(newEvent);

    setUserId("");
    setPage("");
    setButton("");
    setAmount("");
    setType("page_view");
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>Add New Event</h2>

      <div style={styles.grid}>
        <label style={styles.label}>
          Event Type
          <select
            value={type}
            onChange={(event) => setType(event.target.value as EventType)}
            style={styles.input}
          >
            <option value="page_view">Page View</option>
            <option value="click">Click</option>
            <option value="signup">Signup</option>
            <option value="purchase">Purchase</option>
          </select>
        </label>

        <label style={styles.label}>
          User ID
          <input
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
            placeholder="user_123"
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          Page
          <input
            value={page}
            onChange={(event) => setPage(event.target.value)}
            placeholder="/home"
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          Button
          <input
            value={button}
            onChange={(event) => setButton(event.target.value)}
            placeholder="Book Ride"
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          Amount
          <input
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="24.99"
            type="number"
            step="0.01"
            style={styles.input}
          />
        </label>
      </div>

      <button type="submit" style={styles.button}>
        Add Event
      </button>
    </form>
  );
}

const styles: Record<string, React.CSSProperties> = {
  form: {
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "16px",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    fontSize: "14px",
    color: "#374151",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
  },
  button: {
    marginTop: "18px",
    padding: "12px 18px",
    borderRadius: "10px",
    border: "none",
    background: "#111827",
    color: "white",
    fontWeight: 600,
    cursor: "pointer",
  },
};

export default EventForm;