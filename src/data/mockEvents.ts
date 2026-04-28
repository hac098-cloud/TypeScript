import type { AnalyticsEvent } from "../types/Event";

export const mockEvents: AnalyticsEvent[] = [
  {
    id: "1",
    type: "page_view",
    userId: "user_101",
    timestamp: "2026-04-28T09:15:00",
    metadata: {
      page: "/home",
      source: "google",
    },
  },
  {
    id: "2",
    type: "click",
    userId: "user_102",
    timestamp: "2026-04-28T09:35:00",
    metadata: {
      button: "Book Ride",
      page: "/home",
    },
  },
  {
    id: "3",
    type: "signup",
    userId: "user_103",
    timestamp: "2026-04-28T10:10:00",
    metadata: {
      source: "referral",
    },
  },
  {
    id: "4",
    type: "page_view",
    userId: "user_101",
    timestamp: "2026-04-28T10:25:00",
    metadata: {
      page: "/pricing",
    },
  },
  {
    id: "5",
    type: "purchase",
    userId: "user_104",
    timestamp: "2026-04-28T11:05:00",
    metadata: {
      amount: 24.99,
      source: "app",
    },
  },
  {
    id: "6",
    type: "click",
    userId: "user_105",
    timestamp: "2026-04-28T11:40:00",
    metadata: {
      button: "Start Trial",
      page: "/pricing",
    },
  },
  {
    id: "7",
    type: "page_view",
    userId: "user_106",
    timestamp: "2026-04-28T12:20:00",
    metadata: {
      page: "/dashboard",
    },
  },
  {
    id: "8",
    type: "purchase",
    userId: "user_103",
    timestamp: "2026-04-28T13:15:00",
    metadata: {
      amount: 49.99,
      source: "web",
    },
  },
];