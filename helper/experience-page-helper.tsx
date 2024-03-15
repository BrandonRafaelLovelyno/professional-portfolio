import { Experience } from "@/data/org-exp-section-data";
import { twMerge } from "tailwind-merge";

export const createEventCards = (
  experiences: Experience[]
): React.ReactNode[] => {
  const expCards: React.ReactNode[] = [];

  for (const experience of experiences) {
    for (const event of experience.events) {
      expCards.push(
        <div style={{ height: `${event.gridHeigth * 100}px` }}>
          {event.data.eventName}
        </div>
      );
    }
  }

  return expCards;
};
