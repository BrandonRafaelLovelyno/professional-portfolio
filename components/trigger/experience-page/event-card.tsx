import { Event, Experience } from "@/data/org-exp-section-data";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { InfinitySpin } from "react-loader-spinner";

interface EventCardProps {
  experience: Experience;
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ experience, event }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <motion.div className="w-full h-full rounded-lg shadow-xl relative overflow-hidden flex justify-center items-center">
      {event.data.img && !event.data.video && !isLoading && (
        <Image
          src={event.data.img}
          alt={event.data.eventName}
          fill={true}
          objectFit="cover"
          onWaiting={() => setIsLoading(true)}
          onPlay={() => setIsLoading(false)}
        />
      )}
      {event.data.img && isLoading && !event.data.video && (
        <InfinitySpin color="white" />
      )}
      {event.data.video && !event.data.img && !isLoading && (
        <video
          muted
          loop
          autoPlay
          height={"auto"}
          width={"100%"}
          onPlay={() => {
            setIsLoading(false);
          }}
          onLoadStart={() => setIsLoading(true)}
        >
          <source src={event.data.video} type="video/mp4" />
        </video>
      )}
      {event.data.video && !event.data.img && isLoading && (
        <InfinitySpin color="white" />
      )}
    </motion.div>
  );
};

export default EventCard;
