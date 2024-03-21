import { Event, Experience } from "@/data/org-exp-section-data";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import EventCardTitleSection from "./event-card-description";
import { twMerge } from "tailwind-merge";

interface EventCardProps {
  experience: Experience;
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ experience, event }) => {
  return (
    <motion.div
      className={twMerge(
        "w-full h-full shadow-xl relative flex justify-center items-center group",
        "event-card"
      )}
    >
      {event.data.img && !event.data.video && (
        <Image
          src={event.data.img}
          alt={event.data.eventName}
          fill={true}
          objectFit="cover"
          className="rounded-lg"
        />
      )}

      {event.data.video && !event.data.img && (
        <video
          muted
          loop
          autoPlay
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          className="rounded-lg"
        >
          <source src={event.data.video} />
        </video>
      )}
      <EventCardTitleSection experience={experience} event={event} />
    </motion.div>
  );
};

export default EventCard;
