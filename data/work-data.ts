import VIDEO_PRODUCTION_DASHBOARD from "@/components/sub-section/page/work/dashboard/video-production-dashboard";
import CUSTOMER_SERVICE_DASHBOARD from "@/components/sub-section/page/work/dashboard/customer-service-dashboard";

export interface LineChartData {
  xValue: string;
  line1: number;
  line2?: number;
}

export interface Work {
  position: string;
  image: {
    card: string;
    background: string;
  };
  Component: {
    Heading: {
      title: string;
      imageUrl: string;
    };
    Dashboard: React.ReactNode[];
  };
}

const WORK_EXP_DATA: Work[] = [
  {
    position: "Video Production",
    image: {
      card: "/image/temp-card-image.jpg",
      background: "/image/temp-back-image.jpg",
    },
    Component: {
      Heading: {
        title: "I take video for education",
        imageUrl: "/image/page/work/experience/video-production/heading.png",
      },
      Dashboard: VIDEO_PRODUCTION_DASHBOARD,
    },
  },
  {
    position: "Online Shop",
    image: {
      card: "/image/temp-card-image.jpg",
      background: "/image/temp-back-image.jpg",
    },
    Component: {
      Heading: {
        title: "I manage online shop",
        imageUrl: "/image/page/work/experience/customer-service/heading.png",
      },
      Dashboard: CUSTOMER_SERVICE_DASHBOARD,
    },
  },
];

export default WORK_EXP_DATA;
