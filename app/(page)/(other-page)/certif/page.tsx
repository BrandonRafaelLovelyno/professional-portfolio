"use client";

import ExpCarouselLayer from "@/components/animation/carousel/exp-carousel-layer";
import CERTIFICATE_EXP from "@/data/certificate-section-data";
import ORG_EXP from "@/data/org-exp-section-data";
import { Parallax } from "@react-spring/parallax";
import React, { useState } from "react";

const CertifPage = () => {
  const [isRouting, setIsRouting] = useState(false);
  const [isFading, setIsFading] = useState(false);
  return (
    <Parallax pages={CERTIFICATE_EXP.length}>
      {CERTIFICATE_EXP.map((o, index) => (
        <ExpCarouselLayer
          experience={o}
          isRouting={isRouting}
          offset={index}
          speed={1}
          key={o.position}
        />
      ))}
    </Parallax>
  );
};

export default CertifPage;
