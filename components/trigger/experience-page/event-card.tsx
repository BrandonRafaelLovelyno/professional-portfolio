import { Event, Experience } from "@/data/org-exp-section-data";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface EventCardProps {
  experience: Experience;
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ experience, event }) => {
  return (
    <motion.div className="w-full h-full rounded-lg shadow-xl relative overflow-hidden">
      {event.data.img && (
        <Image
          src={event.data.img}
          alt={event.data.eventName}
          fill={true}
          objectFit="cover"
        />
      )}
      {event.data.video && (
        <video
          className="w-full h-full object-cover"
          src={event.data.video}
          autoPlay
          loop
          muted
        />
      )}
    </motion.div>
  );
};

export default EventCard;
