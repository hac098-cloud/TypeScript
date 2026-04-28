import { useEffect, useState } from "react";
import type { AnalyticsEvent } from "./types/Event";
import { mockEvents } from "./data/mockEvents";
import {
  getEventsByType,
  getEventsOverTime,
  getRecentEvents,
  getTodayEvents,
  getTotalEvents,
  getUniqueUsers,
} from "./utils/analytics";
import StatCard from "./components/StatCard";
import EventForm from "./components/EventForm";
import EventTable from "./components/EventTable";
import EventChart from "./components/EventChart";

const STORAGE_KEY = "kamel_analytics_events";

function App() {
  const [events, setEvents] = useState<AnalyticsEvent[]>(() => {
    const savedEvents = localStorage.getItem(STORAGE_KEY);

    if (savedEvents) {
      return JSON.parse(savedEvents);
    }

    return mockEvents;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  }, [events]);

  function handleAddEvent(event: AnalyticsEvent) {
    setEvents((currentEvents) => [event, ...currentEvents]);
  }

  function handleResetEvents() {
    setEvents(mockEvents);
  }

  const totalEvents = getTotalEvents(events);
  const todayEvents = getTodayEvents(events);
  const uniqueUsers = getUniqueUsers(events);
  const eventsByType = getEventsByType(events);
  const eventsOverTime = getEventsOverTime(events);
  const recentEvents = getRecentEvents(events, 8);

  return (
    <main style={styles.page}>
      <section style={styles.header}>
        <div>
          <p style={styles.label}>Kamel Ride Internship Assignment</p>
          <h1 style={styles.title}>Event Analytics Dashboard</h1>
          <p style={styles.description}>
            A simple TypeScript system for collecting product events and
            displaying real-time analytics.
          </p>
        </div>

        <button onClick={handleResetEvents} style={styles.resetButton}>
          Reset Demo Data
        </button>
      </section>

      <section style={styles.statsGrid}>
        <StatCard
          title="Total Events"
          value={totalEvents}
          subtitle="All tracked events"
        />

        <StatCard
          title="Today's Events"
          value={todayEvents}
          subtitle="Events collected today"
        />

        <StatCard
          title="Active Users"
          value={uniqueUsers}
          subtitle="Unique user IDs"
        />

        <StatCard
          title="Conversion Events"
          value={eventsByType.find((event) => event.type === "purchase")?.count || 0}
          subtitle="Purchase events"
        />
      </section>

      <EventChart
        eventsByType={eventsByType}
        eventsOverTime={eventsOverTime}
      />

      <EventForm onAddEvent={handleAddEvent} />

      <EventTable events={recentEvents} />
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#f9fafb",
    padding: "40px",
    fontFamily:
      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "20px",
    marginBottom: "28px",
  },
  label: {
    margin: 0,
    color: "#4f46e5",
    fontWeight: 700,
    fontSize: "14px",
  },
  title: {
    margin: "8px 0",
    fontSize: "40px",
    color: "#111827",
  },
  description: {
    margin: 0,
    color: "#6b7280",
    maxWidth: "680px",
    lineHeight: 1.6,
  },
  resetButton: {
    padding: "12px 16px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    background: "white",
    color: "#111827",
    fontWeight: 600,
    cursor: "pointer",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginBottom: "20px",
  },
};

export default App;