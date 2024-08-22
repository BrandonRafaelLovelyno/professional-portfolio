import VIDEO_PRODUCTION_DASHBOARD from "@/components/sub-section/page/work/video-production-dashboard";
import CUSTOMER_SERVICE_DASHBOARD from "@/components/sub-section/page/work/customer-service-dashboard";

export interface LineChartData {
  xValue: string;
  line1: number;
  line2?: number;
}

interface Experience {
  position: string;
  cardImage: string;
  backgroundImage: string;
  Heading: {
    title: string;
    imageUrl: string;
  };
  Dashboard: React.ReactNode[];
}

const WORK_EXP_DATA: Experience[] = [
  {
    position: "Video Production",
    cardImage: "/image/temp-card-image.jpg",
    backgroundImage: "/image/temp-back-image.jpg",
    Heading: {
      title: "I take video for education",
      imageUrl: "/image/page/work/experience/video-production/Heading.png",
    },
    Dashboard: VIDEO_PRODUCTION_DASHBOARD,
  },
  {
    position: "Online Shop",
    cardImage: "/image/temp-card-image.jpg",
    backgroundImage: "/image/temp-back-image.jpg",
    Heading: {
      title: "I assist shop customer",
      imageUrl: "/image/page/work/experience/customer-service/Heading.png",
    },
    Dashboard: CUSTOMER_SERVICE_DASHBOARD,
  },
];

export default WORK_EXP_DATA;
