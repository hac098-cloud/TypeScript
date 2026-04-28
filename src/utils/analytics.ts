import type { AnalyticsEvent, EventType } from "../types/Event";

export function getTotalEvents(events: AnalyticsEvent[]): number {
  return events.length;
}

export function getUniqueUsers(events: AnalyticsEvent[]): number {
  const users = new Set(events.map((event) => event.userId));
  return users.size;
}

export function getTodayEvents(events: AnalyticsEvent[]): number {
  const today = new Date().toDateString();

  return events.filter((event) => {
    const eventDate = new Date(event.timestamp).toDateString();
    return eventDate === today;
  }).length;
}

export function getEventsByType(events: AnalyticsEvent[]) {
  const counts: Record<EventType, number> = {
    page_view: 0,
    click: 0,
    signup: 0,
    purchase: 0,
  };

  events.forEach((event) => {
    counts[event.type] += 1;
  });

  return Object.entries(counts).map(([type, count]) => ({
    type,
    count,
  }));
}

export function getEventsOverTime(events: AnalyticsEvent[]) {
  const hourlyCounts: Record<string, number> = {};

  events.forEach((event) => {
    const date = new Date(event.timestamp);
    const hour = `${date.getHours()}:00`;

    hourlyCounts[hour] = (hourlyCounts[hour] || 0) + 1;
  });

  return Object.entries(hourlyCounts)
    .map(([hour, count]) => ({
      hour,
      count,
    }))
    .sort((a, b) => {
      const hourA = Number(a.hour.split(":")[0]);
      const hourB = Number(b.hour.split(":")[0]);
      return hourA - hourB;
    });
}

export function getRecentEvents(events: AnalyticsEvent[], limit = 5): AnalyticsEvent[] {
  return [...events]
    .sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    )
    .slice(0, limit);
}