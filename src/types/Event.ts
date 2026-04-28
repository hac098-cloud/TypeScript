export type EventType = "page_view" | "click" | "signup" | "purchase";

export interface AnalyticsEvent {
  id: string;
  type: EventType;
  userId: string;
  timestamp: string;
  metadata?: {
    page?: string;
    button?: string;
    amount?: number;
    source?: string;
  };
}