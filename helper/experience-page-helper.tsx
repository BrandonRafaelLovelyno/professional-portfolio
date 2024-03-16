import EventCard from "@/components/trigger/experience-page/event-card";
import { Experience } from "@/data/org-exp-section-data";

export const createEventCards = (
  experiences: Experience[]
): React.ReactNode[] => {
  const expCards: React.ReactNode[] = [];

  for (const experience of experiences) {
    for (const event of experience.events) {
      expCards.push(
        <div
          style={{
            height: `${event.gridHeigth * 100}px`,
            marginBottom: "30px",
          }}
        >
          <EventCard experience={experience} event={event} />
        </div>
      );
    }
  }

  return expCards;
};
