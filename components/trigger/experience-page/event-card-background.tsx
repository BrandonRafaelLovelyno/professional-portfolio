import Image from "next/image";
import React from "react";

interface EventCardBackgroundProps {
  img: string | undefined;
  video: string | undefined;
}

const EventCardBackground: React.FC<EventCardBackgroundProps> = ({
  img,
  video,
}) => {
  return (
    <>
      {img && <Image src={img} alt={img} fill objectFit="cover" />}
      {video && (
        <video height={"auto"} width={"100%"} loop autoPlay>
          <source type="video" src={video} />
        </video>
      )}
    </>
  );
};

export default EventCardBackground;
